<?php
class Product_Model extends Model_Loader{
   	private $id;
    private $category_id;
    public function set($id=0,$category_id=0){
        $this->id           =   $id;
    	$this->category_id 	=	$category_id;    
    }
    public function Search_product_Action($data){
        $post=array(
            'search'        =>  array(
                'key_search'    =>  $data['search']['key_search'],
                'category_id'   =>  $data['search']['category_id'],
            ),
            'pagination'    =>  array(
                'limit' =>  $data['limit'],
                'page'  =>  $data['page']
            ) 
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, API_CMS.'/product/search-product');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post));
        $response = json_decode(curl_exec($ch));
        return($response);
    }
    public function Get_related_product_Action($data){
        $post=array(
            'product_id'    =>  $this->id,
            'category_id'   =>  $this->category_id,
            'type'          =>  $data['type'],
            'number'        =>  $data['number']
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, API_CMS.'/product/get-related-product');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post));
        $response = json_decode(curl_exec($ch));
        return($response);
    }

    public function Search_Tag_Action($data){
        $post=array(
           'search' => array(
               'key_search' => $data['search']['key_search']
           ),
           'pagination'  => array(
               'limit'   => $data['limit'],
               'page'    => $data['page']
           )
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, API_CMS.'/product/get-product-keyword');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post));
        $response = json_decode(curl_exec($ch));
        return($response);
    }
}
?>