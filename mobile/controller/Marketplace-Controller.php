<?php
if ( ! defined('PATH_SYSTEM')) die ('Bad requested!');
class Marketplace_Controller extends Start_up{
    public function Index_Action(){
        $current_page = isset($_GET['page']) ? $_GET['page'] : 1;
        $sort = isset($_GET['sort']) ? $_GET['sort'] : 'popular';
        $category = isset($_GET['category']) ? $_GET['category'] : 0;
        $post=array(
            'marketplace_id'    =>  Start_up::$S_query,
            'pagination'        =>  array(
                'limit' =>  40,
                'page'  =>  $current_page
            ),
            'sort'      =>  $sort,
            'category'  =>  $category
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, API_CMS.'/product/get-list-product-by-marketplace');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post));
        $response = json_decode(curl_exec($ch));
        // var_dump(curl_exec($ch));
        if(isset($response) AND $response->status==true){
            $data=array(
                'seo'   =>  array(
                    'title'         =>  $response->result->data->marketplace->marketplace_name,
                    'description'   =>  '',
                    'keyword'       =>  ''
                ),
                'marketplace'   =>  array(
                    'info'          =>  $response->result->data->marketplace,
                    'total_product' =>  $response->result->data->total_product
                ),
                'product'       =>  $response->result->data->product,
                'images'        =>  $response->result->data->images,
                'category'      =>  $response->result->data->category,
                'pagination'    =>  $response->result->data->pagination
            );
            $this->view->load('shop/marketplace',$data);
        }else{
            echo 'đẩy file 404';
        }
        $this->view->show();
    }
}
?>
