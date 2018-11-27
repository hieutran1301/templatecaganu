<?php
class Category_Model extends Model_Loader{
   	private $category_id;
    public function set($category_id=0){
    	$this->category_id 	=	$category_id;    
    }
    public function Get_category_product_Action($data){
        $post=array(
            'category_id'   =>  $this->category_id,
            'pagination'    =>  array(
                'limit' =>  $data['limit'],
                'page'  =>  $data['page']
            ),
            'sort'      =>  $data['sort'],
            'filter'    =>  $data['filter']
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, API_CMS.'/product/get-list-product-category');
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