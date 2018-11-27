<?php
	error_reporting(E_ALL);
	ini_set('display_errors', 1);   
	session_start();
	date_default_timezone_set("Asia/Bangkok");
	define('PATH_SYSTEM', __DIR__ .'/system');
	require (PATH_SYSTEM . '/core/config.php');
	$route = array(
		'controller'  	=> 	'',
		'action'      	=> 	'',
		'query'			=>	''		
	);
	$request = (isset($_GET['_route_']) ? explode('/', $_GET['_route_']) : null);
	$route['controller'] = empty($request[0]) ? CONTROLLER_DEFAULT : $request[0];
	$route['action'] = empty($request[1]) ? ACTION_DEFAULT : $request[1];
	$route['query'] = empty($request[2]) ? QUERY_DEFAULT : $request[2];
	require_once PATH_SYSTEM . '/core/Mobile_Detect.php'; 
	$detect = new Mobile_Detect;
	if ( $detect->isMobile() or $detect->isTablet() or isset($_COOKIE["mobile"]) == true) {
		define('PATH_APPLICATION', __DIR__ .'/mobile');
		define('PATH_APPLICATION_STYLE',  '/public/mobile');	
	}else{
		define('PATH_APPLICATION', __DIR__ .'/site');
		define('PATH_APPLICATION_STYLE',  '/public/site');	
	}
	$main='site';
	require_once PATH_SYSTEM . '/core/start-up.php'; 
	$start_up = new Start_up();
	$start_up->load($main,$route['controller'],$route['action'],$route['query']);
?>