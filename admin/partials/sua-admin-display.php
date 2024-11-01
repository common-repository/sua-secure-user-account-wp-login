<?php

/**
 * Provide a dashboard view for the plugin
 *
 * This file is used to markup the public-facing aspects of the plugin.
 *
 * @link       https://www.ixlaf.com
 * @since      1.0.0
 *
 * @package    SUA
 * @subpackage SUA/admin/partials
 */

// If this file is called directly, abort.
if (!defined('WPINC')) {
    die;
}
if (isset($_POST['submit_sua'])) {
    $SUA_options = $_POST['SUA_options'];

    $SUA_options['pinCode'] = isset($SUA_options['pinCode']) ? (bool)$SUA_options['pinCode'] : false;

    $SUA_options['blacklists']['names'] = explode(",", $SUA_options['blacklists']['names']);
    $SUA_options['blacklists']['ips'] = explode(",", $SUA_options['blacklists']['ips']);
    $SUA_options['blacklists']['domains'] = explode(",", $SUA_options['blacklists']['domains']);

    $SUA_options['editUserInfo']['changeUsername'] = isset($SUA_options['editUserInfo']['changeUsername']) ? (bool)$SUA_options['editUserInfo']['changeUsername'] : false;

    $SUA_options['editSecurityQuestions']['enabled'] = isset($SUA_options['editSecurityQuestions']['enabled']) ? (bool)$SUA_options['editSecurityQuestions']['enabled'] : false;

    $SUA_options['editSecurityQuestions']['cannedQuestions'] = explode(",", $SUA_options['editSecurityQuestions']['cannedQuestions']);

    foreach ($SUA_options['editSecurityQuestions']['cannedQuestions'] as $key => $question) {
        $SUA_options['editSecurityQuestions']['cannedQuestions'][$key] = array(
            'code' => (string)$key,
            'title' => $question
        );
    }

    $SUA_options['signIn']['enabled'] = isset($SUA_options['signIn']['enabled']) ? (bool)$SUA_options['signIn']['enabled'] : false;
    $SUA_options['signIn']['multifactorAuthentication'] = isset($SUA_options['signIn']['multifactorAuthentication']) ? (bool)$SUA_options['signIn']['multifactorAuthentication'] : false;
    $SUA_options['signIn']['ipVerification'] = isset($SUA_options['signIn']['ipVerification']) ? (bool)$SUA_options['signIn']['ipVerification'] : false;
    $SUA_options['signIn']['recaptcha'] = isset($SUA_options['signIn']['recaptcha']) ? (bool)$SUA_options['signIn']['recaptcha'] : false;

    $SUA_options['signUp']['recaptcha'] = isset($SUA_options['signUp']['recaptcha']) ? (bool)$SUA_options['signUp']['recaptcha'] : false;

    $SUA_options['editRecoveryEmail']['enabled'] = isset($SUA_options['editRecoveryEmail']['enabled']) ? (bool)$SUA_options['editRecoveryEmail']['enabled'] : false;
    $SUA_options['editRecoveryEmail']['recaptcha'] = isset($SUA_options['editRecoveryEmail']['recaptcha']) ? (bool)$SUA_options['editRecoveryEmail']['recaptcha'] : false;

    $SUA_options['deleteAccount']['enabled'] = isset($SUA_options['deleteAccount']['enabled']) ? (bool)$SUA_options['deleteAccount']['enabled'] : false;
    $SUA_options['deleteAccount']['recaptcha'] = isset($SUA_options['deleteAccount']['recaptcha']) ? (bool)$SUA_options['deleteAccount']['recaptcha'] : false;

    $SUA_options['recovery']['recaptcha'] = isset($SUA_options['recovery']['recaptcha']) ? (bool)$SUA_options['recovery']['recaptcha'] : false;

    $SUA_options['accountHistory']['enabled'] = isset($SUA_options['accountHistory']['enabled']) ? (bool)$SUA_options['accountHistory']['enabled'] : false;

    $SUA_options['emailNotifications']['enabled'] = isset($SUA_options['emailNotifications']['enabled']) ? (bool)$SUA_options['emailNotifications']['enabled'] : false;

    $stripslashesDescription = array(
        'main',
        'editUserInfo',
        'editPassword',
        'editSecurityQuestions',
        'signIn',
        'signUp',
        'editGridMultifactorAuthentication',
        'gridMultifactorAuthentication',
        'editRecoveryEmail',
        'editPinCode',
        'deleteAccount',
        'verifyToken',
        'recovery',
        'recoveryNewPassword',
        'ipVerification',
        'recoverySecurityQuestion',
        'recoveryEmail',
        'accountHistory',
        'editIpVerification',
        'emailNotifications'
    );
    foreach ($stripslashesDescription as $stripslashe) {
        $SUA_options[$stripslashe]['description'] = stripslashes(wpautop($SUA_options[$stripslashe]['description']));
    }

    $stripslashesMails = array(
        '1',
        '2',
        '3',
        '4',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22'
    );
    foreach ($stripslashesMails as $stripslashe) {
        $SUA_options['mails'][$stripslashe]['message'] = stripslashes(wpautop($SUA_options['mails'][$stripslashe]['message']));
    }

    update_option('SUA_options', $SUA_options);
}

if (isset($_POST['SUA_page_shortcode'])) {
    update_option('SUA_page_shortcode', $_POST['SUA_page_shortcode']);
}

if (isset($_POST['SUA_sitekey'])) {
    update_option('SUA_sitekey', $_POST['SUA_sitekey']);
}

$SUA_options = get_option('SUA_options');
$SUA_page_shortcode = get_option('SUA_page_shortcode');
$SUA_sitekey = get_option('SUA_sitekey');
?>
<div id="wp-sua" class="wrap">
    <h3><a href="http://codecanyon.net/item/sua-secure-user-account-wordpress-login/10004179?ref=ixlaf" target="_blank"><?php _e('Go premium', 'sua'); ?></a></h3>
    <form method="post">
        <div id="tabs">
            <ul>
                <li><a href="#tabs-1"><?php _e('General', 'sua'); ?></a></li>
                <li><a href="#tabs-2"><?php _e('Account', 'sua'); ?></a></li>
                <li><a href="#tabs-3"><?php _e('Personal infos', 'sua'); ?></a></li>
                <li><a href="#tabs-4"><?php _e('Password change', 'sua'); ?></a></li>
                <li><a href="#tabs-5"><?php _e('Security questions', 'sua'); ?></a></li>
                <li><a href="#tabs-6"><?php _e('Log In', 'sua'); ?></a></li>
                <li><a href="#tabs-7"><?php _e('Sign up', 'sua'); ?></a></li>
                <li><a href="#tabs-8" disabled><?php _e('MF Authentication', 'sua'); ?></a></li>
                <li><a href="#tabs-9" disabled><?php _e('IP verification', 'sua'); ?></a></li>
                <li><a href="#tabs-10"><?php _e('Recovery email', 'sua'); ?></a></li>
                <li><a href="#tabs-11"><?php _e('Pin code', 'sua'); ?></a></li>
                <li><a href="#tabs-12"><?php _e('Token verification', 'sua'); ?></a></li>
                <li><a href="#tabs-13"><?php _e('Delete Account', 'sua'); ?></a></li>
                <li><a href="#tabs-14"><?php _e('Recovery', 'sua'); ?></a></li>
                <li><a href="#tabs-15"><?php _e('Account history', 'sua'); ?></a></li>
                <li><a href="#tabs-16"><?php _e('Email notifications', 'sua'); ?></a></li>
                <li><a href="#tabs-17"><?php _e('Mails', 'sua'); ?></a></li>
                <li><a href="#tabs-18"><?php _e('Notifications', 'sua'); ?></a></li>

            </ul>
            <div id="tabs-1">
                <table class="form-table">
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('SUA URL', 'sua'); ?></label>
                        </th>
                        <td>
                            <?php

                            wp_dropdown_pages(array(
                                'name' => 'SUA_page_shortcode',
                                'show_option_none' => __('Select'),
                                'selected' => $SUA_page_shortcode
                            )); ?>
                        </td>
                    </tr>

                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Pin code', 'sua'); ?></label>
                        </th>
                        <td>
                            <label>
                                <input <?php checked(true, $SUA_options['pinCode']); ?> type="checkbox"
                                                                                        name="SUA_options[pinCode]"
                                                                                        value="true"/>
                                <?php _e('Enabled', 'sua'); ?>
                            </label>
                        </td>
                    </tr>
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Token expiration (time-to-live) by hours', 'sua'); ?></label>
                        </th>
                        <td>
                            <input value="<?php echo $SUA_options['tokenTTL']; ?>" type="number"
                                   name="SUA_options[tokenTTL]" min="1" max="10000"/>
                        </td>
                    </tr>
                </table>
                <h3><?php _e('Attemps', 'sua'); ?></h3>
                <table class="form-table">
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Password', 'sua'); ?></label>
                        </th>
                        <td>
                            <input value="<?php echo $SUA_options['attemps']['password']; ?>" type="number"
                                   name="SUA_options[attemps][password]" min="1" max="100"/>
                        </td>
                    </tr>
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Pin code', 'sua'); ?></label>
                        </th>
                        <td>
                            <input value="<?php echo $SUA_options['attemps']['pinCode']; ?>" type="number"
                                   name="SUA_options[attemps][pinCode]" min="1" max="100"/>
                        </td>
                    </tr>
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Token', 'sua'); ?></label>
                        </th>
                        <td>
                            <input value="<?php echo $SUA_options['attemps']['token']; ?>" type="number"
                                   name="SUA_options[attemps][token]" min="1" max="100"/>
                        </td>
                    </tr>
                </table>

                <h3><?php _e('Recaptcha ', 'sua'); ?></h3>
                <table class="form-table">
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Secret', 'sua'); ?></label>
                        </th>
                        <td>
                            <input value="<?php echo $SUA_options['recaptcha']['secret']; ?>" type="text"
                                   name="SUA_options[recaptcha][secret]"/>
                        </td>
                    </tr>
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Public', 'sua'); ?></label>
                        </th>
                        <td>
                            <input value="<?php echo $SUA_sitekey; ?>" type="text" name="SUA_sitekey"/>
                        </td>
                    </tr>
                </table>

                <h3><?php _e('Blacklist ', 'sua'); ?></h3>
                <table class="form-table">
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Names', 'sua'); ?></label>
                        </th>
                        <td>
							<textarea rows="5"
                                      name="SUA_options[blacklists][names]"><?php echo implode(",", $SUA_options['blacklists']['names']); ?></textarea>
                        </td>
                    </tr>
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('IPs', 'sua'); ?></label>
                        </th>
                        <td>
							<textarea rows="5"
                                      name="SUA_options[blacklists][ips]"><?php echo implode(",", $SUA_options['blacklists']['ips']); ?></textarea>
                        </td>
                    </tr>
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Domains', 'sua'); ?></label>
                        </th>
                        <td>
							<textarea rows="5"
                                      name="SUA_options[blacklists][domains]"><?php echo implode(",", $SUA_options['blacklists']['domains']); ?></textarea>
                        </td>
                    </tr>
                </table>
            </div>
            <div id="tabs-2">
                <h2><?php _e('General Settings', 'sua'); ?></h2>
                <hr>
                <h3><?php _e('Title', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['main']['title']; ?>" type="text"
                       name="SUA_options[main][title]"/>

                <h3><?php _e('Description', 'sua'); ?></h3>
                <?php
                wp_editor($SUA_options['main']['description'], 'main_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[main][description]"
                ));
                ?>
                <table class="form-table">
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Display', 'sua'); ?></label>
                        </th>
                        <td>
                            <select name="SUA_options[main][columns]">
                                <option
                                    value="6" <?php selected($SUA_options['main']['columns'], "6"); ?>><?php _e('Side', 'sua'); ?></option>
                                <option
                                    value="12" <?php selected($SUA_options['main']['columns'], "12"); ?>><?php _e('Top', 'sua'); ?></option>
                            </select>
                        </td>
                    </tr>
                </table>
            </div>
            <div id="tabs-3">
                <h2><?php _e('Personal Informations', 'sua'); ?></h2>
                <hr>
                <h3><?php _e('Title', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['editUserInfo']['title']; ?>" type="text"
                       name="SUA_options[editUserInfo][title]"/>

                <h3><?php _e('Description', 'sua'); ?></h3>
                <?php
                wp_editor($SUA_options['editUserInfo']['description'], 'editUserInfo_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[editUserInfo][description]"
                ));
                ?>
                <table class="form-table">
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Change username', 'sua'); ?></label>
                        </th>
                        <td>
                            <label>
                                <input <?php checked(true, $SUA_options['editUserInfo']['changeUsername']); ?>
                                    type="checkbox" name="SUA_options[editUserInfo][changeUsername]" value="true"/>
                                <?php _e('Enabled', 'sua'); ?>
                            </label>
                        </td>
                    </tr>
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Display', 'sua'); ?></label>
                        </th>
                        <td>
                            <select name="SUA_options[editUserInfo][columns]">
                                <option
                                    value="6" <?php selected($SUA_options['editUserInfo']['columns'], "6"); ?>><?php _e('Side', 'sua'); ?></option>
                                <option
                                    value="12" <?php selected($SUA_options['editUserInfo']['columns'], "12"); ?>><?php _e('Top', 'sua'); ?></option>
                            </select>
                        </td>
                    </tr>
                </table>
            </div>
            <div id="tabs-4">
                <h2><?php _e('Change Password', 'sua'); ?></h2>
                <hr>

                <h3><?php _e('Title', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['editPassword']['title']; ?>" type="text"
                       name="SUA_options[editPassword][title]"/>

                <h3><?php _e('Description', 'sua'); ?></h3>
                <?php
                wp_editor($SUA_options['editPassword']['description'], 'editPassword_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[editPassword][description]"
                ));
                ?>
                <table class="form-table">
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Display', 'sua'); ?></label>
                        </th>
                        <td>
                            <select name="SUA_options[editPassword][columns]">
                                <option
                                    value="6" <?php selected($SUA_options['editPassword']['columns'], "6"); ?>><?php _e('Side', 'sua'); ?></option>
                                <option
                                    value="12" <?php selected($SUA_options['editPassword']['columns'], "12"); ?>><?php _e('Top', 'sua'); ?></option>
                            </select>
                        </td>
                    </tr>
                </table>
            </div>
            <div id="tabs-5">
                <h2><?php _e('Change Security Questions', 'sua'); ?></h2>
                <hr>
                <h3><?php _e('Title', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['editSecurityQuestions']['title']; ?>" type="text"
                       name="SUA_options[editSecurityQuestions][title]"/>

                <h3><?php _e('Description', 'sua'); ?></h3>
                <?php
                wp_editor($SUA_options['editSecurityQuestions']['description'], 'editSecurityQuestions_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[editSecurityQuestions][description]"
                ));
                ?>
                <table class="form-table">
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Enabled', 'sua'); ?></label>
                        </th>
                        <td>
                            <label>
                                <input <?php checked(true, $SUA_options['editSecurityQuestions']['enabled']); ?>
                                    type="checkbox" name="SUA_options[editSecurityQuestions][enabled]" value="true"/>
                            </label>
                        </td>
                    </tr>
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Number of canned questions to show', 'sua'); ?></label>
                        </th>
                        <td>
                            <input value="<?php echo $SUA_options['editSecurityQuestions']['numberOfQuestions']; ?>"
                                   type="number" name="SUA_options[editSecurityQuestions][numberOfQuestions]" min="1"
                                   max="100"/>
                        </td>
                    </tr>
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Canned questions', 'sua'); ?></label>
                        </th>
                        <td>
							<textarea rows="5"
                                      name="SUA_options[editSecurityQuestions][cannedQuestions]"><?php echo implode(",", array_map(function ($v) {
                                    return $v['title'];
                                }, $SUA_options['editSecurityQuestions']['cannedQuestions'])); ?></textarea>
                        </td>
                    </tr>
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Display', 'sua'); ?></label>
                        </th>
                        <td>
                            <select name="SUA_options[editSecurityQuestions][columns]">
                                <option
                                    value="6" <?php selected($SUA_options['editSecurityQuestions']['columns'], "6"); ?>><?php _e('Side', 'sua'); ?></option>
                                <option
                                    value="12" <?php selected($SUA_options['editSecurityQuestions']['columns'], "12"); ?>><?php _e('Top', 'sua'); ?></option>
                            </select>
                        </td>
                    </tr>
                </table>
            </div>
            <div id="tabs-6">
                <h2><?php _e('Sign In', 'sua'); ?></h2>
                <hr>
                <h3><?php _e('Title', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['signIn']['title']; ?>" type="text"
                       name="SUA_options[signIn][title]"/>

                <h3><?php _e('Description', 'sua'); ?></h3>
                <?php
                wp_editor($SUA_options['signIn']['description'], 'signIn_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[signIn][description]"
                ));
                ?>
                <table class="form-table">
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Multifactor Authentication', 'sua'); ?> <a href="http://codecanyon.net/item/sua-secure-user-account-wordpress-login/10004179?ref=ixlaf" target="_blank"><?php _e('Go premium', 'sua'); ?></a></label>
                        </th>
                        <td>
                            <label>
                                <input disabled <?php checked(true, $SUA_options['signIn']['multifactorAuthentication']); ?>
                                    type="checkbox" name="SUA_options[signIn][multifactorAuthentication]" value="true"/>
                            </label>
                        </td>
                    </tr>
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('IP Verification', 'sua'); ?> <a href="http://codecanyon.net/item/sua-secure-user-account-wordpress-login/10004179?ref=ixlaf" target="_blank"><?php _e('Go premium', 'sua'); ?></a></label>
                        </th>
                        <td>
                            <label>
                                <input disabled <?php checked(true, $SUA_options['signIn']['ipVerification']); ?> type="checkbox"
                                name="SUA_options[signIn][ipVerification]"
                                value="true"/>
                            </label>
                        </td>
                    </tr>
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Recaptcha', 'sua'); ?></label>
                        </th>
                        <td>
                            <label>
                                <input <?php checked(true, $SUA_options['signIn']['recaptcha']); ?> type="checkbox"
                                                                                                    name="SUA_options[signIn][recaptcha]"
                                                                                                    value="true"/>
                            </label>
                        </td>
                    </tr>
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Display', 'sua'); ?></label>
                        </th>
                        <td>
                            <select name="SUA_options[signIn][columns]">
                                <option
                                    value="6" <?php selected($SUA_options['signIn']['columns'], "6"); ?>><?php _e('Side', 'sua'); ?></option>
                                <option
                                    value="12" <?php selected($SUA_options['signIn']['columns'], "12"); ?>><?php _e('Top', 'sua'); ?></option>
                            </select>
                        </td>
                    </tr>
                </table>
            </div>
            <div id="tabs-7">
                <h2><?php _e('Sign Up', 'sua'); ?></h2>
                <hr>
                <h3><?php _e('Title', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['signUp']['title']; ?>" type="text"
                       name="SUA_options[signUp][title]"/>

                <h3><?php _e('Description', 'sua'); ?></h3>
                <?php
                wp_editor($SUA_options['signUp']['description'], 'signUp_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[signUp][description]"
                ));
                ?>
                <table class="form-table">
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Recaptcha', 'sua'); ?></label>
                        </th>
                        <td>
                            <label>
                                <input <?php checked(true, $SUA_options['signUp']['recaptcha']); ?> type="checkbox"
                                                                                                    name="SUA_options[signUp][recaptcha]"
                                                                                                    value="true"/>
                            </label>
                        </td>
                    </tr>
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Display', 'sua'); ?></label>
                        </th>
                        <td>
                            <select name="SUA_options[signUp][columns]">
                                <option
                                    value="6" <?php selected($SUA_options['signUp']['columns'], "6"); ?>><?php _e('Side', 'sua'); ?></option>
                                <option
                                    value="12" <?php selected($SUA_options['signUp']['columns'], "12"); ?>><?php _e('Top', 'sua'); ?></option>
                            </select>
                        </td>
                    </tr>
                </table>
            </div>
            <div id="tabs-8">
                <h2><?php _e('Multifactor Authentication', 'sua'); ?></h2>
                <hr>
                <h3><?php _e('Title', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['editGridMultifactorAuthentication']['title']; ?>" type="text"
                       name="SUA_options[editGridMultifactorAuthentication][title]"/>

                <h3><?php _e('Description', 'sua'); ?></h3>
                <?php
                wp_editor($SUA_options['editGridMultifactorAuthentication']['description'], 'editGridMultifactorAuthentication_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[editGridMultifactorAuthentication][description]"
                ));
                ?>
                <table class="form-table">
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Display', 'sua'); ?></label>
                        </th>
                        <td>
                            <select name="SUA_options[editGridMultifactorAuthentication][columns]">
                                <option
                                    value="6" <?php selected($SUA_options['editGridMultifactorAuthentication']['columns'], "6"); ?>><?php _e('Side', 'sua'); ?></option>
                                <option
                                    value="12" <?php selected($SUA_options['editGridMultifactorAuthentication']['columns'], "12"); ?>><?php _e('Top', 'sua'); ?></option>
                            </select>
                        </td>
                    </tr>
                </table>
                <p class="submit">
                    <input type="submit" name="submit_sua" class="button button-primary"
                           value="<?php _e('Save Changes', 'sua'); ?>">
                </p>

                <h2><?php _e('Multifactor Authentication Validation', 'sua'); ?></h2>
                <hr>
                <h3><?php _e('Title', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['gridMultifactorAuthentication']['title']; ?>" type="text"
                       name="SUA_options[gridMultifactorAuthentication][title]"/>

                <h3><?php _e('Description', 'sua'); ?></h3>
                <?php
                wp_editor($SUA_options['gridMultifactorAuthentication']['description'], 'gridMultifactorAuthentication_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[gridMultifactorAuthentication][description]"
                ));
                ?>
                <table class="form-table">
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Display', 'sua'); ?></label>
                        </th>
                        <td>
                            <select name="SUA_options[gridMultifactorAuthentication][columns]">
                                <option
                                    value="6" <?php selected($SUA_options['gridMultifactorAuthentication']['columns'], "6"); ?>><?php _e('Side', 'sua'); ?></option>
                                <option
                                    value="12" <?php selected($SUA_options['gridMultifactorAuthentication']['columns'], "12"); ?>><?php _e('Top', 'sua'); ?></option>
                            </select>
                        </td>
                    </tr>
                </table>
            </div>
            <div id="tabs-9">
                <h2><?php _e('IP Verification', 'sua'); ?></h2>
                <hr>
                <h3><?php _e('Title', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['editIpVerification']['title']; ?>" type="text"
                       name="SUA_options[editIpVerification][title]"/>

                <h3><?php _e('Description', 'sua'); ?></h3>
                <?php
                wp_editor($SUA_options['editIpVerification']['description'], 'editIpVerification_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[editIpVerification][description]"
                ));
                ?>
                <table class="form-table">
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Display', 'sua'); ?></label>
                        </th>
                        <td>
                            <select name="SUA_options[editIpVerification][columns]">
                                <option
                                    value="6" <?php selected($SUA_options['editIpVerification']['columns'], "6"); ?>><?php _e('Side', 'sua'); ?></option>
                                <option
                                    value="12" <?php selected($SUA_options['editIpVerification']['columns'], "12"); ?>><?php _e('Top', 'sua'); ?></option>
                            </select>
                        </td>
                    </tr>
                </table>
                <p class="submit">
                    <input type="submit" name="submit_sua" class="button button-primary"
                           value="<?php _e('Save Changes', 'sua'); ?>">
                </p>

                <h2><?php _e('IP Address Verification Process', 'sua'); ?></h2>
                <hr>
                <h3><?php _e('Title', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['ipVerification']['title']; ?>" type="text"
                       name="SUA_options[ipVerification][title]"/>

                <h3><?php _e('Description', 'sua'); ?></h3>
                <?php
                wp_editor($SUA_options['ipVerification']['description'], 'ipVerification_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[ipVerification][description]"
                ));
                ?>
                <table class="form-table">
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Display', 'sua'); ?></label>
                        </th>
                        <td>
                            <select name="SUA_options[ipVerification][columns]">
                                <option
                                    value="6" <?php selected($SUA_options['ipVerification']['columns'], "6"); ?>><?php _e('Side', 'sua'); ?></option>
                                <option
                                    value="12" <?php selected($SUA_options['ipVerification']['columns'], "12"); ?>><?php _e('Top', 'sua'); ?></option>
                            </select>
                        </td>
                    </tr>
                </table>
            </div>
            <div id="tabs-10">
                <h2><?php _e('Recovery Email', 'sua'); ?></h2>
                <hr>
                <h3><?php _e('Title', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['editRecoveryEmail']['title']; ?>" type="text"
                       name="SUA_options[editRecoveryEmail][title]"/>

                <h3><?php _e('Description', 'sua'); ?></h3>
                <?php
                wp_editor($SUA_options['editRecoveryEmail']['description'], 'editRecoveryEmail_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[editRecoveryEmail][description]"
                ));
                ?>
                <table class="form-table">
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Enabled', 'sua'); ?></label>
                        </th>
                        <td>
                            <label>
                                <input <?php checked(true, $SUA_options['editRecoveryEmail']['enabled']); ?>
                                    type="checkbox" name="SUA_options[editRecoveryEmail][enabled]" value="true"/>
                            </label>
                        </td>
                    </tr>
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Display', 'sua'); ?></label>
                        </th>
                        <td>
                            <select name="SUA_options[editRecoveryEmail][columns]">
                                <option
                                    value="6" <?php selected($SUA_options['editRecoveryEmail']['columns'], "6"); ?>><?php _e('Side', 'sua'); ?></option>
                                <option
                                    value="12" <?php selected($SUA_options['editRecoveryEmail']['columns'], "12"); ?>><?php _e('Top', 'sua'); ?></option>
                            </select>
                        </td>
                    </tr>
                </table>
            </div>
            <div id="tabs-11">
                <h2><?php _e('Pin Code', 'sua'); ?></h2>
                <hr>
                <h3><?php _e('Title', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['editPinCode']['title']; ?>" type="text"
                       name="SUA_options[editPinCode][title]"/>

                <h3><?php _e('Description', 'sua'); ?></h3>
                <?php
                wp_editor($SUA_options['editPinCode']['description'], 'editPinCode_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[editPinCode][description]"
                ));
                ?>
                <table class="form-table">
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Display', 'sua'); ?></label>
                        </th>
                        <td>
                            <select name="SUA_options[editPinCode][columns]">
                                <option
                                    value="6" <?php selected($SUA_options['editPinCode']['columns'], "6"); ?>><?php _e('Side', 'sua'); ?></option>
                                <option
                                    value="12" <?php selected($SUA_options['editPinCode']['columns'], "12"); ?>><?php _e('Top', 'sua'); ?></option>
                            </select>
                        </td>
                    </tr>
                </table>
            </div>
            <div id="tabs-12">
                <h2><?php _e('Token Verification', 'sua'); ?></h2>
                <hr>
                <h3><?php _e('Title', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['verifyToken']['title']; ?>" type="text"
                       name="SUA_options[verifyToken][title]"/>

                <h3><?php _e('Description', 'sua'); ?></h3>
                <?php
                wp_editor($SUA_options['verifyToken']['description'], 'verifyToken_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[verifyToken][description]"
                ));
                ?>
            </div>
            <div id="tabs-13">
                <h2><?php _e('Delete Account', 'sua'); ?></h2>
                <hr>
                <h3><?php _e('Title', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['deleteAccount']['title']; ?>" type="text"
                       name="SUA_options[deleteAccount][title]"/>

                <h3><?php _e('Description', 'sua'); ?></h3>
                <?php
                wp_editor($SUA_options['deleteAccount']['description'], 'deleteAccount_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[deleteAccount][description]"
                ));
                ?>
                <table class="form-table">

                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Days before deletion (0 immediate)', 'sua'); ?></label>
                        </th>
                        <td>
                            <input value="<?php echo $SUA_options['deleteAccount']['days']; ?>" type="number"
                                   name="SUA_options[deleteAccount][days]" min="0" max="100"/>
                        </td>
                    </tr>
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Enabled', 'sua'); ?></label>
                        </th>
                        <td>
                            <label>
                                <input <?php checked(true, $SUA_options['deleteAccount']['enabled']); ?>
                                    type="checkbox" name="SUA_options[deleteAccount][enabled]" value="true"/>
                            </label>
                        </td>
                    </tr>
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Recaptcha', 'sua'); ?></label>
                        </th>
                        <td>
                            <label>
                                <input <?php checked(true, $SUA_options['deleteAccount']['recaptcha']); ?>
                                    type="checkbox" name="SUA_options[deleteAccount][recaptcha]" value="true"/>
                            </label>
                        </td>
                    </tr>
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Display', 'sua'); ?></label>
                        </th>
                        <td>
                            <select name="SUA_options[deleteAccount][columns]">
                                <option
                                    value="6" <?php selected($SUA_options['deleteAccount']['columns'], "6"); ?>><?php _e('Side', 'sua'); ?></option>
                                <option
                                    value="12" <?php selected($SUA_options['deleteAccount']['columns'], "12"); ?>><?php _e('Top', 'sua'); ?></option>
                            </select>
                        </td>
                    </tr>
                </table>
            </div>
            <div id="tabs-14">
                <h2><?php _e('Recovery', 'sua'); ?></h2>
                <hr>
                <h3><?php _e('Title', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['recovery']['title']; ?>" type="text"
                       name="SUA_options[recovery][title]"/>

                <h3><?php _e('Description', 'sua'); ?></h3>
                <?php
                wp_editor($SUA_options['recovery']['description'], 'recovery_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[recovery][description]"
                ));
                ?>
                <table class="form-table">
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Recaptcha', 'sua'); ?></label>
                        </th>
                        <td>
                            <label>
                                <input <?php checked(true, $SUA_options['recovery']['recaptcha']); ?> type="checkbox"
                                                                                                      name="SUA_options[recovery][recaptcha]"
                                                                                                      value="true"/>
                            </label>
                        </td>
                    </tr>
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Display', 'sua'); ?></label>
                        </th>
                        <td>
                            <select name="SUA_options[recovery][columns]">
                                <option
                                    value="6" <?php selected($SUA_options['recovery']['columns'], "6"); ?>><?php _e('Side', 'sua'); ?></option>
                                <option
                                    value="12" <?php selected($SUA_options['recovery']['columns'], "12"); ?>><?php _e('Top', 'sua'); ?></option>
                            </select>
                        </td>
                    </tr>
                </table>
                <p class="submit">
                    <input type="submit" name="submit_sua" class="button button-primary"
                           value="<?php _e('Save Changes', 'sua'); ?>">
                </p>

                <h2><?php _e('Recovery Email', 'sua'); ?></h2>
                <hr>
                <h3><?php _e('Title', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['recoveryEmail']['title']; ?>" type="text"
                       name="SUA_options[recoveryEmail][title]"/>

                <h3><?php _e('Description', 'sua'); ?></h3>
                <?php
                wp_editor($SUA_options['recoveryEmail']['description'], 'recoveryEmail_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[recoveryEmail][description]"
                ));
                ?>
                <table class="form-table">
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Display', 'sua'); ?></label>
                        </th>
                        <td>
                            <select name="SUA_options[recoveryEmail][columns]">
                                <option
                                    value="6" <?php selected($SUA_options['recoveryEmail']['columns'], "6"); ?>><?php _e('Side', 'sua'); ?></option>
                                <option
                                    value="12" <?php selected($SUA_options['recoveryEmail']['columns'], "12"); ?>><?php _e('Top', 'sua'); ?></option>
                            </select>
                        </td>
                    </tr>
                </table>
                <p class="submit">
                    <input type="submit" name="submit_sua" class="button button-primary"
                           value="<?php _e('Save Changes', 'sua'); ?>">
                </p>

                <h2><?php _e('Recovery Security Question', 'sua'); ?></h2>
                <hr>
                <h3><?php _e('Title', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['recoverySecurityQuestion']['title']; ?>" type="text"
                       name="SUA_options[recoverySecurityQuestion][title]"/>

                <h3><?php _e('Description', 'sua'); ?></h3>
                <?php
                wp_editor($SUA_options['recoverySecurityQuestion']['description'], 'recoverySecurityQuestion_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[recoverySecurityQuestion][description]"
                ));
                ?>
                <table class="form-table">
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Display', 'sua'); ?></label>
                        </th>
                        <td>
                            <select name="SUA_options[recoverySecurityQuestion][columns]">
                                <option
                                    value="6" <?php selected($SUA_options['recoverySecurityQuestion']['columns'], "6"); ?>><?php _e('Side', 'sua'); ?></option>
                                <option
                                    value="12" <?php selected($SUA_options['recoverySecurityQuestion']['columns'], "12"); ?>><?php _e('Top', 'sua'); ?></option>
                            </select>
                        </td>
                    </tr>
                </table>
                <p class="submit">
                    <input type="submit" name="submit_sua" class="button button-primary"
                           value="<?php _e('Save Changes', 'sua'); ?>">
                </p>

                <h2><?php _e('Recovery New Password', 'sua'); ?></h2>
                <hr>
                <h3><?php _e('Title', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['recoveryNewPassword']['title']; ?>" type="text"
                       name="SUA_options[recoveryNewPassword][title]"/>

                <h3><?php _e('Description', 'sua'); ?></h3>
                <?php
                wp_editor($SUA_options['recoveryNewPassword']['description'], 'recoveryNewPassword_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[recoveryNewPassword][description]"
                ));
                ?>
                <table class="form-table">
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Display', 'sua'); ?></label>
                        </th>
                        <td>
                            <select name="SUA_options[recoveryNewPassword][columns]">
                                <option
                                    value="6" <?php selected($SUA_options['recoveryNewPassword']['columns'], "6"); ?>><?php _e('Side', 'sua'); ?></option>
                                <option
                                    value="12" <?php selected($SUA_options['recoveryNewPassword']['columns'], "12"); ?>><?php _e('Top', 'sua'); ?></option>
                            </select>
                        </td>
                    </tr>
                </table>
            </div>
            <div id="tabs-15">
                <h2><?php _e('Account History', 'sua'); ?></h2>
                <hr>
                <h3><?php _e('Title', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['accountHistory']['title']; ?>" type="text"
                       name="SUA_options[accountHistory][title]"/>

                <h3><?php _e('Description', 'sua'); ?></h3>
                <?php
                wp_editor($SUA_options['accountHistory']['description'], 'accountHistory_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[accountHistory][description]"
                ));
                ?>
                <table class="form-table">
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Enabled', 'sua'); ?></label>
                        </th>
                        <td>
                            <label>
                                <input <?php checked(true, $SUA_options['accountHistory']['enabled']); ?>
                                    type="checkbox" name="SUA_options[accountHistory][enabled]" value="true"/>
                            </label>
                        </td>
                    </tr>
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Number of activities', 'sua'); ?></label>
                        </th>
                        <td>
                            <input value="<?php echo $SUA_options['accountHistory']['activitiesNumber']; ?>"
                                   type="number" name="SUA_options[accountHistory][activitiesNumber]" min="3"
                                   max="100"/>
                        </td>
                    </tr>
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Display', 'sua'); ?></label>
                        </th>
                        <td>
                            <select name="SUA_options[accountHistory][columns]">
                                <option
                                    value="6" <?php selected($SUA_options['accountHistory']['columns'], "6"); ?>><?php _e('Side', 'sua'); ?></option>
                                <option
                                    value="12" <?php selected($SUA_options['accountHistory']['columns'], "12"); ?>><?php _e('Top', 'sua'); ?></option>
                            </select>
                        </td>
                    </tr>
                </table>
            </div>
            <div id="tabs-16">
                <h2><?php _e('Email Notifications', 'sua'); ?></h2>
                <hr>
                <h3><?php _e('Title', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['emailNotifications']['title']; ?>" type="text"
                       name="SUA_options[emailNotifications][title]"/>

                <h3><?php _e('Description', 'sua'); ?></h3>
                <?php
                wp_editor($SUA_options['emailNotifications']['description'], 'emailNotifications_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[emailNotifications][description]"
                ));
                ?>
                <table class="form-table">
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Enabled', 'sua'); ?></label>
                        </th>
                        <td>
                            <label>
                                <input <?php checked(true, $SUA_options['emailNotifications']['enabled']); ?>
                                    type="checkbox" name="SUA_options[emailNotifications][enabled]" value="true"/>
                            </label>
                        </td>
                    </tr>
                    <tr valign="top">
                        <th scope="row">
                            <label><?php _e('Display', 'sua'); ?></label>
                        </th>
                        <td>
                            <select name="SUA_options[emailNotifications][columns]">
                                <option
                                    value="6" <?php selected($SUA_options['emailNotifications']['columns'], "6"); ?>><?php _e('Side', 'sua'); ?></option>
                                <option
                                    value="12" <?php selected($SUA_options['emailNotifications']['columns'], "12"); ?>><?php _e('Top', 'sua'); ?></option>
                            </select>
                        </td>
                    </tr>
                </table>
            </div>
            <div id="tabs-17">
                <h2><?php _e('Mails', 'sua'); ?></h2>
                <hr>
                <h3><?php _e('Account validation', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['mails']['1']['subject']; ?>"
                       placeholder="<?php _e('Subject', 'sua'); ?>" type="text"
                       name="SUA_options[mails][1][subject]"/>

                <p><?php _e('Avaiblable variable(s) : ', 'sua'); ?> {{token}}</p>
                <?php
                wp_editor($SUA_options['mails']['1']['message'], 'mails_1_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[mails][1][message]"
                ));
                ?>
                <p class="submit">
                    <input type="submit" name="submit_sua" class="button button-primary"
                           value="<?php _e('Save Changes', 'sua'); ?>">
                </p>

                <h3><?php _e('Multi-factor authentication', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['mails']['2']['subject']; ?>"
                       placeholder="<?php _e('Subject', 'sua'); ?>" type="text"
                       name="SUA_options[mails][2][subject]"/>

                <p><?php _e('Avaiblable variable(s) : ', 'sua'); ?> {{token}}</p>
                <?php
                wp_editor($SUA_options['mails']['2']['message'], 'mails_2_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[mails][2][message]"
                ));
                ?>
                <p class="submit">
                    <input type="submit" name="submit_sua" class="button button-primary"
                           value="<?php _e('Save Changes', 'sua'); ?>">
                </p>

                <h3><?php _e('IP verification', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['mails']['3']['subject']; ?>"
                       placeholder="<?php _e('Subject', 'sua'); ?>" type="text"
                       name="SUA_options[mails][3][subject]"/>

                <p><?php _e('Avaiblable variable(s) : ', 'sua'); ?> {{token}}</p>
                <?php
                wp_editor($SUA_options['mails']['3']['message'], 'mails_3_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[mails][3][message]"
                ));
                ?>
                <p class="submit">
                    <input type="submit" name="submit_sua" class="button button-primary"
                           value="<?php _e('Save Changes', 'sua'); ?>">
                </p>

                <h3><?php _e('Password reset', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['mails']['4']['subject']; ?>"
                       placeholder="<?php _e('Subject', 'sua'); ?>" type="text"
                       name="SUA_options[mails][4][subject]"/>

                <p><?php _e('Avaiblable variable(s) : ', 'sua'); ?> {{token}}</p>
                <?php
                wp_editor($SUA_options['mails']['4']['message'], 'mails_4_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[mails][4][message]"
                ));
                ?>
                <p class="submit">
                    <input type="submit" name="submit_sua" class="button button-primary"
                           value="<?php _e('Save Changes', 'sua'); ?>">
                </p>

                <h3><?php _e('New location passCode', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['mails']['7']['subject']; ?>"
                       placeholder="<?php _e('Subject', 'sua'); ?>" type="text"
                       name="SUA_options[mails][7][subject]"/>

                <p><?php _e('Avaiblable variable(s) : ', 'sua'); ?> {{passcode}}</p>
                <?php
                wp_editor($SUA_options['mails']['7']['message'], 'mails_7_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[mails][7][message]"
                ));
                ?>
                <p class="submit">
                    <input type="submit" name="submit_sua" class="button button-primary"
                           value="<?php _e('Save Changes', 'sua'); ?>">
                </p>

                <h3><?php _e('Verify primary email change', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['mails']['8']['subject']; ?>"
                       placeholder="<?php _e('Subject', 'sua'); ?>" type="text"
                       name="SUA_options[mails][8][subject]"/>

                <p><?php _e('Avaiblable variable(s) : ', 'sua'); ?> {{token}}</p>
                <?php
                wp_editor($SUA_options['mails']['8']['message'], 'mails_8_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[mails][8][message]"
                ));
                ?>
                <p class="submit">
                    <input type="submit" name="submit_sua" class="button button-primary"
                           value="<?php _e('Save Changes', 'sua'); ?>">
                </p>

                <h3><?php _e('Verify recovery email change', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['mails']['9']['subject']; ?>"
                       placeholder="<?php _e('Subject', 'sua'); ?>" type="text"
                       name="SUA_options[mails][9][subject]"/>

                <p><?php _e('Avaiblable variable(s) : ', 'sua'); ?> {{token}}</p>
                <?php
                wp_editor($SUA_options['mails']['9']['message'], 'mails_9_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[mails][9][message]"
                ));
                ?>
                <p class="submit">
                    <input type="submit" name="submit_sua" class="button button-primary"
                           value="<?php _e('Save Changes', 'sua'); ?>">
                </p>

                <h3><?php _e('Your account has been validated successfully', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['mails']['10']['subject']; ?>"
                       placeholder="<?php _e('Subject', 'sua'); ?>" type="text"
                       name="SUA_options[mails][10][subject]"/>

                <p><?php _e('Avaiblable variable(s) : ', 'sua'); ?> {{pincode}}</p>
                <?php
                wp_editor($SUA_options['mails']['10']['message'], 'mails_10_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[mails][10][message]"
                ));
                ?>
                <p class="submit">
                    <input type="submit" name="submit_sua" class="button button-primary"
                           value="<?php _e('Save Changes', 'sua'); ?>">
                </p>

                <h3><?php _e('Account deletion', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['mails']['11']['subject']; ?>"
                       placeholder="<?php _e('Subject', 'sua'); ?>" type="text"
                       name="SUA_options[mails][11][subject]"/>

                <p><?php _e('Avaiblable variable(s) : ', 'sua'); ?> {{token}}</p>
                <?php
                wp_editor($SUA_options['mails']['11']['message'], 'mails_11_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[mails][11][message]"
                ));
                ?>
                <p class="submit">
                    <input type="submit" name="submit_sua" class="button button-primary"
                           value="<?php _e('Save Changes', 'sua'); ?>">
                </p>

                <h3><?php _e('Your account has been deleted', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['mails']['12']['subject']; ?>"
                       placeholder="<?php _e('Subject', 'sua'); ?>" type="text"
                       name="SUA_options[mails][12][subject]"/>
                <?php
                wp_editor($SUA_options['mails']['12']['message'], 'mails_12_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[mails][12][message]"
                ));
                ?>

            </div>
            <div id="tabs-18">
                <h2><?php _e('Notifications', 'sua'); ?></h2>
                <hr>
                <h3><?php _e('Your personal information has been updated', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['mails']['13']['subject']; ?>"
                       placeholder="<?php _e('Subject', 'sua'); ?>" type="text"
                       name="SUA_options[mails][13][subject]"/>

                <p><?php _e('Avaiblable variable(s) : ', 'sua'); ?> {{ip}}, {{ip_details}}, {{user_agent}}</p>
                <?php
                wp_editor($SUA_options['mails']['13']['message'], 'mails_13_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[mails][13][message]"
                ));
                ?>
                <p class="submit">
                    <input type="submit" name="submit_sua" class="button button-primary"
                           value="<?php _e('Save Changes', 'sua'); ?>">
                </p>

                <h3><?php _e('Your password has been changed', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['mails']['14']['subject']; ?>"
                       placeholder="<?php _e('Subject', 'sua'); ?>" type="text"
                       name="SUA_options[mails][14][subject]"/>

                <p><?php _e('Avaiblable variable(s) : ', 'sua'); ?> {{ip}}, {{ip_details}}, {{user_agent}}</p>
                <?php
                wp_editor($SUA_options['mails']['14']['message'], 'mails_14_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[mails][14][message]"
                ));
                ?>
                <p class="submit">
                    <input type="submit" name="submit_sua" class="button button-primary"
                           value="<?php _e('Save Changes', 'sua'); ?>">
                </p>

                <h3><?php _e('Your security questions has been changed', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['mails']['15']['subject']; ?>"
                       placeholder="<?php _e('Subject', 'sua'); ?>" type="text"
                       name="SUA_options[mails][15][subject]"/>

                <p><?php _e('Avaiblable variable(s) : ', 'sua'); ?> {{ip}}, {{ip_details}}, {{user_agent}}</p>
                <?php
                wp_editor($SUA_options['mails']['15']['message'], 'mails_15_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[mails][15][message]"
                ));
                ?>
                <p class="submit">
                    <input type="submit" name="submit_sua" class="button button-primary"
                           value="<?php _e('Save Changes', 'sua'); ?>">
                </p>

                <h3><?php _e('Multifactor authentication settings has been changed', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['mails']['16']['subject']; ?>"
                       placeholder="<?php _e('Subject', 'sua'); ?>" type="text"
                       name="SUA_options[mails][16][subject]"/>

                <p><?php _e('Avaiblable variable(s) : ', 'sua'); ?> {{ip}}, {{ip_details}}, {{user_agent}}</p>
                <?php
                wp_editor($SUA_options['mails']['16']['message'], 'mails_16_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[mails][16][message]"
                ));
                ?>
                <p class="submit">
                    <input type="submit" name="submit_sua" class="button button-primary"
                           value="<?php _e('Save Changes', 'sua'); ?>">
                </p>

                <h3><?php _e('Your recovery email address has been changed', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['mails']['17']['subject']; ?>"
                       placeholder="<?php _e('Subject', 'sua'); ?>" type="text"
                       name="SUA_options[mails][17][subject]"/>

                <p><?php _e('Avaiblable variable(s) : ', 'sua'); ?> {{ip}}, {{ip_details}}, {{user_agent}}</p>
                <?php
                wp_editor($SUA_options['mails']['17']['message'], 'mails_17_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[mails][17][message]"
                ));
                ?>
                <p class="submit">
                    <input type="submit" name="submit_sua" class="button button-primary"
                           value="<?php _e('Save Changes', 'sua'); ?>">
                </p>

                <h3><?php _e('Your pin code has been changed', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['mails']['18']['subject']; ?>"
                       placeholder="<?php _e('Subject', 'sua'); ?>" type="text"
                       name="SUA_options[mails][18][subject]"/>

                <p><?php _e('Avaiblable variable(s) : ', 'sua'); ?> {{ip}}, {{ip_details}}, {{user_agent}}</p>
                <?php
                wp_editor($SUA_options['mails']['18']['message'], 'mails_18_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[mails][18][message]"
                ));
                ?>
                <p class="submit">
                    <input type="submit" name="submit_sua" class="button button-primary"
                           value="<?php _e('Save Changes', 'sua'); ?>">
                </p>

                <h3><?php _e('IP verification settings has been changed', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['mails']['19']['subject']; ?>"
                       placeholder="<?php _e('Subject', 'sua'); ?>" type="text"
                       name="SUA_options[mails][19][subject]"/>

                <p><?php _e('Avaiblable variable(s) : ', 'sua'); ?> {{ip}}, {{ip_details}}, {{user_agent}}</p>
                <?php
                wp_editor($SUA_options['mails']['19']['message'], 'mails_19_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[mails][19][message]"
                ));
                ?>
                <p class="submit">
                    <input type="submit" name="submit_sua" class="button button-primary"
                           value="<?php _e('Save Changes', 'sua'); ?>">
                </p>

                <h3><?php _e('A new password has been set for this account', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['mails']['20']['subject']; ?>"
                       placeholder="<?php _e('Subject', 'sua'); ?>" type="text"
                       name="SUA_options[mails][20][subject]"/>

                <p><?php _e('Avaiblable variable(s) : ', 'sua'); ?> {{ip}}, {{ip_details}}, {{user_agent}}</p>
                <?php
                wp_editor($SUA_options['mails']['20']['message'], 'mails_20_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[mails][20][message]"
                ));
                ?>
                <p class="submit">
                    <input type="submit" name="submit_sua" class="button button-primary"
                           value="<?php _e('Save Changes', 'sua'); ?>">
                </p>

                <h3><?php _e('Multifactor authentication successfully passed', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['mails']['21']['subject']; ?>"
                       placeholder="<?php _e('Subject', 'sua'); ?>" type="text"
                       name="SUA_options[mails][21][subject]"/>

                <p><?php _e('Avaiblable variable(s) : ', 'sua'); ?> {{ip}}, {{ip_details}}, {{user_agent}}</p>
                <?php
                wp_editor($SUA_options['mails']['21']['message'], 'mails_21_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[mails][21][message]"
                ));
                ?>
                <p class="submit">
                    <input type="submit" name="submit_sua" class="button button-primary"
                           value="<?php _e('Save Changes', 'sua'); ?>">
                </p>

                <h3><?php _e('IP verification successfully passed', 'sua'); ?></h3>
                <input value="<?php echo $SUA_options['mails']['22']['subject']; ?>"
                       placeholder="<?php _e('Subject', 'sua'); ?>" type="text"
                       name="SUA_options[mails][22][subject]"/>

                <p><?php _e('Avaiblable variable(s) : ', 'sua'); ?> {{ip}}, {{ip_details}}, {{user_agent}}</p>
                <?php
                wp_editor($SUA_options['mails']['22']['message'], 'mails_22_description', array(
                    'textarea_rows' => 15,
                    'textarea_name' => "SUA_options[mails][22][message]"
                ));
                ?>
            </div>
        </div>
        <p class="submit">
            <input type="submit" name="submit_sua" class="button button-primary"
                   value="<?php _e('Save Changes', 'sua'); ?>">
        </p>
    </form>
</div>
