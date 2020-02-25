<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
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
</style>
<body>
<?php 
include 'php/consulta.php';
	 date_default_timezone_set("America/Santiago"); setlocale(LC_ALL, "es_ES"); ?>

<?php $queryConsultar="	SELECT vr.id_venta,estado_venta,fecha_venta,p.codigo_proveedor,v.descuento,estado_venta,DATE(fecha_venta) AS fecha ,total,id_boleta,
	id_cotizacion,id_factura,id_guia,id_tarjeta,vr.cantidad,vr.nombre_producto,vr.codigo_producto FROM
	ventas v INNER JOIN ventas_relacional vr ON vr.id_venta=v.id JOIN productos p ON vr.codigo_producto=p.codigo WHERE fecha_venta BETWEEN '$fecha_inicio 00:00:00' AND '$fecha_termino 23:59:59'";
	
	$detalleVentas=consultar($queryConsultar);

	



?>

<table class="productos">
<thead>
	
</thead>
<tr>
			<td width="10%" class="encabezado-graficos">fecha</td>
			<td width="10%" class="encabezado-graficos">Cod Pro</td>
			<td width="10%" class="encabezado-graficos">Documento</td>
			<td width="10%" class="encabezado-graficos">N°</td>
			<td width="10%" class="encabezado-graficos">tot des</td>
			<td width="10%"class="encabezado-graficos">Repuesto</td>
			<td width="10%" class="encabezado-graficos">Codigo</td>
			<td width="10%" class="encabezado-graficos">Cantidad</td>
			<td width="10%" class="encabezado-graficos">Total</td>
</tr>	
	<tbody>
	
	<?php
	$filasAgregadas= 20 - count($detalleVentas);
	for ($i = 0; $i < count($detalleVentas); $i++) {

		$documento;
		$numero;

		if($detalleVentas[$i]['estado_venta']==1){
			$documento='boleta';
			$numero=$detalleVentas[$i]['id_boleta'];	
		}else if($detalleVentas[$i]['estado_venta']==2){
			$documento='factura';
			$numero=$detalleVentas[$i]['id_factura'];
		}else if($detalleVentas[$i]['estado_venta']==3){
			$documento='guia';
			$numero=$detalleVentas[$i]['id_guia'];
		}else if($detalleVentas[$i]['estado_venta']==4){
			$documento='cotizacion';
			$numero=$detalleVentas[$i]['id_cotizacion'];
		}else if($detalleVentas[$i]['estado_venta']==5){
			$documento='tarjeta';
			$numero=$detalleVentas[$i]['id_tarjeta'];
		}



		echo '<tr>';		
		echo '<td>'.$detalleVentas[$i]['fecha'].'</td>';
		echo '<td>'.$detalleVentas[$i]['codigo_proveedor'].'</td>';
		echo '<td>'.$documento.'</td>';
		echo '<td>'.$numero.'</td>';
		echo '<td>'.$detalleVentas[$i]['descuento'].'</td>';		
		echo '<td>'.$detalleVentas[$i]['nombre_producto'].'</td>';
		echo '<td>'.$detalleVentas[$i]['codigo_producto'].'</td>';
		echo '<td>'.$detalleVentas[$i]['cantidad'].'</td>';
		echo '<td>'.$detalleVentas[$i]['total'].'</td>';		
		echo '</tr>';

	
	?>
	<tr>
			<td colspan="9"></td>
		</tr>
	<?php } ?>
	
	</tbody>
</table>
</body>
</html>