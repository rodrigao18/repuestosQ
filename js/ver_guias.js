var VENDEDORES;
var CLIENTES;
var ARRPRODUCTOS=[];
var ULTIMAFACTURA;
var ARRAYPROPHP;


let ultimoNFactura = async() => {

	const baseUrl = 'php/consultaFetch.php';

    let consulta=`SELECT (id_factura+1) as numeroFactura FROM ventas where estado_venta=2 ORDER BY id DESC LIMIT 1 `;

    const sql = {sql: consulta, tag: `array_datos`}  

    try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		
		let array = JSON.parse(data);
		let ultima_boleta;	
		ULTIMAFACTURA=ultima_boleta=array[0]['numeroFactura'];
		
		

		

		document.getElementById('id_factura').value=ultima_boleta;
      
        //const provinciass = await provincias(array);
        
    } catch (error) {  }


}


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
	
		var arr = new Array();
		for (var i = 0; i < array.length; i++) {
			arr[array[i][0].toString()] = array[i][1];

			}		
		VENDEDORES=arr;
		
		const clie = await clientes();	
		const ult = await ultimoNFactura();	

		//*-promesa de la funcion denguaje la ejecuto a la espera
		//*-de la respuesta del servidor.	

		
	} catch (error) {
		console.log('error en la conexion ', error);
	}	
}

let cargar_ventas_onchange = async() =>{	

	let tbody = document.getElementById('tablaBody');

	tbody.innerHTML=``;

	let fecha_inicio=document.getElementById('fecha_inicio').value;				
	let fecha_termino=document.getElementById('fecha_termino').value;

	const baseUrl = 'php/consultaFetch.php';
    let consulta=`SELECT COUNT(vr.id_venta) AS producto,v.total_sin_des, v.id,id_vendedor,id_cliente,id_guia,estado_venta,DATE(fecha_venta) AS fecha,neto,iva,total 
	FROM ventas v INNER JOIN ventas_relacional vr ON vr.id_venta=v.id WHERE fecha_venta between "${fecha_inicio} 00:00:00" AND "${fecha_termino} 23:59:59" AND estado_venta=3  GROUP BY v.id`;
	
	
	
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
    let consulta=`SELECT count(*) as producto ,id,id_vendedor,id_cliente,estado_venta,DATE(fecha_venta) as fecha,neto,iva, total 
    FROM ventas WHERE estado_venta=3`;
	 
	
	const sql = {sql: consulta, tag: `array_datos`} 
   
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
		let checkHtml;

		if(CLIENTES[i['id_cliente']]!=undefined){			
			estadoColumna=CLIENTES[i['id_cliente']];
		}if(CLIENTES[i['id_cliente']]==undefined){
			estadoColumna=`<span class='badge badge-danger'>Sin cliente</span>`;
		}
		if(i['id_cliente']<1){
		checkHtml=``;
		}else{
		checkHtml=`<input type="checkbox" class="form-control" onchange="obtProductos(this,${i['id']})" id="estado_guia_${i['id']}"`;
		}
		

		tbody.innerHTML +=
        `<tr>
            <td>${i['id_guia']}</td>			   
			<td>${VENDEDORES[i['id_vendedor']]}</td>
			<td>${estadoColumna}</td>
			<td>${i['producto']}</td>
		   	<td>${formatearNumeros(i['neto'])}</td>
		   	<td>${formatearNumeros(i['iva'])}</td>					
		   	<td>${formatearNumeros(i['total'])}</td>				  
		   	<td><form method="POST" action="detalle_venta.php">
		   	<input type="hidden" class="form-control" id="estado_venta" name="estado_venta" value="${i['estado_venta']}">
		   	<input type="hidden" class="form-control" id="num_boleta" name="num_boleta" value="${i['id_guia']}">
		   	<button type="submit" class="btn btn-primary" data-toggle="tooltip"
		    data-placement="top" title="ver guias" name="id" value=${i['id']}><i class="fas fa-list" aria-hidden="true"></i></button></form></td>		
		   	<td><button class="btn  btn-danger" data-toggle="tooltip" data-placement="top" title="Borrar" onclick=eliminarProducto(event,${i['id']})><i class="fa fa-trash" aria-hidden="true"></i></button></td>					   
		   	<td>${checkHtml}</td>
		 </tr>`
	 	
	}
	$('[data-toggle="tooltip"]').tooltip();
	totalVentasCols();
 }

 let obtProductos = async(btn,id) => {

	let idcheck=btn.id;
	if(document.getElementById(idcheck).checked==true){
	
		const baseUrl = 'php/consultaFetch.php';

		let consulta=`SELECT vr.id,vr.codigo_producto,p.codigo_proveedor,id_vendedor,id_cliente,v.total_sin_des,p.precio_venta,vr.nombre_producto AS nombre,
		DATE(v.fecha_venta) AS fecha_venta, vr.cantidad,vr.precio_unitario,vr.total_unitario,vr.id_venta,vr.descuento_producto,vr.id_proveedor
		FROM ventas_relacional vr INNER JOIN ventas v ON v.id=vr.id_venta JOIN productos p ON p.codigo=vr.codigo_producto WHERE vr.id_venta=${id} AND v.estado_venta=3`;
	 
	
		const sql = {sql: consulta, tag: `array_datos`} 
	
		try {
		
			const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });		
			const data = await response.text();		
			let array = JSON.parse(data);
		
			for(let i=0; i < array.length;i++){

				ARRPRODUCTOS.push({"id":array[i]['id'],"cod_producto":array[i]['codigo_producto'],"cod_proveedor":array[i]['codigo_proveedor'],"cliente":array[i]['id_cliente']
				,"vendedor":array[i]['id_vendedor'],"p_venta":array[i]['precio_venta'],"nombre":array[i]['nombre'],"totalSinDes":array[i]['total_sin_des'],
				"fe_venta":array[i]['fecha_venta'],"cantidad":array[i]['cantidad'],"p_unitario":array[i]['precio_unitario'],"to_unitario":array[i]['total_unitario']
				,"id_venta":array[i]['id_venta'],"des_producto":array[i]['descuento_producto'],"id_proveedor":array[i]['id_proveedor']})
				}		
				ARRAYPROPHP=JSON.stringify(ARRPRODUCTOS);		
				document.getElementById('array_productos').value=ARRAYPROPHP;
				document.getElementById('id_cliente').value=ARRPRODUCTOS[0]['cliente'];
				document.getElementById('ul_factura').value=ULTIMAFACTURA;
		
			} 	catch (error) {
			console.log('error en la conexion ', error);
				}
	}	else{
			document.getElementById('array_productos').value=``;
			document.getElementById('id_cliente').value=``;
			document.getElementById('ul_factura').value=``;
			
			return;
		}

	 }
	 
	 let trasFactura = async() => {

		if(ARRPRODUCTOS.length < 1){
			swal('Precaucion','no hay datos a traspasar','warning')
		}else{

		let sum_total_unitario=0;
		let cliente;
		let vendedor;
		let totaSinDes;
		let id;

		for(let i=0; i < ARRPRODUCTOS.length;i++){
			id=(ARRPRODUCTOS[i]['id_venta']);
			sum_total_unitario +=parseInt(ARRPRODUCTOS[i]['to_unitario']);
			cliente=(ARRPRODUCTOS[i]['cliente']);
			vendedor=(ARRPRODUCTOS[i]['vendedor']);
			totaSinDes=(ARRPRODUCTOS[i]['totalSinDes']);					
		}				
		const insfact = await insertFactura(sum_total_unitario,cliente,vendedor,totaSinDes,id);

		}
	 }

let insertFactura = async(sum_total_unitario,cliente,vendedor,totaSinDes,id)=> {

		let neto=redondeo(parseInt(sum_total_unitario)/1.19,0);
		let iva=redondeo(neto * 0.19,0);
		let total=parseInt(neto) + parseInt(iva);

		const baseUrl = 'php/consultaFetch.php';

	
		let consulta=`INSERT INTO VENTAS (id_vendedor,fecha_venta,estado_venta,id_cliente,descuento,descuento_pesos,neto,iva,total,total_sin_des,
					fecha_nulo,observacion,medio_pago,id_turno,id_cotizacion,id_factura,id_guia,id_tarjeta,id_boleta)
					VALUES(${vendedor},NOW(),2,${cliente},0,0,${neto},${iva}
					,${total},${totaSinDes},NULL,"NULL",1,${ID_TURNO},"NULL","${ULTIMAFACTURA}","NULL","NULL","NULL")`;

		const sql   = {sql: consulta, tag: `insert_return_id`}
		try {

		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });	
		const data = await response.text();			 
		if (!isNaN(data)) {
			insertProductos(data,id);
		}	 
	
		} catch (error) {  }


}

let insertProductos = async(id_Venta,id) => {


	for (var i = 0; i < ARRPRODUCTOS.length; i++) {

		const baseUrl = 'php/consultaFetch.php';
		let consulta=`INSERT INTO VENTAS_RELACIONAL (codigo_producto,precio_unitario,cantidad,total_unitario,id_venta,nombre_producto,id_proveedor)

		VALUES("${ARRPRODUCTOS[i]['cod_producto']}",${ARRPRODUCTOS[i]['p_unitario']},${ARRPRODUCTOS[i]['cantidad']},${ARRPRODUCTOS[i]['to_unitario']},${id_Venta}
				,"${ARRPRODUCTOS[i]['nombre']}",${ARRPRODUCTOS[i]['id_proveedor']})`;	

		const sql   = {sql: consulta, tag: `crud`}	
		try {
		
			const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });				
			const data = await response.text();	
			let check = document.getElementById(`estado_guia_${id}`).checked=false;

			swal("Factura creada", "los datos fueron crados exitosamente", "success");
			setTimeout('window.location.href = "ver_facturas_ventas.php";', 1500);

		} catch (error) {  }	
			
		}
		ARRPRODUCTOS=[];		

		}

			

	 

let totalVentasCols =() => {

	let nFilas = $("#tablaBody > tr").length;
	let tablaC = document.getElementById("tablaBody"),
		rIndex;
	let columna=5;
	let valorTotal=0;
	let valor=0;

	for (let i = 0; i < nFilas; i++) {
		//valorTotal +=  parseInt(convertirNumeros(document.getElementById('prect'+(i+1)).value));
		//console.log("valor total: " + valorTotal);
		valor += parseInt(convertirNumeros(tablaC.rows[i].cells[columna].innerHTML));
		console.error("valor total: " + valor);
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
window.onload = vendedor