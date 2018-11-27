<?php
class Manufacturer_Model extends Model_Loader{
   	private $id;
    public function set($id=0){
    	$this->id 	=	$id;    
    }
    public function Get_manufacturer_product_Action($data){
        $post=array(
            'id'   =>  $this->id,
            'pagination'    =>  array(
                'limit' =>  $data['limit'],
                'page'  =>  $data['page']
            ) 
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, API_CMS.'/product/get-list-product-manufacturer');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post));
        $response = json_decode(curl_exec($ch));
        $data=array(
            'status'    =>  $response->status,
            'result'    =>  $response->result->data,
        );
        return($data);
    }
}
?>