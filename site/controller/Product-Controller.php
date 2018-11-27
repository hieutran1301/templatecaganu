<?php 
if ( ! defined('PATH_SYSTEM')) die ('Bad requested!');
class Product_Controller extends Start_up{
    public function Index_Action(){
        $model = $this->model->load('Product');
        $model->set(Start_up::$S_query);
        $post=array(
            'product_id'    =>  Start_up::$S_query
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, API_CMS.'/product/get-product');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post));
        $response = json_decode(curl_exec($ch));
        if($response->status==true){
            $seo=array(
                'title'         =>  $response->result->info->title,
                'description'   =>  $response->result->info->description,
                'keyword'       =>  $response->result->info->keyword
            );
            $category_related=end($response->result->category);
            $model->set(Start_up::$S_query,$category_related->category_id);
            $data_related=array(
                'type'      =>  'category',
                'number'    =>  10
            );
            $rs_related = $model->load_function($model,'get-related-product',$data_related);
            $result=array(
                'seo'       =>  $seo,
                'product'   =>  $response->result,
                'related'   =>  $rs_related->result->data
            );
            $this->view->load('shop/product/product-info',$result);
        }else{
            $this->view->load('shop/page/404');
        }
        $this->view->show();
    }
}
?>