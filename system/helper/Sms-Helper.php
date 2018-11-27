<?php
class Sms_Helper{
    private $authenticateUser   =   'caganu';
    private $authenticatePass   =   'vmg123456';
    private $alias              =   'CAGANU.COM';
    private $phone;
    private $content;
    private $time_send;

    public function set($phone='',$content='',$time_send=''){
        $this->phone        =   $phone;
        $this->content      =   $content;
        $this->time_send    =   $time_send;
    }
    public function Send_sms(){
        $client = new SoapClient("http://brandsms.vn:8018/VMGAPI.asmx?wsdl");        
        $params = array(
            'msisdn'            => $this->phone,
            'alias'             => $this->alias,
            'message'           => $this->content,
            'sendTime'          => $this->time_send,
            'authenticateUser'  => $this->authenticateUser,
            'authenticatePass'  => $this->authenticatePass
        );
        $response = $client->__soapCall('BulkSendSms', array($params));
    }
}
?>
                