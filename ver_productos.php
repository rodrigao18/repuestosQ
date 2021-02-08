<!DOCTYPE html>
<html lang="en">

<head>
	<title>Sistema Cotización</title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- Main CSS-->
	<link rel="stylesheet" type="text/css" href="css/main.css?vknet28">
	<!-- Font-icon css-->
	<link rel="stylesheet" type="text/css"href="fontawesome-5.5.0/css/all.min.css">
<style>

.color_fila_rojo{
	background-color:rgba(240, 52, 52, 0.3);
}
.color_fila_verde{
	background-color:rgba(77, 175, 124, 0.3);
}
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
		<div class="app-title">
			<div>
				<h1><i class="fa fa-shopping-cart"></i> Ver productos </h1>
				<p>Ver productos, editar y eliminar</p>
			</div>
			<ul class="app-breadcrumb breadcrumb side">
				<li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
				<li class="breadcrumb-item">Productos</li>
				<li class="breadcrumb-item active"><a href="#">Ver productos</a></li>
			</ul>
		</div>



		<!--Codigo responsivo donde tengo la tabla-->
		<div class="row">
			<div class="col-md-12">
				<div class="tile">
					<div class="tile-body">
					<div id="contenido">
						<a style="margin-right: 15px" href="ingresar_productos_nuevos.php" class="btn btn-outline-primary float-right"><i class="icon fa fa-cart-plus"></i>Ingresar productos nuevos</a>
						<div class="my-3 p-3 bg-white rounded box-shadow">

							<h6 class="border-bottom border-gray pb-2 mb-0 ">Productos<span id="cantidad_producto"></span></h6>
							<br><br>

								<div id="salida">
								<div id="loading"></div>
								<div class="my-3 p-3 bg-white rounded box-shadow">
								
								<table class="table" id="tablaProductos">
								<thead>
								<tr>
								<th width="5%">Código Int</th>
								<th width="10%">Código Pro</th>		
								<th width="20%">Nombre</th>	
								<th width="10%">Costo</th>
								<th width="10%">25%</th>
								<th width="20%">Proveedor</th>																					
								<th width="5%">Stock</th>							
								<th width="5%"> </th>
								<th width="5%"> </th>
								</tr>
								</thead>
								<tbody id="tablaBody"></tbody></table>

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
	<script src="js/funciones.js"></script>	
	<!-- The javascript plugin to display page loading on top-->
	<script src="js/plugins/pace.min.js"></script>
	<script type="text/javascript" src="js/ver_productos.js?vknet28"></script>
	<?php include "./js/table.php"; ?>
	<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>



</body>

</html>
