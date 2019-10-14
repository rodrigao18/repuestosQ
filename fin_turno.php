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
                <h1><i class="fas fa-user-clock 2x"></i> Fin de turno </h1>
                <p> Fin de turno </p>
            </div>
            <ul class="app-breadcrumb breadcrumb side">
                <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
                <li class="breadcrumb-item"> Fin de turno </li>
                <li class="breadcrumb-item active"><a href="#"> Fin de turno </a></li>
            </ul>
        </div>


        <div class="row">
            <div class="col-md-12">
                <div class="tile">

                    <h5> Fin de turno </h5>
                    <br>
					<form method="POST" id="formularioEd">
	<div class="form-row">

	<div class="form-group col-md-12">
		<label>Caja final</label>
		<input type="text" class="form-control" disabled id="cajaAnteriorFinal" name="cajaAnteriorFinal">
	</div>
	
	</div>
	
    <div class="form-row">  
		<div class="form-group col-md-6">
		<label>Total venta tarde efectivo</label>
		<input type="text" class="form-control" disabled id="totalTarde" name="totalTarde" >
		</div>	
   
		<div class="form-group col-md-6">
		<label>Total transbank tarde</label>
		<input type="text" class="form-control" disabled id="totalTrasnTarde" name="totalTrasnTarde" >
		</div>
	</div>
    <div class="form-row">
		<div class="form-group col-md-12">
		<label>Total venta turno tarde efectivo y transbank</label>
		<input type="text" class="form-control" disabled id="totalTurnoTarde" name="totalTurnoTarde" >
		</div>
	</div>
    <div class="form-row">
    <div class="form-group col-md-6">
		<label>Total venta efectivo del dia</label>
		<input type="text" class="form-control" disabled id="totalVentaFinal" name="totalVentaFinal" >
		</div>
    <div class="form-group col-md-6">
		<label>Total Transbank del dia</label>
		<input type="text" class="form-control"  disabled id="transbankFinal" name="transbankFinal"  >
	</div>
    
    </div>
    <div class="form-row">
		<div class="form-group col-md-12">
		<label>Total del dia efectivo y transbank</label>
		<input type="text" class="form-control" disabled id="totalDia" name="totalDia" >
		</div>
	</div>
    <div class="form-row">
		<div class="form-group col-md-12">
		<label>Total efectivo en caja</label>
		<input type="text" class="form-control" disabled id="totalEfectivoCaja" name="totalEfectivoCaja" >
		</div>
	</div>
	<div class="form-row">
		<div class="form-group col-md-12">
		<label>Vendedor</label>
		<input type="text" class="form-control" disabled id="vendedor" name="vendedor" value="<?php echo $idVendedor ?> " >
		</div>
	</div>
	<div class="form-row">
		<div class="form-group col-md-6">
		<label>Fecha</label>
		<input type="text" class="form-control" disabled id="fecha" name="fecha" value="<?php date_default_timezone_set("America/Santiago"); setlocale(LC_ALL,"es_ES");  echo strftime("%A %d de %B del %Y"); ?>">
		</div>
		<div class="form-group col-md-6">
		<label>Hora</label>
		<input type="text" class="form-control" disabled id="hora" name="hora" value="<?php echo date("H:i:s"); ?>" >
		</div>
	</div>
	<div class="form-row">
		<div class="form-group col-md-12">
		<label>Caja chica</label>
		<input type="text" class="form-control" id="cajaChica" name="cajaChica" >
		</div>
	</div>
		<button class="btn btn-primary float-right" onclick=finDeturno(event)> <i class="fas fa-clock"></i> Fin turno</button> <br> <br>
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
        var ID_VENDEDOR = <?php echo $idVendedor;?>;
        var ID_TURNO = <?php echo $idTurno;?>;
		window.onload = consultarVendor('turno final');

    </script>

</body>

</html>
