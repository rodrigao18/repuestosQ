<!DOCTYPE html>
<html lang="en">

<head>
	<title>Sistema Venta</title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- Main CSS-->
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<!-- Font-icon css-->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
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
				<h1><i class="fa fa-cart-plus"></i> Editar productos </h1>
				<p>Editar productos</p>
			</div>
			<ul class="app-breadcrumb breadcrumb side">
				<li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
				<li class="breadcrumb-item">Productos</li>
				<li class="breadcrumb-item active"><a href="#">Editar productos</a></li>
			</ul>
		</div>

		<div class="row">
			<div class="col-md-12">
				<div class="tile">
					<div class="tile-body"> </div>
					<div class="ml-5 mr-5  bg-white rounded box-shadow">
						<form method="POST" id="formularioGuardar">
							<input type="hidden" class="form-control" id="id" name="id">						
							<div class="form-row">
										<div class="form-group col-md-6">
											<label>Código</label>
											<input type="text" class="form-control" id="codigoProducto" name="codigoProducto" onblur="comprobarProducto()"  placeholder="Ingrese código">
										</div>
										<div class="form-group col-md-6">
											<label>Nombre producto</label>
											<input type="text" class="form-control" id="nombreProducto" name="nombreProducto" onkeyup="this.value=mayusculas(this.value)" placeholder="Ingrese Nombre del producto">
										</div>
							</div>					
							<div class="form-row">
										<div class="form-group col-md-3">
											<label>Precio compra</label>
											<input type="number" class="form-control" id="precioCompra" name="precioCompra" min="0" placeholder="Ingrese precio compra" value="0">
										</div>
										<div class="form-group col-md-3">
											<label>Precio instalación</label>
											<input type="number" class="form-control" id="precioInstalacion" name="precioInstalacion" min="0" placeholder="Ingrese precio istalación" value="0">
										</div>

										<div class="form-group col-md-3">
											<label>Precio mayorista</label>
											<input type="number" class="form-control" id="precioMayorista" name="precioMayorista" min="0" placeholder="Ingrese precio mayorista" value="0">
										</div>
										<div class="form-group col-md-3">
											<label>Precio venta</label>
											<input type="number" class="form-control" id="precioVenta" name="precioVenta" min="0" placeholder="Ingrese precio venta" value="0">
										</div>
							</div>

							<div class="form-row">
							<div class="form-group col-md-2">
									<label>Bodega 1</label>
									<select class="form-control" id="select_bodega1" disabled name="select_bodega1"></select>
								</div>
								<div class="form-group col-md-2">
									<label>Stock bodega 1 actual</label>
									<input type="number" class="form-control" id="stock1" disabled name="stock1" min="0" placeholder="stock bodega Laptop-PC" value="0">
								</div>
								<div class="form-group col-md-2">
									<label>Stock B1</label>
									<input type="number" class="form-control" id="stockb1"  name="stockb1" min="0" placeholder="stock bodega Laptop-PC" value="0">
								</div>	
								<div class="form-group col-md-2">
									<label>Bodega 2</label>
									<select class="form-control" id="select_bodega2" disabled name="select_bodega2"></select>
								</div>
								<div class="form-group col-md-2">
									<label>Stock bodega 2 actual</label>
									<input type="number" class="form-control" id="stock2" disabled name="stock2" min="0" placeholder="Ingrese stock" value="0">
								</div>
								<div class="form-group col-md-2">
									<label>Stock B2</label>
									<input type="number" class="form-control" id="stockb2"  name="stockb2" min="0" placeholder="stock bodega Laptop-PC" value="0">
								</div>							
							</div>
							<div class="form-row">
								<div class="form-group col-md-6">
									<label>Categoria</label>
									<select class="form-control" id="select_categoria" name="select_categoria"></select>
								</div>
								</div>							

							<!--Parte de Clientes Dinamicos-->						
							<br>
							<button class="btn btn-primary float-right" onclick="EditarProducto(event)"><i class="fa fa-save"></i> Editar producto</button>
							<br><br>
						</form>
					</div>
					<!-- Fin del div de margenes -->
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
<script type="text/javascript" src="js/editar_productos_nuevos.js"></script>
	<script type="text/javascript" src="js/funciones.js"></script>
	<!-- Page specific javascripts-->
	<script type="text/javascript" src="js/plugins/bootstrap-notify.min.js"></script>
	<script type="text/javascript" src="js/plugins/sweetalert.min.js"></script>  

	<script>
				//PASO EL ID MEDIANTE POST;
				var id = <?php echo $_POST['id']; ?>;						
				window.onload = cargar_datos_formulario(id);
	</script>

</body>

</html>
