<?php
class String_Helper{
    function crypto_rand_secure($min, $max){
        $range = $max - $min;
        if ($range < 1) return $min; // not so random...
        $log = ceil(log($range, 2));
        $bytes = (int) ($log / 8) + 1; // length in bytes
        $bits = (int) $log + 1; // length in bits
        $filter = (int) (1 << $bits) - 1; // set all lower bits to 1
        do {
            $rnd = hexdec(bin2hex(openssl_random_pseudo_bytes($bytes)));
            $rnd = $rnd & $filter; // discard irrelevant bits
        } while ($rnd > $range);
        return $min + $rnd;
    }
    public function create_token($length='20'){
        $token = "";
        $codeAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        $codeAlphabet.= "abcdefghijklmnopqrstuvwxyz";
        $codeAlphabet.= "0123456789";
        $max = strlen($codeAlphabet); // edited
        for ($i=0; $i < $length; $i++) {
            $token .= $codeAlphabet[$this->crypto_rand_secure(0, $max-1)]; 
        }
        return $token;
    }
    public function encryption_string($string,$token){
        $salt=$token;
        $string_salt = hash('sha256', $salt.$string);
        return($string_salt);
    }
    public function vn_str_filter($str){
       $unicode = array(
           'a'=>'á|à|ả|ã|ạ|ă|ắ|ặ|ằ|ẳ|ẵ|â|ấ|ầ|ẩ|ẫ|ậ',
           'd'=>'đ',
           'e'=>'é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ',
           'i'=>'í|ì|ỉ|ĩ|ị',
           'o'=>'ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ',
           'u'=>'ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự',
           'y'=>'ý|ỳ|ỷ|ỹ|ỵ',
           'A'=>'Á|À|Ả|Ã|Ạ|Ă|Ắ|Ặ|Ằ|Ẳ|Ẵ|Â|Ấ|Ầ|Ẩ|Ẫ|Ậ',
           'D'=>'Đ',
           'E'=>'É|È|Ẻ|Ẽ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ',
           'I'=>'Í|Ì|Ỉ|Ĩ|Ị',
           'O'=>'Ó|Ò|Ỏ|Õ|Ọ|Ô|Ố|Ồ|Ổ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ở|Ỡ|Ợ',
           'U'=>'Ú|Ù|Ủ|Ũ|Ụ|Ư|Ứ|Ừ|Ử|Ữ|Ự',
           'Y'=>'Ý|Ỳ|Ỷ|Ỹ|Ỵ',
       );
      foreach($unicode as $nonUnicode=>$uni){
           $str = preg_replace("/($uni)/i", $nonUnicode, $str);
      }
      $str_non_unicode= preg_replace('/[^A-Za-z0-9-]+/', '-', $str);
      return $str_non_unicode;
   }
}
?>