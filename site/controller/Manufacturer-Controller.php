<?php 
if ( ! defined('PATH_SYSTEM')) die ('Bad requested!');
class Manufacturer_Controller extends Start_up{
    public function Index_Action(){
        $current_page = isset($_GET['page']) ? $_GET['page'] : 1;
        $model = $this->model->load('Manufacturer');
        $model->set(Start_up::$S_query);
        $data_in=array(
            'limit' =>  20,
            'page'  =>  $current_page
        );
        $rs_manufacturer = $model->load_function($model,'get-manufacturer-product',$data_in);
        if($rs_manufacturer['status']==true){
            $seo=array(
                'title'         =>  $rs_manufacturer['result']->manufacturer->title,
                'description'   =>  $rs_manufacturer['result']->manufacturer->description,
                'keyword'       =>  $rs_manufacturer['result']->manufacturer->keyword
            );
            $data=array(
                'seo'       =>  $seo,
                'result'    =>  array(
                    'info'          =>  $rs_manufacturer['result']->manufacturer,
                    'product'       =>  $rs_manufacturer['result']->product,
                    'pagination'    =>  $rs_manufacturer['result']->pagination
                )
            );
            $this->view->load('shop/manufacturer/list-manufacturer',$data);    
        }else{
            echo 'lỗi 404';
        }        
        $this->view->show();
    }
}
?>