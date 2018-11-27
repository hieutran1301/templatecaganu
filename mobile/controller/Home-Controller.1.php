<?php 
if ( ! defined('PATH_SYSTEM')) die ('Bad requested!');
class Home_Controller extends Start_up{
    public function Index_Action(){
        $this->view->load('shop/home');
        $this->view->show();
    }
	
}