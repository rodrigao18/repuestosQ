
<!DOCTYPE html>
<html lang="en">

<head>
	<title>Sistema Cotización</title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- Main CSS-->
	<link rel="stylesheet" type="text/css" href="css/main.css?vknet29">
	
	<!-- Font-icon css-->
	<link rel="stylesheet" type="text/css"href="fontawesome-5.5.0/css/all.min.css">
</head>

<body class="app sidebar-mini rtl">
	<?php include "header.php"; ?>
	<?php include "left-menu.php"; ?>
	<!-- Sidebar menu-->
	<div class="app-sidebar__overlay" data-toggle="sidebar"></div>

	<main class="app-content">
		<div class="app-title">
			<div>
				<h1><i class="fa fa-truck"></i> Respaldar Base </h1>
				<p>Respaldar Base</p>

               
			</div>
			<ul class="app-breadcrumb breadcrumb side">
				<li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
				<li class="breadcrumb-item">Respaldar</li>
				<li class="breadcrumb-item active"><a href="#">Respaldar base</a></li>
			</ul>
		</div>

		<div class="row">
			<div class="col-md-12">
				<div class="tile">
					<div class="tile-body"> </div>
					<div class="ml-5 mr-5  bg-white rounded box-shadow">
					
					<center>
					<h2>Respaldar base de datos del sistema</h2>
					<br>
					<a class="btn btn-info" href="descargar.php">Realizar Backup</a>
					</center>
                    <!--<button style="margin-left: 15px"  class="btn btn-outline-primary float-right" onclick="respaldar()"><i class="icon fa fa-cart-plus"></i>Click para respaldar base</button>
                    <h2>Respaldo de la base con fecha </h2>-->
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
	<script type="text/javascript" src="js/plugins/bootstrap-notify.min.js"></script>
	<script src="js/plugins/sweetalert.min.js"></script>

	<script type="text/javascript">	

function respaldar(){

		$.ajax({
		type: 'POST',
		url: 'php/function_backup.php',
		data: {tag: 'respaldo' },

		success: function (data) {
            console.log("respaldo echo");
           // swal("Respaldo", "La base fue respaldada con exito", "success");
		
		},
		error: function (request, status, error) {
			console.error('Error: Could not documento');
		}
	});

	
}


</script>
</body>
</html>
