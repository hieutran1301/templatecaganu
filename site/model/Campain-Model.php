<?php
class Campain_Model extends Model_Loader{
   	private $id;
    public function set($id=0){
    	$this->id 	=	$id;    
    }
    public function Get_hot_deal_Action($data){
        $post=array(
            'pagination'    =>  array(
                'limit' =>  $data['limit'],
                'page'  =>  $data['page']
            ) 
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, API_CMS.'/campaign/get-hot-deal');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post));
        $response = json_decode(curl_exec($ch));
        return($response);
    }
}
?>