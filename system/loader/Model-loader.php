<?php 
class Model_Loader
{
    public $conn;
    private $m_controller;
    private $m_file;
    
    public function load($m_load){
        $this->m_controller = ucfirst(strtolower($m_load)).'-Model';
        
        $this->m_class=str_replace( '-', '_', ucfirst(strtolower($m_load))) . '_Model';
        // echo PATH_APPLICATION . '/model/'. $this->m_controller.'.php<br/>';
        if (!file_exists(PATH_APPLICATION . '/model/'. $this->m_controller.'.php')){
            die ('Model File không tồn tại');
        }
 
        require_once PATH_APPLICATION . '/model/'. $this->m_controller.'.php';
        if (!class_exists($this->m_class)){
            die ('Model Class không tồn tại');
        }
        // Khởi tạo controller
        $modelObject = new $this->m_class();
        return($modelObject);
    }
    public function load_function($m_class,$m_action,$query_string=''){
        $m_action=str_replace( '-', '_', ucfirst(strtolower($m_action))) . '_Action';
        if ( !method_exists($m_class, $m_action)){
            die ($m_action.' Model Action không tồn tại');
        }
        return($m_class->{$m_action}($query_string));
    }
}
?>