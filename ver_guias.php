<!DOCTYPE html>
<html lang="en">

<head>
	<title>Guias</title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- Main CSS-->
    <link rel="stylesheet" type="text/css" href="css/main.css?vknet28">
    <link rel="stylesheet" type="text/css" href="css/ventas.css?vknet28">
	<!-- Font-icon css-->
	<link rel="stylesheet" type="text/css"href="fontawesome-5.5.0/css/all.min.css">

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
		<div class="app-title cabezera-guia">
			<div>
				<h1><i class="fa fa-list"></i> Guias </h1>
				<p>Ver Guias, editar y eliminar</p>
			</div>
			<ul class="app-breadcrumb breadcrumb side">
				<li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
				<li class="breadcrumb-item">Guias</li>
				<li class="breadcrumb-item active"><a href="#"></a></li>
			</ul>
		</div>
		<?php $fecha_actual = date("d-m-Y");?>
		<div class="form-row">
		
				<div class="form-group col-md-6">
				<label>Fecha Inicio</label>
					<input type="date" class="form-control" id="fecha_inicio" onchange=cargar_ventas_onchange() min="2013-01-01" max="2025-12-31" value="<?php echo date("Y-m-d");?>">
				</div>
			
				<div class="form-group col-md-6">
				<label>Fecha Término</label>
					<input type="date" class="form-control" id="fecha_termino" onchange=cargar_ventas_onchange() min="2013-01-01" max="2025-12-31" value="<?php echo date("Y-m-d");?>">
				</div>
			</div>

		<!--Codigo responsivo donde tengo la tabla-->
		<div class="row">
			<div class="col-md-12">
				<div class="tile">
					<div class="tile-body">
						
						<div class="bg-white rounded box-shadow">

							<h6 class="border-bottom border-gray pb-2 mb-0 ">Guias</h6>
							<br>
							<form method="POST" action="imprime_guia_fac.php" target="_blank">
								<input type="hidden" class="form-control" id="array_productos" name="array_productos">
								<input type="hidden" class="form-control" id="id_cliente" name="id_cliente">
								<input type="hidden" class="form-control" id="ul_factura" name="ul_factura">
								<button type="submit"   class="btn btn-primary"><i class="fas fa-file-pdf"></i> Ver documento</button>
							</form> 
							<br>
							<div id="loading"></div>
							<br>
							<button  class="btn btn-success"  onclick="trasFactura()"><i class="fas fa-clipboard-list"></i> Pasar guias a factura</button>
							<br><br>
							<button class="btn btn-primary" onClick="ExportXLSX();"><i class="fas fa-file-excel"></i> Exportar Tabla a Excel</button> 
								<div id="salida">
								<div class="my-3 p-3 bg-white rounded box-shadow">
								
								<table class="table table-striped " id="tablaProductos">
								<thead class="cabezera-guia">
								<tr>
                                <th width="5%">N°</th>
								<th width="10%">Fecha</th>
								<th width="15%">Vendedor</th>
								<th width="10%">Estado</th>
								<th width="10%">Cliente</th>
								<th width="10%">Nro Productos</th>	
								<th width="10%">Neto</th>
								<th width="10%">Iva</th>										
                                <th width="5%">Total</th>							
								<th width="5%"></th>
								<th width="5%"></th>
								<th width="5%"></th>	
								<th width="5%">Traspasar</th>							
								</tr>
								</thead>
								<tbody id="tablaBody"></tbody>
								<tfoot>								
								<tr>
									<th id="totalVentaCols" style="text-align:left">Total:</th>
									<th></th>
									<th></th>
									<th></th>
									<th></th>
									<th></th>
									
								</tr>
								</tfoot>
								</table>

								</div>
							</div>
							</div>
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
	<script type="text/javascript" src="js/plugins/js-xlsx/xlsx.core.min.js"></script>
    <script type="text/javascript" src="js/plugins/FileSaver.min.js"></script> 
    <script type="text/javascript" src="js/plugins/html2canvas.min.js"></script>
    <script type="text/javascript" src="js/plugins/tableExport.min.js"></script>
	<!-- The javascript plugin to display page loading on top-->
	<script src="js/plugins/pace.min.js"></script>
    <script type="text/javascript" src="js/funciones.js?vknet29"></script>
	<script type="text/javascript" src="js/ver_guias.js?vknet29"></script>
	<script type="text/javascript" src="js/plugins/bootstrap-notify.min.js"></script>
	<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
	<?php include "./js/table.php"; ?>

	<script>
		var ID_TURNO = <?php echo $idTurno;?>;
	</script>
<script type="text/javaScript">   
		var f = new Date();      
        var sFileName = 'guias' + f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear()+ "/";
        function ExportXLSX(){
            $('#tablaProductos').tableExport({fileName: sFileName,
						type: 'xlsx',
						msonumberformat:'0'
					
                       });
        }
    </script>
</body>

</html>
