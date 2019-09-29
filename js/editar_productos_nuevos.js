var ID;

/*-------------------------------Cargar los datos del producto-----------------*/
//LLAMADA  AKA BASE PARA TRAER LOS DATOS Y CARGARLO EN EL FORMULARIO;
function cargar_datos_formulario(id) {
	ID = id;
	console.log(ID);
	var sql = 'SELECT id,codigo_barra,nombre, precio_instalacion,precio_mayorista, precio_venta,precio_compra,id_categoria FROM productos WHERE id=' + ID;
	console.log(sql);
	$.ajax({
		type: 'POST',
		url: 'php/consulta.php',
		data: {	sql: sql, tag: 'array_de_datos'	},
		success: function (data) {
			var arreglo = JSON.parse(data);
			console.log(arreglo);
			formulario_editar(arreglo);
			var id_categoria = arreglo[0]["id_categoria"];
			cargarCategoria(id_categoria);
			datosProductoRe();
		
		},
		error: function (request, status, error) {
			alert("Error: Could not consultarProducto");
		}
	});

}
function datosProductoRe(){

	var sql = 'SELECT id, stockb1,stockb2 FROM stock_bodegas where id_producto=' + ID;
	console.log(sql);

	$.ajax({
		type: 'POST',
		url: 'php/consulta.php',
		data: {	sql: sql, tag: 'array_de_datos'	},
		success: function (data) {
			var arreglo = JSON.parse(data);		
			
			var stockBodega1=arreglo[0]["stockb1"];
			var stockBodega2=arreglo[0]["stockb2"];
			document.getElementById('stock1').value=stockBodega1;
			document.getElementById('stock2').value=stockBodega2;
			cargar_bodega();
		
		},
		error: function (request, status, error) {
			alert("Error: Could not consultarProducto");
		}
	});	

}

function cargar_bodega() {

	var sql = 'SELECT id,nombre FROM bodega';
	//AJAX	
	$.ajax({
	type: 'POST',
	url:  'php/consulta.php', 
	data: {sql: sql,tag: 'bodegas'},
			
	success:function (data){
				$('#select_bodega1').html(data).fadeIn();
				$('#select_bodega2').html(data).fadeIn();
				$('#select_bodega1 option[value="1"]').attr("selected", true);
				$('#select_bodega2 option[value="2"]').attr("selected", true);    
	},
	error: function (request, status, error)
				{alert('Error: Could not categoria');
	}
	})

}

  //CARGAR CATEGORIAS;
	function cargarCategoria(id){
		//SQL SELECT;
		var sql = 'SELECT id, nombre_categoria FROM categoria';
		console.log(sql);
		//AJAX;
		$.ajax({
			type: 'POST',
			url: 'php/consulta.php',
			data: {sql: sql,tag: 'categoria'},
					 
			success: function (data){    
						$('#select_categoria').html(data).fadeIn();
		//DEJAR SELECCIONADO EL PROVEEDOR CON EL ID SELECCIONADO SACADO DESDE LA FUNCION LLAMADA A LA BASE;  
						$('#select_categoria option[value="' + id + '"]').attr("selected", true);   
			},
			error:function (request, status, error)
						{alert('Error: Could not categoria');}
			})
	}
//FORMULARIO PARA EDITAR
function formulario_editar(arreglo) {

	var codigo = arreglo[0]['codigo_barra'];
	var nombreProducto = arreglo[0]['nombre'];


	var precioInstalacion = arreglo[0]['precio_instalacion']	
	var precioMayorista = arreglo[0]['precio_mayorista'];
	var precioVenta = arreglo[0]['precio_venta'];	
	var precioCompra = arreglo[0]['precio_compra'];	


	//NAMES DE LOS INPUT
	$("#codigoProducto").val(codigo);
	$("#nombreProducto").val(nombreProducto);
	

	$("#precioInstalacion").val(precioInstalacion);
	$("#precioMayorista").val(precioMayorista);
	$("#precioVenta").val(precioVenta);
	$("#precioCompra").val(precioCompra);
}
/*-----------------------------------------------------------------------------*/


//FUNCION AJAX PARA REALIZAR EL UPDATE;
function EditarProducto(e) {
	e.preventDefault();

	var codigo = $("#codigoProducto").val();
	var nombre_producto = $("#nombreProducto").val();	
	var stock1 		= $("#stockb1").val();
	var stock2 		= $("#stockb2").val();		
	var precio_instalacion 	= $("#precioInstalacion").val();
	var precio_mayorista 	= $("#precioMayorista").val();	
	var precio_venta 		= $("#precioVenta").val();	
	var precio_compra 		= $("#precioCompra").val();	
	var categoria = document.getElementById("select_categoria").value;
	

	if(categoria==0){
		swal("Faltan datos", "Seleccione una bodega o categoria", "info");
		return;	 
	 }

	//SQL UPDATE;
	var sql = 'UPDATE productos p INNER JOIN stock_bodegas pr ON p.id=pr.id_producto set p.codigo_barra = "' + codigo + '" ,p.nombre = "' + nombre_producto + '" , ' +
		' p.precio_instalacion  = ' + precio_instalacion + ' , p.precio_mayorista = ' + precio_mayorista + ',p.precio_venta = ' + precio_venta + ',' +
		' pr.stockb1 =stockb1+(' + stock1 + '),pr.stockb2 =stockb2+(' + stock2 + '),p.precio_compra = ' + precio_compra + ', p.id_categoria = ' + categoria + '  ' +
		' WHERE p.id='+ID;

	 console.error(sql);

	if ($("#nombreProducto").val() == "" ||
		$("#precioVenta").val() == 0 || $("#precioVenta").val() == "") {

		swal("Faltan datos", "Debe completar los campos para continuar", "info");

	}  else {
		//AJAX	
		$.ajax({
			type: 'POST',
			url: 'php/consulta.php',
			data: {
				sql: sql, tag: 'crud_productos' },
			success: function (data) {
				console.log(data);
				if (data == 1) {
				
					swal("Update!", "Datos actualizados correctamente!", "success");
					window.location.href = "ver_productos.php"
				} else {
					swal("Error", 'Revice el nombre del producto las pulgadas deber ser por ejemplo (14"") ', "error");	 
				}
			},
			error: function (request, status, error) {
				alert("Error: Could not editarProducto");
			}
		});
	}
}

function comprobarProducto(){
	if($("#codigoProducto").val() != ""	){
		var codigo_producto = $("#codigoProducto").val();
		console.error(codigo_producto);

		var sql = 'SELECT count(*) FROM productos where codigo_barra=' + codigo_producto;
		


		//-*AJAX	
		$.ajax({
			type: 'POST',
			url: 'php/consulta.php',
			data: { sql: sql, tag: 'array_de_datos' },

			success: function (data) {
				var arreglo = JSON.parse(data);
				existe = arreglo[0][0];
				if (existe < 1) {
			
					} else {
						$.notify({
							title: "Codigo existente : ",
							message: "El Codigo de estes producto ya existe en la base de datos:",
							icon: 'fas fa-exclamation-circle'
						}, {
							type: "danger",
							placement: {
								from: "top",
								align: "right"
							},
							offset: 70,
							spacing: 70,
							z_index: 1031,
							delay: 1000,
							timer: 1000
						});
					document.getElementById('codigoProducto').focus();					
					}
				
			},
			error: function (request, status, error) {
				console.error("Error: Could not comprobarCLiente");
			}
		});

	}else{
		var codigo_producto = $("#codigoProducto").val();
		console.error(codigo_producto);		
	}	
	return;
}