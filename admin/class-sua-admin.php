<?php

/**
 * The dashboard-specific functionality of the plugin.
 *
 * @link       https://www.ixlaf.com
 * @since      1.0.0
 *
 * @package    SUA
 * @subpackage SUA/admin
 */

/**
 * The dashboard-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the dashboard-specific stylesheet and JavaScript.
 *
 * @package    SUA
 * @subpackage SUA/admin
 * @author     Ixlaf <sua@ixlaf.com>
 */
class SUA_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $sua    The ID of this plugin.
	 */
	private $sua;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @var      string    $sua       The name of this plugin.
	 * @var      string    $version    The version of this plugin.
	 */
	public function __construct( $sua, $version ) {

		$this->sua = $sua;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the Dashboard.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		wp_enqueue_style( 'sua-admin-main-css', plugin_dir_url( __FILE__ ) . 'css/sua-admin.css', array(), $this->version, 'all' );
		wp_enqueue_style('sua-admin-jquery-ui-css','https://code.jquery.com/ui/1.11.2/themes/hot-sneaks/jquery-ui.css',array(),$this->version, 'all');
	}

	/**
	 * Register the JavaScript for the dashboard.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		wp_enqueue_script( 'sua-admin-main-js', plugin_dir_url( __FILE__ ) . 'js/sua-admin.js', array( 'jquery','jquery-ui-tabs' ), $this->version, false );

	}

	/**
	 * @since    1.0.0
	 */
	public function sua_options_menu() {
		 
		$options_hook_suffix = add_menu_page('SUA Settings', 'SUA', 'manage_options', 'sua-admin', array( $this, 'sua_options_page' ));
		add_action('admin_print_scripts-' . $options_hook_suffix, array( $this, 'enqueue_scripts' ));
        add_action('admin_print_styles-' . $options_hook_suffix, array( $this, 'enqueue_styles' ));
	}

	/**
	 * @since    1.0.0
	 */
	public function sua_clear_tokens_hourly() {
		global $wpdb;
		$sua_settings=$wpdb->prefix . 'sua_settings';
		$wpdb->query( 
			'delete from '.$sua_settings.' where id in (
			    SELECT eid FROM(
			        SELECT DISTINCT '.$sua_settings.'.id as eid from '.$sua_settings.' where TIMESTAMPDIFF(HOUR, '.$sua_settings.'.created, CURRENT_TIMESTAMP()) >= '.$sua_settings.'.ttl
			    ) AS expired
			);'
		);

		$args = array(
            'meta_query' => array(
                array(
                    'key' => '_SUAMETA_status',
                    'value' =>  '2',
                    'compare' => '='
                )
            )
        );
        $users = get_users($args);
        foreach ( $users as $user ) {

            $sql = 'SELECT * FROM ' . $wpdb->prefix . 'sua_settings WHERE user = %d and action=11 ;';
            $query = $wpdb->prepare($sql, array($user->ID));

            $stored_token = $wpdb->get_row($query);
            if ($stored_token===null) {
                 wp_delete_user( $user->ID );
            }
        }

		$args = array(
            'meta_query' => array(
                array(
                    'key' => '_SUAMETA_status',
                    'value' =>  '1',
                    'compare' => '='
                )
            )
        );
        $users = get_users($args);
        foreach ( $users as $user ) {

            $sql = 'SELECT * FROM ' . $wpdb->prefix . 'sua_settings WHERE user = %d and action=1 ;';
            $query = $wpdb->prepare($sql, array($user->ID));

            $stored_token = $wpdb->get_row($query);
            if ($stored_token===null) {
                 wp_delete_user( $user->ID );
            }
        }
	}

	/**
	 * @since    1.0.0
	 */
	public function sua_options_page() {
		if ( !current_user_can( 'manage_options' ) )  {
			wp_die( __( 'You do not have sufficient permissions to access this page.', 'sua' ) );
		}
		include(plugin_dir_path( __FILE__  ) . 'partials/sua-admin-display.php');

	}


	/**
	 * @since    1.0.0
	 */
	public function sua_valid_page() {
		$SUA_page_shortcode =get_option('SUA_page_shortcode');
		if(!$SUA_page_shortcode) {return false;}

		$suaPage = get_post($SUA_page_shortcode);
		if( !$suaPage || !has_shortcode( $suaPage->post_content, 'sua' ) ) {
			return false;
		}
		return $suaPage->ID;
	}


	/**
	 * @since    1.0.0
	 */
	public function sua_user_prevention() {

		$pageId=$this->sua_valid_page();
		if($pageId===false) {return true;}
		
		$action=isset($_GET['action']) ? $_GET['action']: false;

		global $pagenow;
		if( ('wp-login.php' == $pagenow  && $action!="logout") || (('profile.php' == $pagenow || 'user-edit.php' == $pagenow) && !current_user_can( 'edit_users' ))) {
			wp_redirect(get_permalink($pageId));
			exit();
		}
	}

	/**
	 * @since    1.0.0
	 */
	public function sua_set_auth_cookie($auth_cookie, $expire=false, $expiration=false, $user_id=false, $scheme=false ) {
		
		$pageId=$this->sua_valid_page();
		if($pageId===false) {return true;}

		list($username, $expiration, $scheme, $token) = explode('|', $auth_cookie);

		$user = get_user_by( 'login', $username );
		$suaAuthenticated=get_user_meta($user->ID, '_SUAMETA_authenticate', true);

		if($suaAuthenticated){
			delete_user_meta($user->ID, '_SUAMETA_authenticate');
			return true;
		}else{
			wp_die(sprintf( __( 'Please use <a href="%s" target="_blank">SUA</a> to authenticate.','sua' ) , get_permalink($pageId) ));
		}

	}
	
}
?>
