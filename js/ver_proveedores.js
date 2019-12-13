var COMUNAS;

function cargarComunasArray() {
	//primera funcion en cargar
	$.ajax({
		type: 'POST',
		url: 'php/consulta.php',
		data: {
			tag: 'cargarComunas'
		},
		success: function (data) {
			var arreglo = JSON.parse(data);
            COMUNAS = arreglo;
          
            cargarProveedores();
		},
		error: function (request, status, error) {
			console.error("Error: Could not cargarComunasArray");
		}
	});
}
//*-cargar datos mediante async wait()
let cargarProveedores = async () => { 
	const baseUrl = 'php/consultaFetch.php';
	let consulta=`SELECT id,rut,nombre,ciudad,fono,contacto FROM proveedores WHERE estado=1`;
	 
	
	const sql = {sql: consulta, tag: `array_datos`} 
	
	try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		//*-se parsea solo la respuesta del Json enviada por el servidor.
		let array = JSON.parse(data);		
	
		tablaProveedores(array);
		//*-promesa de la funcion denguaje la ejecuto a la espera
		//*-de la respuesta del servidor.	
		const botones = await lenguaje();	
		
	} catch (error) {
		console.log('error en la conexion ', error);
	}
	
}
//*-productos
let tablaProveedores = (arreglo) => {
	let tbody = document.getElementById('tablaBody');
   //${COMUNAS[i['ciudad']-1]['nombre']}
	for (let i of arreglo) { 
       
		tbody.innerHTML +=
		`<tr>		   
		   <td>${formatearRut(i['rut'])}</td>
		   <td>${i['nombre']}</td>
		   <td>${i['fono']}</td>
           <td>${i['contacto']}</td>
           <td>${COMUNAS[i['ciudad']-1]['nombre']}</td>						  
		   <td><form method="POST" action="editar_proveedor.php">
		   <button type="submit" class="btn btn-secondary" data-toggle="tooltip"
			data-placement="top" title="Editar" name="id" value=${i['id']}><i class="fas fa-edit" aria-hidden="true"></i></button></form></td>
			<td><form method="POST" action="ingresar_facturas.php">
		   <button type="submit" class="btn btn-mini" data-toggle="tooltip"
			data-placement="top" title="Factura" name="id" value=${i['id']}><i class="fas fa-list" aria-hidden="true"></i></button></form></td>				
			<td ><button class="btn  btn-danger" data-toggle="tooltip" data-placement="top" title="Borrar" onclick=eliminarProducto(event,${i['id']})><i class="fa fa-trash" aria-hidden="true"></i></button></td>			
         </tr>`
	 	
	}
	$('[data-toggle="tooltip"]').tooltip();

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
		"stateSave":true
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

	let consulta=`UPDATE PROVEEDORES SET estado=0 WHERE id=${idP}`;

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

window.onload = cargarComunasArray
