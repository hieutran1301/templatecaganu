<?php 
if ( ! defined('PATH_SYSTEM')) die ('Bad requested!');
class Other_Controller extends Start_up{
    public function Bao_chi_tai_tro_Action(){
        $seo=array(
            'title'         =>  'Báo chí tài trợ',
            'description'   =>  '',
            'keyword'       =>  ''
        );
        $model = $this->model->load('News');
        $model->set(Start_up::$S_query,1);
        $rs_news =$model->load_function($model,'get-list-news');
        if($rs_news->status==true){
            $result    =  array(
                'news'          =>  $rs_news->result->data,
                'pagination'    =>  ''
            );
        }else{
            $result    =  [];
        }
        
        $data=array(
            'seo'           =>  $seo,
            'result'        =>  $result
        );
        $this->view->load('shop/page/list-news',$data);
        $this->view->show();
    }
    public function Hop_tac_kinh_doanh_Action(){
        $seo=array(
            'title'         =>  'Hợp tác kinh doanh',
            'description'   =>  '',
            'keyword'       =>  'hop-tac-kinh-doanh'
        );
        $data=array(
            'seo'           =>  $seo
        );
        $this->view->load('shop/page/hop-tac-kinh-doanh',$data);
        $this->view->show();
    }
    // 404
    public function Page_not_found_Action(){
        $seo=array(
            'title'         =>  'Không tìm thấy trang',
            'description'   =>  '',
            'keyword'       =>  ''
        );
        $data=array(
            'seo'           =>  $seo
        );
        $this->view->load('shop/page/404',$data);
        $this->view->show();
    }
    public function Chinh_Sach_Action(){
        $seo=array(
            'title'         =>  'Chính sách',
            'description'   =>  '',
            'keyword'       =>  ''
        );
        $data=array(
            'seo'           =>  $seo
        );
        $this->view->load('shop/page/policies',$data);
        $this->view->show();
    }
    public function Cau_hoi_thuong_gap_Action(){
        $seo=array(
            'title'         =>  'Câu hỏi thường gặp',
            'description'   =>  '',
            'keyword'       =>  ''
        );
        $data=array(
            'seo'           =>  $seo
        );
        $this->view->load('shop/page/cau-hoi-thuong-gap',$data);
        $this->view->show();
    }
    public function Tra_cuu_don_hang_Action(){
        $seo=array(
            'title'         =>  'Tra cứu đơn hàng',
            'description'   =>  '',
            'keyword'       =>  ''
        );
        $data=array(
            'seo'           =>  $seo
        );
        $this->view->load('shop/page/look-up-orders',$data);
        $this->view->show();
    }
}
?>
