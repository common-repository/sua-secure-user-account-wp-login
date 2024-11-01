<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://www.ixlaf.com
 * @since      1.0.0
 *
 * @package    SUA
 * @subpackage SUA/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the dashboard-specific stylesheet and JavaScript.
 *
 * @package    SUA
 * @subpackage SUA/public
 * @author     Ixlaf <sua@ixlaf.com>
 */
class SUA_Public
{

    /**
     * The ID of this plugin.
     *
     * @since    1.0.0
     * @access   private
     * @var      string $sua The ID of this plugin.
     */
    private $sua;

    /**
     * The version of this plugin.
     *
     * @since    1.0.0
     * @access   private
     * @var      string $version The current version of this plugin.
     */
    private $version;

    /**
     * Initialize the class and set its properties.
     *
     * @since    1.0.0
     * @var      string $sua The name of the plugin.
     * @var      string $version The version of this plugin.
     */
    public function __construct($sua, $version)
    {

        $this->sua = $sua;
        $this->version = $version;

    }

    /**
     * Register the stylesheets for the public-facing side of the site.
     *
     * @since    1.0.0
     */
    public function enqueue_styles()
    {

        global $post;
        if ($post && has_shortcode($post->post_content, 'sua')) {
            wp_enqueue_style('sua-vendor-style', plugin_dir_url(__FILE__) . 'css/vendor.a7175a7f.css', array(), $this->version, 'all');
            wp_enqueue_style('sua-main-style', plugin_dir_url(__FILE__) . 'css/main.baedecd9.css', array('sua-vendor-style'), $this->version, 'all');
        }
    }

    /**
     * Register the stylesheets for the public-facing side of the site.
     *
     * @since    1.0.0
     */
    public function enqueue_scripts()
    {

        global $post;
        if ($post && has_shortcode($post->post_content, 'sua')) {
            wp_enqueue_script('sua-vendor-script', plugin_dir_url(__FILE__) . 'js/vendor.016f76ea.js', array(), $this->version, false);
            wp_enqueue_script('sua-main-script', plugin_dir_url(__FILE__) . 'js/scripts.f92f11fc.js', array('sua-vendor-script'), $this->version, false);

            $SUA = array();
            $SUA['baseURL'] = plugin_dir_url(__FILE__);
            $SUA['ajaxURL'] = admin_url('admin-ajax.php');
            $SUA['sitekey'] = get_option('SUA_sitekey');

            $SUA['SUATEXTS'] = array(
                '00001' => __('Required', 'sua'),
                '00002' => __('Invalid User Name', 'sua'),
                '00003' => __('Too small', 'sua'),
                '00004' => __('Too long', 'sua'),
                '00005' => __('Invalid First Name', 'sua'),
                '00006' => __('Invalid Last Name', 'sua'),
                '00007' => __('Invalid Email', 'sua'),
                '00008' => __('At least 1 uppercase character (A-Z)', 'sua'),
                '00009' => __('At least 1 lowercase character (a-z)', 'sua'),
                '00010' => __('At least 1 digit (0-9)', 'sua'),
                '00011' => __('At least 1 special character', 'sua'),
                '00012' => __('Not more than 2 identical characters', 'sua'),
                '00013' => __('Invalid Password', 'sua'),
                '00014' => __('Invalid Request', 'sua'),
                '00015' => __('Invalid Recaptcha', 'sua'),
                '00016' => __('Username in use', 'sua'),
                '00017' => __('This username is blacklisted', 'sua'),
                '00018' => __('This domain is blacklisted', 'sua'),
                '00019' => __('This IP is blacklisted', 'sua'),
                '00020' => __('Invalid username or password', 'sua'),
                '00021' => __('An error occurred trying to log you in', 'sua'),
                '00022' => __('Your sign-in request was successful', 'sua'),
                '00023' => __('Email in use', 'sua'),
                '00024' => __('Your sign-up request was successful!, please verify your email', 'sua'),
                '00025' => __('Your account is pending email confirmation', 'sua'),
                '00026' => __('Your account is not valid for use in the website', 'sua'),
                '00027' => __('Invalid Token', 'sua'),
                '00028' => __('Invalid Action', 'sua'),
                '00029' => __('Specified token is invalid or expired', 'sua'),
                '00030' => __('Thank you for verifying your primary email address', 'sua'),
                '00031' => __('An error has occurred while attempting to verify your token', 'sua'),
                '00032' => __('If your email address exists, you will receive an email with the reset link', 'sua'),
                '00033' => __('Invalid recovery action', 'sua'),
                '00034' => __('IP verification has been disabled', 'sua'),
                '00035' => __('Multi-factor authentication has been disabled', 'sua'),
                '00036' => __('An error has occurred while attempting to generate your token', 'sua'),
                '00037' => __('The token is valid, please answer your security question before resetting the password', 'sua'),
                '00038' => __('The token is valid, please enter your new password', 'sua'),
                '00039' => __('Invalid security answer(s)', 'sua'),
                '00040' => __('Entered answer does not match this security question', 'sua'),
                '00041' => __('Your password has been changed successfully', 'sua'),
                '00042' => __('Entered email does not match the recovery email', 'sua'),
                '00043' => __('A verification link has been sent to your primary email address', 'sua'),
                '00044' => __('A verification link has been sent to your recovery email address', 'sua'),
                '00045' => __('Thank you for verifying your recovery email address', 'sua'),
                '00046' => __('Find the values on your grid and enter these values', 'sua'),
                '00047' => __('Invalid grid values', 'sua'),
                '00048' => __('Entered values are not correct', 'sua'),
                '00049' => __('A passcode has been sent to your primary email address, please verify your new location', 'sua'),
                '00050' => __('Invalid passcode', 'sua'),
                '00051' => __('Entered passcode is not correct', 'sua'),
                '00052' => __('A server-side error occurred', 'sua'),
                '00053' => __('Please enter your recovery email or select your primary address', 'sua'),
                '00054' => __('Your personal information has been updated', 'sua'),
                '00055' => __('An error has occurred while attempting to update your personal information', 'sua'),
                '00056' => __('An error has occurred while attempting to get the current user', 'sua'),
                '00057' => __('This user does not exist anymore', 'sua'),
                '00058' => __('An error has occurred while attempting to valide your registration', 'sua'),
                '00059' => __('An error has occurred while attempting to change your primary email address', 'sua'),
                '00060' => __('This user has no pending email verification', 'sua'),
                '00061' => __('Primary email change has been canceled', 'sua'),
                '00062' => __('Your email address has been successfully changed', 'sua'),
                '00063' => __('This account have already a pending recovery email address', 'sua'),
                '00064' => __('This email is already used as your primary address, it is highly recommended that you use a different email', 'sua'),
                '00065' => __('Your request was successful!, Please verify your recovery email address', 'sua'),
                '00066' => __('An error has occurred while attempting to change your recovery email address', 'sua'),
                '00067' => __('Your recovery email address has been successfully changed', 'sua'),
                '00068' => __('Recovery email change has been canceled', 'sua'),
                '00069' => __('Your recovery email has been deleted', 'sua'),
                '00070' => __('Invalid new password', 'sua'),
                '00071' => __('Invalid current password', 'sua'),
                '00072' => __('Invalid security question(s)', 'sua'),
                '00073' => __('Invalid security question(s) or answer(s)', 'sua'),
                '00074' => __('Your security question(s) has been successfully changed', 'sua'),
                '00075' => __('Multifactor authentication has been disabled', 'sua'),
                '00076' => __('Multifactor authentication has been enabled', 'sua'),
                '00077' => __('Your grid has been successfully downloaded', 'sua'),
                '00078' => __('This account has no multifactor authentication grid', 'sua'),
                '00079' => __('Invalid pincode', 'sua'),
                '00080' => __('Your pin code has been changed successfully', 'sua'),
                '00081' => __('Entered pin code is not correct', 'sua'),
                '00082' => __('You have exceeded the maximum number for pin code attempts', 'sua'),
                '00083' => __('This account cannot be deleted', 'sua'),
                '00084' => __('Your delete request was successful!, Please use the link we sent to your primary email address to cancel it', 'sua'),
                '00085' => __('Your account deletion request has been canceled', 'sua'),
                '00086' => __('This account will be deleted, please use the reset link to cancel the request', 'sua'),
                '00087' => __('You have exceeded the maximum number for password attempts', 'sua'),
                '00088' => __('This recovery email address is already verified', 'sua'),
                '00089' => __('Security check', 'sua'),
                '00090' => __('Pin code is disabled', 'sua'),
                '00091' => __('Multifactor authentication is disabled', 'sua'),
                '00092' => __('Registration is disabled', 'sua'),
                '00093' => __('Account deletion is disabled', 'sua'),
                '00094' => __('This account have already a pending primary email address', 'sua'),
                '00095' => __('Security questions option is disabled', 'sua'),
                '00096' => __('Recovery email address is disabled', 'sua'),
                '00097' => __('IP verification is disabled', 'sua'),
                '00098' => __('IP verification has been enabled', 'sua'),
                '00099' => __('Your log out request was successful', 'sua'),
                '00100' => __('Passwords have to match', 'sua'),
                '00101' => __('Email notifications is disabled', 'sua'),
                '00102' => __('Invalid primary notifications', 'sua'),
                '00103' => __('Invalid recovery notifications', 'sua'),
                '00104' => __('Email notifications settings has been successfully changed', 'sua'),
                '00105' => __('You have exceeded the maximum number of attemps for this token', 'sua'),
                '00106' => __('Your account has been deleted', 'sua'),
            );

            $SUA['SUAINTERNATIONALIZATION'] = array(
                '00000' => __('Account history', 'sua'),
                '00001' => __('Answer', 'sua'),
                '00002' => __('Authenticate', 'sua'),
                '00003' => __('Back', 'sua'),
                '00004' => __('Browser', 'sua'),
                '00005' => __('Cancel', 'sua'),
                '00006' => __('Canned', 'sua'),
                '00007' => __('Change', 'sua'),
                '00008' => __('Choose a question', 'sua'),
                '00009' => __('City', 'sua'),
                '00010' => __('Confirm new password', 'sua'),
                '00011' => __('Country', 'sua'),
                '00012' => __('Current password', 'sua'),
                '00013' => __('Date', 'sua'),
                '00014' => __('Delete your account', 'sua'),
                '00015' => __('Delete', 'sua'),
                '00016' => __('Disable grid authentication', 'sua'),
                '00017' => __('Dont know your password?', 'sua'),
                '00018' => __('Download the grid', 'sua'),
                '00019' => __('Download', 'sua'),
                '00020' => __('Edit', 'sua'),
                '00021' => __('Email address', 'sua'),
                '00022' => __('Email notifications', 'sua'),
                '00023' => __('Enable/Disable Grid multifactor authentication', 'sua'),
                '00024' => __('Enable/Disable Ip verification', 'sua'),
                '00025' => __('First name', 'sua'),
                '00026' => __('IP verification', 'sua'),
                '00027' => __('IP', 'sua'),
                '00028' => __('Last name', 'sua'),
                '00029' => __('Logout', 'sua'),
                '00030' => __('Multifactor Authentication', 'sua'),
                '00031' => __('New password', 'sua'),
                '00032' => __('New Pin code', 'sua'),
                '00033' => __('Password', 'sua'),
                '00034' => __('Pending email address', 'sua'),
                '00035' => __('Pending recovery email address', 'sua'),
                '00036' => __('Personal', 'sua'),
                '00037' => __('Pin code', 'sua'),
                '00038' => __('Primary', 'sua'),
                '00039' => __('Question', 'sua'),
                '00040' => __('Recovery email address', 'sua'),
                '00041' => __('Recovery email', 'sua'),
                '00042' => __('Recovery', 'sua'),
                '00043' => __('Remember this browser', 'sua'),
                '00044' => __('Security questions', 'sua'),
                '00045' => __('Security', 'sua'),
                '00046' => __('Show', 'sua'),
                '00047' => __('Save', 'sua'),
                '00048' => __('Use the primary email address', 'sua'),
                '00049' => __('User-Created', 'sua'),
                '00050' => __('Username', 'sua'),
                '00051' => array(
                    array('code' => '13', 'title' => __('Personal information has been updated', 'sua')),
                    array('code' => '14', 'title' => __('Password has been changed', 'sua')),
                    array('code' => '15', 'title' => __('Security questions has been changed', 'sua')),
                    array('code' => '16',
                        'title' => __('Multifactor authentication settings has been changed', 'sua')
                    ),
                    array('code' => '17', 'title' => __('Recovery email address has been changed', 'sua')),
                    array('code' => '18', 'title' => __('Pin code has been changed', 'sua')),
                    array('code' => '19',
                        'title' => __('IP verification settings has been changed', 'sua')
                    ),
                    array('code' => '20',
                        'title' => __('A new password has been set for this account', 'sua')
                    ),
                    array('code' => '21',
                        'title' => __('Multifactor authentication successfully passed', 'sua')
                    ),
                    array('code' => '22', 'title' => __('IP verification successfully passed', 'sua')),
                ),
                '00052' => __('Passcode', 'sua'),
                '00053' => __('Cant get the passcode', 'sua'),
                '00054' => __('Sign up', 'sua'),
                '00055' => __('Log in', 'sua'),
                '00056' => __('Recover', 'sua'),
                '00057' => __('Send', 'sua'),
            );
            wp_localize_script('sua-main-script', 'SUA', $SUA);

        }

    }

    /**
     * @since    1.0.0
     */
    function sua_hide_admin_bar()
    {
        return false;
    }

    /**
     * @since    1.0.0
     */
    function sua_mail_set_content_type()
    {
        return "text/html";
    }

    /**
     * @since    1.0.0
     */
    public function sua_shortcode()
    {
        include_once(plugin_dir_path(__FILE__) . 'partials/sua-public-display.php');
    }

    /**
     * @since    1.0.0
     */
    public function sua_hook_css()
    {
        echo '<style id="antiClickjack">body{display:none !important;}</style>';
    }

    /**
     * @since    1.0.0
     */
    public function sua_hook_javascript()
    {
        ?>
        <script type="text/javascript">
            if (self === top) {
                var antiClickjack = document.getElementById("antiClickjack");
                antiClickjack.parentNode.removeChild(antiClickjack);
            } else {
                top.location = self.location;
            }
        </script>
        <?php
    }

}
