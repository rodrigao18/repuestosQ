<!DOCTYPE html>
<html lang="en">

<head>
	<title>Sistema Cotización</title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- Main CSS-->
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<!-- Font-icon css-->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
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
				<h1><i class="fa fa-cart-plus"></i> Ingresar clientes </h1>
				<p>Ingresar clientes</p>
			</div>
			<ul class="app-breadcrumb breadcrumb side">
				<li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
				<li class="breadcrumb-item">clientes</li>
				<li class="breadcrumb-item active"><a href="#">Ingresar clientes</a></li>
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
								<label>R.U.T</label>
								<input type="text" class="form-control" id="rutCliente" name="rutCliente" maxlength="9" placeholder=" Ej:123456789 (sin digito)" onfocus="this.value=sacarPuntosGuionRut(this.value)" onkeyup="this.value=soloRut(this.value)" onblur="this.value=validaRut(this.value,1)" >
							</div>
							<div class="form-group col-md-6">
								<label>Nombre</label>
								<input type="text" class="form-control" id="nombre" name="nombre" placeholder="Ingrese nombre" onkeyup="this.value=mayusculas(this.value)" >
							</div>
						</div>
							<div class="form-row">
                            <div class="form-group col-md-4">
								<label>Dirección</label>
								<input type="text" class="form-control" id="direccion" name="direccion" placeholder="Ingrese dirección" onkeyup="this.value=mayusculas(this.value)" >
							</div>
							<div class="form-group col-md-4">
								<label>Telefono</label>
								<input type="text" class="form-control" id="fono" name="fono" placeholder="Ingrese telefono" onkeyup="this.value=mayusculas(this.value)" >
							</div>
                            <div class="form-group col-md-4">
								<label>Referencia</label>
								<input type="text" class="form-control" id="referencia" name="referencia" placeholder="Ingrese Referencia" onkeyup="this.value=mayusculas(this.value)" >
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
							<div class="form-row">
								<div class="form-group col-md-4">
									<label>Credito autorizado</label>
									<input type="number" class="form-control" id="credito_autorizado" name="credito_autorizado" min="0" placeholder="Ingrese  credito" value="0">
								</div>
                                <div class="form-group col-md-4">
									<label>Telefono 2</label>
									<input type="text" class="form-control" id="fono2" name="fono2" min="0" placeholder="Ingrese  telefono" >
								</div>
                                <div class="form-group col-md-4">
									<label>Giro</label>
									<input type="text" class="form-control" id="giro" name="giro" min="0" placeholder="Ingrese giro" >
								</div>															
							</div>	
							<div class="form-group">
                            <label for="comment">Observacion:</label>
                                <textarea class="form-control" rows="3" id="observacion" onkeyup="this.value=mayusculas(this.value)"></textarea>
                         </div> 						
							<!--Parte de Clientes Dinamicos-->						
							<br>
							<button class="btn btn-primary float-right" onclick="GuardarCliente(event)"><i class="fa fa-save"></i> Guardar cliente</button>
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
     <script type="text/javascript" src="js/ingresar_clientes.js?vknet28"></script> 
    <script type="text/javascript" src="js/funciones.js?vknet28"></script>
    <!-- Page specific javascripts-->
    <script type="text/javascript" src="js/plugins/bootstrap-notify.min.js"></script>
    <script type="text/javascript" src="js/plugins/sweetalert.min.js"></script>

	<script>
	//	window.onload = cargarProveedoresAP;

	</script>

</body>

</html>
