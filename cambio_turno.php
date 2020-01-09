<!DOCTYPE html>
<html lang="en">

<head>
    <title>Sistema View Point</title>
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
                <h1><i class="fas fa-user-clock 2x"></i> Cambio de turno </h1>
                <p>Cambio de turno</p>
            </div>
            <ul class="app-breadcrumb breadcrumb side">
                <li class="breadcrumb-item"><i class="fas fa-user-clock"></i></li>
                <li class="breadcrumb-item">Cambio de turno</li>
                <li class="breadcrumb-item active"><a href="#">Cambio de turno</a></li>
            </ul>
        </div>


        <div class="row">
            <div class="col-md-12">
                <div class="tile">

                    <h5>Cambio de turno</h5>
                    <br>
                    <form method="POST" id="formularioEd">
	<div class="form-row">

	<div class="form-group col-md-6">
		<label>Caja inicial</label>
		<input type="text" class="form-control" disabled id="cajaAnteriorCambioTurno" name="cajaAnteriorCambioTurno" >
	</div>
	<div class="form-group col-md-6">
		<label>Débito</label>
		<input type="text" class="form-control" disabled id="transbankCambioTurno" name="transbankCambioTurno" >
	</div>
	</div>
	<div class="form-row">
		<div class="form-group col-md-12">
		<label>Total venta en efectivo</label>
		<input type="text" class="form-control" disabled id="totalVentaCambio" name="totalVentaCambio" >
		</div>
	</div>
	<div class="form-row">
		<div class="form-group col-md-12">
		<label>Total venta mañana</label>
		<input type="text" class="form-control" disabled id="totalMañana" name="totalMañana" >
		</div>
	</div>
	<div class="form-row">
		<div class="form-group col-md-12">
		<label>Vendedor</label>
		<input type="text" class="form-control" disabled id="vendedor" name="vendedor" value="<?php echo $idVendedor ?>" >
		</div>
	</div>
	<div class="form-row">
		<div class="form-group col-md-6">
		<label>Fecha</label>
		<input type="text" class="form-control"  disabled id="fecha" name="fecha" value="<?php date_default_timezone_set("America/Santiago"); setlocale(LC_ALL,"es_ES");  echo strftime("%A %d de %B del %Y"); ?>">
		</div>
		<div class="form-group col-md-6">
		<label>Hora</label>
		<input type="text" class="form-control" disabled id="hora" name="hora" value="<?php echo date("H:i:s"); ?>" >
		</div>
	</div>

		<button id="btnCambioTurno" class="btn btn-primary float-right" onclick=cambioTurno(event)><i class="fas fa-clock"></i> Cambio turno</button> <br> <br>
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
    <script type="text/javascript" src="js/turnos.js?vp5"></script>
    <script type="text/javascript" src="js/funciones.js?vp5"></script>
    <!-- Page specific javascripts-->
    <script type="text/javascript" src="js/plugins/bootstrap-notify.min.js"></script>
    <script type="text/javascript" src="js/plugins/sweetalert.min.js"></script>

    <script>
        var ID_VENDEDOR =<?php echo $idVendedor;?>;
        var ID_TURNO = <?php echo $idTurno;?>;          
		window.onload = consultarVendor('cambio turno');
    </script>

</body>

</html>
