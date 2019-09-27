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

 // CARGAR COMUNAS EN EL OP TION SELECT;
 if($tag == 'tipoContacto'){
  $sql = $_POST['sql'];
  $c= new conectar();
  $conect = $c->conexion();
  mysqli_set_charset($conect,"utf8");//PARA MANEJAR LOS ACENTOS Y CARACTERES ESPECIALES DSDE LAS TABLAS MYSQL;
  $result = mysqli_query($conect,$sql) or die ('Consulta fallida :');
  $arreglo_usuario=array();
  echo '<option value="0">Seleccione el tipo de contacto</option>';
    while($fila=mysqli_fetch_array($result)){
        echo '<option value="'.$fila["id"].'">'.$fila["nombre_tipo_contacto"].'</option>';

    }
  mysqli_free_result($result);
  mysqli_close($conect);

}

 // CARGAR tecnicos;
 if($tag == 'tecnicos'){
  $sql = $_POST['sql'];
  $c= new conectar();
  $conect = $c->conexion();
  mysqli_set_charset($conect,"utf8");//PARA MANEJAR LOS ACENTOS Y CARACTERES ESPECIALES DSDE LAS TABLAS MYSQL;
  $result = mysqli_query($conect,$sql) or die ('Consulta fallida :');
  $arreglo_usuario=array();
  echo '<option value="0">Seleccione un tecnico</option>';
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
//cargar modelo
if($tag == 'modelo'){
  $sql = $_POST['sql'];
  $c= new conectar();
  $conect = $c->conexion();
  mysqli_set_charset($conect,"utf8");//PARA MANEJAR LOS ACENTOS Y CARACTERES ESPECIALES DSDE LAS TABLAS MYSQL;
  $result = mysqli_query($conect,$sql) or die ('Consulta fallida :');
  $arreglo_usuario=array();
  echo '<option value="0">Seleccione un modelo</option>';
    while($fila=mysqli_fetch_array($result)){
        echo '<option value="'.$fila["id"].'">'.$fila["modelo"].'</option>';

    }
  mysqli_free_result($result);
  mysqli_close($conect);

}


// CARGAR COMUNAS EN EL OP TION SELECT;
if($tag == 'Contactos'){
  $sql = $_POST['sql'];
  $c= new conectar();
  $conect = $c->conexion();
  mysqli_set_charset($conect,"utf8");//PARA MANEJAR LOS ACENTOS Y CARACTERES ESPECIALES DSDE LAS TABLAS MYSQL;
  $result = mysqli_query($conect,$sql) or die ('Consulta fallida :');
  $arreglo_usuario=array();
 // echo '<option value="0">Seleccione contacto</option>';
    while($fila=mysqli_fetch_array($result)){
        echo '<option value="'.$fila["id_contacto"].'">'.$fila["nombre"].' ('.$fila["nombre_tipo_contacto"].')</option>';

    }
  mysqli_free_result($result);
  mysqli_close($conect);
  echo json_encode($arreglo_usuario);
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

// CARGAR BODEGAS
if($tag == 'bodegas'){
  $sql = $_POST['sql']; 
  $c= new conectar();
  $conect = $c->conexion();  
  mysqli_set_charset($conect,"utf8");//PARA MANEJAR LOS ACENTOS Y CARACTERES ESPECIALES DSDE LAS TABLAS MYSQL;   
  $result = mysqli_query($conect,$sql) or die ('Consulta fallida :');       
  $arreglo_usuario=array();
  echo '<option value="0">Seleccione una bodega</option>';
    while($fila=mysqli_fetch_array($result)){
        echo '<option value="'.$fila["id"].'">'.$fila["nombre"].'</option>';
    
    }
  mysqli_free_result($result);
  mysqli_close($conect);		
    
}


function days_in_month($month, $year)
{
// calculate number of days in a month
echo $month == 2 ? ($year % 4 ? 28 : ($year % 100 ? 29 : ($year % 400 ? 28 : 29))) : (($month - 1) % 7 % 2 ? 30 : 31);

}
if($tag == 'array_de_objetos'){
	$sql = json_encode($_POST['idClientesObjeto'],true);
	$fecha1 = $_POST['fecha1'];
	$fecha2 = $_POST['fecha2'];
}


?>
