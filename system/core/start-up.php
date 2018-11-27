<?php 
error_reporting(E_ALL);
ini_set('display_errors', 1);
if ( ! defined('PATH_SYSTEM')) die ('Bad requested!');
class Start_up
{
    // view
    protected $view     = NULL;
    // model
    protected $model    = NULL;
    // library
    protected $library  = NULL;
    // helper
    protected $helper   = NULL;
    
    static $S_Controller;
    static $S_Action;
    static $S_query;
    static $S_page_type;
    public function __construct() 
    {
        //set model
        require_once PATH_SYSTEM . '/loader/Model-loader.php';
        $this->model = new Model_Loader();
        //set view
        require_once PATH_SYSTEM . '/loader/View-loader.php';
        $this->view = new View_Loader();
        //set help
        require_once PATH_SYSTEM . '/loader/Helper-loader.php';
        $this->helper = new Helper_Loader();
    }
    
    public function load($main,$controller,$action,$query='')
    {
        Start_up::$S_Controller   =   $controller;
        Start_up::$S_Action       =   $action;
        $controller_file    =   'Other-Controller';
        $controller_class   =   'Other_Controller';
		$controller_action  =   'Page_not_found_Action';
        Start_up::$S_page_type     =   'page';
        if(!isset($_GET['_route_']) or $_GET['_route_']==''){
            $controller_file    =   'Home-Controller';
            $controller_class   =   'Home_Controller';
            $controller_action  =   'Index_Action';        
            Start_up::$S_page_type     =   'home';
        }else{
            $model_url = $this->model->load('url');
            $model_url->set($_GET['_route_']);
            $return_url		=   $model_url->load_function($model_url,'get-type-url');
            if($return_url['status']==true){
                //Check cột type bảng url chứa 2 tiền tố
                $controller_type    =   $return_url['result']['data'];
                $controller_temp    =   explode("/",$controller_type->type);
                if(count($controller_temp)>=2){
                    $controller_file    =   ucfirst(strtolower($controller_temp[0])).'-Controller';
                    //echo $controller_file;
                    $controller_class   =   str_replace( '-', '_', ucfirst(strtolower($controller_temp[0]))) . '_Controller';
                    $controller_action  =   str_replace( '-', '_', ucfirst(strtolower($controller_temp[1]))) . '_Action';
                    Start_up::$S_query         =   $controller_type->url_query;
                    Start_up::$S_page_type     =   $controller_type->type;
                }else{
                    $controller_temp    =   $return_url['result']['data'];
                    $controller_file    =   ucfirst(strtolower($controller_temp->type)).'-Controller';
                    $controller_class   =   str_replace( '-', '_', ucfirst(strtolower($controller_temp->type))) . '_Controller';
                    if($controller_temp->type!='other' AND $controller_temp->type!='api' AND $controller_temp->type!='searchresults' AND $controller_temp->type!='cart' AND $controller_temp->type!='booking'){
                        $controller_action  =   str_replace( '-', '_', ucfirst(strtolower($action))) . '_Action';
                    }else{
                        $controller_action  =   str_replace( '-', '_', ucfirst(strtolower($controller_temp->url_string))) . '_Action';
                    }
                    Start_up::$S_query         =   $controller_temp->url_query;
                    Start_up::$S_page_type     =   $controller_temp->type;
                }
            }else{
            	$controller_file    =   'Other-Controller';
            	$controller_class   =   'Other_Controller';
            	$controller_action  =   'Page_not_found_Action';
                Start_up::$S_page_type     =   'page';
            }           
        }
        // echo PATH_APPLICATION  .'/controller/' .$controller_file. '.php';
        if (!file_exists(PATH_APPLICATION  .'/controller/' .$controller_file. '.php')){
            die (PATH_APPLICATION.'/controller/'.$controller_file.' file does not exist');
            // $this->view->load('page/updating');
			// $this->view->show();
        }
        require_once PATH_APPLICATION  .'/controller/'. $controller_file .'.php';

        if (!class_exists($controller_class)){
            //die ($controller_class.' Controller Class does not exist');
        }
        $controllerObject = new $controller_class();        
        if ( !method_exists($controllerObject, $controller_action)){
            //die ('function '.$controller_action.' does not exist');
        } 
        $controllerObject->{$controller_action}();    
    }
}
?>