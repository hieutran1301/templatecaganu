<?php 
	if ( ! defined('PATH_SYSTEM')) die ('Bad requested!');
	class Event_Controller extends Start_up{
		public function Event_Action(){

			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL, API_CMS.'/category/Get_category_event');
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			$response = json_decode(curl_exec($ch));
			if($response->status == true){
				$post = array(
					// 'pagination'	=>	array(
					// 	'page'	=>	0,
					// 	'limit'	=>	8
					// ),
					'campaign' => 4
				);
				$ch_pro = curl_init();
				curl_setopt($ch_pro, CURLOPT_URL, API_CMS.'/product-seller/Get_product_landing');
				curl_setopt($ch_pro, CURLOPT_RETURNTRANSFER, true);
				curl_setopt($ch_pro, CURLOPT_POSTFIELDS, http_build_query($post));
				$response_pro = json_decode(curl_exec($ch_pro));
				$data = array(
					'category'	=>	$response->result,
					'product'	=>	$response_pro
				);
				$this->view->load('event/landing-page',$data);
				$this->view->show();
			}else{
				echo 'Page not found';
			}	
		}
	}
?>