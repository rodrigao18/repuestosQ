<?php
include_once 'conexion.php';

if(isset($_POST["tag"])){
	$tag=$_POST['tag'];
}else{
	$tag="";
}


//funcion usada para el login
function consultar($sql){
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
  //echo json_encode($arreglo_usuario);
  return $arreglo_usuario;
}

  //CRUD PARA PRODUCTOS INSERT UPDATE Y DELETE;
	if($tag == 'crud_productos'){
      $sql= $_POST['sql'];
      $c= new conectar();
      $conect = $c->conexion();
      mysqli_set_charset($conect,"utf8");
      $result = mysqli_query($conect,$sql) or die ('Consulta fallida :');
      mysqli_close($conect);
      echo $result;
      }


  //MODIFICAR PRODUCTOS NUEVA FUNCION TRAE UN ARRAY DE DATOS  04/07/2018
  if($tag == 'array_de_datos'){
      $sql = $_POST['sql'];
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

	//Funcion que inserta y retorna el id;
	if($tag == 'insert_return_id'){
      $sql= $_POST['sql'];
      $c= new conectar();
      $conect = $c->conexion();
      mysqli_set_charset($conect,"utf8");
      $result = mysqli_query($conect,$sql) or die ('Consulta fallida :');
	  echo mysqli_insert_id($conect);
      mysqli_close($conect);
      }



 // CARGAR tecnicos;
 if($tag == 'proveedor'){
  $sql = $_POST['sql'];
  $c= new conectar();
  $conect = $c->conexion();
  mysqli_set_charset($conect,"utf8");//PARA MANEJAR LOS ACENTOS Y CARACTERES ESPECIALES DSDE LAS TABLAS MYSQL;
  $result = mysqli_query($conect,$sql) or die ('Consulta fallida :');
  $arreglo_usuario=array();
  echo '<option value="0">Seleccione un proveedor</option>';
    while($fila=mysqli_fetch_array($result)){
        echo '<option value="'.$fila["id"].'">'.$fila["nombre"].'</option>';

    }
  mysqli_free_result($result);
  mysqli_close($conect);

}

// CARGAR tipo_equipo;
if($tag == 'tipo_equipo'){
  $sql = $_POST['sql'];
  $c= new conectar();
  $conect = $c->conexion();
  mysqli_set_charset($conect,"utf8");//PARA MANEJAR LOS ACENTOS Y CARACTERES ESPECIALES DSDE LAS TABLAS MYSQL;
  $result = mysqli_query($conect,$sql) or die ('Consulta fallida :');
  $arreglo_usuario=array();
  echo '<option value="0">Seleccione tipo equipo</option>';
    while($fila=mysqli_fetch_array($result)){
        echo '<option value="'.$fila["id"].'">'.$fila["tipo_equipo"].'</option>';

    }
  mysqli_free_result($result);
  mysqli_close($conect);

}
//cargar marca
if($tag == 'marca'){
  $sql = $_POST['sql'];
  $c= new conectar();
  $conect = $c->conexion();
  mysqli_set_charset($conect,"utf8");//PARA MANEJAR LOS ACENTOS Y CARACTERES ESPECIALES DSDE LAS TABLAS MYSQL;
  $result = mysqli_query($conect,$sql) or die ('Consulta fallida :');
  $arreglo_usuario=array();
  echo '<option value="0">Seleccione una marca</option>';
    while($fila=mysqli_fetch_array($result)){
        echo '<option value="'.$fila["id"].'">'.$fila["marca"].'</option>';

    }
  mysqli_free_result($result);
  mysqli_close($conect);

}

if($tag == 'obtener_semana'){
  $obtener_fecha = $_POST['obtener_fecha'];
  obtener_semana($obtener_fecha);
}  
function obtener_semana($fecha)	{
  #separas la fecha en subcadenas y asignarlas a variables
  #relacionadas en contenido, por ejemplo dia, mes y anio.
  $dia   = substr($fecha,8,2);
  $mes = substr($fecha,5,2);
  $anio = substr($fecha,0,4);
  $semana = date('W',  mktime(0,0,0,$mes,$dia,$anio));
  //donde:#W (mayúscula) te devuelve el número de semana
  #w (minúscula) te devuelve el número de día dentro de la semana (0=domingo, #6=sabado) 
  //$dato=days_in_month($mes,$anio);
  echo $mes;
}          

// CARGAR COMUNAS EN EL OP TION SELECT;      
if($tag == 'vendedorAsignado'){
  $sql = $_POST['sql']; 
  $c= new conectar();
  $conect = $c->conexion();  
  mysqli_set_charset($conect,"utf8");//PARA MANEJAR LOS ACENTOS Y CARACTERES ESPECIALES DSDE LAS TABLAS MYSQL;   
  $result = mysqli_query($conect,$sql) or die ('Consulta fallida :');       
  $arreglo_usuario=array();
    echo '<option value="0">Seleccione Un Vendedor</option>';
    while($fila=mysqli_fetch_array($result)){
    echo '<option value="'.$fila["id_vendedor"].'">'.$fila["nombreVendedor"].' </option>';  
    
    }
  mysqli_free_result($result);
  mysqli_close($conect);		
  echo json_encode($arreglo_usuario);  
} 
// CARGAR COMUNAS EN EL OP TION SELECT;      
if($tag == 'cargarVendedores'){
$sql = $_POST['sql'];

  $c= new conectar();
  $conect = $c->conexion();
  mysqli_set_charset($conect,"utf8");
  $result = mysqli_query($conect,$sql) or die ('Consulta fallida :');
  $arreglo_usuario=array();
  echo '<option value="0">Seleccione Un Vendedor</option>';
    while($fila=mysqli_fetch_array($result)){

    echo '<option value="'.$fila["id_vendedor"].'">'.$fila["nombreVendedor"].' </option>';  
    }
  mysqli_free_result($result);
  mysqli_close($conect);		

} 

// CARGAR COMUNAS EN EL OP TION SELECT;      
if($tag == 'categoria'){
  $sql = $_POST['sql']; 
  $c= new conectar();
  $conect = $c->conexion();  
  mysqli_set_charset($conect,"utf8");//PARA MANEJAR LOS ACENTOS Y CARACTERES ESPECIALES DSDE LAS TABLAS MYSQL;   
  $result = mysqli_query($conect,$sql) or die ('Consulta fallida :');       
  $arreglo_usuario=array();
  echo '<option value="0">Seleccione la categoria</option>';
    while($fila=mysqli_fetch_array($result)){
        echo '<option value="'.$fila["id"].'">'.$fila["nombre_categoria"].'</option>';
    
    }
  mysqli_free_result($result);
  mysqli_close($conect);		
    
}
//PARA HACER LA CONSUTA PARA CARGAR LAS REGIONES EN EL SELECT ;
if($tag == 'mostrarRegiones'){
  $query = "SELECT id , nombre FROM regiones"; 
  mostrarRegiones($query);
    
}
//FUNCION QUE ES LLAMADA PARA CARGAR LAS REGIONES EL SELECT OPTION;
function mostrarRegiones($sql){
  $c= new conectar();
  $conect = $c->conexion();  
  mysqli_set_charset($conect,"utf8");//PARA MANEJAR LOS ACENTOS Y CARACTERES ESPECIALES DSDE LAS TABLAS MYSQL;   
  $result = mysqli_query($conect,$sql) or die ('Consulta fallida :');       
  $arreglo_usuario=array();    
   echo '<option value="0">Seleccione Región</option>';
    while($fila=mysqli_fetch_array($result)){              
        echo '<option value="'.$fila["id"].'">'.$fila["nombre"].'</option>';

    }
  mysqli_free_result($result);
  mysqli_close($conect);		

//CARGAR PROVINCIAS EN EL OPTION SELECT;   
  }
  if($tag == 'mostrarProvincias'){
  $id=$_POST['id'];      
  $query = "SELECT id , nombre FROM provincias where idRegion = $id"; 
  mostrarProvincias($query);
    
}
//LLAMADA A LA FUNCIÓN PARA CARGAR LAS PROVINCIAS 
function mostrarProvincias($sql){
  $c= new conectar();
  $conect = $c->conexion();  
  mysqli_set_charset($conect,"utf8");//PARA MANEJAR LOS ACENTOS Y CARACTERES ESPECIALES DSDE LAS TABLAS MYSQL;   
  $result = mysqli_query($conect,$sql) or die ('Consulta fallida :');       
  $arreglo_usuario=array();
   echo '<option value="0">Seleccione Provincia</option>';
    while($fila=mysqli_fetch_array($result)){
        echo '<option value="'.$fila["id"].'">'.$fila["nombre"].'</option>';
    
    }
  mysqli_free_result($result);
  mysqli_close($conect);		

  }
// CARGAR COMUNAS EN EL OP TION SELECT;      
   if($tag == 'mostrarComunas'){
  $id=$_POST['id'];      
  $query = "SELECT id , nombre FROM comunas where idProvincia = $id"; 
  mostrarComunas($query);
    
}
// LLAMADA A LA FUNCTION PARA CARGAR LAS COMUNAS;
function mostrarComunas($sql){
  $c= new conectar();
  $conect = $c->conexion();  
  mysqli_set_charset($conect,"utf8");//PARA MANEJAR LOS ACENTOS Y CARACTERES ESPECIALES DSDE LAS TABLAS MYSQL;   
  $result = mysqli_query($conect,$sql) or die ('Consulta fallida :');       
  $arreglo_usuario=array();
    while($fila=mysqli_fetch_array($result)){
        echo '<option value="'.$fila["id"].'">'.$fila["nombre"].'</option>';
    
    }
  mysqli_free_result($result);
  mysqli_close($conect);		

  }

  // TAG PARA MOSTRAR LOS  CONSUMOS PARA HAER LA CONVERSION DEL ID DE LA CIUDAD Y MOSTRARLA EN LA PÁGINA PRINCIPAL; 
if($tag == 'cargarComunas'){

  $query = "SELECT id,nombre FROM comunas"; 
  cargarComunas($query);
   
}
///LLAMADA AL FUCION PARA HACER LA CONVERCION ....;
function cargarComunas($sql){      
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

  // TAG PARA MOSTRAR CLIENTES EN LA PÁGINA PRINCIPAL;
  if($tag == 'mostrarClientes'){

  $query = "SELECT id_cliente,nombre_cliente,direccion_cliente,telefono_cliente,correo_cliente,ciudad_cliente FROM clientes order by id_cliente DESC"; 
  $result=mostrarDatos($query);	
}


