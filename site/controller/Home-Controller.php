<?php 
if ( ! defined('PATH_SYSTEM')) die ('Bad requested!');
class Home_Controller extends Start_up{
    public function Index_Action(){
    	$seo=array(
    		'title'			=>	'Top 4 trang TMĐT tại Việt Nam - Caganu.com',
    		'description'	=>	'Caganu.com Tập Đoàn Thuong Mại Điện Tử Hàng Đầu Việt Nam. Chi Nhánh Khắp 3 Miền Bắc Trung Nam.',
    		'keyword'		=>	'Caganu,Tập đoàn bán lẻ Caganu,khuyến mãi,voucher,mau hàng online,đặt hàng online'
    	);
        $model = $this->model->load('Campain');
        $data_in=array(
            'limit' =>  6,
            'page'  =>  1
        );
        $rs_deal = $model->load_function($model,'get-hot-deal',$data_in);
        $data=array(
        	'seo'  =>	$seo,
            'deal'  =>  array(
                'product'   =>  $rs_deal->result->data->product,
                'info'      =>  $rs_deal->result->data->info
            )
        );
        $this->view->load('shop/home',$data);
        $this->view->show();
    }

    public function Login_Action()
    {
        $this->view->load('shop/auth/login');
        $this->view->show();
    }

    public function Register_Action()
    {
        $this->view->load('shop/auth/register');
        $this->view->show();
    }
}
?>