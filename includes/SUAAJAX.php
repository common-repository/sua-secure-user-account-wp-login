<?php

/**
 * @link       https://www.ixlaf.com
 * @since      1.0.0
 *
 * @package    SUA
 * @subpackage SUA/public
 */

/**
 * @package    SUA
 * @subpackage SUA/public
 * @author     Ixlaf <sua@ixlaf.com>
 */

class SUAAJAX {

	private $_requestVars;
	private $_optionsVars;
	private $_userIp;

	function __construct() {
		$this->initVars();
	}

	function initVars() {
		//Init request variables
		$this->_requestVars = array();

		$this->_requestVars['request'] = isset( $_GET['request'] ) ? $_GET['request'] : null;

		$payload = file_get_contents( 'php://input' );
		$data    = json_decode( $payload );

		$this->_requestVars['username']    = isset( $data->username ) ? $this->sanitizeUser( $data->username ) : null;
		$this->_requestVars['password']    = isset( $data->password ) ? $this->sanitizePassword( $data->password ) : null;
		$this->_requestVars['newPassword'] = isset( $data->newPassword ) ? $this->sanitizePassword( $data->newPassword ) : null;
		$this->_requestVars['email']       = isset( $data->email ) ? sanitize_email( $data->email ) : null;

		$this->_requestVars['route'] = isset( $data->route ) ? $data->route : null;

		$this->_requestVars['lastName']  = isset( $data->lastName ) ? $this->sanitizeFirstName( $data->lastName ) : null;
		$this->_requestVars['firstName'] = isset( $data->firstName ) ? $this->sanitizeLastName( $data->firstName ) : null;

		$this->_requestVars['token']       = isset( $data->token ) ? $this->sanitizeToken( $data->token ) : null;
		$this->_requestVars['actionToken'] = isset( $data->actionToken ) ? intval( $data->actionToken ) : null;

		$this->_requestVars['fingerprint'] = isset( $data->fingerprint ) ? intval( $data->fingerprint ) : null;

		$this->_requestVars['actionRecovery'] = isset( $data->actionRecovery ) ? intval( $data->actionRecovery ) : 4;

		$this->_requestVars['question'] = isset( $data->question ) ? $this->sanitizeQA( $data->question ) : null;
		$this->_requestVars['answer']   = isset( $data->answer ) ? $this->sanitizeQA( $data->answer ) : null;

		$this->_requestVars['enabled'] = isset( $data->enabled ) ? (bool) $data->enabled : false;

		$this->_requestVars['remember'] = isset( $data->remember ) ? (bool) $data->remember : false;

		$this->_requestVars['canned'] = isset( $data->canned ) ? (bool) $data->canned : false;

		$this->_requestVars['questions'] = isset( $data->questions ) ? $this->sanitizeQuestions( $data->questions ) : null;
		$this->_requestVars['answers']   = isset( $data->answers ) ? $this->sanitizeAnswers( $data->answers ) : null;

		$this->_requestVars['usePrimary'] = isset( $data->usePrimary ) ? (bool) $data->usePrimary : false;

		$this->_requestVars['gridValues'] = isset( $data->gridValues ) ? $this->sanitizeGridValues( $data->gridValues ) : null;

		$this->_requestVars['passCode'] = isset( $data->passCode ) ? $this->sanitizePassCode( $data->passCode ) : null;

		$this->_requestVars['pinCode'] = isset( $data->pinCode ) ? $this->sanitizePinCode( $data->pinCode ) : null;

		$this->_requestVars['recaptcha'] = isset( $data->recaptcha ) ? $data->recaptcha : null;

		$this->_requestVars['primaryNotifications']  = isset( $data->primaryNotifications ) ? $this->sanitizeNotifications( $data->primaryNotifications ) : null;
		$this->_requestVars['recoveryNotifications'] = isset( $data->recoveryNotifications ) ? $this->sanitizeNotifications( $data->recoveryNotifications ) : null;

		$this->_requestVars['nonce'] = isset( $data->nonce ) ? sanitize_key( $data->nonce ) : null;

		//Init main option variable
		$this->_optionsVars = get_option( 'SUA_options' );

	}

	function resolve_sua_callback() {
		try {

			$route   = $this->getRequestVar( 'route' );
			$resolve = array();
			switch ( $route ) {
				case '/':
					$current_user         = $this->currentUser();
					$resolve['username']  = $current_user->user_login;
					$resolve['firstName'] = $current_user->first_name;
					$resolve['lastName']  = $current_user->last_name;
					$resolve['email']     = $current_user->user_email;

					$resolve['recoveryEmail']  = get_user_meta( $current_user->ID, '_SUAMETA_recovery_email', true );
					$resolve['pinCodeEnabled'] = $this->getOptionsVar( 'pinCode' );

					$signIn                                      = $this->getOptionsVar( 'signIn' );
					$resolve['multifactorAuthenticationEnabled'] = $signIn['multifactorAuthentication'];
					$resolve['ipVerificationEnabled']            = $signIn['ipVerification'];

					$accountHistory                   = $this->getOptionsVar( 'accountHistory' );
					$resolve['accountHistoryEnabled'] = $accountHistory['enabled'];

					$deleteAccount                   = $this->getOptionsVar( 'deleteAccount' );
					$resolve['deleteAccountEnabled'] = $deleteAccount['enabled'];

					$editSecurityQuestions                   = $this->getOptionsVar( 'editSecurityQuestions' );
					$resolve['editSecurityQuestionsEnabled'] = $editSecurityQuestions['enabled'];

					$editRecoveryEmail                   = $this->getOptionsVar( 'editRecoveryEmail' );
					$resolve['editRecoveryEmailEnabled'] = $editRecoveryEmail['enabled'];

					if ( get_user_meta( $current_user->ID, '_SUAMETA_multifactor_authentication', true ) ) {
						$resolve['multifactorAuthentication'] = __( 'Enabled', 'sua' );
					} else {
						$resolve['multifactorAuthentication'] = __( 'Disabled', 'sua' );
					}

					if ( get_user_meta( $current_user->ID, '_SUAMETA_ip_verification', true ) ) {
						$resolve['ipVerification'] = __( 'Enabled', 'sua' );
					} else {
						$resolve['ipVerification'] = __( 'Disabled', 'sua' );
					}

					$emailNotifications                   = $this->getOptionsVar( 'emailNotifications' );
					$resolve['emailNotificationsEnabled'] = $emailNotifications ['enabled'];

					$main                        = $this->getOptionsVar( 'main' );
					$routeDetails['title']       = $main['title'];
					$routeDetails['description'] = $main['description'];
					$routeDetails['columns']     = $main['columns'];

					$nonce = wp_create_nonce( 'request_0' );
					wp_send_json_success( array(
						'nonce'        => $nonce,
						'routeDetails' => $routeDetails,
						'resolve'      => array( 'home' => $resolve )
					) );
					break;
				case '/editUserInfo':

					$current_user = $this->currentUser();
					$editUserInfo = $this->getOptionsVar( 'editUserInfo' );

					$resolve['changeUsername'] = $editUserInfo['changeUsername'];
					$resolve['username']       = $current_user->user_login;
					$resolve['firstName']      = $current_user->first_name;
					$resolve['lastName']       = $current_user->last_name;
					$resolve['email']          = $current_user->user_email;

					global $wpdb;
					$sql   = 'SELECT * FROM ' . $wpdb->prefix . 'sua_settings WHERE user = %d and action=8 ;';
					$query = $wpdb->prepare( $sql, array( $current_user->ID ) );

					$stored_token = $wpdb->get_row( $query );
					if ( $stored_token === null ) {
						delete_user_meta( $current_user->ID, '_SUAMETA_pending_email' );
					} else {
						$resolve['pendingEmail'] = get_user_meta( $current_user->ID, '_SUAMETA_pending_email', true );
					}

					$resolve['pinCodeEnabled'] = $this->getOptionsVar( 'pinCode' );

					$routeDetails['title']       = $editUserInfo['title'];
					$routeDetails['description'] = $editUserInfo['description'];
					$routeDetails['columns']     = $editUserInfo['columns'];

					$nonce = wp_create_nonce( 'request_10' );
					wp_send_json_success( array(
						'nonce'        => $nonce,
						'routeDetails' => $routeDetails,
						'resolve'      => array( 'editUserInfo' => $resolve )
					) );
					break;
				case '/editPassword':
					if ( ! is_user_logged_in() ) {
						throw new Exception();
					}
					$editPassword = $this->getOptionsVar( 'editPassword' );

					$routeDetails['title']       = $editPassword['title'];
					$routeDetails['description'] = $editPassword['description'];
					$routeDetails['columns']     = $editPassword['columns'];

					$nonce = wp_create_nonce( 'request_14' );
					wp_send_json_success( array( 'nonce' => $nonce, 'routeDetails' => $routeDetails ) );
					break;
				case '/accountHistory':
					$accountHistory = $this->getOptionsVar( 'accountHistory' );
					if ( ! $accountHistory['enabled'] ) {
						throw new Exception();
					}

					$current_user = $this->currentUser();

					$locations             = get_user_meta( $current_user->ID, '_SUAMETA_locations', true );
					$resolve['activities'] = array();

					if ( $locations ) {

						$locations = array_reverse( $locations );

						$count = 0;

						foreach ( $locations as $location ) {
							if ( $count < $accountHistory['activitiesNumber'] ) {
								$resolve['activities'][] = $location;
								$count ++;
							} else {
								break;
							}
						}
					}

					$routeDetails['title']       = $accountHistory['title'];
					$routeDetails['description'] = $accountHistory['description'];
					$routeDetails['columns']     = $accountHistory['columns'];

					$nonce = wp_create_nonce( 'request_20' );
					wp_send_json_success( array(
						'nonce'        => $nonce,
						'routeDetails' => $routeDetails,
						'resolve'      => array( 'accountHistory' => $resolve )
					) );

					break;
				case '/editSecurityQuestions':

					$current_user          = $this->currentUser();
					$editSecurityQuestions = $this->getOptionsVar( 'editSecurityQuestions' );

					$resolve['numberOfQuestions'] = $editSecurityQuestions['numberOfQuestions'];
					$resolve['cannedQuestions']   = $editSecurityQuestions['cannedQuestions'];
					$resolve['pinCodeEnabled']    = $this->getOptionsVar( 'pinCode' );

					$securityQuestions = get_user_meta( $current_user->ID, '_SUAMETA_security_questions' );
					if ( $securityQuestions ) {
						$canned               = get_user_meta( $current_user->ID, '_SUAMETA_security_questions_canned', true );
						$resolve['questions'] = array();
						if ( $canned ) {
							$resolve['canned'] = true;
							foreach ( $securityQuestions as $securityQuestion ) {
								$resolve['questions'][] = $securityQuestion['question'];
							}
						} else {
							$resolve['canned']               = false;
							$resolve['personal']             = array();
							$resolve['personal']['question'] = $securityQuestions[0]['question'];
						}
					}

					$routeDetails['title']       = $editSecurityQuestions['title'];
					$routeDetails['description'] = $editSecurityQuestions['description'];
					$routeDetails['columns']     = $editSecurityQuestions['columns'];

					$nonce = wp_create_nonce( 'request_15' );
					wp_send_json_success( array(
						'nonce'        => $nonce,
						'routeDetails' => $routeDetails,
						'resolve'      => array( 'editSecurityQuestions' => $resolve )
					) );

					break;
				case '/editRecoveryEmail':
					$editRecoveryEmail = $this->getOptionsVar( 'editRecoveryEmail' );
					if ( ! $editRecoveryEmail['enabled'] ) {
						throw new Exception();
					}

					$current_user              = $this->currentUser();
					$resolve['email']          = get_user_meta( $current_user->ID, '_SUAMETA_recovery_email', true );
					$resolve['pinCodeEnabled'] = $this->getOptionsVar( 'pinCode' );

					global $wpdb;
					$sql   = 'SELECT * FROM ' . $wpdb->prefix . 'sua_settings WHERE user = %d and action=9 ;';
					$query = $wpdb->prepare( $sql, array( $current_user->ID ) );

					$stored_token = $wpdb->get_row( $query );
					if ( $stored_token === null ) {
						delete_user_meta( $current_user->ID, '_SUAMETA_pending_recovery_email' );
					} else {
						$resolve['pendingEmail'] = get_user_meta( $current_user->ID, '_SUAMETA_pending_recovery_email', true );
					}


					$routeDetails['title']       = $editRecoveryEmail['title'];
					$routeDetails['description'] = $editRecoveryEmail['description'];
					$routeDetails['columns']     = $editRecoveryEmail['columns'];

					$nonce = wp_create_nonce( 'request_12' );
					wp_send_json_success( array(
						'nonce'        => $nonce,
						'routeDetails' => $routeDetails,
						'resolve'      => array( 'editRecoveryEmail' => $resolve )
					) );
					break;
				case '/editPinCode':
					if ( ! $this->getOptionsVar( 'pinCode' ) ) {
						throw new Exception();
					}

					if ( ! is_user_logged_in() ) {
						throw new Exception();
					}

					$editPinCode                 = $this->getOptionsVar( 'editPinCode' );
					$routeDetails['title']       = $editPinCode['title'];
					$routeDetails['description'] = $editPinCode['description'];
					$routeDetails['columns']     = $editPinCode['columns'];

					$nonce = wp_create_nonce( 'request_18' );
					wp_send_json_success( array( 'nonce' => $nonce, 'routeDetails' => $routeDetails ) );
					break;
				case '/deleteAccount':
					$deleteAccount = $this->getOptionsVar( 'deleteAccount' );
					if ( ! $deleteAccount['enabled'] ) {
						throw new Exception();
					}

					if ( ! is_user_logged_in() ) {
						throw new Exception();
					}

					$routeDetails['title']       = $deleteAccount['title'];
					$routeDetails['description'] = $deleteAccount['description'];
					$routeDetails['columns']     = $deleteAccount['columns'];

					$nonce = wp_create_nonce( 'request_19' );
					wp_send_json_success( array(
						'nonce'           => $nonce,
						'routeDetails'    => $routeDetails,
						'enableRecaptcha' => get_option('SUA_sitekey') && $deleteAccount['recaptcha']
					) );
					break;
				case '/emailNotifications':
					$emailNotifications = $this->getOptionsVar( 'emailNotifications' );
					if ( ! $emailNotifications['enabled'] ) {
						throw new Exception();
					}

					$current_user              = $this->currentUser();
					$resolve['pinCodeEnabled'] = $this->getOptionsVar( 'pinCode' );

					if ( get_user_meta( $current_user->ID, '_SUAMETA_recovery_email', true ) ) {
						$resolve['recoveryEnabled'] = true;
					} else {
						$resolve['recoveryEnabled'] = false;
					}

					$emailNotificationsMeta = get_user_meta( $current_user->ID, '_SUAMETA_email_notifications', true );
					if ( $emailNotificationsMeta ) {
						$resolve['primary']  = implode( ',', $emailNotificationsMeta['primary'] );
						$resolve['recovery'] = implode( ',', $emailNotificationsMeta['recovery'] );
					} else {
						$resolve['primary']  = '';
						$resolve['recovery'] = '';
					}

					$routeDetails['title']       = $emailNotifications['title'];
					$routeDetails['description'] = $emailNotifications['description'];
					$routeDetails['columns']     = $emailNotifications['columns'];

					$nonce = wp_create_nonce( 'request_22' );
					wp_send_json_success( array(
						'nonce'        => $nonce,
						'routeDetails' => $routeDetails,
						'resolve'      => array( 'emailNotifications' => $resolve )
					) );
					break;
				case '/signIn':
					if ( is_user_logged_in() ) {
						wp_send_json_success( array( 'route' => '/' ) );
					}

					$signIn                      = $this->getOptionsVar( 'signIn' );
					$routeDetails['title']       = $signIn['title'];
					$routeDetails['description'] = $signIn['description'];
					$routeDetails['columns']     = $signIn['columns'];

					$nonce = wp_create_nonce( 'request_1' );
					wp_send_json_success( array(
						'nonce'           => $nonce,
						'routeDetails'    => $routeDetails,
						'enableRecaptcha' => get_option('SUA_sitekey') && $signIn['recaptcha']
					) );
					break;
				case '/signUp':
					if ( is_user_logged_in() ) {
						wp_send_json_success( array( 'route' => '/' ) );
					}

					$signUp                      = $this->getOptionsVar( 'signUp' );
					$routeDetails['title']       = $signUp['title'];
					$routeDetails['description'] = $signUp['description'];
					$routeDetails['columns']     = $signUp['columns'];

					$nonce = wp_create_nonce( 'request_2' );
					wp_send_json_success( array(
						'nonce'           => $nonce,
						'routeDetails'    => $routeDetails,
						'enableRecaptcha' => get_option('SUA_sitekey') && $signUp['recaptcha']
					) );
					break;
				case '/editGridMultifactorAuthentication':
					$current_user = $this->currentUser();
					$signIn       = $this->getOptionsVar( 'signIn' );
					if ( ! $signIn['multifactorAuthentication'] ) {
						throw new Exception();
					}

					$multifactorAuthentication = get_user_meta( $current_user->ID, '_SUAMETA_multifactor_authentication', true );
					$resolve['pinCodeEnabled'] = $this->getOptionsVar( 'pinCode' );

					if ( $multifactorAuthentication ) {
						$resolve['enabled'] = true;
					} else {
						$resolve['enabled'] = false;
					}

					$editGridMultifactorAuthentication = $this->getOptionsVar( 'editGridMultifactorAuthentication' );
					$routeDetails['title']             = $editGridMultifactorAuthentication['title'];
					$routeDetails['description']       = $editGridMultifactorAuthentication['description'];
					$routeDetails['columns']           = $editGridMultifactorAuthentication['columns'];

					$nonce = wp_create_nonce( 'request_16' );
					wp_send_json_success( array(
						'nonce'        => $nonce,
						'routeDetails' => $routeDetails,
						'resolve'      => array( 'editGridMultifactorAuthentication' => $resolve )
					) );
					break;
				case '/editIpVerification':
					$current_user = $this->currentUser();
					$signIn       = $this->getOptionsVar( 'signIn' );
					if ( ! $signIn['ipVerification'] ) {
						throw new Exception();
					}

					$ipVerification            = get_user_meta( $current_user->ID, '_SUAMETA_ip_verification', true );
					$resolve['pinCodeEnabled'] = $this->getOptionsVar( 'pinCode' );

					if ( $ipVerification ) {
						$resolve['enabled'] = true;
					} else {
						$resolve['enabled'] = false;
					}

					$editIpVerification          = $this->getOptionsVar( 'editIpVerification' );
					$routeDetails['title']       = $editIpVerification['title'];
					$routeDetails['description'] = $editIpVerification['description'];
					$routeDetails['columns']     = $editIpVerification['columns'];

					$nonce = wp_create_nonce( 'request_21' );
					wp_send_json_success( array(
						'nonce'        => $nonce,
						'routeDetails' => $routeDetails,
						'resolve'      => array( 'editIpVerification' => $resolve )
					) );
					break;
				case strrpos( $route, "/gridMultifactorAuthentication" ):
					if ( is_user_logged_in() ) {
						wp_send_json_success( array( 'route' => '/' ) );
					}
					list( $path, $token, $keys ) = explode( '/', ltrim( $route, '/' ) );
					if ( $path && $token && $keys ) {
						if ( $this->sanitizeKeys( $keys ) ) {
							$this->ensureValidToken( $token, '6' );

							$gridMultifactorAuthentication = $this->getOptionsVar( 'gridMultifactorAuthentication' );
							$routeDetails['title']         = $gridMultifactorAuthentication['title'];
							$routeDetails['description']   = $gridMultifactorAuthentication['description'];
							$routeDetails['columns']       = $gridMultifactorAuthentication['columns'];

							$nonce = wp_create_nonce( 'request_8' );
							wp_send_json_success( array( 'nonce' => $nonce, 'routeDetails' => $routeDetails ) );
						}
					}
					throw new Exception();
					break;
				case strrpos( $route, "/ipVerification" ):
					if ( is_user_logged_in() ) {
						wp_send_json_success( array( 'route' => '/' ) );
					}
					list( $path, $token ) = explode( '/', ltrim( $route, '/' ) );
					if ( $path && $token ) {

						$ipVerification              = $this->getOptionsVar( 'ipVerification' );
						$routeDetails['title']       = $ipVerification['title'];
						$routeDetails['description'] = $ipVerification['description'];
						$routeDetails['columns']     = $ipVerification['columns'];

						$nonce = wp_create_nonce( 'request_9' );
						$this->ensureValidToken( $token, '7' );
						wp_send_json_success( array( 'nonce' => $nonce, 'routeDetails' => $routeDetails ) );
					}
					throw new Exception();

					break;
				case strrpos( $route, "/verifyToken" ):
					list( $path, $action, $token ) = explode( '/', ltrim( $route, '/' ) );
					if ( $path && $action && $token ) {
						$this->ensureValidToken( $token, $action );

						$verifyToken                 = $this->getOptionsVar( 'verifyToken' );
						$routeDetails['title']       = $verifyToken['title'];
						$routeDetails['description'] = $verifyToken['description'];

						$nonce = wp_create_nonce( 'request_3' );
						wp_send_json_success( array('nonce' => $nonce, 'routeDetails' => $routeDetails ) );
					}
					throw new Exception();
					break;
				case strrpos( $route, "/recoveryNewPassword" ):
					if ( is_user_logged_in() ) {
						wp_send_json_success( array( 'route' => '/' ) );
					}
					list( $path, $token ) = explode( '/', ltrim( $route, '/' ) );
					if ( $path && $token ) {
						$this->ensureValidToken( $token, '5' );

						$recoveryNewPassword         = $this->getOptionsVar( 'recoveryNewPassword' );
						$routeDetails['title']       = $recoveryNewPassword['title'];
						$routeDetails['description'] = $recoveryNewPassword['description'];
						$routeDetails['columns']     = $recoveryNewPassword['columns'];

						$nonce = wp_create_nonce( 'request_6' );
						wp_send_json_success( array( 'nonce' => $nonce, 'routeDetails' => $routeDetails ) );
					}
					throw new Exception();
					break;
				case strrpos( $route, "/recoverySecurityQuestion" ):
					if ( is_user_logged_in() ) {
						wp_send_json_success( array( 'route' => '/' ) );
					}
					list( $path, $token, $question ) = explode( '/', ltrim( $route, '/' ) );
					if ( $path && $token && $question ) {
						$this->ensureValidToken( $token, '4' );

						$recoverySecurityQuestion    = $this->getOptionsVar( 'recoverySecurityQuestion' );
						$routeDetails['title']       = $recoverySecurityQuestion['title'];
						$routeDetails['description'] = $recoverySecurityQuestion['description'];
						$routeDetails['columns']     = $recoverySecurityQuestion['columns'];

						$nonce = wp_create_nonce( 'request_5' );
						wp_send_json_success( array( 'nonce' => $nonce, 'routeDetails' => $routeDetails ) );
					}
					throw new Exception();
					break;
				case strrpos( $route, "/recoveryEmail" ):
					if ( is_user_logged_in() ) {
						wp_send_json_success( array( 'route' => '/' ) );
					}
					list( $path, $token, $action, $maskedEmail ) = explode( '/', ltrim( $route, '/' ) );
					if ( $path && $token && $maskedEmail ) {
						$this->ensureValidToken( $token, $action );

						$recoveryEmail               = $this->getOptionsVar( 'recoveryEmail' );
						$routeDetails['title']       = $recoveryEmail['title'];
						$routeDetails['description'] = $recoveryEmail['description'];
						$routeDetails['columns']     = $recoveryEmail['columns'];

						$nonce = wp_create_nonce( 'request_7' );
						wp_send_json_success( array( 'nonce' => $nonce, 'routeDetails' => $routeDetails ) );
					}
					throw new Exception();
					break;
				case strrpos( $route, "/recovery" ):
					if ( is_user_logged_in() ) {
						wp_send_json_success( array( 'route' => '/' ) );
					}
					if ( substr_count( $route, '/' ) == 2 ) {
						list( $path, $action ) = explode( '/', ltrim( $route, '/' ) );
						if ( $action && ! in_array( $action, array( '2', '3', '4' ) ) ) {
							throw new Exception();
						}
					}

					$recovery                    = $this->getOptionsVar( 'recovery' );
					$routeDetails['title']       = $recovery['title'];
					$routeDetails['description'] = $recovery['description'];
					$routeDetails['columns']     = $recovery['columns'];

					$nonce = wp_create_nonce( 'request_4' );
					wp_send_json_success( array(
						'nonce'           => $nonce,
						'routeDetails'    => $routeDetails,
						'enableRecaptcha' => get_option('SUA_sitekey') && $recovery['recaptcha']
					) );
					break;
				default:
					throw new Exception();
					break;
			}

		} catch ( Exception $e ) {
			wp_send_json_error();
		}

	}


	function ensureValidToken( $token, $action ) {
		global $wpdb;
		$sql   = 'SELECT * FROM ' . $wpdb->prefix . 'sua_settings WHERE token = %s and action= %d;';
		$query = $wpdb->prepare( $sql, array( $token, (int) $action ) );

		$stored_token = $wpdb->get_row( $query );
		if ( ! $stored_token ) {
			throw new Exception();
		}
	}

	function private_sua_callback() {
		try {
			$nonce = $this->getRequestVar( 'nonce' );
			switch ( $this->getRequestVar( 'request' ) ) {
				case '0':
					$this->verifyNonce( $nonce, 'request_0' );
					$this->logOut();
					break;
				case '10':
					$this->verifyNonce( $nonce, 'request_10' );
					$this->editUserInfo();
					break;
				case '11':
					$this->verifyNonce( $nonce, 'request_10' );
					$this->cancelPendingEmail();
					break;
				case '12':
					$this->verifyNonce( $nonce, 'request_12' );
					$this->editRecoveryEmail();
					break;
				case '13':
					$this->verifyNonce( $nonce, 'request_12' );
					$this->cancelRecoveryPendingEmail();
					break;
				case '14':
					$this->verifyNonce( $nonce, 'request_14' );
					$this->editPassword();
					break;
				case '15':
					$this->verifyNonce( $nonce, 'request_15' );
					$this->editSecurityQuestions();
					break;
				case '16':
					$this->verifyNonce( $nonce, 'request_16' );
					$this->editGridMultifactorAuthentication();
					break;
				case '17':
					$this->verifyNonce( $nonce, 'request_16' );
					$this->downloadGrid();
					break;
				case '18':
					$this->verifyNonce( $nonce, 'request_18' );
					$this->editPinCode();
					break;
				case '19':
					$this->verifyNonce( $nonce, 'request_19' );
					$this->deleteAccount();
					break;
				case '20':
					$this->verifyNonce( $nonce, 'request_20' );
					$this->accountHistory();
					break;
				case '21':
					$this->verifyNonce( $nonce, 'request_21' );
					$this->editIpVerification();
					break;
				case '22':
					$this->verifyNonce( $nonce, 'request_22' );
					$this->emailNotifications();
					break;
				default:
					throw new Exception( '00014' );
					break;
			}
		} catch ( Exception $e ) {
			wp_send_json_error( array( 'code' => $e->getMessage() ) );
		}
	}

	function public_sua_callback() {
		try {
			$nonce = $this->getRequestVar( 'nonce' );
			switch ( $this->getRequestVar( 'request' ) ) {
				case '1':
					$this->verifyNonce( $nonce, 'request_1' );
					$this->signIn();
					break;
				case '2':
					$this->verifyNonce( $nonce, 'request_2' );
					$this->signUp();
					break;
				case '4':
					$this->verifyNonce( $nonce, 'request_4' );
					$this->recovery();
					break;
				case '5':
					$this->verifyNonce( $nonce, 'request_5' );
					$this->recoverySecurityQuestion();
					break;
				case '6':
					$this->verifyNonce( $nonce, 'request_6' );
					$this->recoveryNewPassword();
					break;
				case '7':
					$this->verifyNonce( $nonce, 'request_7' );
					$this->recoveryEmail();
					break;
				case '8':
					$this->verifyNonce( $nonce, 'request_8' );
					$this->gridMultifactorAuthentication();
					break;
				case '9':
					$this->verifyNonce( $nonce, 'request_9' );
					$this->ipVerification();
					break;
				default:
					throw new Exception( '00014' );
					break;
			}
		} catch ( Exception $e ) {
			wp_send_json_error( array( 'code' => $e->getMessage() ) );
		}
	}

	function public_and_private_sua_callback() {
		try {
			$nonce = $this->getRequestVar( 'nonce' );
			switch ( $this->getRequestVar( 'request' ) ) {
				case '3':
					$this->verifyNonce( $nonce, 'request_3' );
					$this->verifyToken();
					break;
				default:
					throw new Exception( '00014' );
					break;
			}
		} catch ( Exception $e ) {
			wp_send_json_error( array( 'code' => $e->getMessage() ) );
		}
	}

	function verifyNonce( $nonce, $action ) {
		if ( ! wp_verify_nonce( $nonce, $action ) ) {
			throw new Exception( '00089' );
		}
	}

	function logOut() {
		try {

			$current_user = $this->currentUser();
			wp_logout();
			wp_send_json_success( array( 'code' => '00099' ) );

		} catch ( Exception $e ) {
			wp_send_json_error( array( 'code' => $e->getMessage() ) );
		}
	}

	function sendEmailNotification( $user_id, $action ) {

		$emailNotifications = $this->getOptionsVar( 'emailNotifications' );
		if ( ! $emailNotifications['enabled'] ) {
			return;
		}

		$emailNotifications = get_user_meta( $user_id, '_SUAMETA_email_notifications', true );
		if ( ! $emailNotifications ) {
			return;
		}
		if ( in_array( $action, $emailNotifications['primary'] ) ) {
			$primary = true;
		} else {
			$primary = false;
		}
		if ( in_array( $action, $emailNotifications['recovery'] ) ) {
			$recovery = true;
		} else {
			$recovery = false;
		}

		if ( ! $primary && ! $recovery ) {
			return;
		}

		$mails = $this->getOptionsVar( 'mails' );
		if ( ! array_key_exists( $action, $mails ) ) {
			return;
		}


		$mail = array(
			'subject' => $mails[ $action ]['subject'],
			'message' => $mails[ $action ]['message'],
		);
		if ( strpos( $mail['message'], "{{ip}}" ) !== false ) {
			$mail['message'] = str_replace( "{{ip}}", $this->getIp(), $mail['message'] );
		}
		if ( strpos( $mail['message'], "{{ip_details}}" ) !== false ) {
			$location  = $this->getIpDetails();
			$ipDetails = implode( ',', array( $location['country'], $location['city'] ) );

			$mail['message'] = str_replace( "{{ip_details}}", $ipDetails, $mail['message'] );
		}
		if ( strpos( $mail['message'], "{{user_agent}}" ) !== false ) {
			$mail['message'] = str_replace( "{{user_agent}}", $_SERVER['HTTP_USER_AGENT'], $mail['message'] );
		}


		if ( $primary ) {
			$user = get_userdata( $user_id );
			if ( $user ) {
				wp_mail( $user->user_email, $mail['subject'], $mail['message'] );
			}
		}
		if ( $recovery ) {
			$recoveryEmail = get_user_meta( $user_id, '_SUAMETA_recovery_email', true );
			if ( $recoveryEmail ) {
				wp_mail( $recoveryEmail, $mail['subject'], $mail['message'] );
			}
		}
	}

	function emailNotifications() {
		try {

			$emailNotifications = $this->getOptionsVar( 'emailNotifications' );
			if ( ! $emailNotifications['enabled'] ) {
				throw new Exception( '00101' );
			}

			$primaryNotifications  = $this->getRequestVar( 'primaryNotifications' );
			$recoveryNotifications = $this->getRequestVar( 'recoveryNotifications' );


			if ( $primaryNotifications === null ) {
				throw new Exception( '00102' );
			}
			if ( $recoveryNotifications === null ) {
				throw new Exception( '00103' );
			}

			$current_user = $this->currentUser( true );


			$emailNotifications = array(
				'primary'  => $primaryNotifications,
				'recovery' => $recoveryNotifications,
			);

			update_user_meta( $current_user->ID, '_SUAMETA_email_notifications', $emailNotifications );
			wp_send_json_success( array( 'code' => '00104' ) );


		} catch ( Exception $e ) {
			wp_send_json_error( array( 'code' => $e->getMessage() ) );
		}
	}

	function deleteAccount() {
		try {

			$deleteAccount = $this->getOptionsVar( 'deleteAccount' );
			if ( ! $deleteAccount['enabled'] ) {
				throw new Exception( '00093' );
			}

			if ( $deleteAccount['recaptcha'] && ! $this->recaptcha() ) {
				throw new Exception( '00015' );
			}

			$current_user = $this->currentUser();
			$this->checkPassword( $current_user );

			if ( current_user_can( 'manage_options', $current_user->ID ) ) {
				throw new Exception( '00083' );
			} else {
				if ( (int) $deleteAccount['days'] > 0 ) {
					update_user_meta( $current_user->ID, '_SUAMETA_status', '2' );

					$this->addToken( $current_user->ID, '11', $current_user->user_email, false, false, (int) $deleteAccount['days'] * 24 );
					wp_logout();
					wp_send_json_success( array( 'code' => '00084' ) );

				} else {
					wp_logout();
					wp_delete_user( $current_user->ID );
					wp_send_json_success( array( 'code' => '00106' ) );
				}
			}


		} catch ( Exception $e ) {
			wp_send_json_error( array( 'code' => $e->getMessage() ) );
		}
	}

	function downloadGrid() {
		try {

			$current_user = $this->currentUser( true );

			$grid = get_user_meta( $current_user->ID, '_SUAMETA_multifactor_authentication', true );

			if ( $grid ) {
				wp_send_json_success( array( 'code' => '00077', 'grid' => $grid ) );
			} else {
				throw new Exception( '00078' );
			}

		} catch ( Exception $e ) {
			wp_send_json_error( array( 'code' => $e->getMessage() ) );
		}
	}

	function generateGridValues() {
		$grid = array();

		$characters = array(
			'a',
			'b',
			'c',
			'd',
			'e',
			'f',
			'g',
			'h',
			'i',
			'j',
			'k',
			'l',
			'm',
			'n',
			'o',
			'p',
			'q',
			'r',
			's',
			't',
			'u',
			'v',
			'w',
			'x',
			'y',
			'z',
			'0',
			'1',
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			'9'
		);

		for ( $row = 0; $row < 26; $row ++ ) {

			$index          = $characters[ $row ];
			$grid[ $index ] = array();

			for ( $column = 0; $column < 10; $column ++ ) {
				$grid[ $index ][] = $characters[ array_rand( $characters ) ];
			}

		}

		return $grid;
	}

	function editGridMultifactorAuthentication() {
		try {
			$signIn = $this->getOptionsVar( 'signIn' );
			if ( ! $signIn['multifactorAuthentication'] ) {
				throw new Exception( '00091' );
			}

			$current_user = $this->currentUser( true );

			$enabled = $this->getRequestVar( 'enabled' );

			$this->sendEmailNotification( $current_user->ID, '16' );

			if ( $enabled ) {
				$grid = $this->generateGridValues();
				add_user_meta( $current_user->ID, '_SUAMETA_multifactor_authentication', $grid, true );
				wp_send_json_success( array( 'code' => '00076' ) );
			} else {
				delete_user_meta( $current_user->ID, '_SUAMETA_multifactor_authentication' );
				delete_user_meta( $current_user->ID, '_SUAMETA_multifactor_authentication_fingerprint' );
				global $wpdb;
				$wpdb->delete( $wpdb->prefix . 'sua_settings', array(
					'user'   => $current_user->ID,
					'action' => '6'
				), array( '%d', '%d' ) );
				wp_send_json_success( array( 'code' => '00075' ) );
			}


		} catch ( Exception $e ) {
			wp_send_json_error( array( 'code' => $e->getMessage() ) );
		}
	}

	function editIpVerification() {
		try {
			$signIn = $this->getOptionsVar( 'signIn' );
			if ( ! $signIn['ipVerification'] ) {
				throw new Exception( '00097' );
			}

			$current_user = $this->currentUser( true );

			$enabled = $this->getRequestVar( 'enabled' );
			$this->sendEmailNotification( $current_user->ID, '19' );
			if ( $enabled ) {

				update_user_meta( $current_user->ID, '_SUAMETA_ip_verification', true, true );
				wp_send_json_success( array( 'code' => '00098' ) );
			} else {
				delete_user_meta( $current_user->ID, '_SUAMETA_ip_verification' );
				wp_send_json_success( array( 'code' => '00034' ) );
			}

		} catch ( Exception $e ) {
			wp_send_json_error( array( 'code' => $e->getMessage() ) );
		}
	}

	function editPinCode() {
		try {

			if ( ! $this->getOptionsVar( 'pinCode' ) ) {
				throw new Exception( '00090' );
			}

			$current_user = $this->currentUser();
			$this->checkPassword( $current_user );

			$pinCode = $this->getRequestVar( 'pinCode' );
			if ( ! $pinCode ) {
				throw new Exception( '00079' );
			}

			update_user_meta( $current_user->ID, '_SUAMETA_pin_code', $pinCode );

			$this->sendEmailNotification( $current_user->ID, '18' );
			wp_send_json_success( array( 'code' => '00080' ) );

		} catch ( Exception $e ) {
			wp_send_json_error( array( 'code' => $e->getMessage() ) );
		}
	}

	function editSecurityQuestions() {
		try {

			$editSecurityQuestions = $this->getOptionsVar( 'editSecurityQuestions' );
			if ( ! $editSecurityQuestions['enabled'] ) {
				throw new Exception( '00095' );
			}

			$current_user = $this->currentUser( true );

			$canned = $this->getRequestVar( 'canned' );

			if ( $canned ) {
				$questions = $this->getRequestVar( 'questions' );
				$answers   = $this->getRequestVar( 'answers' );

				if ( ! $questions ) {
					throw new Exception( '00072' );
				}
				if ( ! $answers ) {
					throw new Exception( '00039' );
				}
				if ( count( $questions ) != count( $answers ) ) {
					throw new Exception( '00073' );
				}

				delete_user_meta( $current_user->ID, '_SUAMETA_security_questions' );

				foreach ( $questions as $key => $question ) {
					add_user_meta( $current_user->ID, '_SUAMETA_security_questions',
						array(
							'question' => $question,
							'answer'   => $this->getSecurityAnswer( $answers[ $key ] )
						)
					);
				}
				add_user_meta( $current_user->ID, '_SUAMETA_security_questions_canned', true, true );
			} else {
				$question = $this->getRequestVar( 'question' );
				$answer   = $this->getRequestVar( 'answer' );

				if ( ! $question ) {
					throw new Exception( '00072' );
				}
				if ( ! $answer ) {
					throw new Exception( '00039' );
				}

				delete_user_meta( $current_user->ID, '_SUAMETA_security_questions' );

				add_user_meta( $current_user->ID, '_SUAMETA_security_questions',
					array(
						'question' => $question,
						'answer'   => $this->getSecurityAnswer( $answer )
					)
				);
				delete_user_meta( $current_user->ID, '_SUAMETA_security_questions_canned' );
			}

			$this->sendEmailNotification( $current_user->ID, '15' );
			wp_send_json_success( array( 'code' => '00074' ) );

		} catch ( Exception $e ) {
			wp_send_json_error( array( 'code' => $e->getMessage() ) );
		}
	}

	function signUp() {
		try {
			if ( ! get_option( 'users_can_register' ) ) {
				throw new Exception( '00092' );
			}

			$signUp = $this->getOptionsVar( 'signUp' );
			if ( $signUp['recaptcha'] && ! $this->recaptcha() ) {
				throw new Exception( '00015' );
			}

			$username = $this->getRequestVar( 'username' );
			$password = $this->getRequestVar( 'password' );
			$email    = $this->getRequestVar( 'email' );

			if ( ! $username ) {
				throw new Exception( '00002' );
			}
			if ( ! $password ) {
				throw new Exception( '00013' );
			}
			if ( ! $email ) {
				throw new Exception( '00007' );
			}

			if ( username_exists( $username ) ) {
				throw new Exception( '00016' );
			}
			if ( email_exists( $email ) ) {
				throw new Exception( '00023' );
			}

			$blacklists = $this->getOptionsVar( 'blacklists' );
			if ( in_array( $username, $blacklists['names'] ) ) {
				throw new Exception( '00017' );
			}

			list( $user, $domain ) = explode( '@', $email );
			if ( in_array( $domain, $blacklists['domains'] ) ) {
				throw new Exception( '00018' );
			}

			$ip = $this->getIpDetails();
			if ( in_array( $ip['address'], $blacklists['ips'] ) ) {
				throw new Exception( '00019' );
			}

			$user_id = wp_create_user( $username . '_' . uniqid(), $password );

			update_user_meta( $user_id, '_SUAMETA_status', '1' );
			update_user_meta( $user_id, '_SUAMETA_pending_username', $username );
			update_user_meta( $user_id, '_SUAMETA_pending_email', $email );

			$this->addToken( $user_id, '1', $email );

			wp_send_json_success( array( 'code' => '00024' ) );

		} catch ( Exception $e ) {
			wp_send_json_error( array( 'code' => $e->getMessage() ) );
		}
	}

	function editPassword() {
		try {

			$current_user = $this->currentUser();
			$this->checkPassword( $current_user );

			$newPassword = $this->getRequestVar( 'newPassword' );
			if ( ! $newPassword ) {
				throw new Exception( '00070' );
			}

			wp_set_password( $newPassword, $current_user->ID );
			update_user_meta( $current_user->ID, '_SUAMETA_login_attempts', 0 );

			$this->sendEmailNotification( $current_user->ID, '14' );
			wp_send_json_success( array( 'code' => '00041' ) );


		} catch ( Exception $e ) {
			wp_send_json_error( array( 'code' => $e->getMessage() ) );
		}
	}

	function signIn() {
		try {

			$signIn = $this->getOptionsVar( 'signIn' );
			if ( $signIn['recaptcha'] && ! $this->recaptcha() ) {
				throw new Exception( '00015' );
			}

			$username = $this->getRequestVar( 'username' );
			$password = $this->getRequestVar( 'password' );

			if ( ! $username ) {
				throw new Exception( '00002' );
			}
			if ( ! $password ) {
				throw new Exception( '00013' );
			}

			$user = get_user_by( 'login', $username );

			if ( $user && wp_check_password( $password, $user->data->user_pass, $user->ID ) ) {

				$userStatus = get_user_meta( $user->ID, '_SUAMETA_status', true );
				if($userStatus==='') $userStatus='0';

				$this->verifyUserStatus( $userStatus, $user->ID, $user->user_email );

				if ( $signIn['multifactorAuthentication'] ) {
					$multifactorAuthentication = get_user_meta( $user->ID, '_SUAMETA_multifactor_authentication', true );

					if ( $multifactorAuthentication ) {
						$multifactorAuthenticationFingerprints = get_user_meta( $user->ID, '_SUAMETA_multifactor_authentication_fingerprint' );
						$fingerprint                           = $this->getRequestVar( 'fingerprint' );

						if ( ! $multifactorAuthenticationFingerprints || ( ! in_array( $fingerprint, $multifactorAuthenticationFingerprints ) ) ) {
							global $wpdb;
							$sql   = 'SELECT * FROM ' . $wpdb->prefix . 'sua_settings WHERE user = %d and action=6;';
							$query = $wpdb->prepare( $sql, array( $user->ID ) );

							$stored_token = $wpdb->get_row( $query );
							if ( $stored_token === null ) {

								$values = array();
								$keys   = array();

								for ( $length = 0; $length < 4; $length ++ ) {

									$value['row']    = $multifactorAuthentication[ array_rand( $multifactorAuthentication ) ];
									$value['column'] = $value['row'][ array_rand( $value['row'] ) ];

									$key['row']    = array_search( $value['row'], $multifactorAuthentication );
									$key['column'] = array_search( $value['column'], $value['row'] );

									$values[] = $value['column'];
									$keys[]   = implode( '-', $key );
								}

								$values = implode( ',', $values );
								$keys   = implode( ',', $keys );

								$token = $this->addToken( $user->ID, '6', false, $values, $keys );

							} else {
								$token = $stored_token->token;
								$keys  = $stored_token->keys;
							}

							wp_send_json_success(
								array(
									'code'  => '00046',
									'route' => 'gridMultifactorAuthentication/' . $token . '/' . $keys
								)
							);
						}
					}
				}

				if ( $signIn['ipVerification'] ) {
					$ipVerification = get_user_meta( $user->ID, '_SUAMETA_ip_verification', true );
					if ( $ipVerification ) {

						$location       = $this->getIpDetails();
						$user_locations = get_user_meta( $user->ID, '_SUAMETA_locations', true );
						$verified       = false;
						if ( $user_locations ) {
							foreach ( $user_locations as $user_location ) {
								if ( isset( $user_location['country'] ) && $location['country'] == $user_location['country'] ) {
									$verified = true;
									break;
								}
							}
						}

						if ( ! $verified ) {
							global $wpdb;
							$sql   = 'SELECT * FROM ' . $wpdb->prefix . 'sua_settings WHERE user = %d and action=7;';
							$query = $wpdb->prepare( $sql, array( $user->ID ) );

							$stored_token = $wpdb->get_row( $query );
							if ( $stored_token === null ) {

								$passCode = rand( 10000, 999999 );
								$token    = $this->addToken( $user->ID, '7', $user->user_email, $passCode );

							} else {
								$token = $stored_token->token;
							}

							wp_send_json_success(
								array(
									'code'  => '00049',
									'route' => '/ipVerification/' . $token
								)
							);
						}
					}
				}

				$this->setUserAuthCookie( $user->ID );

			} else {
				throw new Exception( '00020' );
			}

		} catch ( Exception $e ) {
			wp_send_json_error( array( 'code' => $e->getMessage() ) );
		}
	}

	function recovery() {
		try {

			$recovery = $this->getOptionsVar( 'recovery' );
			if ( $recovery['recaptcha'] && ! $this->recaptcha() ) {
				throw new Exception( '00015' );
			}

			$actionRecovery = $this->getRequestVar( 'actionRecovery' );
			$email          = $this->getRequestVar( 'email' );

			if ( ! $email ) {
				throw new Exception( '00007' );
			}
			if ( ! in_array( $actionRecovery, array( '2', '3', '4' ) ) ) {
				throw new Exception( '00033' );
			}

			$user = get_user_by( 'email', $email );
			if ( $user ) {

				$recovery_email = get_user_meta( $user->ID, '_SUAMETA_recovery_email', true );

				if ( $recovery_email && $recovery_email != $user->user_email ) {

					global $wpdb;
					$sql   = 'SELECT * FROM ' . $wpdb->prefix . 'sua_settings WHERE user = %d and action=%d and value= %s;';
					$query = $wpdb->prepare( $sql, array( $user->ID, $actionRecovery, $recovery_email ) );

					$stored_token = $wpdb->get_row( $query );
					if ( $stored_token === null ) {
						$token = $this->addToken( $user->ID, $actionRecovery, false, $recovery_email );
					} else {
						$token = $stored_token->token;
					}

					wp_send_json_success(
						array(
							'code'  => '00053',
							'route' => 'recoveryEmail/' . $token . '/' . $actionRecovery . '/' . base64_encode( $this->maskEmail( $recovery_email ) )
						)
					);
				} else {
					$this->addToken( $user->ID, $actionRecovery, $user->user_email );
				}
			}

			wp_send_json_success( array( 'code' => '00032' ) );

		} catch ( Exception $e ) {
			wp_send_json_error( array( 'code' => $e->getMessage() ) );
		}
	}

	function editUserInfo() {
		try {
			$current_user = $this->currentUser( true );

			$username  = $this->getRequestVar( 'username' );
			$firstName = $this->getRequestVar( 'firstName' );
			$lastName  = $this->getRequestVar( 'lastName' );
			$email     = $this->getRequestVar( 'email' );


			$editUserInfo = $this->getOptionsVar( 'editUserInfo' );
			if ( $editUserInfo['changeUsername'] ) {
				if ( $username && $current_user->user_login != $username ) {
					if ( username_exists( $username ) ) {
						throw new Exception( '00016' );
					}

					$blacklists = $this->getOptionsVar( 'blacklists' );
					if ( in_array( $username, $blacklists['names'] ) ) {
						throw new Exception( '00017' );
					}

					global $wpdb;
					$wpdb->update( $wpdb->users, array( 'user_login' => $username ), array( 'ID' => $current_user->ID ) );
				}
			}


			if ( $email && $current_user->user_email != $email ) {
				$pending_email = get_user_meta( $current_user->ID, '_SUAMETA_pending_email', true );
				if ( $pending_email ) {
					throw new Exception( '00094' );
				}

				if ( email_exists( $email ) ) {
					throw new Exception( '00023' );
				}

				$this->addToken( $current_user->ID, '8', $email );
				update_user_meta( $current_user->ID, '_SUAMETA_pending_email', $email );
			}

			$user_id = wp_update_user(
				array(
					'ID'         => $current_user->ID,
					'first_name' => $firstName,
					'last_name'  => $lastName
				)
			);

			if ( is_wp_error( $user_id ) ) {
				throw new Exception( '00055' );
			} else {
				$this->sendEmailNotification( $current_user->ID, '13' );
				wp_send_json_success( array( 'code' => '00054' ) );
			}

		} catch ( Exception $e ) {
			wp_send_json_error( array( 'code' => $e->getMessage() ) );
		}
	}

	function editRecoveryEmail() {
		try {
			$editRecoveryEmail = $this->getOptionsVar( 'editRecoveryEmail' );
			if ( ! $editRecoveryEmail['enabled'] ) {
				throw new Exception( '00096' );
			}

			$current_user = $this->currentUser( true );

			$pending_email = get_user_meta( $current_user->ID, '_SUAMETA_pending_recovery_email', true );
			if ( $pending_email ) {
				throw new Exception( '00063' );
			}

			$email         = $this->getRequestVar( 'email' );
			$recoveryEmail = get_user_meta( $current_user->ID, '_SUAMETA_recovery_email', true );


			if ( ! $email ) {

				delete_user_meta( $current_user->ID, '_SUAMETA_recovery_email' );
				wp_send_json_success( array( 'code' => '00069' ) );

			} else {

				if ( $email == $recoveryEmail ) {
					throw new Exception( '00088' );
				}
				if ( $current_user->user_email != $email ) {

					$this->addToken( $current_user->ID, '9', $email );
					update_user_meta( $current_user->ID, '_SUAMETA_pending_recovery_email', $email );

					$this->sendEmailNotification( $current_user->ID, '17' );
					wp_send_json_success( array( 'code' => '00065' ) );

				} else {
					throw new Exception( '00064' );
				}
			}

		} catch ( Exception $e ) {
			wp_send_json_error( array( 'code' => $e->getMessage() ) );
		}
	}

	function cancelPendingEmail() {
		try {

			$current_user = $this->currentUser();

			$email = $this->getRequestVar( 'email' );
			if ( ! $email ) {
				throw new Exception( '00007' );
			}


			$pendingEmail = get_user_meta( $current_user->ID, '_SUAMETA_pending_email', true );
			if ( ! $pendingEmail ) {
				throw new Exception( '00060' );
			}

			global $wpdb;
			$wpdb->delete( $wpdb->prefix . 'sua_settings', array(
				'user'   => $current_user->ID,
				'action' => '8'
			), array( '%d', '%d' ) );
			delete_user_meta( $current_user->ID, '_SUAMETA_pending_email' );

			wp_send_json_success( array( 'code' => '00061' ) );

		} catch ( Exception $e ) {
			wp_send_json_error( array( 'code' => $e->getMessage() ) );
		}
	}

	function cancelRecoveryPendingEmail() {
		try {

			$current_user = $this->currentUser();

			$email = $this->getRequestVar( 'email' );
			if ( ! $email ) {
				throw new Exception( '00007' );
			}


			$pendingEmail = get_user_meta( $current_user->ID, '_SUAMETA_pending_recovery_email', true );
			if ( ! $pendingEmail ) {
				throw new Exception( '00060' );
			}

			global $wpdb;
			$wpdb->delete( $wpdb->prefix . 'sua_settings', array(
				'user'   => $current_user->ID,
				'action' => '9'
			), array( '%d', '%d' ) );
			delete_user_meta( $current_user->ID, '_SUAMETA_pending_recovery_email' );

			wp_send_json_success( array( 'code' => '00068' ) );

		} catch ( Exception $e ) {
			wp_send_json_error( array( 'code' => $e->getMessage() ) );
		}
	}

	function verifyToken() {
		try {

			$token       = $this->getRequestVar( 'token' );
			$actionToken = $this->getRequestVar( 'actionToken' );

			if ( ! $token ) {
				throw new Exception( '00027' );
			}
			if ( ! $actionToken ) {
				throw new Exception( '00028' );
			}

			global $wpdb;
			$sql   = 'SELECT * FROM ' . $wpdb->prefix . 'sua_settings WHERE token = %s and action= %d;';
			$query = $wpdb->prepare( $sql, array( $token, $actionToken ) );

			$stored_token = $wpdb->get_row( $query );
			if ( $stored_token === null ) {
				throw new Exception( '00029' );
			} else {
				$wpdb->delete( $wpdb->prefix . 'sua_settings', array( 'id' => $stored_token->id ), array( '%d' ) );
				$this->doTokenAction( $stored_token->user, $actionToken );
			}
		} catch ( Exception $e ) {
			wp_send_json_error( array( 'code' => $e->getMessage() ) );
		}
	}

	function confirmNewRegistration( $user_id ) {

		try {
			$user = get_userdata( $user_id );
			if ( $user ) {
				$pending_username = get_user_meta( $user->ID, '_SUAMETA_pending_username', true );
				$pending_email    = get_user_meta( $user->ID, '_SUAMETA_pending_email', true );

				$args = array(
					'exclude'    => array( $user->ID ),
					'meta_query' => array(
						'relation' => 'OR',
						array(
							'key'     => '_SUAMETA_status',
							'value'   => '1',
							'compare' => '='
						),
						array(
							'key'     => '_SUAMETA_pending_email',
							'value'   => $pending_email,
							'compare' => '='
						),
						array(
							'key'     => '_SUAMETA_pending_username',
							'value'   => $pending_username,
							'compare' => '='
						)
					)
				);

				$pending_users = get_users( $args );

				$mail = array();
				foreach ( $pending_users as $pending_user ) {

					$unverified_email = get_user_meta( $pending_user->ID, '_SUAMETA_pending_email', true );
					$this->sendMail( $unverified_email, '12' );
					wp_delete_user( $pending_user->ID );
				}

				$confirmed_registration = wp_update_user(
					array(
						'ID'            => $user->ID,
						'user_email'    => $pending_email,
						'display_name' => $pending_username
					)
				);

				if ( is_wp_error( $confirmed_registration ) ) {
					throw new Exception( '00058' );
				} else {

					global $wpdb;
					$wpdb->update( $wpdb->users, array( 'user_login' => $pending_username ), array( 'ID' => $user->ID ) );

					update_user_meta( $user->ID, '_SUAMETA_status', '0' );

					$pinCode = $this->generatePinCode();
					update_user_meta( $user->ID, '_SUAMETA_pin_code', $pinCode );

					$this->sendMail( $pending_email, '10', false, $pinCode );

					delete_user_meta( $user->ID, '_SUAMETA_pending_username' );
					delete_user_meta( $user->ID, '_SUAMETA_pending_email' );

					$this->addLocation($user->ID);

					wp_send_json_success( array( 'code' => '00030' ) );
				}
			} else {
				throw new Exception( '00057' );
			}
		} catch ( Exception $e ) {
			wp_send_json_error( array( 'code' => $e->getMessage() ) );
		}
	}

	function doTokenAction( $user_id, $action ) {

		switch ( $action ) {
			case '0':
				return true;
				break;
			case '1':
				$this->confirmNewRegistration( $user_id );
				break;
			case '2':
				delete_user_meta( $user_id, '_SUAMETA_multifactor_authentication');
				wp_send_json_success( array( 'code' => '00035', 'route' => '/' ) );
				break;
			case '3':
				delete_user_meta( $user_id, '_SUAMETA_ip_verification' );
				wp_send_json_success( array( 'code' => '00034' ) );
				break;
			case '4':

				$security_questions = get_user_meta( $user_id, '_SUAMETA_security_questions' );

				if ( $security_questions ) {

					$security_question = $security_questions[ array_rand( $security_questions ) ];

					$token = $this->addToken( $user_id, '4', false, $security_question['answer'] );

					$canned = get_user_meta( $user_id, '_SUAMETA_security_questions_canned', true );

					if ( $canned ) {
						$editSecurityQuestions = $this->getOptionsVar( 'editSecurityQuestions' );
						foreach ( $editSecurityQuestions['cannedQuestions'] as $cq ) {
							if ( $cq['code'] == $security_question['question'] ) {
								$security_question['question'] = $cq['title'];
								break;
							}
						}
					}

					wp_send_json_success(
						array(
							'code'  => '00037',
							'route' => 'recoverySecurityQuestion/' . $token . '/' . base64_encode( $security_question['question'] ),
						)
					);

				} else {
					$token = $this->addToken( $user_id, '5' );
					wp_send_json_success(
						array(
							'code'  => '00038',
							'route' => 'recoveryNewPassword/' . $token
						)
					);
				}

				break;
			case '5':
				$recovery_email             = get_user_meta( $user_id, '_SUAMETA_recovery_email', true );
				$recovery_email['verified'] = true;
				update_user_meta( $user_id, '_SUAMETA_recovery_email', $recovery_email );
				wp_send_json_success( array( 'code' => '00045' ) );
				break;
			case '8':
				$pending_email = get_user_meta( $user_id, '_SUAMETA_pending_email', true );
				if ( email_exists( $pending_email ) ) {
					wp_send_json_error( array( 'code' => '00023' ) );
				}
				$confirm_change_email = wp_update_user(
					array(
						'ID'         => $user_id,
						'user_email' => $pending_email
					)
				);

				if ( is_wp_error( $confirm_change_email ) ) {
					wp_send_json_error( array( 'code' => '00059' ) );
				} else {
					delete_user_meta( $user_id, '_SUAMETA_pending_email' );
					wp_send_json_success( array( 'code' => '00062' ) );
				}

				break;
			case '9':
				$pending_recovery_email = get_user_meta( $user_id, '_SUAMETA_pending_recovery_email', true );
				if ( ! $pending_recovery_email ) {
					wp_send_json_error( array( 'code' => '00066' ) );
				}

				update_user_meta( $user_id, '_SUAMETA_recovery_email', $pending_recovery_email );
				delete_user_meta( $user_id, '_SUAMETA_pending_recovery_email' );
				wp_send_json_success( array( 'code' => '00067' ) );

				break;
			case '11':

				update_user_meta( $user_id, '_SUAMETA_status', '0' );
				wp_send_json_success( array( 'code' => '00085' ) );

				break;
			default:
				wp_send_json_error( array( 'code' => '00031' ) );
				break;
		}
	}

	function ipVerification() {
		try {
			$token    = $this->getRequestVar( 'token' );
			$passCode = $this->getRequestVar( 'passCode' );

			if ( ! $token ) {
				throw new Exception( '00027' );
			}
			if ( ! $passCode ) {
				throw new Exception( '00050' );
			}

			global $wpdb;
			$sql   = 'SELECT * FROM ' . $wpdb->prefix . 'sua_settings WHERE token = %s and action= 7;';
			$query = $wpdb->prepare( $sql, array( $token ) );

			$stored_token = $wpdb->get_row( $query );
			if ( $stored_token === null ) {
				throw new Exception( '00029' );
			} else {

				if ( $stored_token->value == $passCode ) {
					$wpdb->delete( $wpdb->prefix . 'sua_settings', array( 'id' => $stored_token->id ), array( '%d' ) );

					$this->sendEmailNotification( $stored_token->user, '22' );
					$this->setUserAuthCookie( $stored_token->user );

				} else {
					$tokenAttemps = (int) $this->getOptionsVar( 'attemps' )['token'] - 1;
					if ( $stored_token->attemps < $tokenAttemps ) {
						$wpdb->update(
							$wpdb->prefix . 'sua_settings',
							array( 'attemps' => ++ $stored_token->attemps ),
							array( 'id' => $stored_token->id ),
							array( '%d' ),
							array( '%d' )
						);
						throw new Exception( '00051' );
					} else {
						$wpdb->delete( $wpdb->prefix . 'sua_settings', array( 'id' => $stored_token->id ), array( '%d' ) );
						throw new Exception( '00105' );
					}


				}
			}
		} catch ( Exception $e ) {
			wp_send_json_error( array( 'code' => $e->getMessage() ) );
		}
	}

	function gridMultifactorAuthentication() {
		try {
			$token      = $this->getRequestVar( 'token' );
			$gridValues = $this->getRequestVar( 'gridValues' );

			if ( ! $token ) {
				throw new Exception( '00027' );
			}
			if ( ! $gridValues ) {
				throw new Exception( '00047' );
			}

			global $wpdb;
			$sql   = 'SELECT * FROM ' . $wpdb->prefix . 'sua_settings WHERE token = %s and action= 6;';
			$query = $wpdb->prepare( $sql, array( $token ) );

			$stored_token = $wpdb->get_row( $query );
			if ( $stored_token === null ) {
				throw new Exception( '00029' );
			} else {
				if ( $stored_token->value == $gridValues ) {

					$remember = $this->getRequestVar( 'remember' );
					if ( $remember ) {
						$fingerprint = $this->getRequestVar( 'fingerprint' );
						add_user_meta( $stored_token->user, '_SUAMETA_multifactor_authentication_fingerprint', $fingerprint );
					}

					$wpdb->delete( $wpdb->prefix . 'sua_settings', array( 'id' => $stored_token->id ), array( '%d' ) );
					$this->sendEmailNotification( $stored_token->user, '21' );
					$this->setUserAuthCookie( $stored_token->user );

				} else {
					$tokenAttemps = (int) $this->getOptionsVar( 'attemps' )['token'] - 1;
					if ( $stored_token->attemps < $tokenAttemps ) {
						$wpdb->update(
							$wpdb->prefix . 'sua_settings',
							array( 'attemps' => ++ $stored_token->attemps ),
							array( 'id' => $stored_token->id ),
							array( '%d' ),
							array( '%d' )
						);
						throw new Exception( '00048' );
					} else {
						$wpdb->delete( $wpdb->prefix . 'sua_settings', array( 'id' => $stored_token->id ), array( '%d' ) );
						throw new Exception( '00105' );
					}

				}
			}
		} catch ( Exception $e ) {
			wp_send_json_error( array( 'code' => $e->getMessage() ) );
		}
	}

	function recoverySecurityQuestion() {
		try {
			$token  = $this->getRequestVar( 'token' );
			$answer = $this->getRequestVar( 'answer' );

			if ( ! $token ) {
				throw new Exception( '00027' );
			}
			if ( ! $answer ) {
				throw new Exception( '00039' );
			}

			global $wpdb;
			$sql   = 'SELECT * FROM ' . $wpdb->prefix . 'sua_settings WHERE token = %s and action= 4;';
			$query = $wpdb->prepare( $sql, array( $token ) );

			$stored_token = $wpdb->get_row( $query );
			if ( $stored_token === null ) {
				throw new Exception( '00029' );
			} else {
				$answer = $this->getSecurityAnswer( $answer );
				if ( $stored_token->value == $answer ) {
					$wpdb->delete( $wpdb->prefix . 'sua_settings', array( 'id' => $stored_token->id ), array( '%d' ) );
					$token = $this->addToken( $stored_token->user, '5' );
					wp_send_json_success(
						array(
							'code'  => '00038',
							'route' => 'recoveryNewPassword/' . $token
						)
					);
				} else {
					$tokenAttemps = (int) $this->getOptionsVar( 'attemps' )['token'] - 1;
					if ( $stored_token->attemps < $tokenAttemps ) {
						$wpdb->update(
							$wpdb->prefix . 'sua_settings',
							array( 'attemps' => ++ $stored_token->attemps ),
							array( 'id' => $stored_token->id ),
							array( '%d' ),
							array( '%d' )
						);
						throw new Exception( '00040' );
					} else {
						$wpdb->delete( $wpdb->prefix . 'sua_settings', array( 'id' => $stored_token->id ), array( '%d' ) );
						throw new Exception( '00105' );
					}

				}
			}
		} catch ( Exception $e ) {
			wp_send_json_error( array( 'code' => $e->getMessage() ) );
		}
	}

	function recoveryEmail() {
		try {
			$token          = $this->getRequestVar( 'token' );
			$email          = $this->getRequestVar( 'email' );
			$usePrimary     = $this->getRequestVar( 'usePrimary' );
			$actionRecovery = $this->getRequestVar( 'actionRecovery' );

			if ( ! $token ) {
				throw new Exception( '00027' );
			}
			if ( ! $email && ! $usePrimary ) {
				throw new Exception( '00007' );
			}

			global $wpdb;
			$sql   = 'SELECT * FROM ' . $wpdb->prefix . 'sua_settings WHERE token = %s and action=%d;';
			$query = $wpdb->prepare( $sql, array( $token, $actionRecovery ) );

			$stored_token = $wpdb->get_row( $query );
			if ( $stored_token === null ) {
				throw new Exception( '00029' );
			} else {
				if ( $usePrimary ) {
					$wpdb->delete( $wpdb->prefix . 'sua_settings', array( 'id' => $stored_token->id ), array( '%d' ) );
					$user = get_userdata( $stored_token->user );
					$this->addToken( $stored_token->user, $stored_token->action, $user->user_email );
					wp_send_json_success( array( 'code' => '00043' ) );
				} else if ( $stored_token->value == $email ) {
					$wpdb->delete( $wpdb->prefix . 'sua_settings', array( 'id' => $stored_token->id ), array( '%d' ) );
					$this->addToken( $stored_token->user, $stored_token->action, $email );
					wp_send_json_success( array( 'code' => '00044' ) );
				} else {
					$tokenAttemps = (int) $this->getOptionsVar( 'attemps' )['token'] - 1;
					if ( $stored_token->attemps < $tokenAttemps ) {
						$wpdb->update(
							$wpdb->prefix . 'sua_settings',
							array( 'attemps' => ++ $stored_token->attemps ),
							array( 'id' => $stored_token->id ),
							array( '%d' ),
							array( '%d' )
						);
						throw new Exception( '00042' );
					} else {
						$wpdb->delete( $wpdb->prefix . 'sua_settings', array( 'id' => $stored_token->id ), array( '%d' ) );
						throw new Exception( '00105' );
					}


				}
			}
		} catch ( Exception $e ) {
			wp_send_json_error( array( 'code' => $e->getMessage() ) );
		}
	}

	function recoveryNewPassword() {
		try {
			$token    = $this->getRequestVar( 'token' );
			$password = $this->getRequestVar( 'password' );

			if ( ! $token ) {
				throw new Exception( '00027' );
			}
			if ( ! $password ) {
				throw new Exception( '00013' );
			}

			global $wpdb;
			$sql   = 'SELECT * FROM ' . $wpdb->prefix . 'sua_settings WHERE token = %s and action= 5;';
			$query = $wpdb->prepare( $sql, array( $token ) );

			$stored_token = $wpdb->get_row( $query );
			if ( $stored_token === null ) {
				throw new Exception( '00029' );
			} else {
				wp_set_password( $password, $stored_token->user );
				$wpdb->delete( $wpdb->prefix . 'sua_settings', array( 'id' => $stored_token->id ), array( '%d' ) );

				$this->sendEmailNotification( $stored_token->user, '20' );
				wp_send_json_success( array( 'code' => '00041' ) );
			}
		} catch ( Exception $e ) {
			wp_send_json_error( array( 'code' => $e->getMessage() ) );
		}
	}

	function addToken( $user_id, $action, $email = false, $value = null, $keys = null, $ttl = false ) {
		try {
			global $wpdb;
			$token = $this->generateToken();
			if ( ! $ttl ) {
				$tokenTTL = $this->getOptionsVar( 'tokenTTL' );
			} else {
				$tokenTTL = $ttl;
			}

			$wpdb->insert(
				$wpdb->prefix . 'sua_settings',
				array(
					'user'   => $user_id,
					'token'  => $token,
					'value'  => $value,
					'keys'   => $keys,
					'ttl'    => (int) $tokenTTL,
					'action' => $action,
				),
				array( '%d', '%s', '%s', '%s', '%s', '%s' )
			);

			if ( $email ) {
				$this->sendMail( $email, $action, $token, $value );
			}

			return $token;
		} catch ( Exception $e ) {
			wp_send_json_error( array( 'code' => '00036' ) );
		}
	}

	function sendMail( $email, $action, $token = null, $value = null ) {

		$mails = $this->getOptionsVar( 'mails' );
		if ( ! array_key_exists( $action, $mails ) ) {
			return;
		}

		$SUA_page_shortcode = get_option( 'SUA_page_shortcode' );
		if ( ! $SUA_page_shortcode ) {
			return false;
		}

		$suaPage = get_post( $SUA_page_shortcode );
		if( !$suaPage || !has_shortcode( $suaPage->post_content, 'sua' ) ) {
			return false;
		}

		$mail = array(
			'subject' => $mails[ $action ]['subject'],
			'message' => $mails[ $action ]['message'],
		);

		$url = get_permalink( $suaPage->ID );

		if ( $token && strpos( $mail['message'], "{{token}}" ) !== false ) {
			$tokenUrl        = '<a target="_blank" href="' . $url . '/#/verifyToken/' . $action . '/' . $token . '">' . $url . '/#/verifyToken/' . $action . '/' . $token . '</a>';
			$mail['message'] = str_replace( "{{token}}", $tokenUrl, $mail['message'] );
		}
		if ( $value ) {
			if ( strpos( $mail['message'], "{{passcode}}" ) !== false && $action == '7' ) {
				$mail['message'] = str_replace( "{{passcode}}", $value, $mail['message'] );
			}
			if ( strpos( $mail['message'], "{{pincode}}" ) !== false && $action == '10' ) {
				$mail['message'] = str_replace( "{{pincode}}", $value, $mail['message'] );
			}
		}
		wp_mail( $email, $mail['subject'], $mail['message'] );
	}

	function verifyUserStatus( $status, $user_id, $email ) {
		switch ( $status ) {
			case '0':
				return true;
				break;
			case '1':
				throw new Exception( '00025' );
				break;
			case '2':

				global $wpdb;
				$sql   = 'SELECT * FROM ' . $wpdb->prefix . 'sua_settings WHERE user = %d and action=11;';
				$query = $wpdb->prepare( $sql, array( $user_id ) );

				$stored_token = $wpdb->get_row( $query );
				if ( $stored_token !== null ) {
					$this->sendMail( $email, '11', $stored_token->token );
				}

				throw new Exception( '00086' );
				break;
			default:
				throw new Exception( '00026' );
				break;
		}

	}

	function addLocation( $user_id ) {
		$newLocation            = $this->getIpDetails();
		$newLocation['browser'] = $_SERVER['HTTP_USER_AGENT'];
		$newLocation['created'] = date( 'd-m-Y H:i:s' );

		$locations = get_user_meta( $user_id, '_SUAMETA_locations', true );
		$found     = false;

		if ( $locations ) {
			foreach ( $locations as $key => $location ) {
				if ( ( isset( $location['browser'] ) && $location['browser'] == $newLocation['browser'] ) && ( isset( $location['country'] ) && $location['country'] == $newLocation['country'] ) ) {
					$locations[ $key ]['address'] = $newLocation['address'];
					$locations[ $key ]['city']    = $newLocation['city'];
					$locations[ $key ]['created'] = $newLocation['created'];
					update_user_meta( $user_id, '_SUAMETA_locations', $locations );
					$found = true;
					break;
				}
			}
		}

		if ( $found === false ) {
			$locations[] = $newLocation;
			update_user_meta( $user_id, '_SUAMETA_locations', $locations );
		}
	}
	function setUserAuthCookie( $user_id ) {
		$user = get_user_by( 'id', $user_id );

		if ( ! is_user_logged_in() && $user ) {
			update_user_meta( $user_id, '_SUAMETA_authenticate', true );

			wp_clear_auth_cookie();
			wp_set_current_user( $user_id );
			wp_set_auth_cookie( $user_id, true, is_ssl() );
			do_action( 'wp_login', $user->user_login );

			$this->addLocation($user_id);

			update_user_meta( $user_id, '_SUAMETA_login_attempts', 0 );
			update_user_meta( $user_id, '_SUAMETA_pin_attempts', 0 );

			wp_send_json_success( array( 'code' => '00022', 'route' => '/' ) );

		}
		wp_send_json_error( array( 'code' => '00021' ) );

	}

	function getRequestVar( $key ) {
		if ( $this->_requestVars && isset( $this->_requestVars[ $key ] ) ) {
			return $this->_requestVars[ $key ];
		}

		return null;
	}

	function getOptionsVar( $key ) {
		if ( $this->_optionsVars && isset( $this->_optionsVars[ $key ] ) ) {
			return $this->_optionsVars[ $key ];
		}

		return null;
	}

	function sanitizeUser( $username ) {
		if ( preg_match( '/^[a-zA-Z0-9-_]+$/', $username ) ) {
			return strtolower($username);
		}

		return null;
	}

	function sanitizePassword( $password ) {
		if ( preg_match( '/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[ !"#$%&\'()\\*\/+,-.:;<=>?@\[\]^_`{|}~])(([a-z0-9A-Z !"#$%&\'()\\*\/+,-.:;<=>?@\[\]^_`{|}~])\2?(?!\2))+$/', $password ) ) {
			return $password;
		}

		return null;
	}

	function sanitizeToken( $token ) {
		if ( preg_match( '/^[a-zA-Z0-9$-.+!\'(),]+$/', $token ) ) {
			return $token;
		}

		return null;
	}

	function sanitizeGridValues( $gridValues ) {
		$gridValues = implode( ',', $gridValues );
		if ( preg_match( '/^(?:[a-z0-9,]{1},)*[a-z0-9,]{1}$/', $gridValues ) && strlen( $gridValues ) == 7 ) {
			return $gridValues;
		}

		return null;
	}

	function sanitizeKeys( $keys ) {
		if ( preg_match( '/^(?:[a-z0-9-]{3},)*[a-z0-9-]{3}$/', $keys ) ) {
			return $keys;
		}

		return null;
	}

	function sanitizePinCode( $pinCode ) {
		if ( preg_match( '/^[0-9]{4}$/', $pinCode ) ) {
			return $pinCode;
		}

		return null;
	}

	function sanitizePassCode( $passCode ) {
		if ( preg_match( '/^[0-9]{5,6}$/', $passCode ) ) {
			return $passCode;
		}

		return null;
	}

	function sanitizeFirstName( $firstName ) {
		if ( preg_match( '/^[a-zA-Z ]{3,35}$/', $firstName ) ) {
			return $firstName;
		}

		return null;
	}

	function sanitizeLastName( $lastName ) {
		if ( preg_match( '/^[a-zA-Z ]{3,35}$/', $lastName ) ) {
			return $lastName;
		}

		return null;
	}

	function sanitizeQA( $qa ) {
		if ( preg_match( '/^[a-z0-9 ]{10,250}$/', $qa ) ) {
			return $qa;
		}

		return null;
	}

	function sanitizeQuestions( $questions ) {
		if ( preg_match( '/^[0-9|]+$/', $questions ) ) {
			$output = explode( '|', $questions );
			if ( $output == array_unique( $output ) ) {
				return $output;
			}
		}

		return null;
	}

	function sanitizeAnswers( $answers ) {
		$answers = explode( '|', $answers );
		foreach ( $answers as $answer ) {
			if ( ! $this->sanitizeQA( $answer ) ) {
				return null;
			}
		}

		return $answers;
	}

	function sanitizeNotifications( $notifications ) {
		$notifications = explode( ',', $notifications );
		foreach ( $notifications as $key => $notification ) {
			if ( ! is_numeric( $notification ) ) {
				unset( $notifications[ $key ] );
			}
		}

		if ( ! empty( $notifications ) ) {
			return $notifications;
		}

		return array();
	}

	function recaptcha() {
		if(!get_option('SUA_sitekey')) return true;
		$response  = $this->getRequestVar( 'recaptcha' );
		$recaptcha = $this->getOptionsVar( 'recaptcha' );

		if ( $response && $recaptcha ) {
			$request = wp_remote_get( 'https://www.google.com/recaptcha/api/siteverify?secret=' . $recaptcha['secret'] . '&response=' . $response . '&remoteip=' . $this->getIp() );
			if ( ! is_wp_error( $request ) ) {
				$status = json_decode( wp_remote_retrieve_body( $request ) );

				return (bool) $status->success;
			}
		}

		return null;
	}

	function currentUser( $pinCheck = false ) {
		if ( is_user_logged_in() ) {
			$current_user = wp_get_current_user();
			if ( $current_user->ID ) {

				$pinCodeOption = $this->getOptionsVar( 'pinCode' );
				if ( $pinCheck && $pinCodeOption ) {

					$pinCode = $this->getRequestVar( 'pinCode' );
					if ( ! $pinCode ) {
						throw new Exception( '00079' );
					}

					$userPin = get_user_meta( $current_user->ID, '_SUAMETA_pin_code', true );
					if ( $userPin != $pinCode ) {

						$pinCodeAttempts = (int) $this->getOptionsVar( 'attemps' )['pinCode'] - 1;
						$attempts        = (int) get_user_meta( $current_user->ID, '_SUAMETA_pin_attempts', true );

						if ( $attempts < $pinCodeAttempts ) {
							update_user_meta( $current_user->ID, '_SUAMETA_pin_attempts', ++ $attempts );
							throw new Exception( '00081' );
						} else {
							wp_logout();
							throw new Exception( '00082' );
						}
					} else {
						update_user_meta( $current_user->ID, '_SUAMETA_pin_attempts', 0 );
					}
				}

				return $current_user;
			}
		}
		throw new Exception( '00056' );
	}

	function generateToken() {
		return substr( str_shuffle( str_repeat( "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$-.+!'(),", rand( 7, 17 ) ) ), 0, rand( 70, 255 ) );
	}

	function generatePinCode() {
		return str_pad( rand( 0, pow( 10, 4 ) - 1 ), 4, '0', STR_PAD_LEFT );
	}

	function getSecurityAnswer( $answer ) {
		return hash( 'ripemd160', strtolower( $answer ) );
	}

	function checkPassword( $current_user ) {
		$password = $this->getRequestVar( 'password' );

		if ( ! $password ) {
			throw new Exception( '00013' );
		}

		if ( ! wp_check_password( $password, $current_user->data->user_pass, $current_user->ID ) ) {

			$passwordAttemps = (int) $this->getOptionsVar( 'attemps' )['password'] - 1;
			$attempts        = (int) get_user_meta( $current_user->ID, '_SUAMETA_login_attempts', true );
			if ( $attempts < $passwordAttemps ) {
				update_user_meta( $current_user->ID, '_SUAMETA_login_attempts', ++ $attempts );
			} else {
				wp_logout();
				throw new Exception( '00087' );
			}

			throw new Exception( '00071' );
		}
	}


	function getIpDetails() {
		
		$request=wp_remote_get('http://www.geoplugin.net/php.gp?ip='.$this->getIp());

		if ( ! is_wp_error( $request ) ) {

			$geoplugin = unserialize( $request['body'] );

			return array(
				'address' => $geoplugin['geoplugin_request'],
				'city'    => $geoplugin['geoplugin_city'],
				'country' => $geoplugin['geoplugin_countryName']
			);
		}

		return null;
	}

	function getIp() {
		if ( isset( $this->_userIp ) ) {
			return $this->_userIp;
		}

		$server_headers = array(
			'HTTP_CLIENT_IP',
			'HTTP_CF_CONNECTING_IP',
			'HTTP_X_FORWARDED_FOR',
			'HTTP_X_FORWARDED',
			'HTTP_X_CLUSTER_CLIENT_IP',
			'HTTP_FORWARDED_FOR',
			'HTTP_FORWARDED',
			'REMOTE_ADDR'
		);

		if ( function_exists( 'filter_var' ) ) :
			foreach ( $server_headers as $key ) :
				if ( array_key_exists( $key, $_SERVER ) === true ) :
					foreach ( explode( ',', $_SERVER[ $key ] ) as $ip ) :
						$ip = trim( $ip );

						if ( preg_match( '/^::ffff:(\d+\.\d+\.\d+\.\d+)$/', $ip, $matches ) ) {
							$ip = $matches[1];
						}

						if ( $ip == '127.0.0.1' || $ip == '::1' || $this->privateIp( $ip ) ) {
							$this->user_ip = $_SERVER['REMOTE_ADDR'];

							return $_SERVER['REMOTE_ADDR'];
						}

						if ( filter_var( $ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE ) !== false ) :
							$this->user_ip = $ip;

							return $this->user_ip;
						endif;
					endforeach;
				endif;
			endforeach;
		else :
		{
			foreach ( $server_headers as $key ) :
				if ( array_key_exists( $key, $_SERVER ) === true ) :
					foreach ( explode( ',', $_SERVER[ $key ] ) as $ip ) :
						$ip = trim( $ip ); 

						if ( preg_match( '/^::ffff:(\d+\.\d+\.\d+\.\d+)$/', $ip, $matches ) ) {
							$ip = $matches[1];
						}

						if ( $ip == '127.0.0.1' || $ip == '::1' || $this->privateIp( $ip ) ) {
							$this->user_ip = $_SERVER['REMOTE_ADDR'];

							return $_SERVER['REMOTE_ADDR'];
						}

						$this->user_ip = $ip;

						return $this->user_ip;
					endforeach;
				endif;
			endforeach;
		}
		endif;
	}

	function privateIp( $ip ) {
		$pri_addrs = array(
			'10.0.0.0|10.255.255.255',
			'172.16.0.0|172.31.255.255',
			'192.168.0.0|192.168.255.255',
			'169.254.0.0|169.254.255.255',
			'127.0.0.0|127.255.255.255'
		);

		$long_ip = ip2long( $ip );
		if ( $long_ip != - 1 ) {

			foreach ( $pri_addrs AS $pri_addr ) {
				list ( $start, $end ) = explode( '|', $pri_addr );

				if ( $long_ip >= ip2long( $start ) && $long_ip <= ip2long( $end ) ) {
					return true;
				}
			}
		}

		return false;
	}

	function maskEmail( $email, $mask_char = '*', $percent = 80 ) {
		list( $user, $domain ) = preg_split( "/@/", $email );

		$len = strlen( $user );

		$mask_count = floor( $len * $percent / 100 );

		$offset = floor( ( $len - $mask_count ) / 2 );

		$masked = substr( $user, 0, $offset )
		          . str_repeat( $mask_char, $mask_count )
		          . substr( $user, $mask_count + $offset );

		return ( $masked . '@' . $domain );
	}
}

?>