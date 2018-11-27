<?php 
if ( ! defined('PATH_SYSTEM')) die ('Bad requested!');
class Home_Controller extends Start_up{
    public function Index_Action(){
        setcookie("mobile", true);
        $this->view->load('shop/home');
        $this->view->show();
    }
	public function Login_Action(){
        if(isset($_POST["AJAX"]) && $_POST["AJAX"]=="login"){
            
            if(isset($_POST["accounts"]) && isset($_POST["passwords"])){
                if(is_numeric($_POST["accounts"])){
                    $result =  $this->callAPI(array(
                        "phone" => $_POST["accounts"],
                        "password" => $_POST["passwords"]
                    ),"auth/login");
                    $dataResult =  json_decode($result);
                    var_dump($result);
                    /*$message = array(
                            "status" => $dataResult->status,
                            "message" => $dataResult->result->messages,
                            //"message" => $dataResult->result->data->user_id
                    );
                    print json_encode($message);*/
                }else{
                    $result =  $this->callAPI(array(
                        "email" => $_POST["accounts"],
                        "password" => $_POST["passwords"]
                    ),"auth/login");
                    $dataResult =  json_decode($result);
                    var_dump($result);
                }
            }
        }else{
            $this->view->load('shop/login');
            $this->view->show();
        }
    }
    
    public function Register_Action()
    {
        if(isset($_POST["AJAX"]) && $_POST["AJAX"]=="register"){
            if(isset($_POST["phone"]) && isset($_POST["fullname"]) && isset($_POST["password"]) && isset($_POST["repassword"])){
                if($_POST["password"]==$_POST["repassword"]){
                    if(is_numeric($_POST["phone"])){
                      $result =  $this->callAPI(array(
                            "fullname" => $_POST["fullname"],
                            "phone" => $_POST["phone"],
                            "password" => $_POST["password"],
                            "otp" => "abcd"
                        ),"auth/register");
                       $dataResult =  json_decode($result);
                       $message = array(
                            "status" => $dataResult->status,
                            "message" => $dataResult->result->messages,
                            //"message" => $dataResult->result->data->user_id
                       );
                       print json_encode($message);
                    }
                }
            }
        }else{
            $this->view->load('shop/register');
            $this->view->show();
        }
    }
    public function callAPI($data,$url){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, API_CMS.'/'.$url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
        return curl_exec($ch);
    }
}