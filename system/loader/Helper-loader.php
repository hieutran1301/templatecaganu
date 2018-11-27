<?php 
class Helper_Loader{
    public function load($file_name){ 
        $class_helper = str_replace( '-', '_', strtolower($file_name).'_Helper');
        require_once PATH_SYSTEM . '/helper/'. $file_name .'-Helper.php';
        $modelObject = new $class_helper();
        return($modelObject);
    }    
}
?>