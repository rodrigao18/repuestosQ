var VENDEDORES;
var CLIENTES;
var ESTADOVENTA=1;


let vendedor = async () => {

	document.getElementById('loading').innerHTML=`<i class="fas fa-spinner fa-pulse"></i> Cargando ventas espere......`;

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
	

		//*-promesa de la funcion denguaje la ejecuto a la espera
		//*-de la respuesta del servidor.	

		
	} catch (error) {
		console.log('error en la conexion ', error);
	}	
}

let cargar_ventas_onchange = async() =>{	

	document.getElementById('loading').innerHTML=`<i class="fas fa-spinner fa-pulse"></i> Cargando ventas espere......`;

	let tbody = document.getElementById('tablaBody');

	tbody.innerHTML=``;

	let fecha_inicio=document.getElementById('fecha_inicio').value;				
	let fecha_termino=document.getElementById('fecha_termino').value;

	const baseUrl = 'php/consultaFetch.php';
    let consulta=`SELECT id,id_boleta,id_vendedor,id_cliente,estado_venta,(fecha_venta) as fecha,neto,iva, total,nula_boleta 
					FROM ventas WHERE fecha_venta between "${fecha_inicio} 00:00:00" AND "${fecha_termino} 23:59:59" AND estado_venta=1 OR estado_venta=6`;
	
	
	
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

	const baseUrl = 'php/consultaFetch.php';
    let consulta=`SELECT id,id_boleta,id_vendedor,id_cliente,estado_venta,DATE(fecha_venta) as fecha,neto,iva, total 
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
		const cargar = await cargar_ventas_onchange();
		//const tablaFactutass = await tablaVentas(array);
		//*-promesa de la funcion denguaje la ejecuto a la espera
		//*-de la respuesta del servidor.	
		const botones = await lenguaje();	
		document.getElementById('loading').innerHTML=``;	
	} catch (error) {
		console.log('error en la conexion ', error);
	}
	
}




 const tablaVentas = async (arreglo) => {

	for (var i = 0; i < arreglo.length; i++) {

		let estadoColumna;
		let activo;
	
		let boton;
		let boton_eliminar;
		if(arreglo[i]['nula_boleta']==2){
			activo=`<span class='badge badge-dark'>Nula</span>`;
			boton=``;
			boton_eliminar=`<button class="btn btn-danger"  data-toggle="tooltip" data-placement="top" title="Eliminar" onclick=eliminarProducto(event,${arreglo[i]['id']},1)><i class="fas fa-trash"></i></button>`
		}else{
			activo=`<span class='badge badge-success'>Realizada</span>`;
			boton=`<button class="btn  btn-dark" data-toggle="tooltip" data-placement="top" title="Anular" onclick=eliminarProducto(event,${arreglo[i]['id']})><i class="fas fa-times-circle"></i></button>`;
			boton_eliminar=`<button class="btn  btn-danger"  data-toggle="tooltip" data-placement="top" title="Eliminar" onclick=eliminarProducto(event,${arreglo[i]['id']},1)><i class="fas fa-trash"></i></button>`
		}
		

		$("#tablaBody").append(`<tr>
		<td>${arreglo[i]['id_boleta']}</td>
		<td>${arreglo[i]['fecha']}</td>				   
		<td>${VENDEDORES[arreglo[i]['id_vendedor']]}</td>
		<td>${activo}</td>
		<td>${formatearNumeros(arreglo[i]['neto'])}</td>
		<td>${formatearNumeros(arreglo[i]['iva'])}</td>					
		<td>${formatearNumeros(arreglo[i]['total'])}</td>				  
		<td><form method="POST" action="detalle_venta.php">
		<input type="hidden" class="form-control" id="estado_venta" name="estado_venta" value="${arreglo[i]['estado_venta']}">
		<input type="hidden" class="form-control" id="num_boleta" name="num_boleta" value="${arreglo[i]['id_boleta']}">
		<button type="submit" class="btn btn-secondary" data-toggle="tooltip"
		data-placement="top" title="Editar" name="id" value=${arreglo[i]['id']}><i class="fas fa-edit" aria-hidden="true"></i></button></form></td>		
		<td>${boton_eliminar}</td>			
		<td>${boton}</td>				
	 </tr>`);
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
		//valorTotal +=  parseInt(convertirNumeros(document.getElementById('prect'+(i+1)).value));
		//console.log("valor total: " + valorTotal);
		valor += parseInt(convertirNumeros(tablaC.rows[i].cells[columna].innerHTML));
		
	  }
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
		"lengthMenu":[ 50, 100, 150, 175, 1000 ]
	});
}


function eliminarProducto(e, id,index) {
	e.preventDefault();
	let mensaje;
	let titulo;
	if(index==1){
		titulo=`Eliminar dato`;
		mensaje=`¿esta seguro de eliminar la boleta ?`;
	}else{
		titulo=`Anular documento`;
		mensaje=`¿esta seguro de anular la boleta ?`;
	}

	swal({
		title: `${titulo}`,
		text: `${mensaje}`,
		icon: "warning",
		buttons: true,
		dangerMode: true,
	})
	.then((willDelete) => {
		if (willDelete) {
			//borrarVenta(id);
			obtenerStock(id,index);
		} else {
			return;
		}

	});	

}

let obtenerStock = async(idP,index) => {

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
			if(index==1){
				const eliminar = await elimiarVenta(idP);	
			}else{
				const borrar = await actualizarVenta(idP);	
			}
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
	let elimiarVenta =async(idP)=>{

		const baseUrl = 'php/consultaFetch.php';

		let consulta=`DELETE FROM ventas WHERE id=${idP}`;

		const sql   = {sql: consulta, tag: `crud`}	
		
		try {
			//*-llamar ajax al servidor mediate api fetch.
			const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
			//*-request de los datos en formato texto(viene todo el request)
			const data = await response.text();		
			const borraVrelacional = borrVentaRe (idP);				
		} catch (error) { console.log('error en la conexion ', error); }

	}

	let actualizarVenta =async (idP) =>{

		const baseUrl = 'php/consultaFetch.php';

		let consulta=`UPDATE ventas set nula_boleta=2 WHERE id=${idP}`;

		const sql   = {sql: consulta, tag: `crud`}	
		
		try {
			//*-llamar ajax al servidor mediate api fetch.
			const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
			//*-request de los datos en formato texto(viene todo el request)
			const data = await response.text();	

			$.notify({
				title: "Anulado: ",
				message: "Se Anulo la boleta:",
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

			setTimeout('window.location.href = "ventas_por_dia.php"', 1000);				
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