<?php 
if ( ! defined('PATH_SYSTEM')) die ('Bad requested!');
class Page_Controller extends Start_up{
    public function Xac_nhan_Action(){
    	$seo=array(
    		'title'			=>	'Giỏ hàng',
    		'description'	=>	'',
    		'keyword'		=>	''
    	);
        $data=array(
            'seo'			=>	$seo
        );
        $this->view->load('shop/page/check-out',$data);
        $this->view->show();
    }
    public function Dat_hang_thanh_cong_Action(){
        if(isset($_SESSION["order_id"]) and $_SESSION["order_id"]>0){
            $post=array(
                'id'    => $_SESSION["order_id"]  
            );
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, API_CRM.'/order-seller/get-order-checkout');
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post));
            $response = json_decode(curl_exec($ch));
            if($response->status=true){
                $rs_order=array(
                    'messages'  =>  $response->result->messages,
                    'data'      =>  array(
                        'id'            =>  $response->result->data->order_id,
                        'total_temp'    =>  $response->result->data->total,
                        'fee'           =>  $response->result->data->total_fee,
                        'total'         =>  ($response->result->data->total+$response->result->data->total_fee),
                        'total_product' =>  $response->result->data->total_product,
                        'mail'          =>  $response->result->data->order_mail
                    )
                );
            //kiểm tra và gửi mail đến khách hàng
                if(filter_var($response->result->data->order_mail, FILTER_VALIDATE_EMAIL)){
                    $helper_mail    = $this->helper->load('Mail');
                    //$mail_send      =   'killerbee0911@gmail.com';
                    $mail_send      =   $response->result->data->order_mail;
                    $mail_name      =   $response->result->data->order_name;
                    $mail_title     =   'Caganu đã nhận đơn hàng '.$response->result->data->order_id;
                    $data=array(
                        'order_id'      =>  $response->result->data->order_id,
                        'order_date'    =>  $response->result->data->date_add,
                        'order_name'    =>  $response->result->data->order_name,
                        'order_mail'    =>  $response->result->data->order_mail,
                        'order_phone'   =>  $response->result->data->order_phone,
                        'order_address' =>  $response->result->data->order_address,
                        'order_payment' =>  $response->result->data->payment_name,
                        'total_temp'    =>  $response->result->data->total,
                        'fee'           =>  $response->result->data->total_fee,
                        'total'         =>  ($response->result->data->total+$response->result->data->total_fee),
                        'order_fee'     =>  0,
                        'product' =>  $response->result->product,
                    );
                    $mail_content   =   $helper_mail->Content_mail_order($data);
                    $helper_mail->set($mail_send,$mail_name,$mail_title,$mail_content);
                    $rs_mail        =   $helper_mail->Send_mail();
                }
            //kết thúc 
            //kiểm tra và gửi sms đến khách hàng
                if($response->result->data->order_phone!=null){
                    $helper_sms     =   $this->helper->load('Sms');
                //xoá ký tự có dấu trong tên
                    $helper_string  =   $this->helper->load('String');
                    $customer_name  =   $helper_string->vn_str_filter($response->result->data->order_name);
                // kết thúc
                    $sms_phone      =   $response->result->data->order_phone;      
                    //$sms_phone      =   '0974878371';
                    $sms_content = 'Chao '.$customer_name.', Caganu xac nhan thanh cong don hang '.$response->result->data->order_id.'.Phi van chuyen '.$response->result->data->total_fee.'. Tong thanh toan '.($response->result->data->total+$response->result->data->total_fee).'. Hotline ho tro 1900.6983';
                    $helper_sms->set($sms_phone,$sms_content);
                    $rs_sms     =   $helper_sms->Send_sms();
                }
                //huỷ session đóng trang
                unset($_SESSION['order_id']);
            //kết thúc  
            }else{
                $rs_order=array(
                    'messages'  =>  $response->result->messages,
                    'data'      =>  array()
                );
            }
        }else{
            $rs_order=array(
                'messages'  =>  'Không tìm thấy đơn hàng của bạn',
                'data'      =>  array()
            );
        }
        $seo=array(
          'title'			=>	'Đặt hàng thành công',
          'description'	=>	'',
          'keyword'		=>	''
      );
        $data=array(
            'seo'	    =>	$seo,
            'order'     =>  $rs_order
        );
        $this->view->load('shop/page/order-success',$data);
        $this->view->show();
    }
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
                    'key_search'    =>  $_GET['q'],
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
                $this->view->load('shop/page/search-product',$data);
            }else{
                echo 'Lỗi khi tạo dữ liệu 404';
            }
        }else{
            echo 'dữ liệu không có load page 404';
        }
        $this->view->show();
    }
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
            'keyword'       =>  ''
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
    // public function Tag_Action(){
    //     if(isset($_GET['q']) and $_GET['q'] != '' and strlen($_GET['q']) >0)
    //     {
    //         $current_page = isset($_GET['page']) ? $_GET['page'] : 1;

    //         $model = $this->model->load('Product');

    //         $data_in =array(
    //             'search' => array(
    //                 'key_search' => $_GET['q']
    //             ),
    //             'limit'  => 40,
    //             'page'   => $current_page
    //         );
    //         $rs_product = $model->load_function($model,'search_Tag',$data_in);
    //         $seo=array(
    //             'title'         =>  'Tìm kiếm: ' .str_replace('+',' ',$_GET['q']),
    //             'description'   =>  '',
    //             'keyword'       =>  ''
    //         );
            
    //         if($rs_product->status == true)
    //         {
    //             $data=array(
    //                 'seo'       =>$seo,
    //                 'result'    => array(
    //                     'total_product'     => $rs_product->result->data->total_product,
    //                     'product'           => $rs_product->result->data->product,
    //                     'pagination'        => $rs_product->result->data->pagination
    //                 )
    //             );
    //             $this->view->load('shop/tag',$data);
    //         }
    //         else
    //         {
    //             $data=array(
    //                 'seo'       =>$seo,
    //                 'result'    => array(
    //                     'total_product'     => 0,
    //                     'product'           => [],
    //                     'pagination'        => []
    //                 )
    //             );
    //             $this->view->load('shop/tag',$data);
    //         }

    //     }
    //     else{
    //         echo 'Dữ liệu không tìm thấy 404';
    //     }
    //     $this->view->show();
    // }
}
?>
