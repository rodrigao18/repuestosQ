<!DOCTYPE html>
<html lang="en">

<head>
	<title>Sistema Laptop-pc</title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- Main CSS-->
	<link rel="stylesheet" type="text/css" href="css/main.css?vknet26">
	<!--<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">--> 
	<!-- Font-icon css-->
	<link rel="stylesheet" type="text/css"href="fontawesome-5.5.0/css/all.min.css">
	<link rel="stylesheet" type="text/css" href="css/pdfEstadisticas.css">
	<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">
	<script src="js/jquery-3.2.1.min.js"></script>
</head>

<body class="app sidebar-mini rtl">
	<!-- Navbar-->
	<?php include "header.php"; ?>
	<?php include "left-menu.php"; ?>

	<main class="app-content">

		<div class="app-title">
			<div>
				 <img src="imagenes/logo_laptop-pc.png" alt="">
				<p> versión 1.0</p>
				<?php date_default_timezone_set("America/Santiago"); setlocale(LC_ALL, "es_ES"); ?>
				<?php $fecha =strftime("%d-%m-%Y"); ?>
				<?php echo $fecha; ?>
			</div>
			<ul class="app-breadcrumb breadcrumb">
				<li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
				<li class="breadcrumb-item"><a href="#">RF</a></li>
			</ul>
		</div>
		<?php $fecha_actual = date("d-m-Y");
		// echo date("Y-m-d",strtotime($fecha_actual."- 10 days"));
		?>
		<div class="container" id="graficos">
			<div class="my-3 p-3 rounded box-shadow">
				
			</div>
			<div class="form-row">
				<div class="form-group col-md-6">
				<label>Fecha Inicio</label>
					<input type="date" class="form-control" id="fecha_inicio" onchange=cargar_estadistica_onchange(NIVEL,ID_VENDEDORLOGUEADO) min="2013-01-01" max="2025-12-31" value="<?php echo date("Y-m-d",strtotime($fecha_actual."- 10 days"));?>">
				</div>
				<div class="form-group col-md-6">
				<label>Fecha Término</label>
					<input type="date" class="form-control" id="fecha_termino" onchange=cargar_estadistica_onchange(NIVEL,ID_VENDEDORLOGUEADO) min="2013-01-01" max="2025-12-31" value="<?php echo date("Y-m-d");?>">
				</div>
			</div>

			<div class="row">
				<div class="col-md-12">
					<div class="tile">
						<h3 class="tile-title">Ventas</h3>
						<div id="tablaVentasIndex">
							
							<div id="salidaTablaVendidos">
				<table class="tablaVendedor table-responsive" id="tabla-completa">
				<tr>
				<th class="titulo-tabla-completa" colspan="5">Ventas</th>
				</tr>
				<!--Cotizacion-->
				<tr>
				<th class="encabezado-tabla-comp-coti" width="10%">Fecha inicio</th>
				<th class="encabezado-tabla-comp-coti" width="10%">Fecha término</th>		
				<th id ="nombreVendedor"  class="encabezado-tabla-comp-coti" width="10%">Número de venta</th>
				
				<!--Notas-->  
				
				<!--<th id ="totalNota" class="encabezado-tabla-detalles" width="10%">Vendedor</th>		
				<th class="encabezado-tabla-detalles" width="10%">Clientes </th>-->
				<th class="encabezado-tabla-comp-coti" width="10%">Total venta</th>				        
				<th class="encabezado-tabla-comp-coti" width="10%">Sucursal</th>	
				</tr>
				<tbody id="tabla-body">
				</tbody>
				<tr>
					<td class="encabezado-tabla-comp-coti">&nbsp</td>					
					<td class="encabezado-tabla-comp-coti">&nbsp</td>		
					<td class="encabezado-tabla-comp-coti">&nbsp</td>
					<td class="encabezado-tabla-comp-coti">&nbsp</td>
					<td class="encabezado-tabla-comp-coti">&nbsp</td>
				</tr>		
				</table>
				
							</div>
						</div>
					</div>
				</div>

			</div>

			<div class="row">
				<div class="col-md-12">
					<div class="tile">
						<h3 class="tile-title">Ventas vendedores</h3>
						<div id="graficoBarras">
							<div class="embed-responsive embed-responsive-16by9">
								<canvas class="embed-responsive-item" id="barChartDemo"></canvas>
							</div>
						</div>
					</div>
				</div>

			</div>
			<div class="row">
				<div class="col-md-12">

					<div class="tile">
						<h3 class="tile-title">Ventas mensual</h3>
						<div id="graficoVentasMensual">
							<div class="embed-responsive embed-responsive-16by9">
								<canvas class="embed-responsive-item" id="areaVentasMensual" width="800" height="450"></canvas>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<div class="tile">
						<h3 class="tile-title">Productos mas vendidos</h3>
						<div id="graficoBarrasProductosVendidos">
							<div class="embed-responsive embed-responsive-16by9">
								<canvas class="embed-responsive-item" id="barChartProductos" width="800" height="450"></canvas>
							</div>
						</div>
					</div>
				</div>
			</div>
		<?php echo $copyright ?> 		
	</main>
	<!-- Essential javascripts for application to work-->

	<script src="js/popper.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/main.js"></script>
	<!-- The javascript plugin to display page loading on top-->
	<script src="js/plugins/pace.min.js"></script>
	<script src="js/plugins/Chart.min.js"></script>
	<!-- Page specific javascripts-->
	<!--<script type="text/javascript" src="js/plugins/chart.js"></script>-->
	<script type="text/javascript" src="js/plugins/sweetalert.min.js"></script>
	
	
	<script type="text/javascript" src="js/dashboard.js?vknet28"></script>	
	<script type="text/javascript" src="js/estadistica.js?vknet28"></script>
	<script type="text/javascript" src="js/funciones.js?vknet28"></script>
	<script type="text/javascript" src="js/html2canvas.min.js"></script>
	<script type="text/javascript" src="js/jquery.plugin.html2canvas.js"></script>
	<script type="text/javascript" src="js/guardar_canvas.js?vknet28"></script>
	<script type="text/javascript" src="js/ventas_por_fecha.js?vknet28"></script>
	<script>
		<?php  $fecha  = date("Y-m-d") ?>;
		var fecha_actual_menos = '<?php echo date("Y-m-d",strtotime($fecha."- 10 days")); ?>';
		var fecha_actual = '<?php echo $fecha ?>';
		var ID_VENDEDORLOGUEADO = <?php echo $idVendedor;?>;
		var NIVEL = <?php echo $nivel;?>;
		window.onload = cargar_estadisticas(fecha_actual_menos, fecha_actual, NIVEL, ID_VENDEDORLOGUEADO);

	</script>

</body>

</html>
