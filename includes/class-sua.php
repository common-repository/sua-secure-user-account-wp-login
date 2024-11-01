<?php

/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the dashboard.
 *
 * @link       https://www.ixlaf.com
 * @since      1.0.0
 *
 * @package    SUA
 * @subpackage SUA/includes
 */

/**
 * The core plugin class.
 *
 * This is used to define internationalization, dashboard-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      1.0.0
 * @package    SUA
 * @subpackage SUA/includes
 * @author     Ixlaf <sua@ixlaf.com>
 */
class SUA
{

    /**
     * The loader that's responsible for maintaining and registering all hooks that power
     * the plugin.
     *
     * @since    1.0.0
     * @access   protected
     * @var      SUA_Loader $loader Maintains and registers all hooks for the plugin.
     */
    protected $loader;

    /**
     * The unique identifier of this plugin.
     *
     * @since    1.0.0
     * @access   protected
     * @var      string $sua The string used to uniquely identify this plugin.
     */
    protected $sua;

    /**
     * The current version of the plugin.
     *
     * @since    1.0.0
     * @access   protected
     * @var      string $version The current version of the plugin.
     */
    protected $version;

    /**
     * Define the core functionality of the plugin.
     *
     * Set the plugin name and the plugin version that can be used throughout the plugin.
     * Load the dependencies, define the locale, and set the hooks for the Dashboard and
     * the public-facing side of the site.
     *
     * @since    1.0.0
     */
    public function __construct()
    {

        $this->sua = 'sua';
        $this->version = '1.0.0';

        $this->load_dependencies();
        $this->set_locale();
        $this->define_admin_hooks();
        $this->define_public_hooks();

    }

    /**
     * Load the required dependencies for this plugin.
     *
     * Include the following files that make up the plugin:
     *
     * - SUA_Loader. Orchestrates the hooks of the plugin.
     * - SUA_i18n. Defines internationalization functionality.
     * - SUA_Admin. Defines all hooks for the dashboard.
     * - SUA_Public. Defines all hooks for the public side of the site.
     *
     * Create an instance of the loader which will be used to register the hooks
     * with WordPress.
     *
     * @since    1.0.0
     * @access   private
     */
    private function load_dependencies()
    {

        /**
         * The class responsible for orchestrating the actions and filters of the
         * core plugin.
         */
        require_once plugin_dir_path(dirname(__FILE__)) . 'includes/class-sua-loader.php';

        /**
         * The class responsible for defining internationalization functionality
         * of the plugin.
         */
        require_once plugin_dir_path(dirname(__FILE__)) . 'includes/class-sua-i18n.php';

        /**
         * The class responsible for defining all actions that occur in the Dashboard.
         */
        require_once plugin_dir_path(dirname(__FILE__)) . 'admin/class-sua-admin.php';

        /**
         * The class responsible for defining all actions that occur in the public-facing
         * side of the site.
         */
        require_once plugin_dir_path(dirname(__FILE__)) . 'public/class-sua-public.php';

        $this->loader = new SUA_Loader();


        require_once plugin_dir_path(dirname(__FILE__)) . 'includes/SUAAJAX.php';
    }

    /**
     * Define the locale for this plugin for internationalization.
     *
     * Uses the SUA_i18n class in order to set the domain and to register the hook
     * with WordPress.
     *
     * @since    1.0.0
     * @access   private
     */
    private function set_locale()
    {

        $plugin_i18n = new SUA_i18n();
        $plugin_i18n->set_domain($this->get_sua());

        $this->loader->add_action('plugins_loaded', $plugin_i18n, 'load_plugin_textdomain');

    }

    /**
     * Register all of the hooks related to the dashboard functionality
     * of the plugin.
     *
     * @since    1.0.0
     * @access   private
     */
    private function define_admin_hooks()
    {

        $plugin_admin = new SUA_Admin($this->get_sua(), $this->get_version());
        $this->loader->add_action('admin_menu', $plugin_admin, 'sua_options_menu');
        $this->loader->add_action('IXLAFCOM_SUA_hourly_event', $plugin_admin, 'sua_clear_tokens_hourly');

        $this->loader->add_action('init', $plugin_admin, 'sua_user_prevention');
        $this->loader->add_action('set_auth_cookie', $plugin_admin, 'sua_set_auth_cookie');


    }

    /**
     * Register all of the hooks related to the public-facing functionality
     * of the plugin.
     *
     * @since    1.0.0
     * @access   private
     */
    private function define_public_hooks()
    {

        $plugin_public = new SUA_Public($this->get_sua(), $this->get_version());

        $this->loader->add_shortcode('sua', $plugin_public, 'sua_shortcode');

        $this->loader->add_action('wp_enqueue_scripts', $plugin_public, 'enqueue_styles');
        $this->loader->add_action('wp_enqueue_scripts', $plugin_public, 'enqueue_scripts');
        
        $this->loader->add_action('wp_head', $plugin_public, 'sua_hook_css');
        $this->loader->add_action('wp_footer', $plugin_public, 'sua_hook_javascript');

        $this->loader->add_filter('wp_mail_content_type', $plugin_public, 'sua_mail_set_content_type');
        $this->loader->add_filter('show_admin_bar', $plugin_public, 'sua_hide_admin_bar');

        $sua = new SUAAJAX();
        $this->loader->add_action('wp_ajax_private_sua', $sua, 'private_sua_callback');
        $this->loader->add_action('wp_ajax_nopriv_public_sua', $sua, 'public_sua_callback');

        $this->loader->add_action('wp_ajax_resolve_sua', $sua, 'resolve_sua_callback');
        $this->loader->add_action('wp_ajax_nopriv_resolve_sua', $sua, 'resolve_sua_callback');

        $this->loader->add_action('wp_ajax_nopriv_public_and_private_sua', $sua, 'public_and_private_sua_callback');
        $this->loader->add_action('wp_ajax_public_and_private_sua', $sua, 'public_and_private_sua_callback');
    }

    /**
     * Run the loader to execute all of the hooks with WordPress.
     *
     * @since    1.0.0
     */
    public function run()
    {
        $this->loader->run();
    }

    /**
     * The name of the plugin used to uniquely identify it within the context of
     * WordPress and to define internationalization functionality.
     *
     * @since     1.0.0
     * @return    string    The name of the plugin.
     */
    public function get_sua()
    {
        return $this->sua;
    }

    /**
     * The reference to the class that orchestrates the hooks with the plugin.
     *
     * @since     1.0.0
     * @return    SUA_Loader    Orchestrates the hooks of the plugin.
     */
    public function get_loader()
    {
        return $this->loader;
    }

    /**
     * Retrieve the version number of the plugin.
     *
     * @since     1.0.0
     * @return    string    The version number of the plugin.
     */
    public function get_version()
    {
        return $this->version;
    }

}
