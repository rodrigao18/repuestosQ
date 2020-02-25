var VENDEDORES;
var CLIENTES;



let vendedor = async () => {

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
		console.error(array);
		var arr = new Array();
		for (var i = 0; i < array.length; i++) {
			arr[array[i][0].toString()] = array[i][1];

			}		
		VENDEDORES=arr;
		console.error(VENDEDORES);
		const clie = await clientes();	
		let fecha_inicio = document.getElementById('fecha_inicio').value;
		document.getElementById('fecha_inicio_text').value=fecha_inicio;
		document.getElementById('fecha_inicio_text_nula').value=fecha_inicio;
		let fecha_termino = document.getElementById('fecha_termino').value;
		document.getElementById('fecha_termino_text').value=fecha_termino;
		document.getElementById('fecha_termino_text_nula').value=fecha_termino;
		//*-promesa de la funcion denguaje la ejecuto a la espera
		//*-de la respuesta del servidor.	

		
	} catch (error) {
		console.log('error en la conexion ', error);
	}	
}

let cargar_ventas_onchange = async() =>{	


	document.getElementById('loading').innerHTML=`<p>Buscando ventas....... <img width='80px' src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'></p>`;
	document.getElementById('contenido').className=`fade`;

	let tbody = document.getElementById('tablaBody');

	tbody.innerHTML=``;

	let fecha_inicio=document.getElementById('fecha_inicio').value;				
	let fecha_termino=document.getElementById('fecha_termino').value;

	const baseUrl = 'php/consultaFetch.php';
    let consulta=`SELECT id,estado_venta,fecha_venta,id_vendedor,id_cliente,estado_venta,DATE(fecha_venta) as fecha,neto,iva, total,id_boleta,nula_boleta,nula_factura,nula_guia,nula_tarjeta,
				id_cotizacion,id_factura,id_guia,id_tarjeta FROM ventas WHERE fecha_venta between "${fecha_inicio} 00:00:00" AND "${fecha_termino} 23:59:59" ORDER BY estado_venta ASC`;
	
	
	
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
		let fecha_ini = document.getElementById('fecha_inicio').value;
		document.getElementById('fecha_inicio_text').value=fecha_ini;
		document.getElementById('fecha_inicio_text_nula').value=fecha_ini;
		let fecha_term = document.getElementById('fecha_termino').value;
		document.getElementById('fecha_termino_text').value=fecha_term;	
		document.getElementById('fecha_termino_text_nula').value=fecha_term;

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
		console.error(CLIENTES);	
		const vende = await cargarVentas();
		//*-promesa de la funcion denguaje la ejecuto a la espera
		//*-de la respuesta del servidor.	

		
	} catch (error) {
		console.log('error en la conexion ', error);
	}	
}


//*-cargar datos mediante async wait()
let cargarVentas = async () => { 

	const baseUrl = 'php/consultaFetch.php';
    let consulta=`SELECT id,id_boleta,id_vendedor,id_cliente,estado_venta,DATE_FORMAT(fecha_venta ,'%m-%d-%YYYY') as fecha,neto,iva, total 
    FROM ventas ORDER BY fecha_venta DESC`;
	 
	
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

		let estadoColumna;
		let estadoDocumento;
		let numero;

		
		if(CLIENTES[i['id_cliente']]!=undefined){			
			estadoColumna=CLIENTES[i['id_cliente']];
		}if(CLIENTES[i['id_cliente']]==undefined){
			estadoColumna=`<span class='badge badge-danger'>Sin cliente</span>`;
		}

		if(i['estado_venta']==1){

			if(i['nula_boleta']==2){

				estadoDocumento=`<span class='badge badge-dark'>nula</span>`;
			}else{
				estadoDocumento=`<span class='badge badge-success'>Boleta</span>`;
			}			
			numero=i['id_boleta'];
		}else if(i['estado_venta']==2){

			if(i['nula_factura']==2){
				estadoDocumento=`<span class='badge badge-dark'>nula</span>`;
			}else{
				estadoDocumento=`<span class='badge badge-warning'>Factura</span>`;
			}
		
			numero=i['id_factura'];	
		}
		else if(i['estado_venta']==3){

			if(i['nula_guia']==2){
				estadoDocumento=`<span class='badge badge-dark'>nula</span>`;
			}else{
				estadoDocumento=`<span class='badge badge-danger'>Guía</span>`;
			}
		
			numero=i['id_guia'];		
		}
		else if(i['estado_venta']==4){
			
			estadoDocumento=`<span class='badge badge-dark'>Cotización</span>`;
			numero=i['id_cotizacion'];	
		}
		else if(i['estado_venta']==5){

			if(i['nula_tarjeta']==2){
				estadoDocumento=`<span class='badge badge-dark'>nula</span>`;
			}else{
				estadoDocumento=`<span class='badge badge-primary'>Tarjeta</span>`;	
			}
			
			numero=i['id_tarjeta'];	
		}
		
		if(i['estado_venta']!=4){
			tbody.innerHTML +=
			`<tr>
				<td>${i['fecha_venta']}</td>
				<td>${estadoDocumento}</td>	
				<td>${numero}</td>			   
				<td>${VENDEDORES[i['id_vendedor']]}</td>
				<td>${estadoColumna}</td>
			   <td>${formatearNumeros(i['neto'])}</td>
			   <td>${formatearNumeros(i['iva'])}</td>					
			   <td>${formatearNumeros(i['total'])}</td>	 
			 </tr>`
		}else{
			console.log('entro a ca');
			console.error('4');
		}

	 	
	}
	$('[data-toggle="tooltip"]').tooltip();
	totalVentasCols();
 }

let totalVentasCols =() => {
	document.getElementById('totalVentaCols').innerHTML=``;
	let nFilas = $("#tablaBody > tr").length;
	let tablaC = document.getElementById("tablaBody"),
		rIndex;
	let columna=7;
	let valorTotal=0;
	let valor=0;
	for (let i = 0; i < nFilas; i++) {
		//valorTotal +=  parseInt(convertirNumeros(document.getElementById('prect'+(i+1)).value));
		//console.log("valor total: " + valorTotal);
		valor += parseInt(convertirNumeros(tablaC.rows[i].cells[columna].innerHTML));
		console.log(tablaC.rows[i].cells[columna].innerHTML);
	  }
	  console.log('valor ' + valor);

	  document.getElementById('totalVentaCols').innerHTML=`<h5>TOTAL: $${formatearNumeros(valor)}</h5>`;

	
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
		"lengthMenu":[ 50, 100, 150, 175, 1000 ],
		
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

function format ( d ) {
    // `d` is the original data object for the row
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
        '<tr>'+
            '<td>Full name:</td>'+
            '<td>'+d.name+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Extension number:</td>'+
            '<td>'+d.extn+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Extra info:</td>'+
            '<td>And any further details here (images etc)...</td>'+
        '</tr>'+
    '</table>';
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
	FROM ventas_relacional vr INNER JOIN ventas v ON v.id=vr.id_venta JOIN productos p ON p.codigo=vr.codigo_producto WHERE vr.id_venta=${idP}`;

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
		
		
	} catch (error) { console.log('error en la conexion ', error); }

	}
		

		let devolverStock = async(cantidad,idProducto) =>{

			const baseUrl = 'php/consultaFetch.php';

			const consulta = `UPDATE productos set stock =stock + (${cantidad}) WHERE id=${idProducto}`;

			const sql = {sql: consulta, tag: `array_datos`} 

		
	
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