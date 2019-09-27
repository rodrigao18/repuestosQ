<?php
class conectar {
    private $servidor="localhost";
    private $usuario="ventas";
    private $bd="laptop-pc";
    private $password="rf.2019";

	public function conexion(){
    $conexion=mysqli_connect($this->servidor,$this->usuario,$this->password,$this->bd );  
    return $conexion;

}

}

?>
