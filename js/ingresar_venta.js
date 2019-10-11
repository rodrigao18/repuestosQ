var ITEM = 0; 

let cargarDatos = () => {

    clientes();

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
			var margen = array[i]['margen_contado'];
			var stock = array[i]['stock'];
			var descuento_html = '<div style="display:none;right: .9em; " id="' + 'div_descuento' + parseFloat(i + 1) + '"class="col input-group">' +
			'<input class="form-control" id="' + 'des' + parseFloat(i + 1) + '"  type="number"' +
			'onkeypress="validar_descuento(event,this,50,' + parseFloat(i + 1) + ',' + parseFloat(i + 1) + ',true)" min = "0" max= 50  data-toggle="tooltip" data-placement="top" title="max 50" value="0">' +
			'</div>';

			var btn_descuento_html = '<button class="btn btn-danger btn-mini float-left" id="' + 'btn_des' + parseFloat(i + 1) + '" onclick="comprobar_descuento_historico (this)">  <i class="fas fa-sort-amount-down"></i>  Descuento </button>';

			//BODY DE LA TABLA AGREGAR PRODUCTOS;
			$("#tablaBody").append('<tr>' +
				'<td>' + codigo + '</td>' +
				'<td>' + codigoProveedor + '</td>' +
				'<td>' + nombre + '</td>' +
				'<td>' + stock + '</td>' +
				'<td><input class="form-control" id="' + 'can' + parseFloat(i + 1) + '" disabled min=0 type="number" value="1"></td>' +
				'<td><input  class="form-control" id="' + 'cos' + parseFloat(i + 1) + '"  onClick=cantidadCosto('+(i+1)+') onkeyup=cantidadCosto('+(i+1)+')  type="number" value=' + costo + '></td>' +
				'<td><input style="width:70px" class="form-control" id="' + 'mar' + parseFloat(i + 1) + '" min=105 onclick="calcular_margen(this,' + parseFloat(i + 1) + ',true)" onkeypress="calcular_margen(this,' + parseFloat(i + 1) + ',true)"  type="number" value=' + margen + '></td>' +
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
	let cantidad = document.getElementById('can' + idTabla).value;
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
	

	$("#tablaBodyCotizacion").append('<tr id="fila' + ITEM + '">' +
	'<td> <span  class="editar" onclick="transformarEnEditable(this,2)" style="cursor:pointer;">'+codigo_proveedor+'</span> </td>' +
	'<td>' + codigo_producto + '</td>' +
	'<td><input style="width:50px" id="' + 'cant' + parseFloat(ITEM) + '" size="2" onClick=cantidadCalculo('+ITEM+')  type="number" min=1 value="'+cantidad+'"></td>' +
	'<td> <span class="editar" onclick="transformarEnEditable(this,1)" style="cursor:pointer;">' + nombre + '</span> </td>' +
	'<td><input class="form-control" id="' + 'vent' + parseFloat(ITEM) + '" disabled type="text" min=0 value="'+formatearNumeros(precio_costo)+'"></td>' +
	'<td><input class="form-control" id="' + 'prect' + parseFloat(ITEM) + '" disabled  type="text" min=0 value="'+formatearNumeros(precioTotal)+'"></td>' +
	'<td><button class="btn  btn-danger" id="' + ITEM + '" onclick=removerItem(this)><i class="fa fa-trash" aria-hidden="true"></i></button></td>' +
	'<td style="display:none;">'+idProd+'</td>' +
	'</tr>');

		$('[data-toggle="tooltip"]').tooltip();
	//	agregarNumeracionItem();
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
  
	  //if(guardar){actualizarMontos();} //actualizamos para que guarde en la tabla

}