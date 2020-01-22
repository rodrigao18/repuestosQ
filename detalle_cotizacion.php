
<?php error_reporting(0); ?>
<!DOCTYPE html>
<html lang="en">

<head>
	<title>Cotización</title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- Main CSS -->
	<link rel="stylesheet" type="text/css" href="css/pdf.css">

</head>

<body>
	<main>
		<?php
	include 'php/consulta.php';
	 date_default_timezone_set("America/Santiago"); setlocale(LC_ALL, "es_ES"); ?>
				<?php $fecha =strftime("%Y-%m-%d"); ?>
				<?php echo $fecha; 
				 $fecha_actual = date("d-m-Y");
                 $time = time();		
	$query = "SELECT nombre,rut,direccion,fono_1 FROM clientes WHERE id=".$idClientePdf;
	$arreglo=consultar($query);

	$queryConsultarReparacion="	SELECT vr.id,vr.codigo_producto,p.codigo_proveedor,id_cliente,p.precio_venta,vr.nombre_producto AS nombre,DATE(v.fecha_venta) AS fecha_venta, vr.cantidad,vr.precio_unitario,vr.total_unitario,vr.id_venta
	FROM ventas_relacional vr INNER JOIN ventas v ON v.id=vr.id_venta JOIN productos p ON p.codigo=vr.codigo_producto WHERE vr.id_venta=$idVenta AND v.estado_venta=$estadoVneta";
	
	$reparacionPdf=consultar($queryConsultarReparacion);


	

	$nombreCliente = $arreglo[0]['nombre'];
	$rutCliente = $arreglo[0]['rut'];
	$direccionCliente = $arreglo[0]['direccion'];
	$celular= $arreglo[0]['fono_1'];

	

	?>

		<!--Codigo responsivo donde tengo la tabla datos cliente-->


		<!-- Encabezado tabla-->
				<table id="cabezera">
					<tbody class="cuerpo-cabezera">
						<tr >
							<td colspan="3" style="height: 5px !important;"> </td>
						</tr>


						<tr>

							<td rowspan="5">
								<h1><span>Repuestos</span></h1>
								<h2>Francia SPA</h2>
								
							</td>

							<td >Repuestos francia  </td>
							<td rowspan="5">
								
								<p>Cotización:
									<?php echo $reparacion; ?>
								</p>
							</td>
						</tr>
						<tr>
							<td>RUT 77.092.248-8</td>
						</tr>
						<tr>
							<td>La concepción 628</td>
						</tr>
						<tr>
							<td>Quillota</td>
						</tr>

						<tr>
							<td>Fono: +569 95919148 - e-mail: repuestosfrancia628@gmail.com</td>
						</tr>


						<tr>
							<td colspan="3" style="height: 5px !important;"></td>
						</tr>
					</tbody>
				</table>

		<!--  datos del cliente tabla -->
		<!-- Encabezado tabla-->
		<table class="cliente">
			<!-- 1 -->
			<tr>
				<td width="50%">
					&nbsp;&nbsp;Cliente:
					<?php if( $nombreCliente==null){echo 'Sin datos';}else{echo $nombreCliente;} ?>
				</td>
				<!-- 2 -->
				<td width="50%">
					&nbsp;&nbsp;Atención :
					<?php //echo $contactoCliente; ?>
				</td>
			</tr>

			<!-- 2 -->
			<tr>
				<td>
					&nbsp;&nbsp;RUT :					
					<?php if( $rutCliente==null){echo 'Sin datos';}else{echo $rutCliente;} ?>
				</td>
				<!-- 2 -->
				<td>
					&nbsp;&nbsp;Fono :
					<?php //echo $celular; ?>
				</td>
			</tr>

			<!-- 2 -->
			<tr>
				<td>
					&nbsp;&nbsp;Dirección:				
					<?php if( $direccionCliente==null){echo 'Sin datos';}else{echo $direccionCliente;} ?>
				</td>
				<!-- 2 -->
				<td>
					&nbsp;&nbsp;Celular:				
					<?php if( $celular==null){echo 'Sin datos';}else{echo $celular;} ?>
				</td>
			</tr>

			<!-- 1 -->
			<tr>
				<td width="50%">
					&nbsp;&nbsp;Giro:
					<?php //echo $giroCliente; ?>
				</td>
				<!-- 2 -->
				<td width="50%">
					&nbsp;&nbsp;Correo:
					<?php //echo $correoContacto; ?>
				</td>
			</tr>
			<!-- 1 -->
			<tr>
				<td width="50%">
					&nbsp;&nbsp;Fecha:
					<?php echo $fecha_actual; ?>
				</td>
				<!-- 2 -->
				<td width="50%">
					&nbsp;&nbsp;Hora:
					<?php echo date("H:i",$time); ?>
				</td>
			</tr>
		</table>



	<!-- tabla productos -->
	<table class="productos">
			<thead>
				<tr>
					<th scope="col" width="10%"> Item </th>
					<th scope="col" width="10%"> Código</th>
					<th scope="col" width="40%"> Nombre</th>
					<th scope="col" width="10%"> Cantidad</th>
					<th scope="col" width="17%"> Precio Unitario</th>
					<th scope="col" width="18%"> Total Unitario</th>
				</tr>
			</thead>
			<tbody>

				<?php
						$query = "SELECT vr.id,vr.codigo_producto,vr.nombre_producto as nombre,vr.cantidad,vr.precio_unitario,vr.total_unitario,vr.id_venta from ventas_relacional vr inner join ventas v on v.id=vr.id_venta join productos p on p.codigo=vr.codigo_producto where vr.id_venta =  $idVenta";

						$sql="SELECT neto, iva, total FROM `ventas` WHERE id='$idVenta'";
						$datosTotal=consultar($sql);
						$arreglo=consultar($query);
						$filasAgregadas= 10 - count($arreglo);
						for ($i = 0; $i < count($arreglo); $i++) {


						   $id=$arreglo[$i][1];
						   $nombre=$arreglo[$i][2];
						   $cantidad=$arreglo[$i]['3'];
						   $precio=$arreglo[$i][4];
						   $total=$arreglo[$i][5];
 							?>

				<tr>
					<th scope="row">
						<?php echo $i+1;?>
					</th>
					<th>
						<?php echo ($id);?>
					</th>

					<td class="nombreProducto">
						<?php echo $nombre;?>
					</td>
					<td>
						<?php echo number_format($cantidad);?>
					</td>
					<td>
						<?php echo number_format($total);?>
					</td>
					<td>
						<?php echo number_format($precio);?>
					</td>
				</tr>
				<?php } ?>
				<?php	for ($i = 0; $i< $filasAgregadas; $i++) {
 			?>
				<tr id="filaAgregada">
					<th scope="row">
					</th>
					<th>
					</th>
					<td></td>
					<td>&nbsp;</td>
					<td></td>
					<td></td>
				</tr>
				<?php	}	?>

				<tr>
					<td colspan="4" class="sinBordes"></td>
					<td class="sinBordes total">Neto $ &nbsp;</td>
					<td>
						<?php echo number_format($datosTotal[0][0]);?>
					</td>
				</tr>
				<tr>
					<td colspan="4" class="sinBordes"></td>
					<td class="sinBordes total">iva $ &nbsp;</td>
					<td>
						<?php echo number_format($datosTotal[0][1]);?>
					</td>
				</tr>
				<tr>
					<td colspan="4" class="sinBordes"></td>
					<td class="sinBordes total">Total $ &nbsp;</td>
					<td>
						<?php echo number_format($datosTotal[0][2]);?>
					</td>
				</tr>

			</tbody>
		</table>
		<!-- termino de productos -->

		<!-- TABLA TOTALNETO-->

		<footer>
			<div class="datos-despacho">
				<p>Contacto despacho : ............................................................... Fono : .............................................................<p>
						<p>Condiciones de pago : .....................................................................................................................................<p>
			</div>
			<div class="datos-despacho2">
				<p>Observaciones : ...............................................................................................................................................<p>
						<p>Despachar a : ...................................................................................................................................................<p>
			</div>
			<div class="firma">
				<p>FIRMA CLIENTE .......................................... &nbsp; V°B° AUTORIZA VENTA .......................................... </p>
			</div>
		</footer>

	</main>

</body>


</html>
