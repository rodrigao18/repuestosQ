<!DOCTYPE html>
<html lang="en">

<head>
	<title>Sistema Repuestos</title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- Main CSS-->
	<link rel="stylesheet" type="text/css" href="css/main.css?vknet28">
	<link rel="stylesheet" type="text/css" href="css/ventas.css?vknet28">
	<!-- Font-icon css-->
	<link rel="stylesheet" type="text/css"href="fontawesome-5.5.0/css/all.min.css">

	<!-- <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
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
<meta name="theme-color" content="#ffffff"> -->
<style>

.fade{
    opacity: 0.3;
	pointer-events : none;
	
  }
  .fade-in{
    opacity: 1; 
    pointer-events : auto ; 
  }

</style>
	
</head>

<body class="app sidebar-mini rtl">
	<!-- Navbar-->
	<?php include "header.php"; ?>
	<?php include "left-menu.php"; ?>
	<!-- Sidebar menu-->
	<div class="app-sidebar__overlay" data-toggle="sidebar"></div>

	<main class="app-content">
		<div class="app-title cabezera-boleta">
			<div>
				<h1><i class="fas fa-calendar"></i> Ver ventas del dia </h1>
				<p>Ver ventas del dia</p>
			</div>
			<ul class="app-breadcrumb breadcrumb side">
				<li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
				<li class="breadcrumb-item">ventas</li>
				
			</ul>
		</div>
		<?php $fecha_actual = date("d-m-Y");?>
		<div class="form-row">
		
		<div class="form-group col-md-6">
		<label>Fecha Inicio</label>
			<input type="date" class="form-control" id="fecha_inicio"  onchange=cargar_ventas_onchange() min="2013-01-01" max="2025-12-31" >
		</div>
	
		<div class="form-group col-md-6">
		<label>Fecha Término</label>
			<input type="date" class="form-control" id="fecha_termino"  onchange=cargar_ventas_onchange() min="2013-01-01" max="2025-12-31" >
		</div>
	</div>

		<!--Codigo responsivo donde tengo la tabla-->
		<div class="row">
			<div class="col-md-12">
				<div class="tile">
					<div class="tile-body">
					<form method="POST" action="imprime_ventas.php" target="_blank">
					<input type="hidden" class="form-control" id="fecha_inicio_text" name="fecha_inicio_text">
		   			<input type="hidden" class="form-control" id="fecha_termino_text" name="fecha_termino_text">
		  			 <button type="submit" class="btn btn-primary"></i>Ver detalle ventas</button>
					 </form>
					 <br>
					 <form method="POST" action="imprime_nulas.php" target="_blank">
					<input type="hidden" class="form-control" id="fecha_inicio_text_nula" name="fecha_inicio_text_nula">
		   			<input type="hidden" class="form-control" id="fecha_termino_text_nula" name="fecha_termino_text_nula">
		  			 <button type="submit" class="btn btn-success"></i>Ver documentos nulos</button>
					 </form>
						<div class="my-3 p-3 bg-white rounded box-shadow">

							<h6 class="border-bottom border-gray pb-2 mb-0 "></h6>
							<br><br>
							<div id="contenido">
								<div id="loading"></div>	
								<div id="salida">
								<div class="my-3 p-3 bg-white rounded box-shadow">
								
								<table class="table table-striped " id="tablaProductos">
								<thead>
								<tr>
                                <th width="10%">Fecha vta.</th>
								<th width="15%">Documento</th>
								<th width="15%">Nro</th>
								<th width="15%">Vendedor</th>
								<th width="10%">Cliente</th>	
								<th width="10%">Neto</th>
								<th width="10%">Iva</th>										
                                <th width="5%">Total</th>					
								
								</tr>
								</thead>
								<tbody id="tablaBody"></tbody>
								<tfoot>								
								<tr>
									<th id="totalVentaCols" style="text-align:left">Total:</th>
									<th></th>
									<th></th>
									<th></th>
									<th></th>
									<th></th>
									
								</tr>
								</tfoot>
								</table>
								</div>
								</div>
							</div>
							</div>
					</div>
				</div>
			</div>
		</div>


	</main>
	<!-- Essential javascripts for application to work-->
	<script src="js/jquery-3.2.1.min.js"></script>
	<script src="js/popper.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/main.js"></script>
	<!-- The javascript plugin to display page loading on top-->
	<script src="js/plugins/pace.min.js"></script>
    <script type="text/javascript" src="js/funciones.js?vknet29"></script>
	<script type="text/javascript" src="js/ventas_por_dia.js?vknet29"></script>
	<script type="text/javascript" src="js/xlsx.full.min.js?vknet29"></script>
	<script type="text/javascript" src="js/plugins/bootstrap-notify.min.js"></script>
	<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
	<?php include "./js/table.php"; ?>

	<script>
	
	var fecha = new Date(); //Fecha actual
	var mes = fecha.getMonth()+1; //obteniendo mes
	var dia = fecha.getDate(); //obteniendo dia
	var ano = fecha.getFullYear(); //obteniendo año
	if(dia<10)
	  dia='0'+dia; //agrega cero si el menor de 10
	if(mes<10)
	  mes='0'+mes //agrega cero si el menor de 10
	let fecha_ini=document.getElementById('fecha_inicio').value=ano+"-"+mes+"-"+dia;
	let fecha_ter=document.getElementById('fecha_termino').value=ano+"-"+mes+"-"+dia;
	console.log(fecha_ini);
   </script>

<!-- 
	<script>
	
	$(document).ready(function() {
  $('tr:not(.header)').hide();

  $('tr.header').click(function() {
    $(this).find('span').text(function(_, value) {
      return value == '-' ? '+' : '-'
    });
    
    $(this).nextUntil('tr.header').slideToggle(100, function() {});
  });
});
	</script> -->


</body>

</html>
