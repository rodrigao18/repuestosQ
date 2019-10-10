
var ITEM = 0; 
cargarDatos = async (id) => {
    
    ID=id;	
	const baseUrl = 'php/consultaFetch.php';
    let consulta=`SELECT f.id,id_proveedor,DATE(fecha_emision) as fechae,DATE(fecha_vencimiento) as fechav,neto,iva,total,numero_factura,     
    codigoProveedor,codigoProducto,nombreProducto,cantidad,totalUnitario,precioUnitario FROM facturas f inner join facturas_relacional fr on fr.idfactura=f.id where f.id=${id}`;	 
	
	const sql = {sql: consulta, tag: `array_datos`} 
	console.error(sql);
	try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		//*-se parsea solo la respuesta del Json enviada por el servidor.
        let array = JSON.parse(data);
        let proveedor=array[0]['id_proveedor'];
        console.error(array);
        const proveedors=await cargarProveedor(proveedor);
		document.getElementById('fecha_emision').value=array[0]['fechae'];	
        document.getElementById('fecha_vencimiento').value=array[0]['fechav'];	
		document.getElementById('factura').value=array[0]['numero_factura'];
		const Productoss = await Productos(array);			
		// document.getElementById('contacto').value=array[0]['contacto'];
		// document.getElementById('direccion').value=array[0]['direccion'];		
        // const Proveedores = await Proveedor(id_pro,id);
        // const Categoriaa = await Categoria(id_cat);
        // const Marcaa = await Marca(id_mar);
        // const Productoss = await Productos(array);		
		
	} catch (error) { console.log('error en la conexion ', error); }

}

let cargarProveedor = async (proveedor) => {

	const baseUrl = 'php/consultaFetch.php';
    let consulta=`SELECT id,rut,nombre,direccion,ciudad,fono,contacto
                  FROM proveedores where id=${proveedor}`;	 
	
    const sql = {sql: consulta, tag: `array_datos`} 
    
    try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		//*-se parsea solo la respuesta del Json enviada por el servidor.
		let array = JSON.parse(data);
		document.getElementById('proveedor').value=array[0]['nombre'];	
        document.getElementById('rut').value=array[0]['rut'];	
		document.getElementById('fono').value=array[0]['fono'];	
		document.getElementById('contacto').value=array[0]['contacto'];
		document.getElementById('direccion').value=array[0]['direccion'];		
        // const Proveedores = await Proveedor(id_pro,id);
        // const Categoriaa = await Categoria(id_cat);
        // const Marcaa = await Marca(id_mar);
        // const Productoss = await Productos(array);		
		
	} catch (error) { console.log('error en la conexion ', error); }




}

let prebusqueda = (estado) => {

	clearTimeout($.data(this,'timer'));
	if(estado=='detalle'){var wait = setTimeout(bucarProductos,750);}
	$(this).data('timer',wait);
	
}


// //funcion para buscar productos
let  bucarProductos = async () => {

	$("#tablaProductos").show();
	$("#salidaTabla").html("");

	let buscar = $("#buscar").val();

	if(buscar=="" || buscar == " "){return;}

	if( buscar.indexOf(" ") !== -1){console.error('aca');}	

		const baseUrl = 'php/consultaFetch.php';

		if(isNaN(buscar) || buscar.indexOf(" ") !== -1) {

			var consulta=`SELECT  id,codigo,codigo_proveedor,nombre,costo,stock,margen_contado FROM PRODUCTOS where nombre LIKE "%${buscar}%" || codigo LIKE "%${buscar}%"`;
		}else{
			var consulta=`SELECT  id,codigo,codigo_proveedor,nombre,costo,stock,margen_contado FROM PRODUCTOS where nombre LIKE "%${buscar}%" || codigo LIKE "%${buscar}%"`;
		}
	
		const sql = {sql: consulta, tag: `array_datos`} 
	
		try {
			//*-llamar ajax al servidor mediate api fetch.
			const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
			//*-request de los datos en formato texto(viene todo el request)
			const data = await response.text();
			//*-se parsea solo la respuesta del Json enviada por el servidor.
	
			$("#salidaTabla").show();
			let array = JSON.parse(data);	
			
			const tablaproductoss = await tablaProductos(array);
			
			
		} catch (error) { console.log('error en la conexion ', error); }
	
}

let tablaProductos = (array) => {

	$("#salidaTabla").append('<button class="btn btn-sm btn-primary float-right" onclick = regresar(event)  data-toggle="tooltip" data-placement="top" title="" data-original-title="Regresar a resumen" ><i class="fas fa-chevron-left"></i>  </button>' +		
			'<table  class="table table-striped" id="tabla" >' +
			'<thead>' +
			'<tr>' +
			'	<th scope="col" width="10%">Cód.Interno</th>' +
			'	<th scope="col" width="10%">Cód.Proveedor</th>' +
			'	<th scope="col" width="10%">Nombre</th>' +	
			'	<th scope="col" width="10%">Stock</th>' +	
			'	<th scope="col" width="1%">Cantidad</th>' +
			'	<th scope="col" width="10%">Costo</th>' +
			'	<th id="checkMargen" width="10%">Margen</th>' +
			'	<th scope="col" width="10%"> Descuento</th>' +
			'	<th scope="col" width="10%"> Precio venta</th>' +		
			'	<th scope="col" width="10%"> </th>' +
			'</tr>' +
			'</thead>' +
			'<tbody id="tablaBody"></tbody>' +
			'</table>');
		let	chekeadoTodoEntregado = "";
		for (var i = 0; i < array.length; i++) {
			var id_producto = array[i]['id'];
			var nombre = array[i]['nombre'];			
			var codigo = array[i]['codigo'];
			var codigoProveedor = array[i]['codigo_proveedor'];
			var costo = array[i]['costo'];
			var margen = array[i]['margen_contado'];
			var stock = array[i]['stock'];
			var descuento_html = '<div style="display:none;right: .9em; " id="' + 'div_descuento' + parseFloat(i + 1) + '"class="col input-group">' +
			'<input class="form-control" id="' + 'des' + parseFloat(i + 1) + '"  type="number" onclick="validar_descuento(this,50,' + parseFloat(i + 1) + ',' + parseFloat(i + 1) + ',true)"' +
			'onkeyup="validar_descuento(this,50,' + parseFloat(i + 1) + ',' + parseFloat(i + 1) + ',true)" min = "0" max= 50  data-toggle="tooltip" data-placement="top" title="max 50" value="1">' +
			'</div>';

			var btn_descuento_html = '<button class="btn btn-danger btn-mini float-left" id="' + 'btn_des' + parseFloat(i + 1) + '" onclick="comprobar_descuento_historico (this)">  <i class="fas fa-sort-amount-down"></i>  Descuento </button>';

			//BODY DE LA TABLA AGREGAR PRODUCTOS;
			$("#tablaBody").append('<tr>' +
				'<td>' + codigo + '</td>' +
				'<td>' + codigoProveedor + '</td>' +
				'<td>' + nombre + '</td>' +
				'<td>' + stock + '</td>' +
				'<td><input class="form-control" id="' + 'can' + parseFloat(i + 1) + '" min=0 type="number" value="1"></td>' +
				'<td><input  class="form-control" id="' + 'cos' + parseFloat(i + 1) + '" disabled type="number" value=' + costo + '></td>' +
				'<td><input style="width:70px" class="form-control" id="' + 'mar' + parseFloat(i + 1) + '" min=105 onclick="calcular_margen(this,' + parseFloat(i + 1) + ',true)" type="number" value=' + margen + '></td>' +
				'<td>' + btn_descuento_html + descuento_html + ' </td>' +						
				'<td><input class="form-control" id="' + 'ven' + parseFloat(i + 1) + '" disabled type="number" value=' + costo + '></td>' +		
				'<td style="display:none;">'+id_producto+'</td>' +
				'<td>' +
				'<button id="' + parseFloat(i + 1) + '" class="btn btn-mini" data-toggle="tooltip" data-placement="top" title="Agregar" onclick="agregarProductos(event,this)"> <i class="fa fa-plus" aria-hidden="true"></i></button>' +
				'</td>' +
				'</tr>');
		}
				$('[data-toggle="tooltip"]').tooltip();
				document.getElementById('checkMargen').innerHTML = 'Margen <input id="checkEnt" ' + chekeadoTodoEntregado + ' type="checkbox"  data-toggle="tooltip" data-placement="top" title="Actualizar precio">'
}

//agragar  productos a la tabla factura
let Productos =  (array) => {	

	$("#tablaProductos").show();
	$("#salidaTabla").hide();	
	//borramos el input buscar
	$('#buscar').val('');

	var table = document.getElementById("tablaResumen"); //ID DE LA TABLA PARA OBTENER LOS VALORES DE LAS FILAS	
	let nFilas = $("#tablaBodyCotizacion > tr").length;

	for (let i = 0; i < array.length; i++) {


	let codigo_producto = array[i]['codigoProducto']; 
	let codigo_proveedor = array[i]['codigoProveedor']; 
	let nombre =array[i]['nombreProducto']; 
	let cantidad = array[i]['cantidad']; 
	let precio_venta = array[i]['precioUnitario']; 
	let precioTotal =array[i]['totalUnitario']; 
	
	ITEM++;

	// var estadoEntr = "";
	// estadoEntr = document.getElementById('checkEnt').checked;

	// if(estadoEntr == true){
	// 	actualizarPrecioVenta(idProd,precio_venta);
	// }
	

	$("#tablaBodyCotizacion").append('<tr id="fila' + ITEM + '">' +
	'<td> <span  class="editar" onclick="transformarEnEditable(this,2)" style="cursor:pointer;">'+codigo_proveedor+'</span> </td>' +
	'<td>' + codigo_producto + '</td>' +
	'<td><input style="width:50px" id="' + 'cant' + parseFloat(ITEM) + '" size="2" onClick=cantidadCalculo('+ITEM+')  type="number" min=1 value="'+cantidad+'"></td>' +
	'<td> <span class="editar" onclick="transformarEnEditable(this,1)" style="cursor:pointer;">' + nombre + '</span> </td>' +
	'<td><input class="form-control" id="' + 'vent' + parseFloat(ITEM) + '" disabled type="text" min=0 value="'+formatearNumeros(precio_venta)+'"></td>' +
	'<td><input class="form-control" id="' + 'prect' + parseFloat(ITEM) + '" disabled  type="text" min=0 value="'+formatearNumeros(precioTotal)+'"></td>' +
	'<td><button class="btn  btn-danger" id="' + ITEM + '" onclick=removerItem(this)><i class="fa fa-trash" aria-hidden="true"></i></button></td>' +
	'</tr>');

		// $('[data-toggle="tooltip"]').tooltip();
	//	agregarNumeracionItem();
 		recalcularValores();

	}
}

let cantidadCalculo = (id) =>{
	
	let cantidad=document.getElementById('cant'+id).value;
	let precioVen=convertirNumeros(document.getElementById('vent'+id).value);
	let precioT=cantidad*precioVen;
	document.getElementById('prect'+id).value=formatearNumeros(precioT);
	console.error('precioT' + precioT);
	recalcularValores();

} 



let recalcularValores = () => {

	let columnaValorTotal = 5;
	let valorTotal=0;
	let netoTotal;

	let tablaC = document.getElementById("tablaBodyCotizacion"),
	  rIndex;
	let nFilas = $("#tablaBodyCotizacion > tr").length;
	for (let i = 0; i < nFilas; i++) {
	  valorTotal +=  parseInt(convertirNumeros(document.getElementById('prect'+(i+1)).value));
	  console.log("valor total: " + valorTotal);
  
	}
	  
	$("#totalNeto").val(formatearNumeros(valorTotal));
	$("#iva").val(formatearNumeros(valorTotal*0.19));
	$("#totalF").val(formatearNumeros(valorTotal*1.19));

}