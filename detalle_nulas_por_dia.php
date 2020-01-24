<!-- <?php error_reporting(0); ?> -->

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ventas nulas</title>
</head>
<style>
table,
th,
td {
	border-collapse: collapse;
}

/* añadimos borde a la tabla y ancho de la pagina*/

table {
	border: 1px solid black;
	width: 90%;
	line-height: 1.5;
	padding-top: 5px;
	padding-bottom: 5px;
}

table.productos {
	border: 0px;
	font-family: Arial, Helvetica, sans-serif;
	font-size: .8em;
	text-align: center;
}

table.productos > thead > tr > th {
	color: #FFF;
	background-color: #1F497D !important;
	border-color: 1px solid #1F497D;

}

table.productos > thead > tr > th,
table.productos > tbody > tr > td,
table.productos > tbody > tr > th {
	border: 1px solid black;
}


table.productos > tbody > td,
table.productos > th {
	text-align: center;

}

.encabezado-graficos{  
  background: rgb(225, 229, 235);
}
.fecha-clas{
color:#000;
margin:0 0 25px;
position:absolute;

}
.estado-clas{
	color:#000;	
	padding:0 2em;
}
.des-clas{
	color:#000;	
	padding:0 0 -5em;
	
}
.ocultar_fila{
    display:none;
}
.limpiar{
    display:none;  
}
</style>
<body>
<?php 
include 'php/consulta.php';
	 date_default_timezone_set("America/Santiago"); setlocale(LC_ALL, "es_ES"); ?>

<?php $queryConsultar="SELECT vr.id_venta,estado_venta,fecha_venta,descuento,estado_venta,DATE(fecha_venta) AS fecha ,total,id_boleta,
    IF(nula_boleta=1,TRUE,FALSE) AS nulaBoleta ,IF(nula_factura=1,TRUE,FALSE) AS nulaFactura,IF(nula_guia=1,TRUE,FALSE) AS nulaGuia,IF(nula_tarjeta=1,TRUE,FALSE) AS nulaTarjeta,nula_boleta,nula_factura,nula_guia,nula_tarjeta,
	id_cotizacion,id_factura,id_guia,id_tarjeta,vr.cantidad,vr.nombre_producto,vr.codigo_producto
     FROM ventas v INNER JOIN ventas_relacional vr ON vr.id_venta=v.id WHERE fecha_venta BETWEEN '$fecha_inicio 00:00:00' AND '$fecha_termino 23:59:59'";
   
    
	$detalleVentas=consultar($queryConsultar);

	



?>

<table class="productos">
<thead>
	
</thead>
<tr>
			<td width="10%" class="encabezado-graficos">fecha</td>
			<td width="10%" class="encabezado-graficos">Documento</td>
            <td width="10%" class="encabezado-graficos">Estado</td>
			<td width="10%" class="encabezado-graficos">Nro</td>
			<td width="10%" class="encabezado-graficos">total desc</td>
			<td width="10%"class="encabezado-graficos">Repuesto</td>
			<td width="10%" class="encabezado-graficos">Codigo</td>
			<td width="10%" class="encabezado-graficos">Cantidad</td>
			<td width="10%" class="encabezado-graficos">Total</td>
</tr>	
	<tbody>
	
	<?php
    
    function getColor($nula){

        if($nula==1){
            return "danger";
        }

    }

	for ($i = 0; $i < count($detalleVentas); $i++) {

		$documento;
		$numero;
        $estado='1';
        $fecha;
        $numero;
        $descuento;
        $nombreProducto;
        $codigo;
        $cantidad;
        $total;
        $getColor=getColor($detalleVentas[$i]['nulaBoleta']);

       
		if($detalleVentas[$i]['nula_boleta']==2){
            if($detalleVentas[$i]['estado_venta']==1){
                
                $estado='Nula';  
                $documento='boleta';
                $numero=$detalleVentas[$i]['id_boleta'];
                $fecha=$detalleVentas[$i]['fecha'];
                $descuento=$detalleVentas[$i]['descuento'];
                $nombreProducto=$detalleVentas[$i]['nombre_producto'];
                $codigo=$detalleVentas[$i]['codigo_producto'];
                $cantidad=$detalleVentas[$i]['cantidad'];
                $total=$detalleVentas[$i]['total'];
                echo '<tr'.$getColor.'>';		
                echo '<td>'.$fecha.'</td>';
                echo '<td>'.$documento.'</td>';
                echo '<td>'.$estado.'</td>';
                echo '<td>'.$numero.'</td>';
                echo '<td>'.$descuento.'</td>';		
                echo '<td>'.$nombreProducto.'</td>';
                echo '<td>'.$codigo.'</td>';
                echo '<td>'.$cantidad.'</td>';
                echo '<td>'.$total.'</td>';		
                echo '</tr>';
               
            }		
		}else if($detalleVentas[$i]['nula_factura']==2){
            if($detalleVentas[$i]['estado_venta']==2){
                $estado='Nula';  
                $documento='factura';
                $numero=$detalleVentas[$i]['id_factura'];
                $fecha=$detalleVentas[$i]['fecha'];
                $descuento=$detalleVentas[$i]['descuento'];
                $nombreProducto=$detalleVentas[$i]['nombre_producto'];
                $codigo=$detalleVentas[$i]['codigo_producto'];
                $cantidad=$detalleVentas[$i]['cantidad'];
                $total=$detalleVentas[$i]['total'];
                echo '<tr>';		
                echo '<td>'.$fecha.'</td>';
                echo '<td>'.$documento.'</td>';
                echo '<td>'.$estado.'</td>';
                echo '<td>'.$numero.'</td>';
                echo '<td>'.$descuento.'</td>';		
                echo '<td>'.$nombreProducto.'</td>';
                echo '<td>'.$codigo.'</td>';
                echo '<td>'.$cantidad.'</td>';
                echo '<td>'.$total.'</td>';		
                echo '</tr>';
            }
			
		}else if($detalleVentas[$i]['nula_guia']==2){
            if($detalleVentas[$i]['estado_venta']==3){
                $estado='Nula';  
                $documento='guia';
                $numero=$detalleVentas[$i]['id_guia'];
                $fecha=$detalleVentas[$i]['fecha'];
                $descuento=$detalleVentas[$i]['descuento'];
                $nombreProducto=$detalleVentas[$i]['nombre_producto'];
                $codigo=$detalleVentas[$i]['codigo_producto'];
                $cantidad=$detalleVentas[$i]['cantidad'];
                $total=$detalleVentas[$i]['total'];
                echo '<tr>';		
                echo '<td>'.$fecha.'</td>';
                echo '<td>'.$documento.'</td>';
                echo '<td>'.$estado.'</td>';
                echo '<td>'.$numero.'</td>';
                echo '<td>'.$descuento.'</td>';		
                echo '<td>'.$nombreProducto.'</td>';
                echo '<td>'.$codigo.'</td>';
                echo '<td>'.$cantidad.'</td>';
                echo '<td>'.$total.'</td>';		
                echo '</tr>';
                
            }		
		}else if($detalleVentas[$i]['nula_tarjeta']==2){
            if($detalleVentas[$i]['estado_venta']==5){
                $estado='Nula';  
                $documento='tarjeta';
                $numero=$detalleVentas[$i]['id_tarjeta'];
                $fecha=$detalleVentas[$i]['fecha'];
                $descuento=$detalleVentas[$i]['descuento'];
                $nombreProducto=$detalleVentas[$i]['nombre_producto'];
                $codigo=$detalleVentas[$i]['codigo_producto'];
                $cantidad=$detalleVentas[$i]['cantidad'];
                $total=$detalleVentas[$i]['total'];
                echo '<tr>';		
                echo '<td>'.$fecha.'</td>';
                echo '<td>'.$documento.'</td>';
                echo '<td>'.$estado.'</td>';
                echo '<td>'.$numero.'</td>';
                echo '<td>'.$descuento.'</td>';		
                echo '<td>'.$nombreProducto.'</td>';
                echo '<td>'.$codigo.'</td>';
                echo '<td>'.$cantidad.'</td>';
                echo '<td>'.$total.'</td>';		
                echo '</tr>';
            }

			
		}
		

	
	?>
	<tr>
			<td colspan="9"></td>
		</tr>
	<?php } ?>
	
	</tbody>
</table>
</body>
</html>