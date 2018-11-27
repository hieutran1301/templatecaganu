<?php 
if ( ! defined('PATH_SYSTEM')) die ('Bad requested!');
class Cart_Controller extends Start_up{
    public function Gio_hang_Action(){
    	$seo=array(
    		'title'			=>	'Giỏ hàng',
    		'description'	=>	'',
    		'keyword'		=>	''
    	);
        $data=array(
            'seo'			=>	$seo
        );
        $this->view->load('shop/cart/cart',$data);
        $this->view->show();
    }
    
    public function Dat_hang_Action(){
    	$seo=array(
    		'title'			=>	'Đặt hàng',
    		'description'	=>	'',
    		'keyword'		=>	''
    	);
        $data=array(
            'seo'			=>	$seo
        );
        $this->view->load('shop/cart/order',$data);
        $this->view->show();
    }

    public function Thanh_toan_Action()
    {
        $seo=array(
    		'title'			=>	'Thanh toán',
    		'description'	=>	'',
    		'keyword'		=>	''
    	);
        $data=array(
            'seo'			=>	$seo
        );
        $this->view->load('shop/cart/payment',$data);
        $this->view->show();
    }

    public function Dat_hang_thanh_cong_beta_Action(){
    	$seo=array(
    		'title'			=>	'Đặt hàng',
    		'description'	=>	'',
    		'keyword'		=>	''
    	);
        $data=array(
            'seo'			=>	$seo
        );
        $this->view->load('shop/cart/order-success',$data);
        $this->view->show();
    }
}
?>
