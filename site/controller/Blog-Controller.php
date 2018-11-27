<?php 
if ( ! defined('PATH_SYSTEM')) die ('Bad requested!');
class Blog_Controller extends Start_up{
    public function Blog_Action(){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, API_CMS.'/blog/Get_info_blog');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response = json_decode(curl_exec($ch));
        if($response->status == true){
            $data = array(
                'top_rank'=> $response->result->top_rank,
                'cate_parent'=> $response->result->cate_parent,
                'cate_child'=> $response->result->cate_child,
                'new'=> $response->result->new,
                'css'   => 'main',
                'js'    => 'custom'
            );
            $this->view->load('blog/home',$data);
        }else{

        }
        $this->view->show();
    }

    public function Category_Action()
    {
        $array = explode("-",$_GET['_route_']);
        $count = count(explode("-",$_GET['_route_']));
        $array_count = $count-1;
        $current_page = isset($_GET['page']) ? $_GET['page'] : 1;
        $post = array(
            'category_id' => substr($array[$array_count],1),
            'pagination'    =>  array(
                'limit' =>  10,
                'page'  =>  $current_page
            ),
            'link'  => $_GET['_route_']
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, API_CMS.'/blog/Get_info_category');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post));
        $response = json_decode(curl_exec($ch));
        if($response->status == true){
            $data = array(
                'top'           =>  $response->top,
                'list'          =>  $response->list,
                'cate_name'     =>  $response->cate_name,
                'cate_link'     =>  $response->cate_link,
                'cate_list'     =>  $response->cate_list,
                'title'         =>  $response->title,  
                'pagination'    =>  $response->pagination, 
                'css'           =>  'category',
                'js'            =>  'category'
            );
            $this->view->load('blog/category', $data);
        }else{

        }
        $this->view->show();
    }

    public function Post_Action()
    {
        $array = explode("-",$_GET['_route_']);
        $count = count(explode("-",$_GET['_route_']));
        $array_count = $count-1;
        $post = array(
            'blog'      =>  $array[$array_count]
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, API_CMS.'/blog/Get_info_post');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post));
        $response = json_decode(curl_exec($ch));
        if($response->status == true){
            $data = array(
                'result'    =>  $response->result,
                'top_blog'  =>  $response->top,
                'category'  =>  $response->category,
                'new'       =>  $response->new,
                'css'       =>  'post',
                'js'        =>  'post'
            );
            $this->view->load('blog/post', $data);
        }else{
            $this->view->load('error/404');
        }
        $this->view->show();
    }

    public function Contact_Action(Type $var = null)
    {
        $data = array(
            'css'   => 'contact',
            'js'    => 'contact'
        );
        $this->view->load('blog/contact', $data);
        $this->view->show();
    }
}
?>