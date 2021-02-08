var VENDEDORES;
var CLIENTES;



let vendedor = async () => {

	document.getElementById('loading').innerHTML=`<i class="fas fa-spinner fa-pulse"></i> Cargando datos espere......`;
	const baseUrl = 'php/consultaFetch.php';
    let consulta=`	SELECT id_vendedor,nombreVendedor FROM vendedores`;
	 
	
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
		VENDEDORES=arr;
		console.error(VENDEDORES);
		const clie = await clientes();	
	

		//*-promesa de la funcion denguaje la ejecuto a la espera
		//*-de la respuesta del servidor.	

		
	} catch (error) {
		console.log('error en la conexion ', error);
	}	
}

let cargar_ventas_onchange = async() =>{	

	document.getElementById('loading').innerHTML=`<i class="fas fa-spinner fa-pulse"></i> Cargando datos espere......`;
	document.getElementById('contenido').className=`fade`;

	let tbody = document.getElementById('tablaBody');

	tbody.innerHTML=``;

	let fecha_inicio=document.getElementById('fecha_inicio').value;				
	let fecha_termino=document.getElementById('fecha_termino').value;

	const baseUrl = 'php/consultaFetch.php';

 	let consulta=`SELECT v.estado_venta AS estadoventa,p.nombre,vr.codigo_producto,vr.nombre_producto,(vr.cantidad) as cantidad,(pr.stock) as stock,pr.codigo_proveedor,pr.costo FROM
	ventas v INNER JOIN ventas_relacional vr ON vr.id_venta=v.id JOIN proveedores p ON p.id=vr.id_proveedor JOIN productos pr ON pr.codigo=vr.codigo_producto
	WHERE fecha_venta between "${fecha_inicio} 00:00:00" AND "${fecha_termino} 23:59:59"
	GROUP BY vr.codigo_producto DESC ORDER BY nombre ASC`;
	
	
	
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
		//const botones = await lenguaje();
		document.getElementById('contenido').className=`fade-in`;
		document.getElementById('loading').innerHTML=``;					
	
	} catch (error) {
		console.log('error en la conexion ', error);
	}

	
}



let clientes = async () => {

	const baseUrl = 'php/consultaFetch.php';
    let consulta=`	SELECT id,nombre FROM clientes`;
	 
	
	const sql = {sql: consulta, tag: `array_datos`} 
	try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		//*-se parsea solo la respuesta del Json enviada por el servidor.
		let array = JSON.parse(data);
		
		var arrs = new Array();
		for (var i = 0; i < array.length; i++) {
			arrs[array[i][0].toString()] = array[i][1];

			}		
		CLIENTES=arrs;
			
		const vende = await cargarVentas();
		//*-promesa de la funcion denguaje la ejecuto a la espera
		//*-de la respuesta del servidor.	

		
	} catch (error) {
		console.log('error en la conexion ', error);
	}	
}


//*-cargar datos mediante async wait()
let cargarVentas = async () => { 


	let fecha_inicio=document.getElementById('fecha_inicio').value;				
	let fecha_termino=document.getElementById('fecha_termino').value;

	const baseUrl = 'php/consultaFetch.php';
	let consulta=`SELECT v.estado_venta AS estadoventa,p.nombre,vr.codigo_producto,vr.nombre_producto,(vr.cantidad) as cantidad,SUM(pr.stock) as stock,pr.codigo_proveedor,pr.costo FROM
	ventas v INNER JOIN ventas_relacional vr ON vr.id_venta=v.id JOIN proveedores p ON p.id=vr.id_proveedor JOIN productos pr ON pr.codigo=vr.codigo_producto
	WHERE fecha_venta between "${fecha_inicio} 00:00:00" AND "${fecha_termino} 23:59:59"
	GROUP BY vr.codigo_producto DESC ORDER BY nombre ASC`;
	 
	
	const sql = {sql: consulta, tag: `array_datos`} 
    console.error(sql);
	try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		//*-se parsea solo la respuesta del Json enviada por el servidor.
		let array = JSON.parse(data);		
		const cargar = await cargar_ventas_onchange();
		//const tablaFactutass = await tablaVentas(array);
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
		if(i['estadoventa']!=4){
		tbody.innerHTML +=
        `<tr>
            <td>${i['nombre']}</td>			   
			<td>${i['codigo_producto']}</td>
			<td>${i['codigo_proveedor']}</td>
		   <td></td>
		   <td>${i['nombre_producto']}</td>
		   <td>${i['cantidad']}</td>		
		   <td data-tableexport-msonumberformat="0">${i['stock']}</td>	  
		   <td>${i['costo']}</td>	  
		 </tr>`
		}else{
			console.error('4');
		}
	}
	$('[data-toggle="tooltip"]').tooltip();
	totalVentasCols();
 }

let totalVentasCols =() => {

	let nFilas = $("#tablaBody > tr").length;
	let tablaC = document.getElementById("tablaBody"),
		rIndex;
	let columna=6;
	let valorTotal=0;
	let valor=0;
	for (let i = 0; i < nFilas; i++) {
	
		valor += parseInt(convertirNumeros(tablaC.rows[i].cells[columna].innerHTML));
	
	  }
	  document.getElementById('totalVentaCols').innerHTML=`<h5>TOTAL STOCK: ${formatearNumeros(valor)}</h5>`;

	
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
		"stateSave":true,
		"lengthMenu":[ 100, 125, 150, 175, 1000 ]
	});


    //  new $.fn.dataTable.Buttons(table, {
	// 	buttons: [
	// 		{
	// 			extend: 'excelHtml5',
	// 			title: 'Ventas agrupadas por proveedor ' + fecha + ''
    //         }, {
	// 			extend: 'pdfHtml5',
	// 			title: 'Ventas agrupadas por proveedor ' + fecha + ''
    //         }]

	// });

	// table.buttons(0, null).container().prependTo(
	// 	table.table().container()
	// );

	


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
			//borrarVenta(id);
			obtenerStock(id);
		} else {
			return;
		}

	});	

}

let obtenerStock = async(idP) => {

	const baseUrl = 'php/consultaFetch.php';

	let consulta=`SELECT vr.id,vr.codigo_producto,p.id as idProducto,p.codigo_proveedor,id_cliente,p.precio_venta,vr.nombre_producto AS nombre,DATE(v.fecha_venta) AS fecha_venta, vr.cantidad,vr.precio_unitario,vr.total_unitario,vr.id_venta
	FROM ventas_relacional vr INNER JOIN ventas v ON v.id=vr.id_venta JOIN productos p ON p.codigo=vr.codigo_producto WHERE vr.id_venta=${idP} AND v.estado_venta=1`;

	const sql   = {sql: consulta, tag: `array_datos`}	

	console.error(consulta);
	
	try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		//*-se parsea solo la respuesta del Json enviada por el servidor.	

		let array = JSON.parse(data);		
		

		for(let i=0; i < array.length; i++){			
			
			const devol = await devolverStock(array[i]['cantidad'],array[i]['idProducto']);
		
			}

			const borrar = await borrarVenta(idP);			
			const totVanCols=await totalVentasCols();
		
	} catch (error) { console.log('error en la conexion ', error); }

	}
		

		let devolverStock = async(cantidad,idProducto) =>{

			const baseUrl = 'php/consultaFetch.php';

			const consulta = `UPDATE productos set stock =stock + (${cantidad}) WHERE id=${idProducto}`;

			const sql = {sql: consulta, tag: `array_datos`} 

			console.error(consulta);
	
		try {
			//*-llamar ajax al servidor mediate api fetch.
			const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
			//*-request de los datos en formato texto(viene todo el request)
			const data = await response.text();
			//*-se parsea solo la respuesta del Json enviada por el servidor.
			console.error('actulizado');
			
			
		} catch (error) { console.log('error en la conexion ', error); }


		}

let borrarVenta =async (idP) =>{

	const baseUrl = 'php/consultaFetch.php';

	let consulta=`DELETE FROM VENTAS  WHERE id=${idP}`;

	const sql   = {sql: consulta, tag: `crud`}

	
	
	try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		

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

			setTimeout('location.reload()', 1000);
		
		
	} catch (error) { console.log('error en la conexion ', error); }


}
window.onload = vendedor