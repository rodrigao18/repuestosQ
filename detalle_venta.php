<!DOCTYPE html>
<html lang="en">

<head>
	<title>Sistema Cotización</title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- Main CSS-->
	<link rel="stylesheet" type="text/css" href="css/main.css?vknet28">
	<!-- Font-icon css-->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
	<!-- Font-icon css-->
	<link rel="stylesheet" href="css/ventas.css?vknet28">
</head>

<body class="app sidebar-mini rtl">
	<!-- Navbar-->
	<?php include "header.php"; ?>
	<?php include "left-menu.php"; ?>

	<!-- Sidebar menu-->
	<div class="app-sidebar__overlay" data-toggle="sidebar"></div>

	<main class="app-content" id="imprimeme">
		<div id="cabezera-detalle">
		<div class="app-title">
			<div>
				<h1 id="titulo-detalle">  </h1>
				<p>Ver documento</p>
			</div>
			<ul class="app-breadcrumb breadcrumb side">
				<li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
				<li class="breadcrumb-item">Ver documento</li>
				<li class="breadcrumb-item active"><a href="#">Detalle </a></li>
			</ul>


		</div>
		</div>
		<!--Codigo responsivo donde tengo la tabla-->

		<div class="row">
			<div class="col-md-12">
				<div class="tile">
					<div class="tile-body">
						<div class="my-3 p-3 bg-white rounded box-shadow">
							
							<h6 class="border-bottom border-gray pb-2 mb-0 " id="NUMEROVENTA">Detalle </h6>
							<h6 id="fechaVenta"></h6>	
							<br><br>
							<!--  datos del cliente -->
							<div id="salida">
								<form method="POST" id="formularioEd">
									<input type="hidden" class="form-control" id="id_cliente" name="id_cliente">
									<input type="hidden" class="form-control" id="estado_venta" name="estado_venta">
									<div class="form-row">
										<div class="form-group col-md-6">
											<label> Vendedor </label>
											<input type="text" class="form-control" id="nombreVendedor" disabled>
										</div>
										<div class="form-group col-md-6">											
											<label> Celular </label>
											<input type="text" class="form-control" id="celular" disabled">
											</div>
										</div>
									</div>								
									<div class="form-row">
										<div class="form-group col-md-6">
											<label> Dirección </label>
											<input type="text" class="form-control" id="direccion" disabled">
										</div>
										<div class="form-group col-md-6">
											<label>Correo </label>
											<input type="text" class="form-control" id="correo" disabled">
										</div>
									</div>
								</form>										

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

			<div class="row">		
			<div class="col-md-12" id="tablaProductos">
				<div class="tile">
					<div id="salidaTabla"></div>
				</div>
			</div>

			<div class="col-md-12" id="tablaResumen">
				<div class="tile">
			
		<table class="table" id="tablaCotizada">
						<thead id="cabezera">
						<tr id="borrar">
							<th class="VentaRelacional" scope="col"></th>
							<th width="10%" scope="col"> Código</th>
							<th id="TituloNombre" width="30%" scope="col">Nombre</th>
							<th width="10%" scope="col"> Cantidad</th>
							<th width="20%" scope="col"> Precio Unitario</th>
							<th width="20%" scope="col"> Total Unitario</th>									
						</tr>
						</thead>
						<tbody id="tablaBodyCotizacion">
						</tbody>
					</table>

					<!-- TABLA TOTALNETO-->
					<table class="table table-striped" id="tablaTotal">
						<tbody id="valorTotal">
							
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td width="10%">Total venta</td>
								<td width="20%"><input type="text" class="form-control" id="totalNeto" disabled></td>
							</tr>						
						</tbody>
					</table>
					<form method="POST" id="formularioProveedor" action="ingresar_venta.php">
                        <input type="hidden" id="id" name="id">
                        <input type="hidden" id="datosProductos" name="datosProductos">

												<?php
												if($nivel==0){ echo '<div class="form-row">
													<div class="form-group col-md-12">
															<div class="input-group">																
																	<div class="input-group-append">
																			<button type="submit" name="enviar" class="btn btn-primary" id="btnImportar" data-toggle="tooltip" title="Importar productos" type="button"><i class="fas fa-file"></i> <i class="fas fa-arrow-right"></i>Traspasar a ventas </button>
																	</div>
															</div>
													</div>
												</div>';}
												?>
					</form>	
					<div class="btn-group inline float-left" id="volverBtn">						
					
					</div>
					<div class="btn-group inline float-right" id="cargarBtn">						
						<!-- Cargamos el resto de los botones -->
					</div>
					<br><br>
				</div>
			</div>
			<!-- fin col -->

			<!-- fin row -->
		</div>

	</main>
	<!-- Essential javascripts for application to work-->
	<script src="js/jquery-3.2.1.min.js"></script>
	<script src="js/popper.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/main.js"></script>
	<!-- The javascript plugin to display page loading on top-->
	<script src="js/plugins/pace.min.js"></script>

	<script type="text/javascript" src="js/detalle_venta.js"></script>
	<script type="text/javascript" src="js/editar_nombre_producto.js?vknet28"></script>
	<script type="text/javascript" src="js/funciones.js?vknet28"></script>

	<!-- Data table plugin-->
	<script type="text/javascript" src="js/plugins/jquery.dataTables.min.js"></script>
	<script type="text/javascript" src="js/plugins/dataTables.bootstrap.min.js"></script>
	<script type="text/javascript" src="https://cdn.datatables.net/buttons/1.5.1/js/dataTables.buttons.min.js"></script>
	<script type="text/javascript" src="https://cdn.datatables.net/buttons/1.5.1/js/buttons.bootstrap4.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.32/pdfmake.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.32/vfs_fonts.js"></script>
	<script type="text/javascript" src="https://cdn.datatables.net/buttons/1.5.1/js/buttons.html5.min.js"></script>

	<!-- Page specific javascripts-->
	<script type="text/javascript" src="js/plugins/bootstrap-notify.min.js"></script>
	<!--<script type="text/javascript" src="js/plugins/sweetalert.min.js"></script>-->
	<!-- <script type="text/javascript" src="js/notificacion.js"></script> -->
	<script type="text/javascript" src="js/funciones.js"></script>
	<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
	<script type="text/javascript">

		var id = <?php  echo $_POST['id'];?>;
		var estado_venta = <?php  echo $_POST['estado_venta'];?>;
		var NUMEROVENTA = <?php echo $_POST['id'];?>;
		var IDVENDEDOR = <?php echo $idVendedor;?>;
		window.onload = consultarDatosVendedor(id,estado_venta);
		//Notifica('Titulo Notificacion', 'Copy texto notificacion');

	</script>
</body>

</html>
