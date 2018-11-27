<?php 
if ( ! defined('PATH_SYSTEM')) die ('Bad requested!');
class Api_Controller extends Start_up{
    public function Get_city_Action(){
    	$id	= 0;
    	if(isset($_POST['id'])){
    		$id	=	$_POST['id'];
    	}
    	$post=array(
    		'id'	=>	$id
    	);
    	$ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, API_CMS.'/city/get-list-city');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post));
        $response = json_decode(curl_exec($ch));
        $status=$response->status;
        $data=array(
         'status'	=>	$status,
         'result'	=>	array(
            'messages'	=>	$response->result->messages,
            'data'		=>	$response->result->data
        )
     );
        echo(json_encode($data));
    }	
    public function Checkout_Action(){
        /*var_dump($_POST['order_products']);
        var_dump($_POST['phone']);
        var_dump($_POST['gender']);
        var_dump($_POST['fullname']);
        var_dump($_POST['mail']);
        var_dump($_POST['noted']);
        var_dump($_POST['payment']);*/
        if(
            isset($_POST['order_products']) AND
            isset($_POST['phone']) AND
            isset($_POST['gender']) AND
            isset($_POST['fullname']) AND
            isset($_POST['mail']) AND
            isset($_POST['noted']) AND
            isset($_POST['payment'])
        ){
            $array_card=$_POST['order_products'];
            $customer_id=0;
            $order_phone=preg_replace('/\s+/', '', $_POST['phone']);
            $utm_source='';
            $utm_medium='';
            $utm_campaign='';
            $utm_referer='';
            $affiliate_id=0;
            $affiliate_commission=0;
            $voucher_sale=0;
            $device='PC/Laptop';
            $warehouse_id=0;
            $post = array(
                'order' =>   array(
                    'customer_id'   =>  $customer_id,
                    'gender'        =>  $_POST['gender'],
                    'phone'         =>  $order_phone,
                    'name'          =>  $_POST['fullname'],  
                    'mail'          =>  $_POST['mail'],
                    'address'       =>  $_POST['address'],  
                    'noted'         =>  $_POST['noted'],  
                    'city'          =>  $_POST['city_id'],   
                    'county'        =>  $_POST['county_id'], 
                    'commune'       =>  $_POST['commune_id'],
                    'payment_id'    =>  $_POST['payment'],
					'device' => 0
                ),
                'card'  =>  $_POST['order_products'],
                'utm'           =>  array(
                    'utm_source'  =>    $utm_source,
                    'utm_medium'    =>  $utm_medium,
                    'utm_campaign'  =>  $utm_campaign,
                    'utm_referer'   =>  $utm_referer
                ),
                'affiliate' =>  array(
                    'id'            =>  $affiliate_id,
                    'commission'    =>  $affiliate_commission
                ),
                'voucher_sale'   => 1,
            );
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, API_CRM.'/order-seller/insert-test');
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post));
			var_dump(curl_exec($ch));
            //$response   =   json_decode(curl_exec($ch));
            //$status =   $response->status;
            /*if($status==true){
                $_SESSION["order_id"] = $response->result->data;
                $cookie_name = "customer_order";
                setcookie('address', $_POST['address'], time() + (86400 * 30), "/"); // 86400 = 1 day
                setcookie('name', $_POST['fullname'], time() + (86400 * 30), "/"); // 86400 = 1 day
                setcookie('phone', $order_phone, time() + (86400 * 30), "/"); // 86400 = 1 day
                setcookie('mail', $_POST['mail'], time() + (86400 * 30), "/"); // 86400 = 1 day
            }
            $result =   array(
                'messages'  =>  $response->result->messages,
                'data'      =>  $response->result->data
            );
            $data=array(
                'status'    =>  $status,
                'result'    =>  $result
            );
            echo(json_encode($data));*/
        }else{
            echo '404';
        }
    }
    public function Find_order_Action(){
        $data = array(  
            'phone'         =>$_POST['txt_phone'],            
            'package_sku'   =>$_POST['orders_id']
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, API_CRM.'/order-seller/search-order-by-phone');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
        $response = json_decode(curl_exec($ch));
        if(!empty($response) and isset($response->result->data)){
            $status = $response->status;
            $result = array(
                'messages'      =>   $response->result->messages,
                'data'          =>   $response->result->data
            );
        }
        $data=array(
            'status'    =>  $status,
            'result'    =>  $result
        );
        echo(json_encode($data)); 
    }
    public function Search_product_Action(){
        if(isset($_POST['txt_search']) and $_POST['txt_search']!='' and strlen($_POST['txt_search'])>0){
            if(isset($_POST['category_id']) AND is_numeric($_POST['category_id'])){
                $category_id=$_POST['category_id'];
            }else{
                $category_id=0;
            }

            $current_page = 1;

            $model = $this->model->load('Product');

            $data_in=array(
                'search'  =>  array(
                    'key_search'    =>  $_POST['txt_search'],
                    'category_id'   =>  $category_id
                ),
                'limit' =>  10,
                'page'  =>  $current_page
            );
            $rs_product = $model->load_function($model,'search-product',$data_in);
            $status=$rs_product->status;
            if($rs_product->status==true){
                $result=array(
                    'messages'  =>  $rs_product->result->messages,
                    'data'      =>  array(
                        'total_product' =>  $rs_product->result->data->total_product,
                        'product'       =>  $rs_product->result->data->product
                    )
                );
            }else{
                $result=array(
                    'messages'  =>  'Không tìm thấy dữ liệu',
                    'data'      =>  array(
                        'total_product' =>  0,
                        'product'       =>  []
                    )
                );
            }
        }else{
            $status=false;
            $result=array(
                'messages'  =>  'Từ khoá tìm kiếm không hợp lệ',
                'data'      =>  array(
                    'total_product' =>  0,
                    'product'       =>  []
                )
            );
        }
        $data=array(
            'status'    =>  $status,
            'result'    =>  $result
        );
        echo(json_encode($data)); 
    }
    public function Thumb_Action(){
        // Content type
        //header('Content-Type: image/jpeg');
        if(isset($_GET['file'])){
        // The file
            $filename = $_GET['file'];
            $i_w = $_GET['w'];
            $i_h = $_GET['h'];
            $temp_file=(getimagesize($filename));
            //var_dump($temp_file);
            $mime   = $temp_file['mime'];
            if($temp_file){
                list($width, $height) = getimagesize($filename);
                $arr = array('h' => $height, 'w' => $width);
                if($arr['h'] == $arr['w']){
                    //readfile($_GET['file']);
                    if($mime=='image/jpeg'){
                        $image = imagecreatefromjpeg($filename);
                    }elseif($mime=='image/png'){
                        $image = imagecreatefrompng($filename);
                    }else{
                        $image = imagecreatefromjpeg($filename);
                    }
                    $new_image = imagecreatetruecolor($i_w, $i_h);
                    imagecopyresampled($new_image, $image, 0, 0, 0, 0, $i_h, $i_h, $arr['w'], $arr['h']);
                    ImageJpeg ($new_image,null,100); //display
                }else{
                    
                    // Get new dimensions
                    if($arr['h'] >= $arr['w']){
                        $new_height = $i_h;
                        $new_width = $i_h*$arr['w']/$arr['h'];
                        $a_x=($i_w-$new_width)/2;
                        $a_y=0;
                    }else{
                        $new_width = $i_w;
                        $new_height = $i_w*$arr['h']/$arr['w'];
                        $a_x=0;
                        $a_y=($i_h-$new_height)/2;
                    }
                    $background = imagecreatetruecolor($i_w,$i_h);
                    $whiteBackground = imagecolorallocate($background, 0, 0, 0); 
                    imagefill($background,0,0,$whiteBackground); 
                    // fill the background with white
                    // Resample
                    //$image_p = imagecreatetruecolor($new_width, $new_height);
                    if($mime=='image/jpeg'){
                        $image = imagecreatefromjpeg($filename);
                    }elseif($mime=='image/png'){
                        $image = imagecreatefrompng($filename);
                    }else{
                        $image = imagecreatefromjpeg($filename);
                    }
                    imagecopyresampled($background, $image, $a_x, $a_y, 0, 0, $new_width, $new_height, $width, $height);
                    // Output
                    ImageJpeg ($background,null,100); //display
                }  
            }else{
                echo 'không load được ảnh';
            }
        }else{
            echo 'không tìm thấy ';
        }
    }   
}
?>