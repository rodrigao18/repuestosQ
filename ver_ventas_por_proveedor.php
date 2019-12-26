<!DOCTYPE html>
<html lang="en">

<head>
	<title>Ventas por proveedor</title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- Main CSS-->
	<link rel="stylesheet" type="text/css" href="css/main.css?vknet28">
	<link rel="stylesheet" type="text/css" href="css/ventas.css?vknet28">
	<!-- Font-icon css-->
	<link rel="stylesheet" type="text/css"href="fontawesome-5.5.0/css/all.min.css">	
</head>

<body class="app sidebar-mini rtl">
	<!-- Navbar-->
	<?php include "header.php"; ?>
	<?php include "left-menu.php"; ?>
	<!-- Sidebar menu-->
	<div class="app-sidebar__overlay" data-toggle="sidebar"></div>

	<main class="app-content">
		<div class="app-title cabezera-boleta-proveedor">
			<div>
				<h1><i class="fas fa-truck"></i> Ver ventas agrupadas por proveedor </h1>
				<p>Ver ventas, editar y eliminar</p>
			</div>
			<ul class="app-breadcrumb breadcrumb side">
				<li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
				<li class="breadcrumb-item">ventas</li>
				
			</ul>
		</div>
		<?php $fecha_actual = date("d-m-Y");?>
		<div class="form-row">
		
				<div class="form-group col-md-6">
				<label>Fecha Término</label>
					<input type="date" class="form-control" id="fecha_inicio" onchange=cargar_ventas_onchange() min="2013-01-01" max="2025-12-31" value="<?php echo date("Y-m-d",strtotime($fecha_actual."- 5 days"));?>">
				</div>
			
				<div class="form-group col-md-6">
				<label>Fecha Inicio</label>
					<input type="date" class="form-control" id="fecha_termino" onchange=cargar_ventas_onchange() min="2013-01-01" max="2025-12-31" value="<?php echo date("Y-m-d");?>">
				</div>
			</div>

		<!--Codigo responsivo donde tengo la tabla-->
		<div class="row">
			<div class="col-md-12">
				<div class="tile">
					<div class="tile-body">
						<a style="margin-right: 15px" href="ingresar_productos_nuevos.php" class="btn btn-outline-primary float-right"><i class="icon fa fa-cart-plus"></i>Ingresar productos nuevos</a>
						<div class="my-3 p-3 bg-white rounded box-shadow">

							<h6 class="border-bottom border-gray pb-2 mb-0 ">Ventas</h6>
							<br><br>

								<div id="salida">
								<div class="my-3 p-3 bg-white rounded box-shadow">
								
								<table class="table table-striped " id="tablaProductos">
								<thead>
								<tr>
                                <th width="20%">Proveedor</th>
								<th width="10%">Cod Propio</th>
								<th width="10%">Cod Proveedor</th>	
								<th width="5%">Solicitada</th>
								<th width="20%">Descripcion</th>										
                                <th width="5%">Cantidad</th>	
								<th width="10%">Stock actual</th>	
								<th width="5%">Costo</th>														
												
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


	</main>
	<!-- Essential javascripts for application to work-->
	<script src="js/jquery-3.2.1.min.js"></script>
	<script src="js/popper.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/main.js"></script>
	<!-- The javascript plugin to display page loading on top-->
	<script src="js/plugins/pace.min.js"></script>
    <script type="text/javascript" src="js/funciones.js?vknet29"></script>
	<script type="text/javascript" src="js/ver_ventas_proveedor.js?vknet30"></script>
	<script type="text/javascript" src="js/xlsx.full.min.js?vknet29"></script>
	<script type="text/javascript" src="js/plugins/bootstrap-notify.min.js"></script>
	<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
	<?php include "./js/table.php"; ?>





</body>

</html>
