<?php
class Url_Model extends Model_Loader{
    // database connection and table name
    private $tbl_name = "cms_url";
   	private $url;
    public function set($url=''){
    	$this->url 	=	$url;    
    }
    public function Get_type_url_Action (){
        $post=array(
            'url_string'  =>  $this->url
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, API_CMS.'/url/get_url');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post));
        $response = json_decode(curl_exec($ch));
        if($response->status==true){
            $status=true;
            $result=array(
                'messages'  =>  $response->result->messages,
                'data'      =>  $response->result->data
            );
        }else{
            $status=false;
            $result=array(
                'messages'  =>  $response->result->messages,
                'data'      =>  ''
            );
        }
        $data=array(
            'status'    =>  $status,
            'result'    =>  $result
        );
        return($data);
    }
}
?>