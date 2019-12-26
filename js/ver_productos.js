var PROVEEDOR;

// function cargarCategoria(e) {
	
// 	e.preventDefault();
// 	var sql ='SELECT id,nombre FROM proveedores ';
// 	$.ajax({
// 		type: 'POST',
// 		url: 'php/consulta.php',
// 		data: {sql:sql, tag: 'array_de_datos' },
// 		success: function (data) {
// 			var arreglo = JSON.parse(data);

// 			var arr = new Array();

// 			for (var i = 0; i < arreglo.length; i++) {
// 				arr[arreglo[i][0].toString()] = arreglo[i][1];

// 			}
// 			PROVEEDOR = arr;
// 			console.error(PROVEEDOR[2]);
// 			cargarProductos();

// 		},
// 		error: function (request, status, error) {
// 			alert("Error: Could not cargarProveedores");
// 		}
// 	});
// }

	let cargarCategoria = async(e) =>{

	
	// document.getElementById('loading').innerHTML=`<p>Actualizando....... <img width='80px' src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'></p>`;	

	const evento = e.preventDefault();

	const baseUrl = 'php/consultaFetch.php';

	let consulta=`SELECT id,nombre FROM proveedores`;

	const sql   = {sql: consulta, tag: `array_datos`}	


	
	try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();

		// document.getElementById('loading').innerHTML=`<p>Guardado <img width='30px' src='https://cdn140.picsart.com/289521541024211.png?r1024x1024'></p>`;

		let arreglo = JSON.parse(data);	

				let arr = new Array();

		for (var i = 0; i < arreglo.length; i++) {
			arr[arreglo[i][0].toString()] = arreglo[i][1];

		}

		PROVEEDOR = arr;

		const cargarPro = cargarProductos();
		
	} catch (error) {  }

	}


//*-cargar datos mediante async wait()
let cargarProductos = async () => { 

	document.getElementById('loading').innerHTML=`<p>Buscando.. <img width='80px' src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'></p>`;	

	const baseUrl = 'php/consultaFetch.php';

	let consulta=`SELECT id,codigo,nombre,codigo_proveedor,costo,proveedor, ubicacion,stock_m,stock FROM productos ORDER BY codigo DESC`;
	 
	
	const sql = {sql: consulta, tag: `array_datos`} 

	
	try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		//*-se parsea solo la respuesta del Json enviada por el servidor.
		let array = JSON.parse(data);		
		console.log(array);		
		const tabla = await	tablaProductos(array);
		//*-promesa de la funcion denguaje la ejecuto a la espera
		//*-de la respuesta del servidor.	
		const botones = await lenguaje();	
		document.getElementById('loading').innerHTML=`<p></p>`;
	} catch (error) {
		console.log('error en la conexion ', error);
	}
	
}
//*-productos


function tablaProductos(arreglo) {


	for (var i = 0; i < arreglo.length; i++) {

		var id = arreglo[i]['id'];
		var codigo = arreglo[i]['codigo'];
		var codigo_proveedor = arreglo[i]['codigo_proveedor'];
		var nombre = arreglo[i]['nombre'];
		var costo = arreglo[i]['costo'];
		var proveedor = arreglo[i]['proveedor'];
		var stock_m = arreglo[i]['stock_m'];
		var stock = arreglo[i]["stock"];
		$("#tablaBody").append('<tr>' +
			'<td>' + codigo + '</td>' +
			'<td>' + codigo_proveedor + '</td>' +
			'<td>' + nombre + '</td>' +
			'<td>' + costo + '</td>' +
			'<td>' + PROVEEDOR[proveedor] + '</td>' +
			'<td>' + stock_m + '</td>' +
			'<td>' + stock + '</td>' +
			'<td><form method="POST" action="editar_productos.php">' +
			'<button type="submit" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Editar" name="id" value="' + id + '" ><i class="fas fa-edit" aria-hidden="true"></i></button></form></td>' +
			'<td ><button class="btn  btn-danger" data-toggle="tooltip" data-placement="top" title="Borrar" onclick=eliminarProducto(event,' + id + ')><i class="fa fa-trash" aria-hidden="true"></i></button></td>' +
			'</tr>');
	}

	$('[data-toggle="tooltip"]').tooltip();
	//lenguaje();

}

 function lenguaje() {

	var f = new Date();
	var fecha = f.getDate() + "-" + (f.getMonth() + 1) + "-" + f.getFullYear();

	var table=$('#tablaProductos').DataTable({

		language: {
			"decimal": "",
			"emptyTable": "No hay información",
			"info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
			"infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
			"infoFiltered": "(Filtrado de _MAX_ total entradas)",
			"infoPostFix": "",
			"thousands": ",",
			"lengthMenu": "Mostrar _MENU_ Entradas",
			"loadingRecords": "Cargando...",
			"processing": "Procesando...",
			"search": "Buscar:",
			"zeroRecords": "Sin resultados encontrados",
			"pageLength": 50,
			"paginate": {
				"first": "Primero",
				"last": "Ultimo",
				"next": "Siguiente",
				"previous": "Anterior"
			}
		},
		"aria": {
			"sortAscending": ": activate to sort column ascending",
			"sortDescending": ": activate to sort column descending"
		},
		"order": [[1, "desc"]],
		"stateSave":true,
		"lengthMenu":[ 100, 125, 150, 175, 1000 ]
	});


     new $.fn.dataTable.Buttons(table, {
		buttons: [
			{
				extend: 'excelHtml5',
				title: 'ver_ventas' + fecha + ''
            }, {
				extend: 'pdfHtml5',
				title: 'ver_ventas' + fecha + ''
            }]

	});

	table.buttons(0, null).container().prependTo(
		table.table().container()
	);


}


function eliminarProducto(e, id) {
	e.preventDefault();
	swal({
		title: "Eliminar producto",
		text: "¿esta seguro de eliminar el producto ?",
		icon: "warning",
		buttons: true,
		dangerMode: true,
	})
	.then((willDelete) => {
		if (willDelete) {
			borrar(id);
		} else {
			return;
		}

	});	

}

let borrar =async (idP) =>{

	const baseUrl = 'php/consultaFetch.php';

	let consulta=`DELETE FROM PRODUCTOS  WHERE id=${idP}`;

	const sql   = {sql: consulta, tag: `crud`}	

	console.error(consulta);
	
	try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		//*-se parsea solo la respuesta del Json enviada por el servidor.	

			
			// $.notify({
			// 	title: "Update: ",
			// 	message: "Se actualizo el precio de venta:",
			// 	icon: 'fas fa-check'
			// }, {
			// 	type: "success",
			// 	placement: {
			// 		from: "top",
			// 		align: "right"
			// 	},
			// 	offset: 70,
			// 	spacing: 70,
			// 	z_index: 1031,
			// 	delay: 2000,
			// 	timer: 3000
			// });	

			setTimeout('location.reload()', 1000);
		
		
	} catch (error) { console.log('error en la conexion ', error); }

}


window.onload = cargarCategoria
