//CARGAR CATEGORIA
 function cargar_categoria() {

	var sql = 'SELECT id,nombre_categoria FROM categoria';
	//AJAX	
	$.ajax({
	type: 'POST',
	url:  'php/consulta.php', 
	data: {sql: sql,tag: 'categoria'},
			
	success:function (data){
				$('#select_categoria').html(data).fadeIn();
			//	$('#select_categoria option[value="1"]').attr("selected", true);  
				cargar_bodega();
				marca();
	},
	error: function (request, status, error)
				{alert('Error: Could not categoria');
	}
	})

}

//cargar marca del equipo
function marca(){
	var sql = 'SELECT id,marca FROM marca';
	//AJAX	
	$.ajax({
	type: 'POST',
	url:  'php/consulta.php', 
	data: {sql: sql,tag: 'marca'},
			
	success:function (data){
				$('#select_marca').html(data).fadeIn();
				$('#select_marca option[value="0"]').attr("selected", true);  
				proveedores();
	},
	error: function (request, status, error)
				{alert('Error: Could not categoria');
	}
	})
}

//cargar proveedores
function proveedores(){
	var sql = 'SELECT id,nombre FROM proveedores';
	//AJAX	
	$.ajax({
	type: 'POST',
	url:  'php/consulta.php', 
	data: {sql: sql,tag: 'proveedor'},
			
	success:function (data){
				$('#select_proveedor').html(data).fadeIn();
				$('#select_proveedor option[value="0"]').attr("selected", true);  
				//modelo();
	},
	error: function (request, status, error)
				{alert('Error: Could not categoria');
	}
	})
}

//cargar modal
function agregar_tipo(index){
	console.error('index '+ index);
   document.getElementById('dato_in').value=index;
   if(index==1){
	   document.getElementById('producto').innerHTML="TIPO PRODUCTO";
   }else if(index==2){
	   document.getElementById('producto').innerHTML="MARCA";
   }else if(index==3){
	   document.getElementById('producto').innerHTML="MODELO";
   }
   
   $("#myModal").modal();
   $('body').on('shown.bs.modal', '#myModal', function () {
	   $('input:visible:enabled:first', this).focus();
   })

}

//ingresar datos desde el modal
function addDatos(){
	if ($("#in_dato").val() == "" ) {
		swal("Error", "Ingrese un dato", "error");
}else{
	var index=document.getElementById('dato_in').value;

	 if(index==1){
		var dato = document.getElementById('in_dato').value;	
		var sql = 'INSERT INTO marca(marca) VALUES ("'+dato+'") ';
	} else {
	}	
		$.ajax({
			type: 'POST',
			url: 'php/consulta.php',
			async: false,
			data: {
				tag: 'crud_productos',
				sql: sql
			},
			success: function (data) {
			
				if (data == 1) { 
					var dato = document.getElementById('in_dato').value="";	
					swal("Dato creado", "los datos fueron guardados exitosamente", "success");
					setTimeout('location.reload()', 1500);
					//$("#myModal").modal('hide');
				 }				
			},
			error: function (request, status, error) {
				console.error("Error");
			}

		});

	}

 }

window.onload = cargar_categoria
/*-----------------------------------------------*/
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



/*----------------------------Agregar productos------------------------*/

function comprobarProducto(){
	if($("#codigoProducto").val() != ""	){
		var codigo_producto = $("#codigoProducto").val();
		console.error(codigo_producto);

		var sql = 'SELECT count(*) FROM productos where codigo=' + codigo_producto;
	
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


function comprobarCodigoPro(){
	if($("#codigoProveedor").val() != ""	){
		var codigo_producto = $("#codigoProveedor").val();
		

		var sql = 'SELECT count(*) FROM productos where codigo_proveedor="' + codigo_producto + '"';
	
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
							message: "El Codigo proveedor de estes producto ya existe en la base de datos:",
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
					document.getElementById('codigoProveedor').focus();					
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

//*-guardar productos;	
function GuardarProducto(e) {
	e.preventDefault();
	var nombre = $("#nombreProducto").val();
	var codigoProducto = $("#codigoProducto").val();
	var codigoProveedor = $("#codigoProveedor").val();		
	var idCategoria = document.getElementById("select_categoria").value;
	var idProveedor = document.getElementById("select_proveedor").value;
	var descripcion = $("#descripcion").val();
	var idMarca = document.getElementById("select_marca").value;
	var costo = $("#costo").val();
	var ubicacion = $("#ubicacion").val();
	var stockMinimo = document.getElementById('stock_minimo').value;
	var stockMaximo = document.getElementById('stock_maximo').value;
	var margenContado = document.getElementById('margen_contado').value;
	var margenOferta = document.getElementById('margen_oferta').value;
	var margenCredito = document.getElementById('margen_credito').value;


	 if(idCategoria==0){
		swal("Faltan datos", "Seleccione una bodega o categoria", "info");
		return;	 
	 }

	var sql = 'insert into productos (codigo,proveedor,codigo_proveedor,nombre, descripcion, ubicacion,categoria,marca,costo,stock_m,stock,margen_contado,margen_oferta,margen_credito,precio_venta)' +
		'VALUES("' + codigoProducto + '",' + idProveedor + ',"' + codigoProveedor + '","' + nombre + '","' + descripcion + '","' + ubicacion + '",' + idCategoria + ',' + idMarca + ',' + costo + ', '+
		''  + stockMinimo + ','+stockMaximo+',' + margenContado + ',' + margenOferta + ',' + margenCredito + ',0)';

	 console.error(sql);
	
	if ($("#nombreProducto").val() == "" || $("#stock_minimo").val() == "" ||
		$("#costo").val() == 0 || $("#costo").val() == "" 	) {
		swal("Debe Llenar los Campos!", "", "info");
	

	} else{
	

		$.ajax({
			type: 'POST',
			url: 'php/consulta.php',
			async: true,
			data: {
				tag: 'crud_productos',
				sql: sql
			},
			success: function (data) {				
			
					document.getElementById('codigoProducto').focus();	
					document.getElementById('codigoProducto').value='';	
					swal("Insert!", "El producto fue ingresado correctamente!", "success");	
				
			},
			error: function (request, status, error) {
				console.error("Error: Could not  guardarProducto");
			}
		});
	}	
}




