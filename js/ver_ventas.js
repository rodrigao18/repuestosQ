var PROVEEDORES;



// let proveedores = async () => {

// 	const baseUrl = 'php/consultaFetch.php';
//     let consulta=`	SELECT id,nombre FROM proveedores`;
	 
	
// 	const sql = {sql: consulta, tag: `array_datos`} 
// 	try {
// 		//*-llamar ajax al servidor mediate api fetch.
// 		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
// 		//*-request de los datos en formato texto(viene todo el request)
// 		const data = await response.text();
// 		//*-se parsea solo la respuesta del Json enviada por el servidor.
// 		let array = JSON.parse(data);
// 		var arr = new Array();
// 		for (var i = 0; i < array.length; i++) {
// 			arr[array[i][0].toString()] = array[i][1];

// 			}		
// 		PROVEEDORES=arr;
	
// 		const cargarFAct = await cargarFacturas();
// 		//*-promesa de la funcion denguaje la ejecuto a la espera
// 		//*-de la respuesta del servidor.	

		
// 	} catch (error) {
// 		console.log('error en la conexion ', error);
// 	}	
// }

//*-cargar datos mediante async wait()
let cargarVentas = async () => { 
	const baseUrl = 'php/consultaFetch.php';
    let consulta=`SELECT id,id_vendedor,DATE(fecha_venta) as fecha,TIME(fecha_venta) as hora, total 
    FROM ventas`;
	 
	
	const sql = {sql: consulta, tag: `array_datos`} 
    console.error(sql);
	try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		//*-se parsea solo la respuesta del Json enviada por el servidor.
		let array = JSON.parse(data);		
     
		const tablaFactutass = await tablaVentas(array);
		//*-promesa de la funcion denguaje la ejecuto a la espera
		//*-de la respuesta del servidor.	
		const botones = await lenguaje();	
		
	} catch (error) {
		console.log('error en la conexion ', error);
	}
	
}

let tablaVentas = (arreglo) => {
	let tbody = document.getElementById('tablaBody');
	
	for (let i of arreglo) { 
	//console.error(PROVEEDORES[i['id_proveedor']]);	
		tbody.innerHTML +=
        `<tr>
            <td>${i['id']}</td>			   
		    <td>${i['id_vendedor']}</td>		  
		   <td>${i['fecha']}</td>		   
		   <td>${i['hora']}</td>			
		   <td>${formatearNumeros(i['total'])}</td>				  
		   <td><form method="POST" action="detalle_venta.php">
		   <button type="submit" class="btn btn-secondary" data-toggle="tooltip"
			data-placement="top" title="Editar" name="id" value=${i['id']}><i class="fas fa-edit" aria-hidden="true"></i></button></form></td>		
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
		"order": [[1, "asc"]],
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
			borrarVenta(id);
		} else {
			return;
		}

	});	

}

let borrarVenta =async (idP) =>{

	const baseUrl = 'php/consultaFetch.php';

	let consulta=`DELETE FROM VENTAS  WHERE id=${idP}`;

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

			const borraVrelacional = borrVentaRe (idP);
		
		
	} catch (error) { console.log('error en la conexion ', error); }

}


let borrVentaRe = async (idP) => {

	const baseUrl = 'php/consultaFetch.php';
	let consulta=`DELETE FROM VENTAS_RELACIONAL  WHERE id_venta=${idP}`;

	const sql   = {sql: consulta, tag: `crud`}	

	console.error(consulta);
	
	try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		//*-se parsea solo la respuesta del Json enviada por el servidor.	

			
			$.notify({
				title: "Borrado: ",
				message: "Se Borro la venta:",
				icon: 'fas fa-check'
			}, {
				type: "success",
				placement: {
					from: "top",
					align: "right"
				},
				offset: 70,
				spacing: 70,
				z_index: 1031,
				delay: 2000,
				timer: 3000
			});	

			
		
		
	} catch (error) { console.log('error en la conexion ', error); }


}
window.onload = cargarVentas