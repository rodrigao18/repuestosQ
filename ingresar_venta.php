<!DOCTYPE html>
<html lang="en">

<head>
	<title>Ingresar  venta</title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- Main CSS-->
	<link rel="stylesheet" type="text/css" href="css/main.css?vknet32">
	<!-- Font-icon css-->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">

	<!-- Estilos tablas cotizacion -->
	<link rel="stylesheet" href="css/ventas.css">
	<style>
	.users {
	table-layout: fixed;
	/* width: 100%; */
	/* white-space: nowrap; */
	}
	.users td {
	/* white-space: nowrap; */
	/* overflow: hidden; */
	/* text-overflow: ellipsis; */
	}
	.cabezera{
		background-color:#980;
	}

/* Column widths are based on these cells */
.row-1 {
  width: 7.6%;
}
.row-2 {
  width: 7.6%;
}
.row-3{
  width: 7.6%;
  text-align:center;
}
.row-4 {
  width: 7.6%;
}
.row-5 {
  width: 7.6%;
}
.row-6 {
  width: 7.6%;
}
.row-7 {
  width: 7.6%;
}
.row-8 {
  width: 7.6%;
}
.row-9 {
  width: 7.6%;
}
.row-10 {
  width: 7.6%;
}
.row-11 {
  width: 7.6%;
}
.row-12 {
  width: 7.6%;
}
.row-13 {
  width: 7.6%;
}
.row-14 {
  width: 7.6%;
}
.row-15 {
  width: 7.6%;
}
	</style>
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
				<h1><i class="fas fa-list"></i> Ingresar venta </h1>
				<p>Ingresar venta</p>
				<br>
				<label>Ultimo número de boleta</label>
				<h3 class="mt-3"><input type="number" id="ultima_boleta" value=""></h3>
				
			</div>
			<ul class="app-breadcrumb breadcrumb side">
				<li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
				<li class="breadcrumb-item">Factura</li>
				<li class="breadcrumb-item active"><a href="#">Ingresar factura</a></li>
				
			</ul>
			
		</div>

		<div class="row">
			<div class="col-md-12">
				<div class="tile">
					<div class="float-right">
					<?php date_default_timezone_set("America/Santiago"); setlocale(LC_ALL, "es_ES"); ?>
				<?php $fecha =strftime("%Y-%m-%d"); ?>
				<?php echo $fecha; 
				 $fecha_actual = date("d-m-Y");
				 ?>
					</div><br>


					<div id="salida">
						<form method="POST" id="formularioEd">
							<input type="hidden" class="form-control" id="id_cliente" name="id_cliente">
							<input type="hidden" class="form-control" id="estadoVenta" name="estadoVenta">


							<div class="form-row">
								<div class="form-group col-md-6">
									<label> Clientes </label>
									<select  class="form-control" id="selectClientes"></select>
								</div>
								<div class="form-group col-md-6">
									<label> Seleccione tipo documento</label>
									<div class="input-group">
									<select  class="form-control" id="selectDocumento">                                    
                                    <option value="1">Boleta</option>
                                    <option value="2">Factura electrónica</option>
                                    <option value="3">Guía interna</option>
                                    <option value="4">Cotización</option>
                                    </select>
										</div>
									</div>
								</div>
							</div>

							<div class="form-row">
                            <label for="comment">Observacion de la venta:</label>
                                <textarea class="form-control" rows="2" id="observacion" onkeyup="this.value=mayusculas(this.value)"></textarea>
							</div>
                            <br>
						</form>
						<div class="form-row">
						<div class="form-group col-md-12">				
						<div class="input-group">
							<div class="input-group-prepend">
							<div class="input-group-text"><i class="fas fa-search" aria-hidden="true"></i></div>
							</div>
							<input class="form-control form-control-sm " id="buscar" name="buscar" onkeyup="prebusqueda('detalle');" type="text" placeholder="Buscar" aria-label="Search">
						</div>
					
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
					<br>
					<div class="tile">
					<div>
					<input type="hidden" id="idprodescripcion">
					<textarea class="form-control" rows="1" id="obsProducto" onkeypress="editarDescripcion(event)"></textarea></div>
					</div>
				</div>
			</div>

			<div class="col-md-12" id="tablaResumen">
				<div class="tile">
					<table class="table" id="tablaC">
						<thead class="thead-dark">
							<tr>
								<th width="5%">Cod.Pro</th>
								<th width="5%">Cod.Int</th>
								<th width="5%"><i class="fas fa-edit"></i> Cant.</th>
								<th width="30%"><i class="fas fa-edit"></i> Nombre</th>
								<th width="10%"><i class="fas fa-edit"></i> Precio unitario</th>
								<th width="10%">Precio Sin Descuento.</th>
								<th width="10%">Descuento</th>
								<th width="10%">Precio Con Descuento.</th>
								<th width="5%"></th>
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
								<td width="10%">Neto</td>
								<td width="20%"><input type="text" class="form-control" id="totalNeto" disabled></td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td width="10%">iva</td>
								<td width="20%"><input type="text" class="form-control" id="iva" disabled></td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td width="10%">Total a pagar</td>
								<td width="20%"><input type="text" class="form-control" id="totalF" ></td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td width="10%">Total venta</td>
								<td width="20%"><input type="text" disabled class="form-control" id="totalapagar" ></td>
							</tr>
							<tr>
							<td colspan="3"></td>
							<td width="15%">Modo pago</td>
							<td width="25%"> <select class="form-control" id="selectModoPago">
												<option value="1"> EFECTIVO</option>
												<option value="2"> DEBITO</option>
												<option value="3"> CREDITO</option>											
											</select>
							</td>
						</tr>
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td width="10%">Desc. % </td>
								<td width="20%"><div class="input-group">
								<div class="input-group-prepend">
								<div class="input-group-text"><i class="fas fa-percentage" aria-hidden="true"></i></div>
								</div>
								<input class="form-control form-control-sm " id="descuentoPorcentaje"  onkeyup="calcularDescuentoPerc(event);" type="number" value=0>
								</div></td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td width="10%">Desc. $ </td>
								<td width="20%"><div class="input-group">
								<div class="input-group-prepend">
								<div class="input-group-text"><i class="fas fa-dollar-sign" aria-hidden="true"></i></div>
								</div>
								<input class="form-control form-control-sm " id="descuentoPesos"  onkeyup="calcularDescuentoPesos();" type="text" value=0>
								</div></td>
							</tr>
						</tbody>
					</table>
					<button id="btn-finalizar" class="btn btn-success float-right" onclick="Confirmarventa(event)"><i class="fas fa-dollar-sign"></i> Realizar Venta</button>

					<button id="btn-finalizar" class="btn btn-primary float-right mr-5" onclick="quitarDescuento(event)"><i class="fas fa-percentage"></i> Quitar Descuento</button>
					<br><br>
				</div>
			</div>
			<!-- fin col -->

		</div>
		<!-- fin row -->

	</main>
	<script src="js/jquery-3.2.1.min.js"></script>
	<script src="js/popper.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/main.js"></script>

	<script src="js/plugins/pace.min.js"></script>

    <script type="text/javascript" src="js/funciones.js?vknet32"></script>
	<script type="text/javascript" src="js/editarVenta.js?vknet32"></script>
	<script type="text/javascript" src="js/ingresar_venta.js?vknet32"></script>
	<!-- Page specific javascripts-->
	<script type="text/javascript" src="js/plugins/bootstrap-notify.min.js"></script>
    <!-- <script type="text/javascript" src="js/plugins/sweetalert.min.js"></script> -->
	<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <?php include "./js/table.php"; ?>
	<script type="text/javascript">
        var ID_VENDEDOR =<?php echo $idVendedor;?>;
		var NIVEL = <?php echo $nivel; ?>; // obtenemos el tipo de usuario 
		var ID_TURNO = <?php echo $idTurno;?>;
		var TIPO_TURNO = <?php echo $idTipoTurno;?>;     
		window.onload = cargarDatos();

	</script>


</body>

</html>
