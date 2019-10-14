<!DOCTYPE html>
<html lang="en">

<head>
	<title>Sistema Laptop-PC</title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- Main CSS-->
	<link rel="stylesheet" type="text/css" href="css/main.css?vp5">
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
		<div class="app-title">
			<div>
				<h1><i class="fas fa-car"></i> Editar vendedores </h1>
				<p>Editar vendedores</p>
			</div>
			<ul class="app-breadcrumb breadcrumb side">
				<li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
				<li class="breadcrumb-item">Vendedores</li>
				<li class="breadcrumb-item active"><a href="#">Editar vendedores</a></li>
			</ul>
		</div>

		<div class="row">
			<div class="col-md-12">
				<div class="tile">
					<div class="tile-body"> </div>

					<div id="primerasalida"></div>
					<form  method="POST" id="formularioEd">
		<input type="hidden" class="form-control" id="id">
		<label for="exampleInputEmail1">Nombre vendedor</label>
		<div>
		<input type="text" class="form-control" id="nombreVendedor" name="nombreVendedor" value="' + nombreVendedor + '">
		</div>
		<div class="form-group">
		<label for="exampleInputPassword1">Correo </label>
		<input type="text" class="form-control" id="correo" name="correo" value="' + correo + '">
		</div>
		<div class="form-group">
		<label for="exampleInputPassword1">Password</label>
		<input type="password" class="form-control" id="passwordVendedor" name="passwordVendedor" value="' + password + '">
		</div>
		<div class="form-group">
							<label for="exampleInputPassword1">Tipo de usuario</label>
							<select class="form-control" id="selectPermisos">
                                              <option value="0"> Administrador</option>
                                              <option value="1"> Vendedor</option>                                            
                            </select>
						</div>

		<!--Checked-->
		<div class="form-group">
										<div class="toggle-flip">
											<label> Estado proveedor
					<input type="checkbox" id="switch-id" name="activo" onchange="mesg()">
					<span class="flip-indecator" data-toggle-on="Activo" data-toggle-off="Inactivo"> </span>
				</label>
										</div>
									</div>				
		<button class="btn btn-primary float-right" onclick = "EditarVendedor(event)"><i class="fa fa-edit"></i>Editar vendedores</button> <br><br>
		</form>
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
	<script type="text/javascript" src="js/editar_vendedores.js?vp5"></script>
	 <!-- Page specific javascripts-->
	 <script type="text/javascript" src="js/plugins/bootstrap-notify.min.js"></script>
    <script type="text/javascript" src="js/plugins/sweetalert.min.js"></script>
	<!-- Page specific javascripts-->
	<!-- Google analytics script-->
	<script type="text/javascript">
		var id = <?php echo $_POST['id']; ?>; //obtengo la variable del post php
		window.onload = llamadaBaseDatos(id);

	</script>


</body>

</html>
