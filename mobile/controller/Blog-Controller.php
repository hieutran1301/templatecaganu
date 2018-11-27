<?php 
if ( ! defined('PATH_SYSTEM')) die ('Bad requested!');
class Blog_Controller extends Start_up{
    public function Blog_Action(){
    	// $seo=array(
    	// 	'title'			=>	'Top 4 trang TMĐT tại Việt Nam - Caganu.com',
    	// 	'description'	=>	'Caganu.com Tập Đoàn Thuong Mại Điện Tử Hàng Đầu Việt Nam. Chi Nhánh Khắp 3 Miền Bắc Trung Nam.',
    	// 	'keyword'		=>	'Caganu,Tập đoàn bán lẻ Caganu,khuyến mãi,voucher,mau hàng online,đặt hàng online'
    	// );
        // $model = $this->model->load('Campain');
        // $data_in=array(
        //     'limit' =>  6,
        //     'page'  =>  1
        // );
        // $rs_deal = $model->load_function($model,'get-hot-deal',$data_in);
        // $data=array(
        // 	'seo'  =>	$seo,
        //     'deal'  =>  array(
        //         'product'   =>  $rs_deal->result->data->product,
        //         'info'      =>  $rs_deal->result->data->info
        //     )
        // );
        $data = array(
            'css'   => 'main',
            'js'    => 'custom'
        );
        $this->view->load('blog/home',$data);
        $this->view->show();
    }

    public function Category_Action()
    {
        $data = array(
            'css'   => 'category',
            'js'    => 'category'
        );
        $this->view->load('blog/category', $data);
        $this->view->show();
    }

    public function Post_Action()
    {
        $data = array(
            'css'   => 'post',
            'js'    => 'post'
        );
        $this->view->load('blog/post', $data);
        $this->view->show();
    }

    public function Contact_Action(Type $var = null)
    {
        $data = array(
            'css'   => 'contact',
            'js'    => 'contact'
        );
        $this->view->load('blog/contact', $data);
        $this->view->show();
    }
}
?>