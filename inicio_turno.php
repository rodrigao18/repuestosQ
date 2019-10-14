<!DOCTYPE html>
<html lang="en">

<head>
    <title>Sistema View Point</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  	<!-- Main CSS-->
	<link rel="stylesheet" type="text/css" href="css/main.css?vknet28">
	<!-- Font-icon css-->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">

	<link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.5.1/css/buttons.bootstrap4.min.css">
	<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
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
<meta name="theme-color" content="#ffffff">
	
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
                <h1><i class="fas fa-user-clock 2x"></i> Inicio turno </h1>
                <p>Iniciar turno</p>
            </div>
            <ul class="app-breadcrumb breadcrumb side">
                <li class="breadcrumb-item"><i class="fas fa-user-clock"></i></li>
                <li class="breadcrumb-item">Inicio turno</li>
                <li class="breadcrumb-item active"><a href="#">Inicio turno</a></li>
            </ul>
        </div>


        <div class="row">
            <div class="col-md-12">
                <div class="tile">

                    <h5>Inicio caja</h5>
                    <br>
                    <form method="POST" id="formularioEd">
                        <div class="form-row">

                            <div class="form-group col-md-6">
                                <label>Inicio caja anterior</label>
                                <input type="text" class="form-control" disabled id="cajaAnteriorPrimerT" name="cajaAnteriorPrimerT">
                            </div>
                            <div class="form-group col-md-6">
                                <label>Caja inicial</label>
                                <input type="text" class="form-control" id="cajaInicial" name="cajaInicial">
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <label>Vendedor</label>
                                <input type="text" class="form-control" disabled id="vendedor" name="vendedor" value="<?php echo $idVendedor ?>">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label>Fecha</label>
                                <input type="text" class="form-control"  disabled id="fecha" name="fecha" value="<?php date_default_timezone_set("America/Santiago"); setlocale(LC_ALL,"es_ES"); echo strftime("%A %d de %B del %Y"); ?>" >
                            </div>
                            <div class="form-group col-md-6">
                                <label>Hora</label>
                                <input type="text" class="form-control" disabled id="hora" name="hora" value="<?php echo date("H:i:s"); ?>" >
                            </div>
                        </div>

                        <button id="btnInicioTurno" class="btn btn-primary float-right" onclick=inicioTurno(event)> <i class="fas fa-clock"></i>  Iniciar turno</button> <br> <br>
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
    <script type="text/javascript" src="js/turnos.js?vknet28"></script>
    <script type="text/javascript" src="js/funciones.js?vknet28"></script>
    <!-- Page specific javascripts-->
    <script type="text/javascript" src="js/plugins/bootstrap-notify.min.js"></script>
    <script type="text/javascript" src="js/plugins/sweetalert.min.js"></script>

    <script>
        var ID_VENDEDOR = <?php echo $idVendedor;?>;
        var ID_TURNO = <?php echo $idTurno;?>;  
        window.onload = consultarVendor('inicio turno');

    </script>

</body>

</html>
