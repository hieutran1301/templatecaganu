<?php
if ( ! defined('PATH_SYSTEM')) die ('Bad requested!');
class News_Controller extends Start_up{
	public function Index_Action(){
		$model = $this->model->load('News');
		$model->set(Start_up::$S_query,1);
		$rs_news =$model->load_function($model,'get-news');
		if($rs_news->status==true){
			$seo=array(
				'title'         =>  $rs_news->result->data->title,
				'description'   =>  $rs_news->result->data->description,
				'keyword'       =>  $rs_news->result->data->keyword
			);
			$data=array(
				'seo'       =>  $seo,
				'result'    =>  array(
					'news'       	=>  $rs_news->result->data
				)
			);
			$this->view->load('news/news-detail',$data);
		}else{
			echo 'load page 404';
		}
		$this->view->show();
	}
}
?>