<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- Main CSS-->
	<link rel="stylesheet" type="text/css" href="css/main.css?vknet26">

	<!-- Font-icon css-->
	<link rel="stylesheet" type="text/css"href="fontawesome-5.5.0/css/all.min.css">
	<title>Login - Sistema Ventas</title>
</head>

<?php 	
	
	?>

<body>
	<section class="material-half-bg">
		<div class="cover"></div>
	</section>
	<section class="login-content">
			
		<div class="logo-man">
			<center><img src="imagenes/logo.png" alt=""></center>
			<h2>yoimplemento.cl </h2>
			</div>
		
		<div class="login-box">

			<form class="login-form" method="post">
				<h3 class="login-head"><i class="fa fa-lg fa-fw fa-user"></i>LOGIN</h3>

				<div class="form-group">
					<label class="control-label">Correo</label>
					<input class="form-control" type="text" id="correo" placeholder="Email" autofocus>
				</div>
				<div class="form-group">
					<label for="contra">Contraseña</label>
					<input type="password" name="contra" id="contra" class="form-control">
				</div>		
				<div class="form-row">
				<div class="form-group col-md-12">	
				<label for="contra">Sucursal</label>					
									<select class="form-control" id="select_sucursal" name="select_estado">
									<option id="taller" value="0">Elija un Terminal</option>
									<option id="taller" value="1">Terminal-1</option>
									<option value="2">Terminal-2</option>									
								</select>
								</div>
				</div>
				<br>

		
			
				<div class="form-group btn-container">
					<button class="btn btn-primary btn-block" type="button" name="login" id="login" class="btn btn-primary"> <i class="fas fa-sign-in-alt fa-lg fa-fw"></i>Ingresar</button>
				</div>

				<br>
				<span id="result"></span>

			</form>

		</div>
	</section>
	<!-- Essential javascripts for application to work-->
	<script src="js/jquery-3.2.1.min.js"></script>
	<script src="js/popper.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/main.js"></script>
	<!-- The javascript plugin to display page loading on top-->
	<script src="js/plugins/pace.min.js"></script>
	<script type="text/javascript" src="js/plugins/sweetalert.min.js"></script>
	<script>
		$(document).ready(function() {
			$('#login').click(function() {
				var correo = $('#correo').val();
				var contra = $('#contra').val();
				var sucursal =document.getElementById('select_sucursal').value;
				if(sucursal < 1){
					swal("Warning!", "Elija una sucursal", "warning");
					return;
				}
				console.error('sucursal ' + sucursal);
				if ($.trim(correo).length > 0 && $.trim(contra).length > 0) {
					$.ajax({
						url: "validar.php",
						method: "POST",
						data: {
							correo: correo,
							contra: contra,
							sucursal:sucursal
						},
						cache: "false",
						beforeSend: function() {
							$('#login').val("Conectando...");
						},
						success: function(data) {

							$('#login').val("Login");
							if (data == "1") {
								$(location).attr('href', 'index.php');
							} else {
								$("#result").html('"'+swal("Error!", "Verefique los datos!", "error")+'"');
							}
							if(data=="3"){
								$("#result").html('"'+swal("warning!", "Usuario inactivo!", "warning")+'"');
							}

						}
					});
				};
			});
		});

	</script>
</body>

</html>
