<?php
class News_Model extends Model_Loader{
    // database connection and table name
    private $id;
    private $status;
    public function set($id=0,$status=1){
        $this->id	    =	$id;
        $this->status   =   $status;
    }
	public function Get_list_news_Action(){
        $post=array(
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, API_CMS.'/news/get-list');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post));
        $response = json_decode(curl_exec($ch));
        return($response);
    }
    public function Get_news_Action(){
        $post=array(
            'news_id'   =>  $this->id
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, API_CMS.'/news/get-news');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post));
        $response = json_decode(curl_exec($ch));
        return($response);   
    }
}
?>
