var ITEM = 0; 

let cargarDatos = () => {

	clientes();
	ultimoVenta();

} 

let ultimoVenta = async () => {

	const baseUrl = 'php/consultaFetch.php';

    let consulta=`SELECT (id+1) as id FROM ventas ORDER BY id DESC LIMIT 1 `;

    const sql = {sql: consulta, tag: `array_datos`}  

    try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		
		let array = JSON.parse(data);
		let ultima_boleta=array[0]['id'];
		console.error(ultima_boleta);

		document.getElementById('ultima_boleta').innerHTML=`Número correlativo siguiente : ${ultima_boleta}`;
      
        //const provinciass = await provincias(array);
        
    } catch (error) { console.log('error en la conexion ', error); }
    

}

let clientes =  async() => {

    const baseUrl = 'php/consultaFetch.php';
    let consulta=`SELECT id , nombre FROM clientes`;

    const sql = {sql: consulta, tag: `array_clientes`}  

    try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		
		$('#selectClientes').html(data).fadeIn();
      
        //const provinciass = await provincias(array);
        
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

			var consulta=`SELECT  id,codigo,codigo_proveedor,nombre,costo,stock,margen_contado,precio_venta,descripcion FROM PRODUCTOS where nombre LIKE "%${buscar}%" || codigo LIKE "%${buscar}%"`;
		}else{
			var consulta=`SELECT  id,codigo,codigo_proveedor,nombre,costo,stock,margen_contado,precio_venta,descripcion FROM PRODUCTOS where nombre LIKE "%${buscar}%" || codigo LIKE "%${buscar}%"`;
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
			'<table  class="table-responsive  table-striped" id="tabla" >' +
			'<thead class="thead-dark">' +
			'<tr class="table-success">' +
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
			var precioVenta=array[i]['precio_venta'];
			var margen = array[i]['margen_contado'];
			var stock = array[i]['stock'];
			var descripcion=array[i]['descripcion'];
			var descuento_html = '<div style="display:none;right: .9em; " id="' + 'div_descuento' + parseFloat(i + 1) + '"class="col input-group">' +
			'<input class="form-control" id="' + 'des' + parseFloat(i + 1) + '"  type="number"' +
			'onkeypress="validar_descuento(event,this,50,' + parseFloat(i + 1) + ',' + parseFloat(i + 1) + ',true)" min = "0" max= 50  data-toggle="tooltip" data-placement="top" title="max 50" value="0">' +
			'</div>';

			var btn_descuento_html = '<button class="btn btn-danger btn-mini float-left" id="' + 'btn_des' + parseFloat(i + 1) + '" onclick="comprobar_descuento_historico (this)">  <i class="fas fa-sort-amount-down"></i>  Descuento </button>';

			//BODY DE LA TABLA AGREGAR PRODUCTOS;
			$("#tablaBody").append('<tr>' +
				'<td>' + codigo + '</td>' +
				'<td>' + codigoProveedor + '</td>' +
				`<td style="cursor:pointer;"><span onmouseover=obser('${descripcion.split(" ")}')>${nombre}</span></td>`+
				'<td>' + stock + '</td>' +
				'<td><input class="form-control" id="' + 'cant' + parseFloat(i + 1) + '" onClick=cantidadCalculo('+(i+1)+',1)  min=1 type="number" value="1"></td>' +
				'<td><input  class="form-control" id="' + 'cos' + parseFloat(i + 1) + '" disabled onClick=cantidadCosto('+(i+1)+') onkeyup=cantidadCosto('+(i+1)+')  type="number" value=' + costo + '></td>' +
				'<td><input style="width:70px" class="form-control" id="' + 'mar' + parseFloat(i + 1) + '" min=105 onclick="calcular_margen(this,' + parseFloat(i + 1) + ',true)" onkeypress="calcular_margen(this,' + parseFloat(i + 1) + ',true)"  type="number" value=' + margen + '></td>' +
				'<td>' + btn_descuento_html + descuento_html + ' </td>' +						
				'<td><input class="form-control" id="' + 'ven' + parseFloat(i + 1) + '" disabled type="number" value=' + precioVenta + '></td>' +		
				'<td style="display:none;">'+id_producto+'</td>' +
				'<td style="display:none;">'+descripcion+'</td>' +
				'<td>' +
				'<button id="' + parseFloat(i + 1) + '" class="btn btn-mini" data-toggle="tooltip" data-placement="top" title="Agregar" onclick="agregarProductos(event,this)"> <i class="fa fa-plus" aria-hidden="true"></i></button>' +
				'</td>' +
				'</tr>');
		}
				$('[data-toggle="tooltip"]').tooltip();
				document.getElementById('checkMargen').innerHTML = 'Margen <input id="checkEnt" ' + chekeadoTodoEntregado + ' type="checkbox"  data-toggle="tooltip" data-placement="top" title="Actualizar precio">'
}


let obser = (nombre) => {
	let nombreOri=nombre;
	
	document.getElementById('obsProducto').innerHTML=nombreOri.replace(/,/g," ");
}

let agregarProductos =  (e,btn) => {

	// comprobarFactura();

	$("#tablaProductos").show();
	$("#salidaTabla").hide();

	let evento = e.preventDefault();
	let idTabla = btn.id; // SE OBTIENE EL ID DESDE EL BOTON DEL FORMULARIO CON EL LA PROPIEDAD THIS
	
	
	var table = document.getElementById("tabla"); //ID DE LA TABLA PARA OBTENER LOS VALORES DE LAS FILAS	
	
	//borramos el input buscar
	$('#buscar').val('');

	let codigo_producto = table.rows[idTabla].cells[0].innerHTML; //OBTEnGO EL VALOR NOMBRE DESDE LA COLUMNA 1;
	let codigo_proveedor = table.rows[idTabla].cells[1].innerHTML; //OBTEnGO EL VALOR NOMBRE DESDE LA COLUMNA 1;
	let nombre = table.rows[idTabla].cells[2].innerHTML;
	let cantidad = document.getElementById('cant' + idTabla).value;
	let margen = document.getElementById('mar' + idTabla).value;
	let precio_costo = document.getElementById('cos' + idTabla).value; // ID DEL SELECT PRECIO;
	let precio_venta = document.getElementById('ven' + idTabla).value; // ID DEL SELECT PRECIO;
	let precioTotal = cantidad * precio_venta;
	let idProd = table.rows[idTabla].cells[9].innerHTML;
	ITEM++;

	var estadoEntr = "";
	estadoEntr = document.getElementById('checkEnt').checked;

	if(estadoEntr == true){
		actualizarPrecioVenta(idProd,precio_venta);
	}
		actualizaMargen(idProd,margen);
	

	$("#tablaBodyCotizacion").append('<tr id="fila' + ITEM + '">' +
	'<td> <span  class="editar" onclick="transformarEnEditable(this,2)" style="cursor:pointer;">'+codigo_proveedor+'</span> </td>' +
	'<td>' + codigo_producto + '</td>' +
	'<td><input class="canti" name="can' + parseFloat(ITEM) + '" style="width:50px" id="' + 'cant' + parseFloat(ITEM) + '" size="2" onClick=cantidadCalculo('+ITEM+',2)  type="number" min=1 value="'+cantidad+'"></td>' +
	'<td> <span class="editar" onclick="transformarEnEditable(this,1)" style="cursor:pointer;">' + nombre + '</span> </td>' +
	'<td><input name="preU' + parseFloat(ITEM) + '" id="' + 'vent' + parseFloat(ITEM) + '" disabled type="text" min=0 value="'+formatearNumeros(precio_venta)+'"></td>' +
	'<td><input name="totU' + parseFloat(ITEM) + '" id="' + 'prect' + parseFloat(ITEM) + '" disabled  type="text" min=0 value="'+formatearNumeros(precioTotal)+'"></td>' +
	'<td><button class="btn  btn-danger" id="' + idProd + '" onclick=removerItem(this)><i class="fa fa-trash" aria-hidden="true"></i></button></td>' +
	'<td style="display:none;">'+idProd+'</td>' +
	'</tr>');

		$('[data-toggle="tooltip"]').tooltip();
		agregarNumeracionItem();
		 recalcularValores();
		 document.getElementById('obsProducto').innerHTML="";

}

let removerItem = (id) => {
	$("#tablaBodyCotizacion > tr").each(function () {

		var idRe = id.id;		
		console.error("idRe: " + idRe);
		$("#fila" + idRe).remove();
		
	});
	recalcularValores();
}
//*-boton volver en la tabla busqueda-*//
let regresar = (e)=> {
	const evento = e.preventDefault();
	$("#volverBtn").show(); // mostramos nuevamente  los botones
	$("#tablaProductos").hide(); //tabla donde se buscan los productos
}

function validar_descuento(e,id, descuento_max, id_precio_venta, id_precio_final) {

	if (e.keyCode === 13 && !e.shiftKey) {
		e.preventDefault();
		var precio_venta = document.getElementById('ven'+id_precio_venta).value;//document.getElementById("pres" + id_precio_venta).value //PRECIO VENTA

		id_descuento = id.id; // SE OBTIENE EL ID DESDE EL INPUT DESCUENTO  CON  LA PROPIEDAD THIS
		var valor_descuento = document.getElementById(id_descuento).value //SACO EL VALOR DEL INPUT GRACIAS AL ID ENVIADO DESDE LA FUNCION;
	
	
		if (valor_descuento > descuento_max) { //VALIDO QUE EL VALOR DEL DESCUENTO SEA MENOR AL VALOR REAL DEL DESCUENTO Y QUE SEA MAYOR A CERO;
			swal("No puede aplicar un descuento superior al predeterminado","","info");
			$('#' + id_descuento).val(0); //VUELVO EL VALOR DEL INPUT DESCUENTO A 0;
			$('#ven' + id_precio_final).val(precio_venta);
			return;
		} else {
			calcular_precio_con_descuento(precio_venta, valor_descuento, id_precio_final);
		}
	}
	
}


let comprobar_descuento_historico  = (id_btn) => {

	var id_boton = id_btn.id;
	var id_group_boton=id_boton;
	document.getElementById(id_group_boton).style.display = "none"; //DESAPARECER EL BOTON
	document.getElementById("div_descuento" + 1).style.display = "inline-flex";
}

function calcular_precio_con_descuento(precio_venta, valor_descuento, id_precio_f) {

	var precio_final1 = parseFloat(valor_descuento / 100) * parseInt(precio_venta);
	var precio_final=parseInt(precio_venta)-parseInt(precio_final1);
	
	$('#ven' + id_precio_f).val(precio_final);

}

let calcular_margen = (id,id_costo) =>{

	let id_margen= id.id;

	let precio_costo=document.getElementById('cos'+id_costo).value;

	let precio_final;	
	let margen = document.getElementById(id_margen).value;
	let ultimoNum=(margen % 100)%10;
	let primerNum=Math.floor(margen/100);

	let l = Math.pow(10, Math.floor(Math.log(margen)/Math.log(10))-1); 
	let b = Math.floor(margen/l);
	let seundoNumero = b-Math.floor(b/10)*10;

	let porcentaje=((seundoNumero.toString())+(ultimoNum))/100;

	if(primerNum==1){
		let porcosto=redondeo(porcentaje*precio_costo,0);
		precio_final=precio_costo*2;
		document.getElementById('ven'+id_costo).value=precio_final+porcosto;
	}
	if(primerNum==2){
		let porcosto=redondeo(porcentaje*precio_costo,0);
		precio_final=precio_costo*3;
		document.getElementById('ven'+id_costo).value=precio_final+porcosto;
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
	  valorTotal +=  parseInt(convertirNumeros(document.getElementById('prect'+(i+1)).value));
	  console.log("valor total: " + valorTotal);
  
	}
	  
	$("#totalNeto").val(formatearNumeros(valorTotal));
	$("#iva").val(formatearNumeros(valorTotal*0.19));
	$("#totalF").val(formatearNumeros(valorTotal*1.19));
	$("#totalapagar").val(formatearNumeros(valorTotal*1.19));
	  //if(guardar){actualizarMontos();} //actualizamos para que guarde en la tabla

}

let cantidadCalculo = (id,indice) =>{
	let input=`input[name=can${(id)}]`;
	var cantidad = `${document.querySelector(input).value}`
	
	if(indice==1){
		
		let precioVen=convertirNumeros(document.getElementById('cos'+id).value);
		let precioT=cantidad*precioVen;
		document.getElementById('ven'+id).value=(precioT);
	}else{
	
		console.error(cantidad);
		let precioVen=convertirNumeros(document.getElementById('vent'+id).value);
		let precioT=cantidad*precioVen;
		console.error('precioT ' + precioT);
		document.getElementById('prect'+id).value=formatearNumeros(precioT);
	}
	
	recalcularValores();

} 
let cantidadCosto = (id) => {
	let costo=document.getElementById('cos'+id).value;
	document.getElementById('ven'+id).value=costo;

}
let actualizarPrecioVenta = async (idP,precioVent) => {

	const baseUrl = 'php/consultaFetch.php';

	let consulta=`UPDATE PRODUCTOS set precio_venta=${precioVent} WHERE id=${idP}`;

	const sql   = {sql: consulta, tag: `crud`}	

	console.error(consulta);
	
	try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		//*-se parsea solo la respuesta del Json enviada por el servidor.	

			
			$.notify({
				title: "Update: ",
				message: "Se actualizo el precio de venta:",
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
let actualizaMargen = async (idP,margen) => {

	const baseUrl = 'php/consultaFetch.php';

	let consulta=`UPDATE PRODUCTOS set margen_contado=${margen} WHERE id=${idP}`;

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
			// 	message: "Se actualizo el margen del producto:",
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
		
		
	} catch (error) { console.log('error en la conexion ', error); }


}

let calcularDescuentoPerc = (e) =>{

	if (e.keyCode === 13) {
		
		e.preventDefault();

		let totales = document.getElementById('totalF').value;
		let descuento = document.getElementById('descuentoPorcentaje').value;

		if(!isNaN(descuento)){

			var desc=(convertirNumeros(totales)) * (descuento/100);	
			document.getElementById('descuentoPesos').value=formatearNumeros(redondeo(desc,0));
			var etotades=convertirNumeros(totales) - desc;	
			var totalDescuento=document.getElementById('totalF').value=formatearNumeros(etotades);	
		}
		recalcularIva();
	}

	
	
}

let recalcularIva = () => {

	let desIva=document.getElementById('totalF').value;
	let neto = (convertirNumeros(desIva) / (1.19));
	let iva = convertirNumeros(desIva)-neto;
	console.error(iva);
	//console.error(redondeo(neto,0));
	document.getElementById('iva').value=formatearNumeros(redondeo(iva,0));
	document.getElementById('totalNeto').value=formatearNumeros(redondeo(neto,0));

	
}

//FUNCTION PARA AGREGAR UN ITEM A LA COTIZACION NUEVA Y RESETEAR CUANDO SE BORRE UN ITEM;
function agregarNumeracionItem() {
	var tablaC = document.getElementById("tablaBodyCotizacion"),
		rIndex;
	var nFilas = $("#tablaBodyCotizacion > tr").length;
	for (var i = 0; i < nFilas; i++) {
		tablaC.rows[i].cells[0].innerHTML = i + 1;

	}

}

let Confirmarventa = (e) => {
	const evento = e.preventDefault();
	swal({
		title: "Realizar venta",
		text: "¿esta seguro de realizar la venta ?",
		icon: "info",
		buttons: true,
		dangerMode: true,
	})
	.then((willDelete) => {
		if (willDelete) {
			finalizarVenta();
		} else {
			return;
		}

	});	
}

let finalizarVenta = async () => {

	let nFilas = $("#tablaBodyCotizacion > tr").length;
	
	if (nFilas <= 0) {
		swal("No hay productos en la tabla, no pude finalizar","","info");
	}
		let estadoVenta = document.getElementById('selectDocumento').value;
		let cliente = document.getElementById('selectClientes').value;
		let neto = $("#totalNeto").val();
		let netoConvertido = convertirNumeros(neto);
		let descuento = document.getElementById('descuentoPorcentaje').value;
		let descuento_pesos = document.getElementById('descuentoPesos').value;
		let iva = $("#iva").val();
		let ivaConvertido = convertirNumeros(iva);
		let totalFinal = $("#totalF").val();
		let totalFinalConvertido = convertirNumeros(totalFinal);
		let totalsindes=document.getElementById('totalapagar').value;
		let observacion = document.getElementById('observacion').value;
		let medio_pago=document.getElementById('selectModoPago').value;
		const baseUrl = 'php/consultaFetch.php';

	let consulta=`INSERT INTO VENTAS (id_vendedor,fecha_venta,estado_venta,id_cliente,descuento,descuento_pesos,neto,iva,total,total_sin_des,fecha_nulo,observacion,medio_pago,id_turno)
	VALUES(${ID_VENDEDOR},NOW(),${estadoVenta},${cliente},${descuento},${convertirNumeros(descuento_pesos)},${netoConvertido},${ivaConvertido}
	,${totalFinalConvertido},${convertirNumeros(totalsindes)},NULL,"${observacion}",${medio_pago},${ID_TURNO})`;
	
	

	const sql   = {sql: consulta, tag: `insert_return_id`}		

	
				try {
				//*-llamar ajax al servidor mediate api fetch.
				const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
				//*-request de los datos en formato texto(viene todo el request)
				const data = await response.text();
				//*-se parsea solo la respuesta del Json enviada por el servidor.
				console.error(data);	
				if (!isNaN(data)) {	 	insertProductos(data);	}
				
				
				} catch (error) { console.log('error en la conexion ', error); }

		}

let insertProductos = async (id) => {

	var tablaC = document.getElementById("tablaBodyCotizacion"),
	rIndex;
	var nFilas = $("#tablaBodyCotizacion > tr").length;


for (var i = 0; i < nFilas; i++) {

	
	let input=`input[name=can${(i+1)}]`;
	let inputPreU=`input[name=preU${(i+1)}]`;
	let inputTotU=`input[name=totU${(i+1)}]`;
	var codigo = tablaC.rows[i].cells[1].innerHTML;
	var cantidad = `${document.querySelector(input).value}` //usamos innerText para obtener solo el valor
	var nombre = tablaC.rows[i].cells[3].innerText;
	var precioUnitario = `${document.querySelector(inputPreU).value}`
	var precioUnitarioConvertido = convertirNumeros(precioUnitario);
	var totalUnitario = `${document.querySelector(inputTotU).value}`
	var totalUnitarioConvertido = convertirNumeros(totalUnitario);

	const baseUrl = 'php/consultaFetch.php';

	let consulta=`INSERT INTO VENTAS_RELACIONAL (codigo_producto,precio_unitario,cantidad,total_unitario,id_venta,nombre_producto)

	VALUES("${codigo}",${precioUnitarioConvertido},${cantidad},${totalUnitarioConvertido},${id},"${nombre}")`;	

				const sql   = {sql: consulta, tag: `crud`}		
				console.error(sql);
	
				try {
				//*-llamar ajax al servidor mediate api fetch.
				const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
				//*-request de los datos en formato texto(viene todo el request)
				const data = await response.text();
				//*-se parsea solo la respuesta del Json enviada por el servidor.
				swal("Venta creada", "los datos fueron guardados exitosamente", "success");
				setTimeout('location.reload()', 3000);
				
				} catch (error) { console.log('error en la conexion ', error); }

		
			}


}

let quitarDescuento = (e) => {

	const evento = e.preventDefault();
	let totalFijo = document.getElementById('totalapagar').value;

	let desIva=document.getElementById('totalapagar').value;
	let neto = (convertirNumeros(desIva) / (1.19));
	let iva = convertirNumeros(desIva)-neto;
	console.error(iva);
	//console.error(redondeo(neto,0));
	document.getElementById('iva').value=formatearNumeros(redondeo(iva,0));
	document.getElementById('totalNeto').value=formatearNumeros(redondeo(neto,0));
	//document.getElementById('totalF').value=formatearNumeros(redondeo(totalFijo,0));
	document.getElementById('totalF').value=formatearNumeros(neto + iva);
	document.getElementById('descuentoPorcentaje').value=0;
	document.getElementById('descuentoPesos').value=0;


}

