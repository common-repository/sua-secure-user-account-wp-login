<?php

/**
 * Fired during plugin activation
 *
 * @link       https://www.ixlaf.com
 * @since      1.0.0
 *
 * @package    SUA
 * @subpackage SUA/includes
 */

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since      1.0.0
 * @package    SUA
 * @subpackage SUA/includes
 * @author     Ixlaf <sua@ixlaf.com>
 */
class SUA_Activator {

	/**
	 * Short Description. (use period)
	 *
	 * Long Description.
	 *
	 * @since    1.0.0
	 */
	public static function activate() {

		
		global $wpdb;
		$charset_collate = '';
		if ( ! empty( $wpdb->charset ) ) {
		  $charset_collate = "DEFAULT CHARACTER SET {$wpdb->charset}";
		}
		if ( ! empty( $wpdb->collate ) ) {
		  $charset_collate .= " COLLATE {$wpdb->collate}";
		}

 		$table_name = $wpdb->prefix . "sua_settings";
		if($wpdb->get_var("SHOW TABLES LIKE '$table_name'") != $table_name) {
			$sql = "CREATE TABLE $table_name (
					`id` int(11) NOT NULL AUTO_INCREMENT,
					`user` int(11) NOT NULL,
					`action` tinyint(4) NOT NULL,
					`token` varchar(255) NOT NULL,
					`value` varchar(255) NOT NULL,
					`keys` varchar(15) NOT NULL,
					`attemps` tinyint(3) unsigned NOT NULL,
					`ttl` smallint(6) NOT NULL DEFAULT '1',
					`created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
					PRIMARY KEY (`id`),
					INDEX (`user`)
				) $charset_collate;";
			require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
			dbDelta( $sql );
		}

		if ( !wp_next_scheduled( 'IXLAFCOM_SUA_hourly_event' ) ) {
			wp_schedule_event( time(), 'hourly', 'IXLAFCOM_SUA_hourly_event' );
		}

		if (!get_option("SUA_options")) {
			$SUA_options=array( 'pinCode' => true, 'tokenTTL' => '1', 'attemps' => array('password' => '3','pinCode' => '3','token' => '3', ), 'recaptcha' => array('secret' => '', ), 'blacklists' => array('names' => array(0 => 'superadmin',1 => 'yourusername',2 => 'yourbusiness',3 => 'yourdomain',),'ips' => array(0 => '',),'domains' => array(0 => 'getairmail.com',1 => 'pwrby.com',2 => 'anappthat.com',3 => 'tafmail.com',4 => 'boximail.com',5 => '6paq.com',6 => 'vomoto.com',7 => 'eelmail.com',), ), 'main' => array('title' => 'General Settings','description' => '<p>Suspendisse leo urna, elementum suscipit ornare non, pellentesque at metus. Morbi id magna tincidunt, dignissim risus a, blandit tellus. Nam blandit scelerisque ultrices. Pellentesque efficitur cursus erat id hendrerit.</p>','columns' => '12', ), 'editUserInfo' => array('title' => 'Personal Inforamtions','description' => '<p>Suspendisse leo urna, elementum suscipit ornare non, pellentesque at metus. Morbi id magna tincidunt, dignissim risus a, blandit tellus. Nam blandit scelerisque ultrices. Pellentesque efficitur cursus erat id hendrerit.</p>','changeUsername' => true,'columns' => '12', ), 'editPassword' => array('title' => 'Change Password','description' => '<p>Suspendisse leo urna, elementum suscipit ornare non, pellentesque at metus. Morbi id magna tincidunt, dignissim risus a, blandit tellus. Nam blandit scelerisque ultrices. Pellentesque efficitur cursus erat id hendrerit.</p>','columns' => '12', ), 'editSecurityQuestions' => array('title' => 'Change Security Questions','description' => '<p>Suspendisse leo urna, elementum suscipit ornare non, pellentesque at metus. Morbi id magna tincidunt, dignissim risus a, blandit tellus. Nam blandit scelerisque ultrices. Pellentesque efficitur cursus erat id hendrerit.</p>','enabled' => true,'numberOfQuestions' => '3','cannedQuestions' => array(0 => array( 'code' => '0', 'title' => 'What is the name of your favorite childhood friend?',),1 => array( 'code' => '1', 'title' => 'What street did you live on in third grade?',),2 => array( 'code' => '2', 'title' => 'What is your oldest sibling’s birthday month and year?',),3 => array( 'code' => '3', 'title' => 'What is the middle name of your oldest child?',),4 => array( 'code' => '4', 'title' => 'What school did you attend for sixth grade?',),5 => array( 'code' => '5', 'title' => 'What was your childhood phone number including area id?',),6 => array( 'code' => '6', 'title' => 'What is your oldest cousin’s first and last name?',),7 => array( 'code' => '7', 'title' => 'What was the name of your first stuffed animal?',),8 => array( 'code' => '8', 'title' => 'In what city or town did your mother and father meet?',),9 => array( 'code' => '9', 'title' => 'What was the last name of your third grade teacher?',),10 => array( 'code' => '10', 'title' => 'What is your oldest brother’s birthday month and year?',),11 => array( 'code' => '11', 'title' => 'What is your maternal grandmother’s maiden name?',),12 => array( 'code' => '12', 'title' => 'In what city or town was your first job?',),13 => array( 'code' => '13', 'title' => 'What is the name of the place your wedding reception was held?',),14 => array( 'code' => '14', 'title' => 'What is the name of a college you applied to but didn’t attend?',),15 => array( 'code' => '15', 'title' => 'What was your childhood nickname?',),),'columns' => '12', ), 'signIn' => array('title' => 'Sign In','description' => '<p>Suspendisse leo urna, elementum suscipit ornare non, pellentesque at metus. Morbi id magna tincidunt, dignissim risus a, blandit tellus. Nam blandit scelerisque ultrices. Pellentesque efficitur cursus erat id hendrerit.</p>','multifactorAuthentication' => false,'ipVerification' => false,'recaptcha' => true,'columns' => '12','enabled' => false, ), 'signUp' => array('title' => 'Sign Up','description' => '<p>Suspendisse leo urna, elementum suscipit ornare non, pellentesque at metus. Morbi id magna tincidunt, dignissim risus a, blandit tellus. Nam blandit scelerisque ultrices. Pellentesque efficitur cursus erat id hendrerit.</p>','recaptcha' => true,'columns' => '12', ), 'editGridMultifactorAuthentication' => array('title' => 'Multifactor Authentication','description' => '<p>Suspendisse leo urna, elementum suscipit ornare non, pellentesque at metus. Morbi id magna tincidunt, dignissim risus a, blandit tellus. Nam blandit scelerisque ultrices. Pellentesque efficitur cursus erat id hendrerit.</p>','columns' => '12', ), 'gridMultifactorAuthentication' => array('title' => 'Multifactor Authentication Validation','description' => '<p>Suspendisse leo urna, elementum suscipit ornare non, pellentesque at metus. Morbi id magna tincidunt, dignissim risus a, blandit tellus. Nam blandit scelerisque ultrices. Pellentesque efficitur cursus erat id hendrerit.</p>','columns' => '12', ), 'editIpVerification' => array('title' => 'IP Verification','description' => '<p>Suspendisse leo urna, elementum suscipit ornare non, pellentesque at metus. Morbi id magna tincidunt, dignissim risus a, blandit tellus. Nam blandit scelerisque ultrices. Pellentesque efficitur cursus erat id hendrerit.</p>','columns' => '12', ), 'ipVerification' => array('title' => 'IP Address Verification Process','description' => '<p>Suspendisse leo urna, elementum suscipit ornare non, pellentesque at metus. Morbi id magna tincidunt, dignissim risus a, blandit tellus. Nam blandit scelerisque ultrices. Pellentesque efficitur cursus erat id hendrerit.</p>','columns' => '12', ), 'editRecoveryEmail' => array('title' => 'Recovery Email','description' => '<p>Suspendisse leo urna, elementum suscipit ornare non, pellentesque at metus. Morbi id magna tincidunt, dignissim risus a, blandit tellus. Nam blandit scelerisque ultrices. Pellentesque efficitur cursus erat id hendrerit.</p>','enabled' => true,'columns' => '12','recaptcha' => true, ), 'editPinCode' => array('title' => 'Pin Code','description' => '<p>Suspendisse leo urna, elementum suscipit ornare non, pellentesque at metus. Morbi id magna tincidunt, dignissim risus a, blandit tellus. Nam blandit scelerisque ultrices. Pellentesque efficitur cursus erat id hendrerit.</p>','columns' => '12', ), 'verifyToken' => array('title' => 'Token Verification','description' => '<p>Suspendisse leo urna, elementum suscipit ornare non, pellentesque at metus. Morbi id magna tincidunt, dignissim risus a, blandit tellus. Nam blandit scelerisque ultrices. Pellentesque efficitur cursus erat id hendrerit.</p>', ), 'deleteAccount' => array('title' => 'Delete Account','description' => '<p>Suspendisse leo urna, elementum suscipit ornare non, pellentesque at metus. Morbi id magna tincidunt, dignissim risus a, blandit tellus. Nam blandit scelerisque ultrices. Pellentesque efficitur cursus erat id hendrerit.</p>','days' => '1','enabled' => true,'recaptcha' => true,'columns' => '12', ), 'recovery' => array('title' => 'Recovery','description' => '<p>Suspendisse leo urna, elementum suscipit ornare non, pellentesque at metus. Morbi id magna tincidunt, dignissim risus a, blandit tellus. Nam blandit scelerisque ultrices. Pellentesque efficitur cursus erat id hendrerit.</p>','recaptcha' => true,'columns' => '12', ), 'recoveryEmail' => array('title' => 'Recovery Email','description' => '<p>Suspendisse leo urna, elementum suscipit ornare non, pellentesque at metus. Morbi id magna tincidunt, dignissim risus a, blandit tellus. Nam blandit scelerisque ultrices. Pellentesque efficitur cursus erat id hendrerit.</p>','columns' => '12', ), 'recoverySecurityQuestion' => array('title' => 'Recovery Security Question','description' => '<p>Suspendisse leo urna, elementum suscipit ornare non, pellentesque at metus. Morbi id magna tincidunt, dignissim risus a, blandit tellus. Nam blandit scelerisque ultrices. Pellentesque efficitur cursus erat id hendrerit.</p>','columns' => '12', ), 'recoveryNewPassword' => array('title' => 'Recovery New Password','description' => '<p>Suspendisse leo urna, elementum suscipit ornare non, pellentesque at metus. Morbi id magna tincidunt, dignissim risus a, blandit tellus. Nam blandit scelerisque ultrices. Pellentesque efficitur cursus erat id hendrerit.</p>','columns' => '12', ), 'accountHistory' => array('title' => 'Account history','description' => '<p>Suspendisse leo urna, elementum suscipit ornare non, pellentesque at metus. Morbi id magna tincidunt, dignissim risus a, blandit tellus. Nam blandit scelerisque ultrices. Pellentesque efficitur cursus erat id hendrerit.</p>','enabled' => true,'activitiesNumber' => '10','columns' => '12', ), 'emailNotifications' => array('title' => 'Email Notifications','description' => '<p>Suspendisse leo urna, elementum suscipit ornare non, pellentesque at metus. Morbi id magna tincidunt, dignissim risus a, blandit tellus. Nam blandit scelerisque ultrices. Pellentesque efficitur cursus erat id hendrerit.</p>','enabled' => true,'columns' => '12', ), 'mails' => array(1 => array('subject' => 'Account validation','message' => '<p>Hello,</p><p>Please verify your account by clicking on the link below:</p><p>{{token}}</p><p>Regards</p>',),2 => array('subject' => 'Disable Multi-factor Authentication','message' => '<p>Hello,</p><p>Disable the multifactor authentication by clicking on the link below:</p><p>{{token}}</p><p>Regards</p>',),3 => array('subject' => 'Disable IP Verification','message' => '<p>Hello,</p><p>Disable the IP verification by clicking on the link below:</p><p>{{token}}</p><p>Regards</p>',),4 => array('subject' => 'Password reset','message' => '<p>Hello,</p><p>Reset your password by clicking on the link below:</p><p>{{token}}</p><p>Regards</p>',),7 => array('subject' => 'New location passCode','message' => '<p>Hello,</p><p>Here is the pass code for the new location:</p><p>{{passcode}}</p><p>Regards</p>',),8 => array('subject' => 'Verify primary email change','message' => '<p>Hello,</p><p>Please change your primary address by clicking on the link below:</p><p>{{token}}</p><p>Regards</p>',),9 => array('subject' => 'Verify recovery email change','message' => '<p>Hello,</p><p>Please change your recovery address by clicking on the link below:</p><p>{{token}}</p><p>Regards</p>',),10 => array('subject' => 'Your account has been validated successfully','message' => '<p>Hello,</p><p>Your account has been validated successfully, and here is your pin code :</p><p>{{pincode}}</p><p>Regards</p>',),11 => array('subject' => 'Account deletion','message' => '<p>Hello,</p><p>Disable the deletion of this account by clicking on the link below:</p><p>{{token}}</p><p>Regards</p>',),12 => array('subject' => 'Your account has been deleted','message' => '<p>Hello,</p><p>This account has been deleted.</p><p>Regards</p>',),13 => array('subject' => 'Your personal information has been updated','message' => '<p>Hello,</p><p>Your personal information has been updated</p><p>Regards</p>',),14 => array('subject' => 'Your password has been changed','message' => '<p>Hello,</p><p>Your password has been changed</p><p>Regards</p>',),15 => array('subject' => 'Your security questions has been changed','message' => '<p>Hello,</p><p>Your security questions has been changed</p><p>Regards</p>',),16 => array('subject' => 'Multifactor authentication settings has been changed','message' => '<p>Hello,</p><p>Multifactor authentication settings has been changed</p><p>Regards</p>',),17 => array('subject' => 'Your recovery email address has been changed','message' => '<p>Hello,</p><p>Your recovery email address has been changed</p><p>Regards</p>',),18 => array('subject' => 'Your pin code has been changed','message' => '<p>Hello,</p><p>Your pin code has been changed</p><p>Regards</p>',),19 => array('subject' => 'IP verification settings has been changed','message' => '<p>Hello,</p><p>IP verification settings has been changed</p><p>Regards</p>',),20 => array('subject' => 'A new password has been set for this account','message' => '<p>Hello,</p><p>A new password has been set for this account</p><p>Regards</p>',),21 => array('subject' => 'Multifactor authentication successfully passed','message' => '<p>Hello,</p><p>Multifactor authentication successfully passed</p><p>Regards</p>',),22 => array('subject' => 'IP verification successfully passed','message' => '<p>Hello,</p><p>IP verification successfully passed</p><p>Regards</p>',), ),);

			update_option('SUA_options', $SUA_options);

		}
	}

}
