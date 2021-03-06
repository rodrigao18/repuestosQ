<!DOCTYPE html>
<html lang="en">

<head>
	<title>Sistema Ventas</title>
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
				<h1><i class="fa fa-truck"></i> Editar proveedores </h1>
				<p>Editar proveedores</p>
			</div>
			<ul class="app-breadcrumb breadcrumb side">
				<li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
				<li class="breadcrumb-item">proveedores</li>
				<li class="breadcrumb-item active"><a href="#">Editar proveedores</a></li>
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
							<div class="form-group col-md-12">
								<label>R.U.T</label>
								<input type="text" class="form-control" id="rutProveedor" name="rutProveedor" maxlength="9" disabled placeholder=" Ej:123456789 (sin digito)" onfocus="this.value=sacarPuntosGuionRut(this.value)" onkeyup="this.value=soloRut(this.value)" onblur="this.value=validaRut(this.value,1)" >
							</div>
							</div>
							<div class="form-row">
							<div class="form-group col-md-6">
								<label>Nombre</label>
								<input type="text" class="form-control" id="nombre" name="nombre" placeholder="Ingrese nombre" onkeyup="this.value=mayusculas(this.value)" >
							</div>
							<div class="form-group col-md-6">
								<label>Dirección</label>
								<input type="text" class="form-control" id="direccion" name="direccion" placeholder="Ingrese direccion" onkeyup="this.value=mayusculas(this.value)" >
							</div>
						</div>
							<div class="form-row">
                            <div class="form-group col-md-4">
								<label>Contacto</label>
								<input type="text" class="form-control" id="contacto" name="contacto" placeholder="Ingrese contacto" onkeyup="this.value=mayusculas(this.value)" >
							</div>
							<div class="form-group col-md-4">
								<label>Telefono</label>
								<input type="text" class="form-control" id="fono" name="fono" placeholder="Ingrese telefono" onkeyup="this.value=mayusculas(this.value)"  >
							</div>
                            <div class="form-group col-md-4">
								<label>Correo</label>
								<input type="email" class="form-control" id="correo" name="correo" placeholder="Ingrese correo"  onkeyup="this.value=mayusculas(this.value)" >
							</div>
						</div>
						<div class="form-row">
							    <div class="form-group col-md-4">
                                <label>Región</label>
						        <div class="form-group">
							        <select onchange="cargarProvincias()" class="form-control" id="selectRegiones"></select>
						        </div>									
							    </div>
								<div class="form-group col-md-4">
                                <label>Provincia</label>
						        <div class="form-group">
							        <select onchange="cargarComunas()" class="form-control" id="selectProvincias"></select>
						        </div>
								</div>	
								<div class="form-group col-md-4">
                                <label>Comuna</label>
						        <div class="form-group">
							        <select class="form-control" id="selectComunas" name="ciudad"></select>
						        </div>
								</div>															
							</div>
							<div class="form-group">
                            <label for="comment">Observaciones:</label>
                                <textarea class="form-control" rows="5" id="observacion" name="observacion" onkeyup="this.value=mayusculas(this.value)"></textarea>
                         </div>       				
							<!--Parte de Clientes Dinamicos-->						
							<br>
							<button class="btn btn-success float-right" onclick="EditarProveedor(event)"><i class="fa fa-edit"></i> Editar proveedor</button>
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
     <script type="text/javascript" src="js/editar_proveedor.js?vknet28"></script> 
    <script type="text/javascript" src="js/funciones.js?vknet28"></script>
    <!-- Page specific javascripts-->
    <script type="text/javascript" src="js/plugins/bootstrap-notify.min.js"></script>
    <script type="text/javascript" src="js/plugins/sweetalert.min.js"></script>

	<script>
		var id = <?php echo $_POST['id'];?>;
		var NIVEL = 0;		
		window.onload = cargarProveedor(id);

	</script>

</body>

</html>
