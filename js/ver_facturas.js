var PROVEEDORES;



let proveedores = async () => {

	const baseUrl = 'php/consultaFetch.php';
    let consulta=`	SELECT id,nombre FROM proveedores`;
	 
	
	const sql = {sql: consulta, tag: `array_datos`} 
	try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		//*-se parsea solo la respuesta del Json enviada por el servidor.
		let array = JSON.parse(data);
		var arr = new Array();
		for (var i = 0; i < array.length; i++) {
			arr[array[i][0].toString()] = array[i][1];

			}		
		PROVEEDORES=arr;
	
		const cargarFAct = await cargarFacturas();
		//*-promesa de la funcion denguaje la ejecuto a la espera
		//*-de la respuesta del servidor.	

		
	} catch (error) {
		console.log('error en la conexion ', error);
	}	
}

//*-cargar datos mediante async wait()
let cargarFacturas = async () => { 
	const baseUrl = 'php/consultaFetch.php';
    let consulta=`SELECT f.id,id_proveedor,p.rut,numero_factura,fecha_ingreso,neto,iva,total 
    FROM facturas f inner join proveedores p on p.id=f.id_proveedor ORDER BY f.id ASC`;
	 
	
	const sql = {sql: consulta, tag: `array_datos`} 

	try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		//*-se parsea solo la respuesta del Json enviada por el servidor.
		let array = JSON.parse(data);		
     
		const tablaFactutass = await tablaFacturas(array);
		//*-promesa de la funcion denguaje la ejecuto a la espera
		//*-de la respuesta del servidor.	
		const botones = await lenguaje();	
		
	} catch (error) {
		console.log('error en la conexion ', error);
	}
	
}

let tablaFacturas = (arreglo) => {
	let tbody = document.getElementById('tablaBody');
	
	for (let i of arreglo) { 
	//console.error(PROVEEDORES[i['id_proveedor']]);	
		tbody.innerHTML +=
		`<tr>		   
		<td>${PROVEEDORES[i['id_proveedor']]}</td>
		   <td>${i['rut']}</td>
		   <td>${i['numero_factura']}</td>
		   <td>${i['fecha_ingreso']}</td>
		   <td>${formatearNumeros(i['neto'])}</td>
		   <td>${formatearNumeros(i['iva'])}</td>		
		   <td>${formatearNumeros(i['total'])}</td>				  
		   <td><form method="POST" action="editar_facturas.php">
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

window.onload = proveedores