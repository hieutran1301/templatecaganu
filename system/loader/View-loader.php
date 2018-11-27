<?php 
class View_Loader
{
    private $__content = array();
    public function load($page_load,$data = array()) 
    { 
        $page = explode("/",$page_load)[0];
        extract($data); 
        ob_start();   
        $content = ob_get_contents();
        ob_end_clean();  
        $this->__content[] = $content;
        // var_dump($page_load);
        if($page=='news'){
        	require_once PATH_APPLICATION . '/view/shop/header.php';
        	require_once PATH_APPLICATION . '/view/'.$page_load.'.php';
        	require_once PATH_APPLICATION . '/view/shop/footer.php';
        }else{
	        require_once PATH_APPLICATION . '/view/'.$page.'/header.php';
	        require_once PATH_APPLICATION . '/view/'.$page_load.'.php';
	        require_once PATH_APPLICATION . '/view/'.$page.'/footer.php';
	    }
    }
    public function show()
    {
        foreach ($this->__content as $html){
            echo $html;
        }
    }
}
?>