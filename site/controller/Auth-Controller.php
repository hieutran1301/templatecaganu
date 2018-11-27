<?php 
if ( ! defined('PATH_SYSTEM')) die ('Bad requested!');
class Auth_Controller extends Start_up{
    public function Index_Action(){
    	$seo=array(
    		'title'			=>	'Giỏ hàng',
    		'description'	=>	'',
    		'keyword'		=>	''
    	);
        $data=array(
            'seo'			=>	$seo
        );
        $this->view->load('shop/auth/auth',$data);
        $this->view->show();
    }
}
?>
