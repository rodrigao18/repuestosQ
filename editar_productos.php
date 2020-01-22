<!DOCTYPE html>
<html lang="en">

<head>
	<title>Editar productos</title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- Main CSS-->
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<!-- Font-icon css-->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
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
		<div class="app-title">
			<div>
				<h1><i class="fa fa-edit"></i> Editar productos </h1>
				<p>Editar productos</p>
			</div>
			<ul class="app-breadcrumb breadcrumb side">
				<li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
				<li class="breadcrumb-item">Productos</li>
				<li class="breadcrumb-item active"><a href="#">Editar productos</a></li>
			</ul>
		</div>

		<div class="row">
			<div class="col-md-12">
				<div class="tile">
					<div class="tile-body"> </div>
					<div class="ml-5 mr-5  bg-white rounded box-shadow">
						<form method="POST" id="formularioGuardar">
							<input type="hidden" class="form-control" id="id" name="id">						
							<div class="form-row">
										<div class="form-group col-md-3">
											<label>Código producto</label>
											<input type="text" class="form-control" id="codigoProducto" name="codigoProducto" disabled  placeholder="Ingrese código">
										</div>
										<div class="form-group col-md-3">
											<label>Cod Proveedor</label>
											<input type="text" class="form-control" id="codProveedor" name="codProveedor"  placeholder="Ingrese cod proveedor">
										</div>
										<div class="form-group col-md-3">
											<label>Proveedor</label>
											<select class="form-control" id="select_proveedor"  name="select_proveedor"></select>
										</div>
										<div class="form-group col-md-3">
											<label>Nombre producto</label>
											<input type="text" class="form-control" id="nombreProducto" name="nombreProducto" onkeyup="this.value=mayusculas(this.value)" placeholder="Ingrese Nombre del producto">
										</div>
							</div>					
							<div class="form-row">
										<div class="form-group col-md-3">
											<label>Ubicación</label>
											<input type="text" class="form-control" id="ubicacion" name="ubicacion" min="0" placeholder="Ingrese Ubicacion" onkeyup="this.value=mayusculas(this.value)">
										</div>
										<div class="form-group col-md-3">
											<label>Categoría</label>
											<div class="input-group">																
											<select class="form-control" id="select_categoria"> </select>
											<div class="input-group-append">
											<button  target="_blank" class="btn btn-primary" id="addTipo_categoria" onclick="agregar_tipo(2)" data-toggle="tooltip" title="agregar" type="button"><i class="fas fa-plus"></i> </button>
											</div>
										</div>

										</div>

										<div class="form-group col-md-3">
										<label> Marca </label>
										<div class="input-group">																
											<select class="form-control" id="select_marca"> </select>
											<div class="input-group-append">
											<button  target="_blank" class="btn btn-primary" id="addTipo_Equipo" onclick="agregar_tipo(1)" data-toggle="tooltip" title="agregar" type="button"><i class="fas fa-plus"></i> </button>
										</div>
										</div>
										</div>
										<div class="form-group col-md-3">
											<label>Ultimo costo</label>
											<input type="number" class="form-control" id="costo" name="costo" min="0" placeholder="Ingrese ultimo costo" value="0">
										</div>
							</div>


							<div class="form-row">
							<div class="form-group col-md-3">
									<label>Stock mínimo</label>
									<input type="number" class="form-control" id="stock_minimo" name="stock_minimo" min="0" placeholder="Ingrese stock minimo" value="0">									
								</div>
								<div class="form-group col-md-3">
									<label>Stock</label>
									<input type="number" class="form-control" id="stock_maximo" name="stock_maximo" min="0" placeholder="Ingrese stock maximo" value="0">
								</div>	
								<div class="form-group col-md-3">
									<label>Margen contado</label>
									<input type="number" class="form-control" id="margen_contado" name="margen_contado" min="0" placeholder="Ingrese margen contado" value="0">
								</div>
								<div class="form-group col-md-3">
									<label>Margen oferta</label>
									<input type="number" class="form-control" id="margen_oferta" name="margen_oferta" min="0" placeholder="Ingrese margen oferta" value="0">
								</div>							
							</div>
							<div class="form-row">
								<div class="form-group col-md-3">
									<label>Margen credito</label>
									<input type="number" class="form-control" id="margen_credito" name="margen_credito" min="0" placeholder="Ingrese margen credito" value="0">
								</div>															
							</div>	
							<div class="form-group">
                            <label for="comment">Descripcion:</label>
                                <textarea class="form-control" rows="3" id="descripcion" name="descripcion"></textarea>
                         </div> 						
							<!--Parte de Clientes Dinamicos-->						
							<br>
							<button class="btn btn-primary float-right" onclick="editarProductos(event)"><i class="fa fa-edit"></i> editar producto</button>
							<br><br>
						</form>
					</div>
					<!-- Fin del div de margenes -->
				</div>
			</div>
		</div>

			<!-- The Modal -->
<div class="modal fade" id="myModal">
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
                <div class="form-group col-md-12">               
                <input type="text" class="form-control" id="in_dato" onkeyup="this.value=mayusculas(this.value)" placeholder="Ingrese dato">
                </div>             
            </div>             		
        </div>	
        </div>
        
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button"  id="addPromocion"  class="btn btn-success" onclick=addDatos()>Añadir</button>
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
    <script type="text/javascript" src="js/editar_productos.js?vknet29"></script>
    <script type="text/javascript" src="js/funciones.js?vknet28"></script>
    <!-- Page specific javascripts-->
    <script type="text/javascript" src="js/plugins/bootstrap-notify.min.js"></script>
    <script type="text/javascript" src="js/plugins/sweetalert.min.js"></script>

	<script>
    	var id = <?php echo $_POST['id'];?>;
		var NIVEL = 0;		
		window.onload = cargarProductos(id);

	</script>

</body>

</html>
