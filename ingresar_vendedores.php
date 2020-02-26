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
				<h1><i class="fa fa-users"></i> Ingresar usuarios </h1>
				<p>Ingresar usuarios</p>
			</div>
			<ul class="app-breadcrumb breadcrumb side">
				<li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
				<li class="breadcrumb-item">Usuarios</li>
				<li class="breadcrumb-item active"><a href="#">Ingresar usuarios</a></li>
			</ul>
		</div>

		<div class="row">
			<div class="col-md-12">
				<div class="tile">
					<div class="tile-body"> </div>
					<form method="POST" id="formularioGuardar">
					<input type="hidden" class="form-control" id="id" name="id">
						<label for="exampleInputEmail1">Nombre vendedor</label>
						<div>
							<input type="text" class="form-control" id="nombreVendedor" onkeyup="this.value=mayusculas(this.value)" name="nombreVendedor">
						</div>
						<div class="form-group">
							<label for="exampleInputPassword1">Correo </label>
							<input type="text" class="form-control" id="correo" onkeyup="this.value=mayusculas(this.value)" name="correo">
						</div>
						<div class="form-group">
							<label for="exampleInputPassword1">Password</label>
							<input type="password" class="form-control" id="passwordVendedor" name="passwordVendedor">
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
							<input type="checkbox" id="switch-id" name="activo" checked onchange="mesg()">
							<span class="flip-indecator" data-toggle-on="Activo" data-toggle-off="Inactivo"> </span>
							</label>
							</div>
						</div>		

						<button class="btn btn-primary float-right" onclick="GuardarVendedor(event)"><i class="fa fa-save"></i> Guardar Vendedor</button>
						<br>
						<br>
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
	<script type="text/javascript" src="js/funciones.js?vp5"></script>
	<script type="text/javascript" src="js/ingresar_vendedores.js?vp5"></script>
	<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
	<!-- Page specific javascripts-->
	<!-- Google analytics script-->
	<script type="text/javascript">


	</script>



</body>

</html>
