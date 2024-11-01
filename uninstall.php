<?php

/**
 * Fired when the plugin is uninstalled.
 *
 * When populating this file, consider the following flow
 * of control:
 *
 * - This method should be static
 * - Check if the $_REQUEST content actually is the plugin name
 * - Run an admin referrer check to make sure it goes through authentication
 * - Verify the output of $_GET makes sense
 * - Repeat with other user roles. Best directly by using the links/query string parameters.
 * - Repeat things for multisite. Once for a single site in the network, once sitewide.
 *
 * This file may be updated more in future version of the Boilerplate; however, this is the
 * general skeleton and outline for how the file should work.
 *
 * For more information, see the following discussion:
 * https://github.com/tommcfarlin/WordPress-Plugin-Boilerplate/pull/123#issuecomment-28541913
 *
 * @link       https://www.ixlaf.com
 * @since      1.0.0
 *
 * @package    SUA
 */

// If uninstall not called from WordPress, then exit.
if (!defined('WP_UNINSTALL_PLUGIN')) {
    exit;
}

global $wpdb;
$wpdb->query('DROP TABLE IF EXISTS '.$wpdb->prefix.'sua_settings;');

delete_option( "SUA_options");
delete_option( "SUA_page_shortcode");
delete_option( "SUA_sitekey");

$users = get_users();
$metas=array('_SUAMETA_authenticate','_SUAMETA_email_notifications','_SUAMETA_ip_verification','_SUAMETA_locations','_SUAMETA_login_attempts','_SUAMETA_multifactor_authentication','_SUAMETA_multifactor_authentication_fingerprint','_SUAMETA_pending_email','_SUAMETA_pending_recovery_email','_SUAMETA_pending_username','_SUAMETA_pin_attempts','_SUAMETA_pin_code','_SUAMETA_recovery_email','_SUAMETA_security_questions','_SUAMETA_security_questions_canned','_SUAMETA_status');
foreach ( $users as $user ) {
	foreach ( $metas as $meta ) {
		delete_user_meta($user->ID, $meta);
	}
}