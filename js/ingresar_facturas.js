var ID;
var ITEM = 0; 
cargarDatos = async (id) => {
    
    ID=id;	
	const baseUrl = 'php/consultaFetch.php';
    let consulta=`SELECT id,rut,nombre,direccion,ciudad,fono,contacto
    FROM proveedores where id=${id}`;	 
	
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
		
	} catch (error) {  }

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

	if( buscar.indexOf(" ") !== -1){}	

		const baseUrl = 'php/consultaFetch.php';

		if(isNaN(buscar) || buscar.indexOf(" ") !== -1) {

			var consulta=`SELECT  id,codigo,codigo_proveedor,nombre,costo,stock,margen_contado,precio_venta,descuento FROM PRODUCTOS where nombre LIKE "%${buscar}%" || codigo LIKE "%${buscar}%" || codigo_proveedor LIKE "%${buscar}%"`;
		}else{
			var consulta=`SELECT  id,codigo,codigo_proveedor,nombre,costo,stock,margen_contado,precio_venta,descuento FROM PRODUCTOS where nombre LIKE "%${buscar}%" || codigo LIKE "%${buscar}%" || codigo_proveedor LIKE "%${buscar}%"`;
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
			var estadoEntr = "";
			estadoEntr = document.getElementById('checkEnt').checked='checked';		
			
		} catch (error) {  }
	
}

let tablaProductos = (array) => {

	$("#salidaTabla").append('<button class="btn btn-sm btn-primary float-right" onclick = regresar(event)  data-toggle="tooltip" data-placement="top" title="" data-original-title="Regresar a resumen" ><i class="fas fa-chevron-left"></i>  </button>' +		
			'<table  class="cabezera-tabla" id="tabla" >' +
			'<thead>' +
			'<tr class="table-success">' +
			'	<th scope="col" width="10%">Cód.Interno</th>' +
			'	<th scope="col" width="10%">Cód.Proveedor</th>' +
			'	<th scope="col" width="10%">Nombre</th>' +	
			'	<th scope="col" width="10%">Stock</th>' +	
			'	<th scope="col" width="1%">Cantidad</th>' +
			'	<th scope="col" width="10%">Costo</th>' +
			'	<th disabled id="checkMargen" width="10%">Margen</th>' +
			'	<th scope="col" width="10%"> Descuento</th>' +
			'	<th scope="col" width="10%"> Precio venta<span id="iva"></span></th>' +		
			'	<th scope="col" width="10%"> </th>' +
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
			//var costo_iva=costo*(1.19);
			var descuento =array[i]['descuento']; 				
			var precio_venta = array[i]['precio_venta'];
			var margen = array[i]['margen_contado'];
			var stock = array[i]['stock'];
			let precio_margen=redondeo(2.05 * (costo),0);			
			let precio_v=precio_margen*0.19;
			let preciofinal=parseInt(precio_v) + parseInt(precio_margen);
			
			
			var descuento_html = '<div style="display:none;right: .9em; " id="' + 'div_descuento' + parseFloat(i + 1) + '"class="col input-group">' +
			'<input class="form-control" id="' + 'des' + parseFloat(i + 1) + '"  type="number" onclick="validar_descuento(event,this,50,' + parseFloat(i + 1) + ',' + parseFloat(i + 1) + ',true)"' +
			'onkeyup="validar_descuento(event,this,50,' + parseFloat(i + 1) + ',' + parseFloat(i + 1) + ',true)" min = "0" max= 50  data-toggle="tooltip" data-placement="top" title="max 50" value="'+descuento+'">' +
			'</div>';

			var btn_descuento_html = '<button class="btn btn-danger btn-mini float-left" id="' + 'btn_des' + parseFloat(i + 1) + '" onclick="comprobar_descuento_historico (this)">  <i class="fas fa-sort-amount-down"></i>  Descuento </button>';

			//BODY DE LA TABLA AGREGAR PRODUCTOS;
			$("#tablaBody").append('<tr id="' + 'fila_add' + parseFloat(i + 1) + '">' +
				'<td>' + codigo + '</td>' +
				'<td>' + codigoProveedor + '</td>' +
				'<td>' + nombre + '</td>' +
				'<td>' + stock + '</td>' +
				'<td><input class="form-control" id="' + 'can' + parseFloat(i + 1) + '"    min=0 type="number" value="1"></td>' +
				'<td><input  class="form-control" id="' + 'cos' + parseFloat(i + 1) + '"  onClick=cantidadCosto(event,'+(i+1)+') onkeyup=cantidadCosto(event,'+(i+1)+')  type="number" value=' + redondeo(costo,0) + '></td>' +
				'<td><input style="width:70px" class="form-control" id="' + 'mar' + parseFloat(i + 1) + '" min=105 onclick="calcular_margen(this,' + parseFloat(i + 1) + ',true)" onkeyup="calcular_margen(this,' + parseFloat(i + 1) + ',true)"  type="number" value=' + margen + '></td>' +
				'<td>' + btn_descuento_html + descuento_html + ' </td>' +						
				'<td><input class="form-control" id="' + 'ven' + parseFloat(i + 1) + '"  type="number" value=' + preciofinal + '></td>' +		
				'<td style="display:none;">'+id_producto+'</td>' +
				'<td>' +
				'<button id="' + parseFloat(i + 1) + '" class="btn btn-mini" data-toggle="tooltip" data-placement="top" title="Agregar" onclick="agregarProductos(event,this)"> <i class="fa fa-plus" aria-hidden="true"></i></button>' +
				'<td><form target="_blank" method="POST" action="editar_productos.php">'+
				'<button type="submit" class="btn btn-secondary" data-toggle="tooltip"'+
				'data-placement="top" title="Editar" name="id" value='+id_producto+'><i class="fas fa-edit" aria-hidden="true"></i></button></form></td>'+				
				'</td>' +
				'</tr>');


				if(stock<1){
					document.getElementById(`fila_add${parseFloat(i + 1)}`).className=`color_fila_rojo`;
				}else{
					document.getElementById(`fila_add${parseFloat(i + 1)}`).className=`color_fila_verde`;
				}

				
		}
				$('[data-toggle="tooltip"]').tooltip();
				document.getElementById('checkMargen').innerHTML = 'Margen <input id="checkEnt" ' + chekeadoTodoEntregado + ' type="checkbox"  data-toggle="tooltip" data-placement="top" title="Actualizar precio">'
			
}	






	let cantidadCosto = (e,id) => {

		if(e.keyCode==13){
			let costo=document.getElementById('cos'+id).value;
			
			let precio_final=document.getElementById('ven'+id).value=redondeo(costo*(1.19),0);
			
		}

		}


	let comprobar_descuento_historico  = (id_btn) => {

		var id_boton = id_btn.id;
		var id_group_boton=id_boton;
		document.getElementById(id_group_boton).style.display = "none"; //DESAPARECER EL BOTON
		document.getElementById("div_descuento" + 1).style.display = "inline-flex";
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
		document.getElementById('ven'+id_costo).value=redondeo((precio_final+porcosto)*1.19,0);
		document.getElementById('iva').innerHTML=`+iva`;
	}
	if(primerNum==2){
		let porcosto=redondeo(porcentaje*precio_costo,0);
		precio_final=precio_costo*3;
		document.getElementById('ven'+id_costo).value=precio_final+porcosto;
	} 

}


function validar_descuento(e,id, descuento_max, id_precio_venta, id_precio_final) {
	
	var precio_venta = document.getElementById('ven'+id_precio_venta).value;//document.getElementById("pres" + id_precio_venta).value //PRECIO VENTA

	id_descuento = id.id; // SE OBTIENE EL ID DESDE EL INPUT DESCUENTO  CON  LA PROPIEDAD THIS
	var valor_descuento = document.getElementById(id_descuento).value //SACO EL VALOR DEL INPUT GRACIAS AL ID ENVIADO DESDE LA FUNCION;


		if (valor_descuento > descuento_max) { //VALIDO QUE EL VALOR DEL DESCUENTO SEA MENOR AL VALOR REAL DEL DESCUENTO Y QUE SEA MAYOR A CERO;
			swal("No puede aplicar un descuento superior al predeterminado","","info");
			$('#' + id_descuento).val(0); //VUELVO EL VALOR DEL INPUT DESCUENTO A 0;
			$('#ven' + id_precio_final).val(precio_venta);
			return;
		} else {
			if(e.keyCode==13){
				calcular_precio_con_descuento(precio_venta, valor_descuento, id_precio_final);
			}
				
			
			
		}
}

function calcular_precio_con_descuento(precio_venta, valor_descuento, id_precio_f) {

	var precio_final = precio_venta - (valor_descuento / 100) * (precio_venta);
	
	$('#ven' + id_precio_f).val(redondeo(precio_final, 0));

}

let actualizarPrecioVenta = async (idP,precioVent,descuento,margen) => {

	const baseUrl = 'php/consultaFetch.php';

	let consulta=`UPDATE PRODUCTOS set precio_venta=${precioVent} , descuento=${descuento},margen_contado=${margen} WHERE id=${idP}`;

	const sql   = {sql: consulta, tag: `crud`}	

	
	
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
		
		
	} catch (error) {  }


}	

	let datosStock = () => {

		let tablaC = document.getElementById("tablaBodyCotizacion"),
		rIndex;

		let nFilas = $("#tablaBodyCotizacion > tr").length;	
		let stock;
		let stockFinal;
		let idProducto;
		for(let i=0; i < nFilas; i++ ){

			stock=tablaC.rows[i].cells[2];
			stockFinal= stock.getElementsByTagName('input')[0].value;
			idProducto=tablaC.rows[i].cells[7].innerHTML;
			actualizarStock(stockFinal,idProducto)

			}
			datosPrecioCosto();
			// swal("Factura creada", "de los datos fueron guardados", "success");
			// window.location.href = "ver_proveedores.php";
			// setTimeout('window.location.href = "ver_facturas.php"', 2000);

		}


		let datosPrecioCosto = () => {

			let tablaC = document.getElementById("tablaBodyCotizacion"),
			rIndex;
	
			let nFilas = $("#tablaBodyCotizacion > tr").length;	
			let costotd;
			let costo;
			let upPrecioCosto;
			let idProducto;
			for(let i=0; i < nFilas; i++ ){
	
				costotd=tablaC.rows[i].cells[4];
				costo= costotd.getElementsByTagName('input')[0].value;
				idProducto=tablaC.rows[i].cells[7].innerHTML;
				actualizarPrecioCosto(costo,idProducto)
				
				}
				// 
				swal("Factura creada", "de los datos fueron guardados", "success");
				//window.location.href = "ver_proveedores.php";
				setTimeout('window.location.href = "ver_facturas.php"', 2000);
	
			}

let actualizarStock = async (stockFinal,idProducto) => {

			const baseUrl = 'php/consultaFetch.php';

			const consulta = `UPDATE productos set stock =stock + (${stockFinal}) WHERE id=${idProducto}`;

			const sql = {sql: consulta, tag: `array_datos`} 
	
		try {
			//*-llamar ajax al servidor mediate api fetch.
			const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
			//*-request de los datos en formato texto(viene todo el request)
			const data = await response.text();
			//*-se parsea solo la respuesta del Json enviada por el servidor.
			
			
			
		} catch (error) {  }

}

let actualizarPrecioCosto = async (costo,idProducto) => {

	const baseUrl = 'php/consultaFetch.php';

	const consulta = `UPDATE productos set costo =${convertirNumeros(costo)} WHERE id=${idProducto}`;

	const sql = {sql: consulta, tag: `array_datos`} 

	
try {
	//*-llamar ajax al servidor mediate api fetch.
	const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
	//*-request de los datos en formato texto(viene todo el request)
	const data = await response.text();
	//*-se parsea solo la respuesta del Json enviada por el servidor.
	
	
	
} catch (error) {  }

}


	//agragar  productos a la tabla factura
	let agregarProductos =  (e,btn) => {

		comprobarFactura();

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
		let precioTotal = cantidad * precio_costo;
		let idProd = table.rows[idTabla].cells[9].innerHTML;
		let margen = document.getElementById(`mar${idTabla}`).value;
		let descuento=document.getElementById(`des${idTabla}`).value;
		let arrCod=[];
		
		ITEM++;

		var estadoEntr = "";
		estadoEntr = document.getElementById('checkEnt').checked;

		if(estadoEntr == true){
			actualizarPrecioVenta(idProd,precio_venta,descuento,margen);
		}
		let nfilas=$("#tablaBodyCotizacion > tr").length + parseFloat(1);
		
		$("#tablaBodyCotizacion").append('<tr id="cols' + nfilas + '" >' +
		'<td> <span  class="editar" onclick="transformarEnEditable(this,2)" style="cursor:pointer;">'+codigo_proveedor+'</span> </td>' +
		'<td>' + codigo_producto + '</td>' +
		'<td><input name="' + 'canTd' + parseFloat(nfilas) + '" style="width:50px" id="' + 'cant' + parseFloat(nfilas) + '" size="2" onClick=cantidadCalculo('+nfilas+')  type="number" min=1 value="'+cantidad+'"></td>' +
		'<td> <span class="editar" onclick="transformarEnEditable(this,1)" style="cursor:pointer;">' + nombre + '</span> </td>' +
		'<td><input class="form-control" id="' + 'vent' + parseFloat(nfilas) + '"  type="text" min=0 value="'+formatearNumeros(precio_costo)+'"></td>' +
		'<td><input name="' + 'preTd' + parseFloat(nfilas) + '" class="form-control" id="' + 'prect' + parseFloat(nfilas) + '"  onkeypress=precioModificar(event)  type="text" min=0 value="'+formatearNumeros(precioTotal)+'"></td>' +
		'<td><button class="btn  btn-danger" id="cols' + nfilas + '"   onclick=removerItem(' + parseFloat(nfilas) + ')><i class="fa fa-trash" aria-hidden="true"></i></button></td>' +
		'<td style="display:none;">'+idProd+'</td>' +
		'</tr>');

			$('[data-toggle="tooltip"]').tooltip();
		//	agregarNumeracionItem();
			recalcularValores();			
			comprobarRepetidos(arrCod,'cols',nfilas);
			
	}

	let precioModificar = (e) => {

		if(e.keyCode==13){
			recalcularValores();
		}
		
	}


		//comprobar repetidos 
		let comprobarRepetidos = (arrCod,cols,id) => {	
			
			
			let tablaC = document.getElementById("tablaBodyCotizacion"),
			rIndex;
			let nFilas = $("#tablaBodyCotizacion > tr").length;		
			let codigoTemp;
			for(let i=0; i < nFilas;i++){
	
				codigoTemp=tablaC.rows[i].cells[1].innerHTML;
				arrCod.push(codigoTemp,cols+(i+1));
			}
				 
			
			borrarElement(arrCod);
			
		}


		let borrarElement = (arrCod) => {

			var uniqs = arrCod.filter(function(item, index, array) {				

				switch(array.indexOf(item) === index){
					case  true: 
					
					break
					case false:
					
					let elimina=array.pop();		
					let idfila=elimina.slice(4); 

					
					swal('warning','ya ingreso esteproducto','info');
					removerItem(idfila);
					break
				}

				return array.indexOf(item) === index;
	
			  })
			   
	
		}

	//ELIMAR ITEM DE LA TABLA FACTURA
	let removerItem = (id) => {
		
		//let btn=id.id;
		$("#cols" + id).remove();
		recalcularValores();
	}

	let cantidadCalculo = (id) =>{
		
		let cantidad=document.getElementById('cant'+id).value;
		let precioVen=convertirNumeros(document.getElementById('vent'+id).value);
		let precioT=cantidad*precioVen;
		document.getElementById('prect'+id).value=formatearNumeros(precioT);
		
		recalcularValores();

	} 
	let editarCodiProveedor = async (idProducto,codigoPrEditable) => {

		const baseUrl = 'php/consultaFetch.php';

		let consulta=`UPDATE PRODUCTOS SET codigo_proveedor="${codigoPrEditable}" WHERE id=${idProducto}`;

		const sql   = {sql: consulta, tag: `crud`}	

				  

		try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		//*-se parsea solo la respuesta del Json enviada por el servidor.	
		
		} catch (error) {  }

	}

	let guardar = async (e) => {

		const evento = e.preventDefault();
		var nFilas = $("#tablaBodyCotizacion > tr").length;
		if (nFilas <= 0) {
			swal("No hay productos en la tabla, no puede guardar","","info");
			return;
		}

		let fecha_emision=document.getElementById('fecha_emision').value;
		let fecha_vencimiento=document.getElementById('fecha_vencimiento').value;
		let factura = document.getElementById('factura').value;
		let neto = document.getElementById('totalNeto').value;
		let iva = document.getElementById('ivaTotal').value;
		let total = document.getElementById('totalF').value;
		const baseUrl = 'php/consultaFetch.php';

		let consulta=`INSERT INTO facturas (id_proveedor,fecha_emision,fecha_vencimiento,fecha_ingreso,neto,iva,total,numero_factura)
					VALUES(${ID},"${fecha_emision}","${fecha_vencimiento}",NOW(),${convertirNumeros(neto)},${convertirNumeros(iva)},${convertirNumeros(total)},${factura})`;

		const sql   = {sql: consulta, tag: `insert_return_id`}	

				  

		try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		//*-se parsea solo la respuesta del Json enviada por el servidor.
		
		const insertFacturaa = await insertFactura(data);			
		
		} catch (error) {  }

	}

	let insertFactura = async (id) => {

		let tablaC = document.getElementById("tablaBodyCotizacion"),
		rIndex;
		let nFilas = $("#tablaBodyCotizacion > tr").length;
		let contador=0;
		let porcentaje=0, exito=0;

		


		for (var i = 0; i < nFilas; i++) {

			let codigoProveedor = tablaC.rows[i].cells[0].textContent;
		
			let codigoInterno = tablaC.rows[i].cells[1].innerHTML;

			
			//let cantidad =document.getElementById('cant'+(i+1)).value;
			let cantidadtd=tablaC.rows[i].cells[2];
			let cantidad =  cantidadtd.getElementsByTagName('input')[0].value;
			let nombre = tablaC.rows[i].cells[3].innerText;
				
			  let precioUnitariotd=tablaC.rows[i].cells[4];
			  let precioUnitario=precioUnitariotd.getElementsByTagName('input')[0].value;

			let totalUnitariotd = tablaC.rows[i].cells[5];
			let totalUnitario=totalUnitariotd.getElementsByTagName('input')[0].value;

		

			const baseUrl = 'php/consultaFetch.php';

			let consulta=`INSERT INTO facturas_relacional (codigoProveedor,codigoProducto,precioUnitario,cantidad,totalUnitario,idfactura,nombreProducto)
					VALUES("${codigoProveedor.trim()}","${codigoInterno}",${convertirNumeros(precioUnitario)},${cantidad},${convertirNumeros(totalUnitario)},${id},"${nombre}")`;

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
						datosStock();	
					
		
						}	
				
				} catch (error) {  }

		
		}

	}

	let comprobarFactura= async  (e) => { 


		if(document.getElementById('factura').value!= ""){   

		let factura = $("#factura").val();
		
		const baseUrl = 'php/consultaFetch.php';
			
		let consulta=`SELECT count(*) FROM facturas where numero_factura=${factura}`;

		const sql = {sql: consulta, tag: `array_datos`} 

		try {
			//*-llamar ajax al servidor mediate api fetch.
			const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
			//*-request de los datos en formato texto(viene todo el request)
			const data = await response.text();
			//*-se parsea solo la respuesta del Json enviada por el servidor.
			let array = JSON.parse(data);
			
			let existe = array[0][0]; 

			if (existe < 1) {
				const save = await guardar(e);
				
				} else {
					$.notify({
						title: "Precaucion: ",
						message: "El Numero de la FACTURA  ya existe en la base de datos:",
						icon: 'fas fa-exclamation-circle'
					}, {
						type: "danger",
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
						document.getElementById('rutCliente').focus();
						$("#rutCliente").val=='';
						
					}
				
			
		} catch (error) {  }
		
	}    else{ let rutCliente = $("#factura").val();    }

	}

	//*-boton volver en la tabla busqueda-*//
	let regresar = (e)=> {
		const evento = e.preventDefault();
		$("#volverBtn").show(); // mostramos nuevamente  los botones
		$("#tablaProductos").hide(); //tabla donde se buscan los productos
	}
	let agregarNumeracionItem = () =>{

		let tablaC = document.getElementById("tablaBodyCotizacion");
			// 		rIndex;
		let nFilas = $("#tablaBodyCotizacion > tr").length;
		for (let i = 0; i < nFilas; i++) {
			tablaC.rows[i].cells[0].innerHTML = i + 1;
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
	
			let td=tablaC.rows[i].cells[5];
	
			valorTotal +=parseInt(convertirNumeros(td.getElementsByTagName('input')[0].value));
	  
		}

		let valorNeto= document.getElementById(`totalNeto`).value=formatearNumeros(valorTotal);
		let iva = convertirNumeros(valorNeto)*0.19;	
		document.getElementById(`ivaTotal`).value=formatearNumeros(redondeo(iva,0)); 
		let total=parseInt(iva)+parseInt(convertirNumeros(valorNeto));
		document.getElementById(`totalF`).value=formatearNumeros(total);
		
		// let totalapagar=document.getElementById(`totalF`).value=formatearNumeros(valorTotal);
		// let neto = valorTotal/1.19;
		// document.getElementById(`totalNeto`).value=formatearNumeros(redondeo(neto,0));
		// let iva = convertirNumeros(totalapagar)-neto;
		// 
		// document.getElementById(`ivaTotal`).value=formatearNumeros(redondeo(iva,0)); 
		//document.getElementById(`totalapagar`).value=formatearNumeros(valorTotal);	  
	
		

	}