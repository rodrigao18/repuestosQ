<!DOCTYPE html>
<html lang="en">

<head>
	<title>Sistema Repuestos</title>
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
		<div class="app-title cabezera-boleta">
			<div>
				<h1><i class="fab fa-cc-visa"></i> Ver Créditos </h1>
				<p>Créditos</p>
			</div>
			<ul class="app-breadcrumb breadcrumb side">
				<li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
				<li class="breadcrumb-item">Créditos</li>
				
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
					 
						<div class="my-3 p-3 bg-white rounded box-shadow">

							<h6 class="border-bottom border-gray pb-2 mb-0 "></h6>
							<br><br>
							<button class="btn btn-primary" onClick="ExportXLSX();"><i class="fas fa-file-excel"></i> Exportar Tabla a Excel</button> 
								<div id="salida">
								<div class="my-3 p-3 bg-white rounded box-shadow">
								
								<table class="table table-striped " id="tablaProductos">
								<thead>
								<tr>
                                <th width="10%">Fecha vta.</th>
								<th width="10%">Documento</th>
								<th width="10%">Nro</th>								
								<th width="10%">Cliente</th>
								<th width="10%">Deuda</th>																					
                                <th width="10%">Total Inicial</th>					
								<th width="5%"></th>	
								<th width="5%"></th>	
								<th width="5%"></th>	
								</tr>
								</thead>
								<tbody id="tablaBody"></tbody>
								<tfoot>								
								<tr>
									<th id="totalVentaCols" style="text-align:left"></th>
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
		<!-- The Modal -->
		<div class="modal fade" id="ingresarPagos">
    <div class="modal-dialog">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Cancelacion cuota <span id="producto"></span></h4>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">       
        <div id="salidaModal">
		<input type="hidden" id="id_venta"> 
		<input type="hidden" id="id_cliente">  	 	
        </div>
        <div id="filaProductos">
			<h3 id="cliente"></h3>
            <div class="form-row">
                <div class="form-group col-md-6"> 
				<label>Fecha cancelación</label>              
				<input type="date" class="form-control" id="fecha_cancelacion"  value="<?php echo date("Y-m-d");?>">
                </div>
				<div class="form-group col-md-6">
				<label>total restante</label>
				<input type="numeric" class="form-control" id="total_restante"  value=1>
				</div>
				<div class="form-group col-md-6">
				<label>Abono</label>
				<input type="numeric" class="form-control" id="abono"  value=1>
							</div>
				<div class="form-group col-md-6">
				<label>Forma pago</label>
				<select class="form-control" id="selectModoPago">
												<option value="1"> Efectivo</option>
												<option value="2"> Cheque</option>																				
											</select>
				</div>	             
            </div> 		         		
        </div>	
        </div>
        
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button"  id="addPromocion"  class="btn btn-info" onclick=abonar(event)>Abonar</button>
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
	<script type="text/javascript" src="js/plugins/js-xlsx/xlsx.core.min.js"></script>
    <script type="text/javascript" src="js/plugins/FileSaver.min.js"></script> 
    <script type="text/javascript" src="js/plugins/html2canvas.min.js"></script>
    <script type="text/javascript" src="js/plugins/tableExport.min.js"></script>
	<script src="js/plugins/pace.min.js"></script>
    <script type="text/javascript" src="js/funciones.js?vknet29"></script>
	<script type="text/javascript" src="js/ventas_credito.js?vknet29"></script>
	<script type="text/javascript" src="js/xlsx.full.min.js?vknet29"></script>
	<script type="text/javascript" src="js/plugins/bootstrap-notify.min.js"></script>
	<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
	<?php include "./js/table.php"; ?>


	<script type="text/javaScript">   
		var f = new Date();      
        var sFileName = 'ventas_creditos ' + f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear()+ "/";
        function ExportXLSX(){
            $('#tablaProductos').tableExport({fileName: sFileName,
						type: 'xlsx',
						msonumberformat:'0'
					
                       });
        }
    </script>


</body>

</html>
