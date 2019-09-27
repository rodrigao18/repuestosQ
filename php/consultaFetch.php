<?php


include_once 'conexion.php';
$payload = file_get_contents('php://input');
$data = json_decode($payload,true);
//
$tag=$data['tag'];
$sql=$data['sql'];

if($tag=='array_datos'){
	$c= new conectar();
	$conect = $c->conexion();
	mysqli_set_charset($conect,"utf8");
	$result = mysqli_query($conect,$sql) or die ('Consulta fallida :');
	$arreglo_usuario=array();
	  while($fila=mysqli_fetch_array($result)){
	  array_push($arreglo_usuario,$fila);
			}
	mysqli_free_result($result);
	mysqli_close($conect);
	echo json_encode($arreglo_usuario);	
}


?>