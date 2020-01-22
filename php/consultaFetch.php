<?php

include_once 'conexion.php';
$payload = file_get_contents('php://input');
$data = json_decode($payload,true);

$tag=$data['tag'];
$sql=$data['sql'];

if($tag == 'array_datos'){ arrayDeDatos($sql);} 		//cargar un array de datos;
if($tag == 'crud')     { crud($sql);} 					//cargar un array de datos;
if($tag == 'insert_return_id')     { insertID($sql);} 	//cargar insert que devuelve un ID;
if($tag == 'proveedor'){ cargarSelectProveedor($sql);}  //cargar proveedor en el select;
if($tag == 'categoria'){ cargarSelectCategoria($sql);}  //cargar categoria en el select;
if($tag == 'marca')    {	 cargarSelectMarca($sql);} 	//cargar marca en el select;
if($tag == 'array_region'){ regiones($sql);} 		    //cargar regiones en editar cliente;
if($tag == 'array_provincias'){ provincias($sql);} 		//cargar provincias en editar cliente;
if($tag == 'array_comunas'){ comunas($sql);} 			//cargar comunas en editar cliente;
if($tag == 'array_clientes'){ clientes($sql);} 			//cargar clientes en ventas;



//funciones para consulta SELECT
function arrayDeDatos($sql) {
	$c= new conectar();
	$conect = $c->conexion();
		mysqli_set_charset($conect,"utf8");
	$result = mysqli_query($conect,$sql) or die ('Consulta fallida :');
	$arreglo_usuario=array();
		while($fila=mysqli_fetch_array($result)){array_push($arreglo_usuario,$fila);}
		mysqli_free_result($result);
		mysqli_close($conect);
	echo json_encode($arreglo_usuario);	

	}
//funcion hacer un insert y nos devuelve el Ultimo ID;
function insertID($sql)	{

	  $c= new conectar();
      $conect = $c->conexion();
      mysqli_set_charset($conect,"utf8");
      $result = mysqli_query($conect,$sql) or die ('Consulta fallida :');
	  echo mysqli_insert_id($conect);
      mysqli_close($conect);

}

function crud($sql)	{

	$c= new conectar();
	$conect = $c->conexion();
	mysqli_set_charset($conect,"utf8");
	$result = mysqli_query($conect,$sql) or die ('Consulta fallida :');
	mysqli_close($conect);
	echo $result;

}

//funciones consultas para los select
 function cargarSelectProveedor($sql)	{
	$c= new conectar();
	$conect = $c->conexion();  
		mysqli_set_charset($conect,"utf8");//PARA MANEJAR LOS ACENTOS Y CARACTERES ESPECIALES DSDE LAS TABLAS MYSQL;   
	$result = mysqli_query($conect,$sql) or die ('Consulta fallida :');       
	$arreglo_usuario=array();
		echo '<option value="0">Sin proveedor</option>';
	  	while($fila=mysqli_fetch_array($result)){	echo '<option value="'.$fila["id"].'">'.$fila["nombre"].'</option>'; }
		mysqli_free_result($result);
	mysqli_close($conect);

	}

function cargarSelectCategoria($sql)	{
	$c= new conectar();
	$conect = $c->conexion();  
		mysqli_set_charset($conect,"utf8");//PARA MANEJAR LOS ACENTOS Y CARACTERES ESPECIALES DSDE LAS TABLAS MYSQL;   
	$result = mysqli_query($conect,$sql) or die ('Consulta fallida :');       
	$arreglo_usuario=array();
		echo '<option value="0">Seleccione categoria</option>';
	  	while($fila=mysqli_fetch_array($result)){	echo '<option value="'.$fila["id"].'">'.$fila["nombre_categoria"].'</option>'; }
		mysqli_free_result($result);
	mysqli_close($conect);

	}

function cargarSelectMarca($sql)	     {

	$c= new conectar();
	$conect = $c->conexion();  
		mysqli_set_charset($conect,"utf8");//PARA MANEJAR LOS ACENTOS Y CARACTERES ESPECIALES DSDE LAS TABLAS MYSQL;   
	$result = mysqli_query($conect,$sql) or die ('Consulta fallida :');       
	$arreglo_usuario=array();
		echo '<option value="0">Seleccione categoria</option>';
			while($fila=mysqli_fetch_array($result)){	echo '<option value="'.$fila["id"].'">'.$fila["marca"].'</option>'; }
		mysqli_free_result($result);
	mysqli_close($conect);
	
		}
//*-mostrar las regiones en editar cliente 
function regiones($sql)	     {

	$c= new conectar();
	$conect = $c->conexion();  
		mysqli_set_charset($conect,"utf8");//PARA MANEJAR LOS ACENTOS Y CARACTERES ESPECIALES DSDE LAS TABLAS MYSQL;   
	$result = mysqli_query($conect,$sql) or die ('Consulta fallida :');       
	$arreglo_usuario=array();
		echo '<option value="0">Seleccione región</option>';
			while($fila=mysqli_fetch_array($result)){	echo '<option value="'.$fila["id"].'">'.$fila["nombre"].'</option>'; }
		mysqli_free_result($result);
	mysqli_close($conect);
	
		}
//*-mostrar las provincias en editar cliente 
function provincias($sql)	     {

	$c= new conectar();
	$conect = $c->conexion();  
		mysqli_set_charset($conect,"utf8");//PARA MANEJAR LOS ACENTOS Y CARACTERES ESPECIALES DSDE LAS TABLAS MYSQL;   
	$result = mysqli_query($conect,$sql) or die ('Consulta fallida :');       
	$arreglo_usuario=array();
		echo '<option value="0">Seleccione provincias</option>';
			while($fila=mysqli_fetch_array($result)){	echo '<option value="'.$fila["id"].'">'.$fila["nombre"].'</option>'; }
		mysqli_free_result($result);
	mysqli_close($conect);
	
		}

//*-mostrar las comunas en editar cliente 
function comunas($sql)	     {

	$c= new conectar();
	$conect = $c->conexion();  
		mysqli_set_charset($conect,"utf8");//PARA MANEJAR LOS ACENTOS Y CARACTERES ESPECIALES DSDE LAS TABLAS MYSQL;   
	$result = mysqli_query($conect,$sql) or die ('Consulta fallida :');       
	$arreglo_usuario=array();
		echo '<option value="0">Seleccione comunas</option>';
			while($fila=mysqli_fetch_array($result)){	echo '<option value="'.$fila["id"].'">'.$fila["nombre"].'</option>'; }
		mysqli_free_result($result);
	mysqli_close($conect);
	
		}			

//*-mostrar las los clientes en el select
function clientes($sql)	     {

	$c= new conectar();
	$conect = $c->conexion();  
		mysqli_set_charset($conect,"utf8");//PARA MANEJAR LOS ACENTOS Y CARACTERES ESPECIALES DSDE LAS TABLAS MYSQL;   
	$result = mysqli_query($conect,$sql) or die ('Consulta fallida :');       
	$arreglo_usuario=array();
	
		echo '<option value="0">Sin cliente</option>';
			while($fila=mysqli_fetch_array($result)){
				$cuerpo=substr($fila["rut"],0,-1);				
				$dv=substr($fila["rut"],-1);
				$rutFormateado = $cuerpo ."-".  $dv;	
				echo '<option value="'.$fila["id"].'">'.$fila["nombre"].' ('.$rutFormateado.')</option>'; }
		mysqli_free_result($result);
	mysqli_close($conect);
	
		}	
?>