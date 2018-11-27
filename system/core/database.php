<?php
class Database{
    // specify your own database credentials
    private $host;
    private $db_name;
    private $db_user;
    private $db_pass;
    private $conn;
 
    public function __construct($db_host,$db_name,$db_user,$db_password){
        $this->host     = $db_host;
        $this->db_name  = $db_name;
        $this->db_user = $db_user;
        $this->db_pass = $db_password;
    }

    public function getConnection(){ 
        $servername = $this->host;
        $username = $this->db_user;
        $password = $this->db_pass;
        $database = $this->db_name;

        try {
            $this->conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
            // set the PDO error mode to exception
            $this->conn->exec("set names utf8");
            $this->conn->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, true);
        }
        catch(PDOException $e){
            echo "Connection failed: " . $e->getMessage();
        }
        return $this->conn;
    }
}
?>