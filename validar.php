<?php
session_start();
$connect = mysqli_connect("localhost","ventas","rf.2019","laptop-pc");

if(isset($_POST["correo"]) && isset($_POST["contra"])){
  $sucursal=$_POST["sucursal"];
  $correo = mysqli_real_escape_string($connect, $_POST["correo"]);
  $contra = mysqli_real_escape_string($connect, $_POST["contra"]);
  $sql = "SELECT id_vendedor,correoVendedor,nombreVendedor, nivel, activo FROM vendedores WHERE (correoVendedor='$correo') AND passwordVendedor='$contra'";
  mysqli_set_charset($connect,"utf8");
  $result = mysqli_query($connect, $sql);
  $num_row = mysqli_num_rows($result);
  if ($num_row == "1") {
    $data = mysqli_fetch_array($result);

	  	$_SESSION['user'] 			= $data['nombreVendedor'];
	  	$_SESSION['correo'] 		= $data["correoVendedor"];
		$_SESSION['idVendedor']		= $data["id_vendedor"];
		$_SESSION['nivel']			= $data["nivel"];
    $_SESSION['sucursal']=$sucursal;
      if($data["activo"]==1){
        echo "1" ;
      } else {
        echo "3";
      }
          }else{    
            echo "error";
               }  
} else {
  echo "error";
}

?>
