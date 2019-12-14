
var ITEM = 0; 
cargarDatos = async (id) => {
    
    ID=id;	
	const baseUrl = 'php/consultaFetch.php';
    let consulta=`SELECT f.id,fr.id as idfr,id_proveedor,DATE(fecha_emision) as fechae,DATE(fecha_vencimiento) as fechav,neto,iva,total,numero_factura,     
    codigoProveedor,codigoProducto,nombreProducto,cantidad,totalUnitario,precioUnitario FROM facturas f inner join facturas_relacional fr on fr.idfactura=f.id where f.id=${id}`;	 
	
	const sql = {sql: consulta, tag: `array_datos`} 
	
	try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		//*-se parsea solo la respuesta del Json enviada por el servidor.
        let array = JSON.parse(data);
        let proveedor=array[0]['id_proveedor'];
       
        const proveedors=await cargarProveedor(proveedor);
		document.getElementById('fecha_emision').value=array[0]['fechae'];	
        document.getElementById('fecha_vencimiento').value=array[0]['fechav'];	
		document.getElementById('factura').value=array[0]['numero_factura'];
		document.getElementById('id_factura').value=array[0]['id'];
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
let agregarProductos =  (e,btn) => {

	$("#tablaProductos").show();
	$("#salidaTabla").hide();

	let evento = e.preventDefault();
	let idTabla = btn.id; // SE OBTIENE EL ID DESDE EL BOTON DEL FORMULARIO CON EL LA PROPIEDAD THIS
	console.error('idTabla ' + idTabla);
	
	var table = document.getElementById("tabla"); //ID DE LA TABLA PARA OBTENER LOS VALORES DE LAS FILAS	
	
	//borramos el input buscar
	$('#buscar').val('');

	let codigo_producto = table.rows[idTabla].cells[0].innerHTML; //OBTEnGO EL VALOR NOMBRE DESDE LA COLUMNA 1;
	let codigo_proveedor = table.rows[idTabla].cells[1].innerHTML; //OBTEnGO EL VALOR NOMBRE DESDE LA COLUMNA 1;
	let nombre = table.rows[idTabla].cells[2].innerHTML;
	let cantidad = document.getElementById('can' + idTabla).value;
	let precio_costo = document.getElementById('cos' + idTabla).value; // ID DEL SELECT PRECIO;
	let precio_venta = document.getElementById('ven' + idTabla).value; // ID DEL SELECT PRECIO;
	let precioTotal = cantidad * precio_costo;
	let idProd = table.rows[idTabla].cells[9].innerHTML;
	let margen = document.getElementById(`mar${idTabla}`).value;
	let descuento=document.getElementById(`des${idTabla}`).value;
	let arrCod=[];
	console.error('margen ' + margen);
	ITEM++;
	insertarNuevoProducto(codigo_proveedor,codigo_producto,precio_costo,cantidad,nombre,precioTotal);
	var estadoEntr = "";
	estadoEntr = document.getElementById('checkEnt').checked;

	if(estadoEntr == true){
		actualizarPrecioVenta(idProd,precio_venta,descuento,margen);
	}
	let nfilas=$("#tablaBodyCotizacion > tr").length + parseFloat(1);
	
	$("#tablaBodyCotizacion").append('<tr id="fila' + nfilas + '" >' +
	'<td> <span  class="editar" onclick="transformarEnEditable(this,2)" style="cursor:pointer;">'+codigo_proveedor+'</span> </td>' +
	'<td>' + codigo_producto + '</td>' +
	'<td><input name="' + 'canTd' + parseFloat(nfilas) + '" style="width:50px" id="' + 'cant' + parseFloat(nfilas) + '" size="2" onClick=cantidadCalculo('+nfilas+')  type="number" min=1 value="'+cantidad+'"></td>' +
	'<td> <span class="editar" onclick="transformarEnEditable(this,1)" style="cursor:pointer;">' + nombre + '</span> </td>' +
	'<td><input class="form-control" id="' + 'vent' + parseFloat(nfilas) + '"  type="text" min=0 value="'+formatearNumeros(precio_costo)+'"></td>' +
	'<td></td>'+
	'<td><input name="' + 'preTd' + parseFloat(nfilas) + '" class="form-control" id="' + 'prect' + parseFloat(nfilas) + '"  onkeypress=precioModificar(event)  type="text" min=0 value="'+formatearNumeros(precioTotal)+'"></td>' +
	'<td style="display:none;">'+idProd+'</td>' +
	'<td><button class="btn  btn-danger" id="cols' + nfilas + '" onclick=removerItem(' + parseFloat(nfilas) + ','+codigo_producto+')><i class="fa fa-trash" aria-hidden="true"></i></button></td>' +
	'</tr>');

		$('[data-toggle="tooltip"]').tooltip();
		recalcularValores();
		comprobarRepetidos(arrCod,'cols',codigo_producto);		
}

	let insertarNuevoProducto =async (codigo_proveedor,codigo_producto,precio_costo,cantidad,nombre,precioTotal) => {

		const baseUrl = 'php/consultaFetch.php';

		const consulta = `INSERT INTO facturas_relacional (codigoProveedor,codigoProducto,precioUnitario,cantidad,totalUnitario,idfactura,nombreProducto)
		VALUES("${codigo_proveedor.trim()}","${codigo_producto}",${precio_costo},${cantidad},${precioTotal},${ID},"${nombre}")`;
	
		const sql = {sql: consulta, tag: `crud`} 
	
		console.error(consulta);
	
	try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		$.notify({
			title: "Producto agregadp : ",
			message: `Producto agregado en la BD:`,
			icon: 'fas fa-exclamation-circle'
		}, {
			type: "success",
			placement: {
				from: "top",
				align: "right"
			},
			offset: 70,
			spacing: 70,
			z_index: 1031,
			delay: 1500,
			timer: 1500
		});
		
		
	} catch (error) { console.log('error en la conexion ', error); }


	}


let datosStock = (index) => {

	let tablaC = document.getElementById("tablaBodyCotizacion"),
	rIndex;

	let nFilas = $("#tablaBodyCotizacion > tr").length;	
	let stock;
	let stockFinal;
	let idProducto;
	let nombre;
	let codigo;
	for(let i=0; i < nFilas; i++ ){

		stock=tablaC.rows[i].cells[2];
		stockFinal= stock.getElementsByTagName('input')[0].value;
		idProducto=tablaC.rows[i].cells[1].innerHTML;
		nombre=tablaC.rows[i].cells[3].innerText;
		actualizarDatosFactura(stockFinal,idProducto,nombre,index)
		console.error('nombre  ' + nombre);
		console.error('stockFinal  ' + stockFinal);
		console.error('idProducto  ' + idProducto);

		}
		
		// swal("Factura creada", "de los datos fueron guardados", "success");
		// window.location.href = "ver_proveedores.php";
		// setTimeout('window.location.href = "ver_facturas.php"', 2000);

	}


	
let actualizarDatosFactura = async (stockFinal,idProducto,nombre,index) => {

	const baseUrl = 'php/consultaFetch.php';

	const consulta = `UPDATE productos set stock =stock + (${stockFinal}) , nombre="${nombre}" WHERE codigo="${idProducto}"`;

	const sql = {sql: consulta, tag: `array_datos`} 

	console.error(consulta);

try {
	//*-llamar ajax al servidor mediate api fetch.
	const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
	//*-request de los datos en formato texto(viene todo el request)
	const data = await response.text();
	//*-se parsea solo la respuesta del Json enviada por el servidor.
	if(index!=1){
		swal("Factura editada", "de los datos fueron guardados", "success");
		// window.location.href = "ver_proveedores.php";
		setTimeout('location.reload()', 1500);
	}
		
	
	
} catch (error) { console.log('error en la conexion ', error); }

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
	
	let arrCod=[];

	let nfilas=$("#tablaBodyCotizacion > tr").length + parseFloat(1);
	

	$("#tablaBodyCotizacion").append('<tr id="fila' + nfilas + '">' +
	'<td> <span  class="editar" onclick="transformarEnEditable(this,2)" style="cursor:pointer;">'+codigo_proveedor+'</span> </td>' +
	'<td>' + codigo_producto + '</td>' +
	'<td><input style="width:50px" id="' + 'cant' + parseFloat(nfilas) + '" size="2" onClick=cantidadCalculo('+nfilas+')  type="number" min=1 value="'+cantidad+'"></td>' +
	'<td> <span class="editar" onclick="transformarEnEditable(this,1)" style="cursor:pointer;">' + nombre + '</span> </td>' +
	'<td><input class="form-control" id="' + 'vent' + parseFloat(nfilas) + '"  type="text" min=0 value="'+formatearNumeros(precio_venta)+'"></td>' +
	'<td></td>' +
	'<td><input class="form-control" id="' + 'prect' + parseFloat(nfilas) + '" onkeypress=precioModificar(event);  type="text" min=0 value="'+formatearNumeros(precioTotal)+'"></td>'+
	'<td style="display:none;">'+array[i]['idfr']+'</td>' +
	'<td><button class="btn  btn-danger" id="cols' + nfilas + '" onclick=removerItem(' + parseFloat(nfilas) + ','+array[i]['idfr']+')><i class="fa fa-trash" aria-hidden="true"></i></button></td>' +
	'</tr>');

		// $('[data-toggle="tooltip"]').tooltip();
	//	agregarNumeracionItem();
		recalcularValores();

	}
}

	//comprobar repetidos 
	let comprobarRepetidos = (arrCod,cols,idProd) => {	
			
		 console.error('idProd ' + idProd);			
		let tablaC = document.getElementById("tablaBodyCotizacion"),
		rIndex;
		let nFilas = $("#tablaBodyCotizacion > tr").length;		
		let codigoTemp;
		for(let i=0; i < nFilas;i++){

			codigoTemp=tablaC.rows[i].cells[1].innerHTML;
			arrCod.push(codigoTemp,cols+(i+1));
		}
		
		
		borrarElement(arrCod,idProd);
		
	}


	let borrarElement = (arrCod,idProd) => {

		var uniqs = arrCod.filter(function(item, index, array) {	

			switch(array.indexOf(item) === index){
				case  true: 
				
				break
				case false:
				
				let elimina=array.pop();		
				let idfila=elimina.slice(4); 

			
				swal('warning','ya ingreso esteproducto','info');
				removerItem(idfila,idProd);
				break
			}

			return array.indexOf(item) === index;

		  })
	

	}

	let removerItem = async(id,idFr) => {
					
		console.error('id ' + id);	
		$("#fila" + id).remove();
		borrarItemBd(idFr);
		const recal = await recalcularValores();
	}

	let borrarItemBd = async(idFr) =>{

		const baseUrl = 'php/consultaFetch.php';

		const consulta=`DELETE FROM FACTURAS_RELACIONAL WHERE id=${idFr}`;
		const sql   = {sql: consulta, tag: `crud`}	
		
		console.error(consulta);
		try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		//*-se parsea solo la respuesta del Json enviada por el servidor.
		
		const upFacturaa = await editar(1);			
		
		} catch (error) { console.log('error en la conexion ', error); }
	}

	let editar = async(e,index) => {

		const evento = e.preventDefault();
		
		let id=document.getElementById('id_factura').value;
		let fecha_emision=document.getElementById('fecha_emision').value;
		let fecha_vencimiento=document.getElementById('fecha_vencimiento').value;
		let factura = document.getElementById('factura').value;
		let neto = document.getElementById('totalNeto').value;
		let iva = document.getElementById('iva').value;
		let total = document.getElementById('totalF').value;
		const baseUrl = 'php/consultaFetch.php';

		let consulta=`UPDATE facturas set fecha_emision="${fecha_emision}",fecha_vencimiento="${fecha_vencimiento}",neto=${convertirNumeros(neto)},iva=${convertirNumeros(iva)}
					  ,total=${convertirNumeros(total)} WHERE numero_factura=${factura}`;
					

		const sql   = {sql: consulta, tag: `crud`}	

		

		try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		//*-se parsea solo la respuesta del Json enviada por el servidor.
		
		const upFacturaa = await updateFacturaRelacional(id,index);			
		
		} catch (error) { console.log('error en la conexion ', error); }
		
	} 

	let updateFacturaRelacional = async (id,index) =>{

		let tablaC = document.getElementById("tablaBodyCotizacion"),
		rIndex;
		let nFilas = $("#tablaBodyCotizacion > tr").length;
		let contador=0;
		let porcentaje=0, exito=0;


		for (var i = 0; i < nFilas; i++) {

			let codigoProveedor = tablaC.rows[i].cells[0].textContent;
			let codigoInterno = tablaC.rows[i].cells[1].innerHTML;
			let cantidad =document.getElementById('cant'+(i+1)).value;
			let nombre = tablaC.rows[i].cells[3].innerText;
			let idfr = tablaC.rows[i].cells[7].innerHTML;
			let precioUnitario = convertirNumeros(document.getElementById('vent'+(i+1)).value);		
			let totalUnitario = convertirNumeros(document.getElementById('prect'+(i+1)).value);
		

			const baseUrl = 'php/consultaFetch.php';
			

			let consulta=`UPDATE facturas_relacional set codigoProveedor="${codigoProveedor.trim()}",codigoProducto="${codigoInterno}",precioUnitario=${precioUnitario},cantidad=${cantidad}
						,totalUnitario=${totalUnitario},nombreProducto="${nombre}" WHERE id=${idfr}`;
			
				

			const sql   = {sql: consulta, tag: `crud`}		

			
			
			try {
				//*-llamar ajax al servidor mediate api fetch.
				const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
				//*-request de los datos en formato texto(viene todo el request)
				const data = await response.text();
				//*-se parsea solo la respuesta del Json enviada por el servidor.
				contador++; exito++;
				if (data == 1 && contador==nFilas) {
					porcentaje = (exito / nFilas) * 100;

					datosStock(index);
					
		
						}	
				
				} catch (error) { console.log('error en la conexion ', error); }

		
		}


	}

let cantidadCalculo = (id) =>{
	
	let cantidad=document.getElementById('cant'+id).value;
	let precioVen=convertirNumeros(document.getElementById('vent'+id).value);
	let precioT=cantidad*precioVen;
	document.getElementById('prect'+id).value=formatearNumeros(precioT);
	
	recalcularValores();

} 

let precioModificar = (e) => {

	if(e.keyCode==13){
		recalcularValores();
	}
	
}



let recalcularValores = () => {

	let columnaValorTotal = 5;
	let valorTotal=0;
	let netoTotal;

	let tablaC = document.getElementById("tablaBodyCotizacion"),
	  rIndex;
	let nFilas = $("#tablaBodyCotizacion > tr").length;	

	

	for (let i = 0; i < nFilas; i++) {

		let td=tablaC.rows[i].cells[6];

		valorTotal +=parseInt(convertirNumeros(td.getElementsByTagName('input')[0].value));
  
	}

	let valorNeto= document.getElementById(`totalNeto`).value=formatearNumeros(valorTotal);
	let iva = convertirNumeros(valorNeto)*0.19;	
	document.getElementById(`iva`).value=formatearNumeros(redondeo(iva,0)); 
	let total=parseInt(iva)+parseInt(convertirNumeros(valorNeto));
	document.getElementById(`totalF`).value=formatearNumeros(total); 

	

}