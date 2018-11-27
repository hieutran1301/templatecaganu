<?php 
if ( ! defined('PATH_SYSTEM')) die ('Bad requested!');
class Searchresults_Controller extends Start_up{
    public function Tim_kiem_Action(){
        if(isset($_GET['q']) and $_GET['q']!='' and strlen($_GET['q'])>0){
            if(isset($_GET['c']) AND is_numeric($_GET['c'])){
                $category_id=$_GET['c'];
            }else{
                $category_id=0;
            }

            $current_page = isset($_GET['page']) ? $_GET['page'] : 1;

            $model = $this->model->load('Product');

            $data_in=array(
                'search'  =>  array(
                    'key_search'    =>  ltrim($_GET['q']),
                    'category_id'   =>  $category_id
                ),
                'limit' =>  40,
                'page'  =>  $current_page
            );
            $rs_product = $model->load_function($model,'search-product',$data_in);
            if($rs_product->status==true){
                $seo=array(
                    'title'         =>  'Tìm kiếm: '.str_replace('+', ' ', $_GET['q']),
                    'description'   =>  '',
                    'keyword'       =>  ''
                );
                $data=array(
                    'seo'       =>  $seo,
                    'result'    =>  array(
                        'info'          =>  '',
                        'total_product' =>  $rs_product->result->data->total_product,
                        'product'       =>  $rs_product->result->data->product,
                        'pagination'    =>  $rs_product->result->data->pagination
                    )
                );
                $this->view->load('shop/search-product',$data);
            }else{
                echo 'Lỗi khi tạo dữ liệu 404';
            }
        }else{
            echo 'dữ liệu không có load page 404';
        }
        $this->view->show();
    }
    public function Tag_Action(){
        if(isset($_GET['q']) and $_GET['q'] != '' and strlen($_GET['q']) >0)
        {
            $current_page = isset($_GET['page']) ? $_GET['page'] : 1;

            $model = $this->model->load('Product');

            $data_in =array(
                'search' => array(
                    'key_search' => $_GET['q']
                ),
                'limit'  => 40,
                'page'   => $current_page
            );
            $rs_product = $model->load_function($model,'search_Tag',$data_in);
            $seo=array(
                'title'         =>  'Tìm kiếm: ' .str_replace('+',' ',$_GET['q']),
                'description'   =>  '',
                'keyword'       =>  ''
            );
            
            if($rs_product->status == true)
            {
                $data=array(
                    'seo'       =>$seo,
                    'result'    => array(
                        'total_product'     => $rs_product->result->data->total_product,
                        'product'           => $rs_product->result->data->product,
                        'pagination'        => $rs_product->result->data->pagination
                    )
                );
                $this->view->load('shop/tag',$data);
            }
            else
            {
                $data=array(
                    'seo'       =>$seo,
                    'result'    => array(
                        'total_product'     => 0,
                        'product'           => [],
                        'pagination'        => []
                    )
                );
                $this->view->load('shop/tag',$data);
            }

        }
        else{
            echo 'Dữ liệu không tìm thấy 404';
        }
        $this->view->show();
    }
}
?>