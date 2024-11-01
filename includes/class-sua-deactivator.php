<?php

/**
 * Fired during plugin deactivation
 *
 * @link       https://www.ixlaf.com
 * @since      1.0.0
 *
 * @package    SUA
 * @subpackage SUA/includes
 */

/**
 * Fired during plugin deactivation.
 *
 * This class defines all code necessary to run during the plugin's deactivation.
 *
 * @since      1.0.0
 * @package    SUA
 * @subpackage SUA/includes
 * @author     Ixlaf <sua@ixlaf.com>
 */
class SUA_Deactivator
{

    /**
     * Short Description. (use period)
     *
     * Long Description.
     *
     * @since    1.0.0
     */
    public static function deactivate()
    {
        /**
         * On deactivation, remove all functions from the scheduled action hook.
         */
        wp_clear_scheduled_hook('IXLAFCOM_SUA_hourly_event');
        delete_option('SUA_page_shortcode');

    }

}
