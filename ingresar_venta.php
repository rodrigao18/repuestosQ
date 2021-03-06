


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


/* Column widths are based on these cells */
.row-1 {
  width: 6.25%;
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
  width: 1.6%;
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
.color_fila_rojo{
	background-color:rgba(240, 52, 52, 0.3);
}
.color_fila_verde{
	background-color:rgba(77, 175, 124, 0.3);
}
.cabezera{
	background-color:rgba(44, 130, 201, 1);
}
.cabezera-tabla th{
		background-color:rgba(58, 83, 155, 1);
		color:white;
	}

.documento_input{

}
.documento_elejido-input{
	border:2px solid green;
}	
	</style>
</head>

<body class="app sidebar-mini rtl sidenav-toggled">
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
				<div class="form-row">
					<div class="form-group col-md-2">
					<label>boleta</label>
						<input type="text" onblur="validarIds()"  class="form-control"  id="id_boleta" name="id_boleta" value="1">
					</div>
					<div class="form-group col-md-2">
					<label>guia</label>
						<input type="text" onblur="validarIds()"  class="form-control" id="id_guia" name="id_guia" value="1">
					</div>
					<div class="form-group col-md-2">
					<label>factura</label>
						<input type="text" onblur="validarIds()"  class="form-control" id="id_factura" name="id_factura" value="1">
					</div>
					<div class="form-group col-md-2">
					<label>cotizacion</label>
						<input type="text" onblur="validarIds()"  class="form-control" id="id_cotizacion" name="id_cotizacion" value="1">
					</div>	
					<div class="form-group col-md-2">
					<label>tarjeta</label>
						<input type="text" onblur="validarIds()"  class="form-control" id="id_tarjeta" name="id_tarjeta" value="1">
					</div>				
				</div>				
				
			</div>
		
			
		</div>

		<div class="row">
			<div class="col-md-12">
				<div class="tile">
					<div class="float-right">
					<?php date_default_timezone_set("America/Santiago"); setlocale(LC_ALL, "es_ES"); ?>
				<?php $fecha =strftime("%Y-%m-%d"); ?>
				<?php //echo $fecha; 
				 $fecha_actual = date("d-m-Y");
				 ?>
				
					</div><br>


					<div id="salida">
						<form method="POST" id="formularioEd">
							<input type="hidden" class="form-control" id="id_cliente" name="id_cliente">
							<input type="hidden" class="form-control" id="estadoVenta" name="estadoVenta">


							<div class="form-row">
								<div class="form-group col-md-3">
									<label> Clientes rut </label>
									<div class="input-group">	
									<select  class="form-control" onchange="idClienteRut()" id="selectClientes"></select>
									<div class="input-group-append">
											<button  target="_blank" class="btn btn-primary" id="addTipo_Equipo" onclick="ingresar_cliente()" data-toggle="tooltip" title="agregar" type="button"><i class="fas fa-plus"></i> </button>
									</div>
								</div>

								</div>
								<div class="form-group col-md-3">
									<label> Clientes Nombre </label>
									<div class="input-group">	
									<select  class="form-control" onchange="idClienteNombre()"  id="selectClientesN"></select>
									<div class="input-group-append">
											<button  target="_blank" class="btn btn-primary"  id="addTipo_Equipo" onclick="ingresar_cliente()" data-toggle="tooltip" title="agregar" type="button"><i class="fas fa-plus"></i> </button>
									</div>
								</div>
										
								</div>
								<div class="form-group col-md-3">
									<label> Seleccione tipo documento</label>
									<div class="input-group">
									<select  class="form-control" onchange="sel_Documento()" id="selectDocumento">                                    
                                    <option value="1">Boleta</option>
                                    <option value="2">Factura electrónica</option>
                                    <option value="3">Guía interna</option>
                                    <option value="4">Cotización</option>
									<option value="5">Tarjeta</option>
                                    </select>
							 	</div>
								 
									</div>
									<div class="form-group col-md-3">
									<label> Fecha venta </label>
									<input type="date" class="form-control" id="fecha_venta"  min="2013-01-01" max="2025-12-31">
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
				</div>
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
								<th width="10%">Precio Descuento.</th>
								<th width="10%">Descuento</th>
								<th width="10%">Total</th>
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
								<td width="20%"><input type="text"  class="form-control" id="totalF" ></td>
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
 <!--MODAL-->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Datos productos</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <input type="hidden" id="idprodescripcion">
	  <div id="precio_ultima_venta"></div>
	  	<div id="fecha_ultima_venta"></div>
		  <div id="fecha_ultima_compra"></div>
		  <div id="cantidad_ultima_compra"></div>
		  <div id="costo_ultima_compra"></div>
		  <div id="precioVenta_ultima_compra"></div>
		  <div id="nombre_proveedor"></div>
		  <br>
		<textarea class="form-control" rows="2" id="obsProducto" onkeypress="editarDescripcion(event)"></textarea>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" onclick="limpiarCampos(event)" data-dismiss="modal">Cerrar</button>
       
      </div>
    </div>
  </div>
</div>	

			<!-- The Modal -->
	<div class="modal fade" id="ingresarClientes">
    <div class="modal-dialog">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Ingresar  <span id="producto"></span></h4>
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">       
        <div id="salidaModal">
		<input type="hidden" id="dato_in">          
        </div>
        <div id="filaProductos">
            <div class="form-row">
                <div class="form-group col-md-6"> 
				<label>R.U.T</label>              
				<input type="text" class="form-control" id="rutCliente" name="rutCliente" maxlength="9" placeholder=" Ej:123456789 (sin digito)" onfocus="this.value=sacarPuntosGuionRut(this.value)" onkeyup="this.value=soloRut(this.value)" onblur="this.value=validaRut(this.value,1)" >
                </div>
				<div class="form-group col-md-6">
				<label>Nombre</label>
				<input type="text" class="form-control" id="nombre" name="nombre" placeholder="Ingrese nombre" onkeyup="this.value=mayusculas(this.value)" >
				</div>
				<div class="form-group col-md-6">
				<label>Dirección</label>
				<input type="text" class="form-control" id="direccion" name="direccion" placeholder="Ingrese dirección" onkeyup="this.value=mayusculas(this.value)" >
							</div>
				<div class="form-group col-md-6">
				<label>Telefono</label>
				<input type="text" class="form-control" id="fono" name="fono" placeholder="Ingrese telefono" onkeyup="this.value=mayusculas(this.value)" >
				</div>	             
            </div> 
			<div class="form-row">
							    <div class="form-group col-md-12">
                                <label>Región</label>
						        <div class="form-group">
							        <select onchange="cargarProvincias()" class="form-control" id="selectRegiones"></select>
						        </div>									
							    </div>
								<div class="form-group col-md-12">
                                <label>Provincia</label>
						        <div class="form-group">
							        <select onchange="cargarComunas()" class="form-control" id="selectProvincias"></select>
						        </div>
								</div>	
								<div class="form-group col-md-12">
                                <label>Comuna</label>
						        <div class="form-group">
							        <select class="form-control" id="selectComunas" name="ciudad"></select>
						        </div>
								</div>
															
							</div>            		
        </div>	
        </div>
        
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button"  id="addPromocion"  class="btn btn-success" onclick=GuardarCliente(event)>Guardar</button>
        </div>
        
      </div>
    </div>
  </div> 
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
	<script src="js/plugins/swal2.js"></script>

 <script>
	
  var fecha = new Date(); //Fecha actual
  var mes = fecha.getMonth()+1; //obteniendo mes
  var dia = fecha.getDate(); //obteniendo dia
  var ano = fecha.getFullYear(); //obteniendo año
  if(dia<10)
    dia='0'+dia; //agrega cero si el menor de 10
  if(mes<10)
    mes='0'+mes //agrega cero si el menor de 10
  let fecha_ac=document.getElementById('fecha_venta').value=ano+"-"+mes+"-"+dia;
  console.log(fecha_ac);
 </script>

    <?php include "./js/table.php"; ?>
	<script type="text/javascript">
        var ID_VENDEDOR =<?php echo $idVendedor;?>;
		var NIVEL = <?php echo $nivel; ?>; // obtenemos el tipo de usuario 
		var ID_TURNO = <?php echo $idTurno;?>;
		var TIPO_TURNO = <?php echo $idTipoTurno;?>; 
		var PRODUCTOS = <?php if( isset($_POST['datosProductos'])){echo $_POST['datosProductos'];} ?>    
		window.onload = cargarDatos();
		

	</script>




</body>

</html>
