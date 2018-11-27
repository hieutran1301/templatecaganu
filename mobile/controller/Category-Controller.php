<?php 
if ( ! defined('PATH_SYSTEM')) die ('Bad requested!');
class Category_Controller extends Start_up{
    public function Index_Action(){
        $current_page = isset($_GET['page']) ? $_GET['page'] : 1;
        $model = $this->model->load('Category');
        $model->set(Start_up::$S_query);
        $key = isset($_GET['sort']) ? $_GET['sort'] : 'product-DESC';
        if($key=='new'){
            $sort_attr=array('product','DESC');
        }elseif($key=='default'){
            $sort_attr=array('total_rank','DESC');
        }elseif($key==''){
            $sort_attr=array('product','DESC');
        }elseif($key=='price-ASC' or $key=='price-DESC'){
            $sort_attr=explode ( '-' , $key);    
        }else{
            $sort_attr=array('product','DESC');
        }
        if(isset($_GET['manufacturer']) and $_GET['manufacturer']>0){
            $manufacturer=$_GET['manufacturer'];
        }else{
            $manufacturer=0;
        }
        if(isset($_GET['marketplace']) and $_GET['marketplace']>0){
            $marketplace=$_GET['marketplace'];
        }else{
            $marketplace=0;
        } 
        $data_in=array(
            'limit' =>  40,
            'page'  =>  $current_page,
            'sort'  =>  array(
                'key'   =>  $sort_attr[0],  
                'type'  =>  $sort_attr[1]
            ),
            'filter'    =>  array(
                'manufacturer'  =>  $manufacturer,
                'marketplace'   =>  $marketplace
            )
        );
        $rs_category = $model->load_function($model,'get-category-product',$data_in);
        if($rs_category['status']==true){
            $seo=array(
                'title'         =>  $rs_category['result']->category->info->title,
                'description'   =>  $rs_category['result']->category->info->description,
                'keyword'       =>  $rs_category['result']->category->info->keyword
            );
            $data=array(
                'seo'       =>  $seo,
                'result'    =>  array(
                    'info'          =>  $rs_category['result']->category->info,
                    'product'       =>  $rs_category['result']->product,
                    'total_product' =>  $rs_category['result']->category->total_page,
                    'pagination'    =>  $rs_category['result']->pagination,
                    'recursive'     =>  $rs_category['result']->category->recursive,
                    'menu'          =>  $rs_category['result']->category->menu,
                    'manufacturer'  =>  $rs_category['result']->category->manufacturer,
                    'marketplace'   =>  $rs_category['result']->category->marketplace,
                )
            );
            $this->view->load('shop/category',$data);    
        }else{
            echo 'lỗi 404';
        }        
        $this->view->show();
        // $this->view->load('shop/category');
        // $this->view->show();
    }
	
}