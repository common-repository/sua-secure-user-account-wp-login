<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * Dashboard. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://www.ixlaf.com
 * @since             1.0.0
 * @package           SUA
 *
 * @wordpress-plugin
 * Plugin Name:       Secure User Account
 * Plugin URI:        https://www.ixlaf.com/sua-uri/
 * Description:       SUA - Secure User Account WordPress Login
 * Version:           1.0.0
 * Author:            Ixlaf
 * Author URI:        https://www.ixlaf.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       sua
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if (!defined('WPINC')) {
    die;
}

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-sua-activator.php
 */
function activate_sua()
{
    require_once plugin_dir_path(__FILE__) . 'includes/class-sua-activator.php';
    SUA_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-sua-deactivator.php
 */
function deactivate_sua()
{
    require_once plugin_dir_path(__FILE__) . 'includes/class-sua-deactivator.php';
    SUA_Deactivator::deactivate();
}

register_activation_hook(__FILE__, 'activate_sua');
register_deactivation_hook(__FILE__, 'deactivate_sua');

/**
 * The core plugin class that is used to define internationalization,
 * dashboard-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path(__FILE__) . 'includes/class-sua.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_sua()
{

    $plugin = new SUA();
    $plugin->run();

}

run_sua();
