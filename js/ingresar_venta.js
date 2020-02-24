var ITEM = 0; 
var MARCAS;
let cargarDatos = async() => {

	
	if (TIPO_TURNO == 0) {
		swal('Precaución', 'Debe iniciar turno para ingresar una venta', 'info');
		setTimeout(function () {
			window.location = 'ver_productos.php'
		}, 2000);
	}
	
	const client = await clientes();
	const ulvent = await   ultimoVenta();
	const ulcoti = await ultimoCotizacion();
	const ulguia = await ultimoGuia();
	const ulfactura = await ultimoFactura();
	const ultTarjeta = await ultimoTarjeta();
	const tool= await sel_Documento();
	

	if(PRODUCTOS.length > 0){
	importarProductos();
	}

	
} 

	let importarProductos = () =>  {

		let nfilas=PRODUCTOS.length + parseFloat(1);
		
		for (var i = 0; i < PRODUCTOS.length; i++) {
			ITEM++;
		$("#tablaBodyCotizacion").append('<tr id="fila' + ITEM + '">' +
		'<td> <span  class="editar" onclick="transformarEnEditable(this,2)" style="cursor:pointer;">' + PRODUCTOS[i]['codigo_proveedor'] + '</span> </td>' +
		'<td>' + PRODUCTOS[i]['codigo_producto'] + '</td>' +
		'<td><input class="canti" name="can' + parseFloat(ITEM) + '" style="width:50px" id="' + 'cant' + parseFloat(ITEM) + '" size="2" onClick=cantidadCalculo('+ITEM+',2)  type="number" min=1 value="'+PRODUCTOS[i]['cantidad']+'"></td>' +
		'<td> <span class="editar" onclick="transformarEnEditable(this,1)" style="cursor:pointer;">' + PRODUCTOS[i]['nombre'] + '</span> </td>' +
		'<td><input name="totunitaU' + parseFloat(ITEM) + '" id="' + 'precuni' + parseFloat(ITEM) + '"   type="text" min=0 value="'+formatearNumeros(PRODUCTOS[i]['precio_venta'])+'"></td>' +
		'<td><input name="totU' + parseFloat(ITEM) + '" id="' + 'prect' + parseFloat(ITEM) + '"   type="text" min=0 value="'+formatearNumeros(PRODUCTOS[i]['precio_unitario'])+'"></td>' +
		'<td><input name="desU' + parseFloat(ITEM) + '" id="' + 'desc' + parseFloat(ITEM) + '"   type="text" min=0 value="'+formatearNumeros(0)+'"></td>' +
		'<td><input name="preU' + parseFloat(ITEM) + '" id="' + 'vent' + parseFloat(ITEM) + '"  type="text" min=0 value="'+formatearNumeros(PRODUCTOS[i]['total_unitario'])+'"></td>' +		
		'<td><button class="btn  btn-danger" id="cols' + ITEM + '" onclick=removerItem(' + parseFloat(ITEM) + ')><i class="fa fa-trash" aria-hidden="true"></i></button></td>' +
		'<td style="display:none;">'+PRODUCTOS[i]['idproducto']+'</td>' +
		'<td style="display:none;">'+PRODUCTOS[i]['id_proveedor']+'</td>' +
		'<td style="display:none;">'+PRODUCTOS[i]['descuento_producto']+'</td>' +
		'</tr>');
		$('#selectClientes option[value="' + PRODUCTOS[i]['id_cliente'] + '"]').attr("selected", true);

		}

		$('[data-toggle="tooltip"]').tooltip();
			//`agregarNumeracionItem();
			recalcularValores();
			document.getElementById('obsProducto').value="";
			PRODUCTOS=[];
			
			
	}
	let sel_Documento = async() =>{

		let idselect=document.getElementById('selectDocumento').value;
	
		if(idselect==1){						
			document.getElementById('id_boleta').className=`form-control documento_elejido-input`;
			document.getElementById('id_guia').className=`form-control documento_input`;
			document.getElementById('id_factura').className=`form-control documento_input`;
			document.getElementById('id_tarjeta').className=`form-control documento_input`;
			document.getElementById('id_cotizacion').className=`form-control documento_input`;
		
		}
		if(idselect==2){
			document.getElementById('id_factura').className=`form-control documento_elejido-input`;
			document.getElementById('id_boleta').className=`form-control documento_input`;
			document.getElementById('id_guia').className=`form-control documento_input`;
			document.getElementById('id_tarjeta').className=`form-control documento_input`;
			document.getElementById('id_cotizacion').className=`form-control documento_input`;
		}
		if(idselect==3){
			document.getElementById('id_guia').className=`form-control documento_elejido-input`;
			document.getElementById('id_boleta').className=`form-control documento_input`;
			document.getElementById('id_factura').className=`form-control documento_input`;
			document.getElementById('id_tarjeta').className=`form-control documento_input`;
			document.getElementById('id_cotizacion').className=`form-control documento_input`;
		}
		if(idselect==4){
			document.getElementById('id_cotizacion').className=`form-control documento_elejido-input`;
			document.getElementById('id_boleta').className=`form-control documento_input`;
			document.getElementById('id_guia').className=`form-control documento_input`;
			document.getElementById('id_tarjeta').className=`form-control documento_input`;
			document.getElementById('id_factura').className=`form-control documento_input`;
		}
		if(idselect==5){
			document.getElementById('id_tarjeta').className=`form-control documento_elejido-input`;
			document.getElementById('id_boleta').className=`form-control documento_input`;
			document.getElementById('id_guia').className=`form-control documento_input`;
			document.getElementById('id_factura').className=`form-control documento_input`;
			document.getElementById('id_cotizacion').className=`form-control documento_input`;
		}
	

		// console.log('entro a se_documento');
		// console.log('index ' + index);

		// if(index==1){
		// 	//document.getElementById('selectDocumento').value
		// const boleta = await $('#selectDocumento option[value="1"]').attr("selected", true);
		// console.log(boleta);		
		// }if(index==2){
		// const factura = await	$('#selectDocumento option[value="2"]').attr("selected", true);			
		// }
		//  if(index==3){
		// 	const guia = await	$('#selectDocumento option[value="3"]').attr("selected", true);			
		// }
		//  if(index==4){
		// 	const cotiza = await	$('#selectDocumento option[value="4"]').attr("selected", true);			
		// }if(index==5){
		// 	const tarje = await	$('#selectDocumento option[value="5"]').attr("selected", true);			
		// }
		

	}

	let verificarDocumento = ()=>{

		let documento=document.getElementById('selectDocumento').value;
		console.error('documento ' + documento);
		if(documento == 2 || documento==4 || documento==3){
			$.notify({
				title: "Warning: ",
				message: `Recuerde selecionar un cliente:`,
				icon: 'fas fa-exclamation-circle'
			}, {
				type: "info",
				placement: {
					from: "top",
					align: "center"
				},
				offset: 70,
				spacing: 70,
				z_index: 1031,
				delay: 2000,
				timer: 2000
			});

		}else{
			//return;
		}
	}


	let marcas = async() => {
		const baseUrl = 'php/consultaFetch.php';

		let consulta=`SELECT id,marca FROM marca order by marca asc`;
	
		const sql = {sql: consulta, tag: `array_datos`}  
	
		try {
			//*-llamar ajax al servidor mediate api fetch.
			const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
			//*-request de los datos en formato texto(viene todo el request)
			const data = await response.text();
			
			let array = JSON.parse(data);
			var arr = new Array();

			for (var i = 0; i < array.length; i++) {
				arr[array[i][0].toString()] = array[i][1];

			}
			MARCAS = arr;

			
			
			//const provinciass = await provincias(array);
			
		} catch (error) {  }

	}

/*### ULTIMOS ID ###*/

let ultimoVenta = async () => {

	const baseUrl = 'php/consultaFetch.php';

    let consulta=`SELECT (id_boleta+1) as numeroBoleta FROM ventas where estado_venta=1 ORDER BY id DESC LIMIT 1 `;

    const sql = {sql: consulta, tag: `array_datos`}  

    try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		
		let array = JSON.parse(data);
		
		let ultima_boleta=array[0]['numeroBoleta'];

		

		document.getElementById('id_boleta').value=ultima_boleta;
      
        //const provinciass = await provincias(array);
        
    } catch (error) {  }
    

}

let ultimoCotizacion = async () => {

	const baseUrl = 'php/consultaFetch.php';

    let consulta=`SELECT (id_cotizacion+1) as numeroCotizacion FROM ventas where estado_venta=4 ORDER BY id DESC LIMIT 1 `;

    const sql = {sql: consulta, tag: `array_datos`}  

    try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		
		let array = JSON.parse(data);
		
		let ultima_boleta=array[0]['numeroCotizacion'];

		

		document.getElementById('id_cotizacion').value=ultima_boleta;
      
        //const provinciass = await provincias(array);
        
    } catch (error) {  }
    

}

let ultimoGuia = async () => {

	const baseUrl = 'php/consultaFetch.php';

    let consulta=`SELECT (id_guia+1) as numeroGuia FROM ventas where estado_venta=3 ORDER BY id DESC LIMIT 1 `;

    const sql = {sql: consulta, tag: `array_datos`}  

    try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		
		let array = JSON.parse(data);
		let ultima_boleta;
		
		
		 ultima_boleta=array[0]['numeroGuia'];
	
		

		

		document.getElementById('id_guia').value=ultima_boleta;
      
        //const provinciass = await provincias(array);
        
    } catch (error) {  }
    

}

let ultimoFactura = async () => {

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
		if(array.length == 0){

			ultima_boleta=1;
		}
		else{
			ultima_boleta=array[0]['numeroFactura'];
		}
		

		

		document.getElementById('id_factura').value=ultima_boleta;
      
        //const provinciass = await provincias(array);
        
    } catch (error) {  }
}

let ultimoTarjeta = async () => {

	const baseUrl = 'php/consultaFetch.php';

    let consulta=`SELECT (id_tarjeta+1) as numeroTarjeta FROM ventas where estado_venta=5 ORDER BY id DESC LIMIT 1 `;

    const sql = {sql: consulta, tag: `array_datos`}  

    try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		
		let array = JSON.parse(data);
		let ultima_boleta;
		if(array.length == 0){

			ultima_boleta=1;
		}
		else{
			ultima_boleta=array[0]['numeroTarjeta'];
		}
		

		

		document.getElementById('id_tarjeta').value=ultima_boleta;
      
        //const provinciass = await provincias(array);
        
    } catch (error) {  }
    

}


/*### FIN ID ###*/
/*#VALIDAR IDS DE VENTAS#*/


	let validarIds = async () => {

		var estadoVenta = document.getElementById('selectDocumento').value;
		let campo=``;
		let idventas;

		if(estadoVenta==4){			
			campo=`id_cotizacion`;
			idventas=document.getElementById('id_cotizacion').value;

		}else if(estadoVenta==3){

			campo=`id_guia`;
			idventas=document.getElementById('id_guia').value;

		}else if(estadoVenta==2){

			campo=`id_factura`;
			idventas=document.getElementById('id_factura').value;
		}
		else if(estadoVenta==5){

			campo=`id_tarjeta`;
			idventas=document.getElementById('id_tarjeta').value;
		}
		else if(estadoVenta==1){

			campo=`id_boleta`;
			idventas=document.getElementById('id_boleta').value;
		}

		const baseUrl = 'php/consultaFetch.php';
		let consulta=`SELECT count(*) as id FROM  ventas where ${campo} = "${idventas}"`;
	
		const sql = {sql: consulta, tag: `array_datos`}  
		
		try {
			//*-llamar ajax al servidor mediate api fetch.
			const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
			//*-request de los datos en formato texto(viene todo el request)
			const data = await response.text();
			let array = JSON.parse(data);
			
			let existe = array[0][0];
			if (existe < 1) {
			
			} else {
				$.notify({
					title: "Codigo existente : ",
					message: `El numero de ${campo} ya esta en la BD:`,
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
					delay: 1500,
					timer: 1500
				});
			document.getElementById(`${campo}`).focus();					
			}
			
		
			
		} catch (error) {  }


	}

let clientes =  async() => {

    const baseUrl = 'php/consultaFetch.php';
    let consulta=`SELECT id , nombre, rut FROM clientes ORDER BY nombre ASC`;

    const sql = {sql: consulta, tag: `array_clientes`}  

    try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		
		$('#selectClientes').html(data).fadeIn();
		const marc = await marcas();
        //const provinciass = await provincias(array);
        
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

			var consulta=`SELECT  id,proveedor,codigo,codigo_proveedor,nombre,costo,stock,margen_contado,precio_venta,descripcion,marca,ubicacion,descuento FROM PRODUCTOS where nombre LIKE "%${buscar}%" || codigo LIKE "%${buscar}%" || codigo_proveedor LIKE "%${buscar}%"`;
		}else{
			var consulta=`SELECT  id,proveedor,codigo,codigo_proveedor,nombre,costo,stock,margen_contado,precio_venta,descripcion,marca,ubicacion,descuento FROM PRODUCTOS where nombre LIKE "%${buscar}%" || codigo LIKE "%${buscar}%" || codigo_proveedor LIKE "%${buscar}%"`;
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
			
			
		} catch (error) {  }
	
}

let tablaProductos = (array) => {

	$("#salidaTabla").append('<div id="container"><div class="table-responsive" data-pattern="priority-columns"><div class="scroll"><button class="btn btn-sm btn-primary float-right" onclick = regresar(event)  data-toggle="tooltip" data-placement="top" title="" data-original-title="Regresar a resumen" ><i class="fas fa-chevron-left"></i>  </button>' +		
			'<table  class="cabezera-tabla" id="tablaBuscar" >' +
			'<thead>' +
			'<tr class="table-success">' +
			'	<th  class="row-1 ">Int</th>' +
			'	<th  class="row-2 ">Prov.</th>' +
			'	<th  class="row-3 ">Nombre</th>' +	
			'	<th  class="row-4 ">Stock</th>' +
			'	<th  class="row-5 ">Ubicación</th>' +
			'	<th  class="row-6 ">Marca</th>' +	
			'	<th  class="row-7 ">Cantidad</th>' +
			'	<th  class="row-8 "></th>' +
			'	<th  class="row-9 " id="checkMargen" width="10%">Margen</th>' +
			'	<th  class="row-10"> Desc. %</th>' +		
			'	<th  class="row-12" id="chPrecioSin" width="10%">Precio venta</th>' +		
			'	<th  class="row-13" id="chPrecioCon" width="10%">25%</th>' +
			'	<th  class="row-14" id="total" width="10%">Total</th>' +
			'	<th  class="row-15"> </th>' +			
			'</tr>' +
			'</thead>' +
			'<tbody id="tablaBody"></tbody>' +
			'</table></div></div></div>');
		let	chekeadoTodoEntregado = "";
		let	chPrecioSinDes = "";
		let	chPrecioConDes = "";
		let toogle=``;
		for (var i = 0; i < array.length; i++) {
			var id_producto = array[i]['id'];
			var nombre = array[i]['nombre'];			
			var codigo = array[i]['codigo'];
			var codigoProveedor = array[i]['codigo_proveedor'];
			var costo = array[i]['costo'];			
			var descuento =array[i]['descuento'];
			let toFinal=costo*2.05*1.19;
			let caldes=(toFinal * 0.25);
			let desFinal=parseInt(toFinal)-parseInt(caldes);
			
			var precioVenta=array[i]['precio_venta'];
			let precioIva=precioVenta*(0.25);
			let precioFinal=precioVenta-precioIva;

			var margen = array[i]['margen_contado'];
			var stock = array[i]['stock'];
			var ubicacion = array[i]['ubicacion'];
			var marca = array[i]['marca'];
			var descripcion=array[i]['descripcion'];
		
			//CALCULO PASAR A BAJO//	
			//BODY DE LA TABLA AGREGAR PRODUCTOS;
			//cargar 105 por defecto
			//total alreves en cotizacion a venta y a que aparezca el descuento
			//generar excel al eliminar venta
			//sacar costo y descuento
			$("#tablaBody").append('<tr id="' + 'fila_add' + parseFloat(i + 1) + '">' +
				'<td width="5%" id="' + 'codiP' + parseFloat(i + 1) + '">' + codigo + '</td>' +
				'<td width="5%" id="' + 'codPro' + parseFloat(i + 1) + '">' + codigoProveedor + '</td>' +
				`<td id="nomPro${parseFloat(i + 1)}" style="cursor:pointer;"><span id="${id_producto}" onclick=obser(this,'${descripcion.split(" ")}',${codigo})>${nombre}</span></td>`+
				'<td id="' + 'stk' + parseFloat(i + 1) + '">' + stock + '</td>' +
				'<td>' + ubicacion + '</td>' +
				'<td>' + MARCAS[marca] + '</td>' +
				'<td><input class="form-control" id="' + 'cant' + parseFloat(i + 1) + '" onClick=cantidadCalculo('+(i+1)+',1)  min=1 type="number" value="1"></td>' +
				'<td><input  class="form-control" id="' + 'cos' + parseFloat(i + 1) + '" disabled onClick=cantidadCosto('+(i+1)+') onkeyup=cantidadCosto('+(i+1)+')  type="hidden" value=' + costo + '></td>' +
				'<td><input style="width:70px" class="form-control" id="' + 'mar' + parseFloat(i + 1) + '" '+
				'min=105 onclick="calcular_margen(this,' + parseFloat(i + 1) + ',true)" onkeypress="calcular_margen(this,' + parseFloat(i + 1) + ',true)"  type="number" value=' + margen + '></td>' +
				'<td><input style="width:70px" class="form-control" id="' + 'des' + parseFloat(i + 1) + '" '+
				' onkeypress="validar_descuento(event,this,50,' + parseFloat(i + 1) + ',' + parseFloat(i + 1) + ',true)"  type="number" min="0" max="99" data-toggle="tooltip" data-placement="top" title="descuento max 99" value="'+descuento+'"> </td>' +													
				'<td><input style="background: #d8d800;color:#111" disabled class="form-control" id="' + 'venSin' + parseFloat(i + 1) + '"   type="number" value=' + redondeo(toFinal,0) + '></td>' +
				'<td><input style="background: #d8d800;color:#111" class="form-control" id="' + 'venCon' + parseFloat(i + 1) + '" onkeypress=calDescuento(event,this,'+(i+1)+')   type="number" value=' + redondeo(desFinal,0) + '></td>' +
				'<td><input style="width:100px; background: #d8d800;color:#111" class="form-control" id="' + 'total' + parseFloat(i + 1) + '"   type="number" value=' + redondeo(desFinal,0) + '></td>' +							
				'<td id="' + 'idPro' + parseFloat(i + 1) + '"  style="display:none;">'+id_producto+'</td>' +
				'<td id="' + 'descr' + parseFloat(i + 1) + '"  style="display:none;">'+descripcion+'</td>' +
				'<td id="' + 'desOcul' + parseFloat(i + 1) + '" style="display:none;">0</td>' +	
				'<td style="display:none;"><input type="hidden"  id="' + 'preConOcul' + parseFloat(i + 1) + '" value=' + redondeo(precioFinal,0) + '></td>' +	
				`<td style="display:none;"><input type="hidden"  id="idproveedor${parseFloat(i + 1)}" value=${array[i]['proveedor']}></td>`+						
				'<td>' +
				'<button id="' + parseFloat(i + 1) + '" class="btn btn-success" data-toggle="tooltip" data-placement="top" title="Agregar" onclick="agregarProductos(event,this)"> <i class="fas fa-check" aria-hidden="true"></i></button>' +
				'</td>' +			
				'</tr>');

				if(stock<1){
					document.getElementById(`fila_add${parseFloat(i + 1)}`).className=`color_fila_rojo`;
				}else{
					document.getElementById(`fila_add${parseFloat(i + 1)}`).className=`color_fila_verde`;
				}
				
		}
				
				document.getElementById('checkMargen').innerHTML = 'Margen <input id="checkEnt" ' + chekeadoTodoEntregado + ' type="checkbox"  data-toggle="tooltip" data-placement="top" title="Actualizar precio">'
				// document.getElementById('chPrecioSin').innerHTML = 'Precio sin <input id="chPreSin" ' + chPrecioSinDes + ' type="radio"  name="optradio" onclick="comprobarChck()" data-toggle="tooltip" data-placement="top" title="Precion sin descuento">'
				// document.getElementById('chPrecioCon').innerHTML = 'Precio con <input id="chPreCon" ' + chPrecioConDes + ' type="radio"  name="optradio"  onclick="comprobarChck()" data-toggle="tooltip" data-placement="top" title="Precion con descuento">'
				$('[data-toggle="tooltip"]').tooltip();
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

			let calDescuento = (e,id,indice) => {

				if(e.keyCode==13){

					let idTabla=id.id;

					
					let cantidad = document.getElementById(`cant${indice}`).value;

					let precioFinal=document.getElementById(idTabla).value;

					let costoConIva = document.getElementById(`cos${indice}`).value*(1.19);

					let preSinDes=document.getElementById(`venSin${indice}`).value;


					

					let descuento=preSinDes-precioFinal;
					
					document.getElementById(`desOcul${indice}`).innerHTML=descuento;					
					let total = cantidad*precioFinal;
					document.getElementById(`total${indice}`).value=total;
				}

			}		

	//PASAR EL MOUSE POR EL NOMBRE DEL PRODUCTO
	let obser = async (id,nombre,codigo) => {

		let idpro=id.id;
		
		let nombreOri=nombre;	
		limpiarCampos();
		document.getElementById('obsProducto').value=nombreOri.replace(/,/g," ");
		document.getElementById('idprodescripcion').value=idpro;	
		let ultimaVentaPro =await buscarUltimaVenta(codigo);	
		let ultimaCompra = await buscarUltimaCompra(codigo);
		let id_Proveedor= await idProveedor(idpro);	  
		let modal=await mostrarModal();	

	}

	let idProveedor=async(id)=>{

		const baseUrl = 'php/consultaFetch.php';
		const consulta=`SELECT proveedor FROM productos WHERE id=${id}`;

		const sql = {sql: consulta, tag: `array_datos`} 
		
		try {
			//*-llamar ajax al servidor mediate api fetch.
			const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
			//*-request de los datos en formato texto(viene todo el request)
			const data = await response.text();
			//*-se parsea solo la respuesta del Json enviada por el servidor.	
			let array = JSON.parse(data);
			let proveedor=array[0]['proveedor'];
			let prove = await nombreProveedor(proveedor);				
			
		} catch (error) {  }
	}
	let nombreProveedor=async(id)=>{

		const baseUrl = 'php/consultaFetch.php';
		const consulta=`SELECT nombre FROM proveedores WHERE id=${id}`;

		const sql = {sql: consulta, tag: `array_datos`} 
		
		try {
			//*-llamar ajax al servidor mediate api fetch.
			const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
			//*-request de los datos en formato texto(viene todo el request)
			const data = await response.text();
			//*-se parsea solo la respuesta del Json enviada por el servidor.	
			let array = JSON.parse(data);
			let nombre=array[0]['nombre'];
			document.getElementById('nombre_proveedor').innerHTML=`<ul><li>Proveedor : <strong>${nombre}</strong></li></ul>`;				
			
		} catch (error) {  }

	}

	/*BUSCAR LA ULTIMA VENTA DEL PRODUCTO*/ 
	let buscarUltimaVenta =async (codigo) => {



		const baseUrl = 'php/consultaFetch.php';

		const consulta=`SELECT (fecha_venta) as fecha ,precio_unitario,p.precio_venta,v.estado_venta FROM ventas v INNER JOIN ventas_relacional vr ON vr.id_venta=v.id JOIN productos p ON vr.codigo_producto=p.codigo
		 WHERE vr.codigo_producto=${codigo}  ORDER BY v.id DESC LIMIT 1`;

		const sql = {sql: consulta, tag: `array_datos`} 

		console.info(consulta);

		try {
			//*-llamar ajax al servidor mediate api fetch.
			const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
			//*-request de los datos en formato texto(viene todo el request)
			const data = await response.text();
			//*-se parsea solo la respuesta del Json enviada por el servidor.	
			let array = JSON.parse(data);
			let estado_venta=array[0]['estado_venta'];

			if(array.length > 0){
				
				if(estado_venta!=3){
					document.getElementById('fecha_ultima_venta').innerHTML=`<ul><li>Fecha ultima <strong>venta</strong> : ${array[0]['fecha']}</li></ul>`;
					document.getElementById('precio_ultima_venta').innerHTML=`<ul><li>Precio  ultima <strong>venta</strong>  : ${formatearNumeros(array[0]['precio_unitario'])}</li></ul>`;	
				}
							
			}
			document.getElementById('precioVenta_ultima_compra').innerHTML=`<ul><li>Precio Venta <strong></strong> : ${formatearNumeros(array[0]['precio_venta'])}</li></ul>`;		
			
		} catch (error) {  }
		

	}


	let buscarUltimaCompra =async (codigo) => {

		const baseUrl = 'php/consultaFetch.php';

		const consulta=`SELECT (fecha_ingreso) as fechaEmi , cantidad , precioUnitario  FROM facturas v INNER JOIN facturas_relacional vr ON vr.idfactura=v.id WHERE vr.codigoProducto=${codigo} ORDER BY v.id DESC LIMIT 1`;

		const sql = {sql: consulta, tag: `array_datos`} 

		try {
			//*-llamar ajax al servidor mediate api fetch.
			const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
			//*-request de los datos en formato texto(viene todo el request)
			const data = await response.text();
			//*-se parsea solo la respuesta del Json enviada por el servidor.	
			let array = JSON.parse(data);	
			
			if(array.length > 0){
				document.getElementById('fecha_ultima_compra').innerHTML=`<ul><li>Fecha <strong>compra</strong> : ${array[0]['fechaEmi']}</li></ul>`;
				document.getElementById('cantidad_ultima_compra').innerHTML=`<ul><li>Cantidad <strong>compra</strong> : ${array[0]['cantidad']}</li></ul>`;
				document.getElementById('costo_ultima_compra').innerHTML=`<ul><li>Precio Costo  <strong>compra</strong>  : ${formatearNumeros(array[0]['precioUnitario'])}</li></ul>`;
			}
			
			
			let precioIva=array[0]['precioUnitario']*0.25;
			
		} catch (error) {  }
		

	}

	let limpiarCampos=() => {

		
		$("#myModal").modal('hide');
		document.getElementById('fecha_ultima_compra').innerHTML=`<ul><li>Fecha  <strong>compra</strong>  : `;
		document.getElementById('cantidad_ultima_compra').innerHTML=`<ul><li>Cantidad  <strong>compra</strong>  : `;
		document.getElementById('costo_ultima_compra').innerHTML=`<ul><li>Precio Costo  <strong>compra</strong> o : `;
		document.getElementById('fecha_ultima_venta').innerHTML=`<ul><li>Fecha  <strong>venta</strong>  : `;
		document.getElementById('precio_ultima_venta').innerHTML=`<ul><li>Fecha  <strong>venta</strong>  : `;
		document.getElementById('precioVenta_ultima_compra').innerHTML=`<ul><li>Fecha  <strong>Compra</strong>  : `;
		document.getElementById('nombre_proveedor').innerHTML=``;		

	}

	let mostrarModal = () =>{



		$("#myModal").modal();
		$('body').on('shown.bs.modal', '#myModal', function () {
		$('input:visible:enabled:first', this).focus();

	})
	}

	//EDITAR LA DESCRIPCION EN LA VENTA
	let editarDescripcion=async (e) =>{

		if(e.keyCode==13){
		let descripcion = document.getElementById('obsProducto').value;
		let idProducto =  document.getElementById('idprodescripcion').value;
		
		const baseUrl = 'php/consultaFetch.php';

		let consulta=`UPDATE PRODUCTOS set descripcion="${descripcion}" WHERE id=${idProducto}`;

		const sql   = {sql: consulta, tag: `crud`}	

		
		
		try {
			//*-llamar ajax al servidor mediate api fetch.
			const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
			//*-request de los datos en formato texto(viene todo el request)
			const data = await response.text();
				$.notify({
					title: "Update: ",
					message: "Se actualizo la descripcion del producto:",
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
		
	}

	let totalFcalcular = (e) =>{

		if(e.keyCode==13) {

			recalcularValores();

		}
	

	}

	let agregarProductos =  (e,btn) => {

		// comprobarFactura();
		
		$("#tablaProductos").show();
		$("#salidaTabla").hide();

		let evento = e.preventDefault();
		let idTabla = btn.id; // SE OBTIENE EL ID DESDE EL BOTON DEL FORMULARIO CON EL LA PROPIEDAD THIS
		let precio_venta=0;
		
		var table = document.getElementById("tabla"); //ID DE LA TABLA PARA OBTENER LOS VALORES DE LAS FILAS	
		
		//borramos el input buscar
		$('#buscar').val('');

		let codigo_producto = document.getElementById('codiP'+idTabla).innerHTML; //OBTEnGO EL VALOR NOMBRE DESDE LA COLUMNA 1;
	
		let codigo_proveedor = document.getElementById('codPro'+idTabla).innerHTML;
		
		let nombre =document.getElementById(`nomPro${idTabla}`).textContent;
		
		let idProd = document.getElementById(`idPro${idTabla}`).innerHTML;
	
		// let codigo_proveedor = table.rows[idTabla].cells[1].innerHTML; //OBTEnGO EL VALOR NOMBRE DESDE LA COLUMNA 1;
		// let nombre = table.rows[idTabla].cells[2].innerHTML;
		let cantidad = document.getElementById('cant' + idTabla).value;
		let margen = document.getElementById('mar' + idTabla).value;
		let precio_sin = document.getElementById('venSin' + idTabla).value; // ID DEL SELECT PRECIO;
		let precio_Con= document.getElementById('venCon' + idTabla).value;
		let precioConOcul=document.getElementById(`preConOcul${idTabla}`).value;
		let desOcul=document.getElementById(`desOcul${idTabla}`).innerHTML;
		let total=document.getElementById(`venCon${idTabla}`).value;
		let idproveedor=document.getElementById(`idproveedor${idTabla}`).value;
		
		let precioTotal = cantidad * precio_Con;
		// let idProd = table.rows[idTabla].cells[11].innerHTML;
		let descuento = document.getElementById(`des${idTabla}`).value;
		ITEM++;

		var estadoEntr = "";
		estadoEntr = document.getElementById('checkEnt').checked;

		if(estadoEntr == true){
			actualizarPrecioVenta(idProd,precio_sin,descuento);
		}
			actualizaMargen(idProd,margen);
		let nfilas=$("#tablaBodyCotizacion > tr").length + parseFloat(1);
		let arrCod=[];
		$("#tablaBodyCotizacion").append('<tr id="fila' + nfilas + '">' +
		'<td> <span  class="editar" onclick="transformarEnEditable(this,2)" style="cursor:pointer;">'+codigo_proveedor+'</span> </td>' +
		'<td>' + codigo_producto + '</td>' +
		'<td><input class="canti" name="can' + parseFloat(nfilas) + '" style="width:50px" id="' + 'cant' + parseFloat(nfilas) + '" size="2" onClick=cantidadCalculo('+nfilas+',2)  type="number" min=1 value="'+cantidad+'"></td>' +
		'<td> <span class="editar" onclick="transformarEnEditable(this,1)" style="cursor:pointer;">' + nombre + '</span> </td>' +
		'<td><input style="text-align:center;" name="totunitaU' + parseFloat(nfilas) + '" id="' + 'precuni' + parseFloat(nfilas) + '"   type="text" min=0 value="'+formatearNumeros(precio_sin)+'"></td>' +
		'<td><input style="text-align:center;" name="totU' + parseFloat(nfilas) + '" id="' + 'prect' + parseFloat(nfilas) + '" onkeypress="calcularPrecioTabla(event,this,' + parseFloat(nfilas) + ')"  type="text" min=0 value="'+formatearNumeros(total)+'"></td>' +
		'<td><input style="text-align:center;" name="desU' + parseFloat(nfilas) + '" id="' + 'desc' + parseFloat(nfilas) + '"   type="text" min=0 value="'+formatearNumeros(desOcul)+'"></td>' +
		'<td><input style="text-align:center;" name="preU' + parseFloat(nfilas) + '" id="' + 'vent' + parseFloat(nfilas) + '"  onkeypress="totalFcalcular(event)" type="text" min=0 value="'+formatearNumeros(precioTotal)+'"></td>' +					
		'<td><button class="btn  btn-danger" id="cols' + nfilas + '" onclick=removerItem(' + parseFloat(nfilas) + ')><i class="fa fa-trash" aria-hidden="true"></i></button></td>' +
		'<td style="display:none;">'+idProd+'</td>' +
		'<td style="display:none;">'+idproveedor+'</td>' +
		'<td style="display:none;"><input name="venDesU' + parseFloat(nfilas) + '" id="' + 'venDescu' + parseFloat(nfilas) + '" value="'+(precioConOcul)+'"></td>' +	
		'</tr>');

			$('[data-toggle="tooltip"]').tooltip();
			//`agregarNumeracionItem();
			recalcularValores();
			document.getElementById('obsProducto').value="";
			comprobarRepetidos(arrCod,'cols',nfilas);
			
	}

	let calcularPrecioTabla = (e,btn,id) =>{

		if(e.keyCode==13){
			const evento = e.preventDefault();
			let idTabla=btn.id;
			let precio_unitario=convertirNumeros(document.getElementById(idTabla).value);
			let cantidad=document.getElementById('cant'+id).value;
			console.log('preciounitario '+ (precio_unitario));
			console.log('cantidad'  + cantidad);
			let precio_final=precio_unitario*cantidad;
			document.getElementById('vent'+id).value=formatearNumeros(precio_final);

			recalcularValores();
		}
	}

	let removerItem = async(id) => {
					
			
			$("#fila" + id).remove();			

			const recal = await recalcularValores();

		}
//*-boton volver en la tabla busqueda-*//
let regresar = (e)=> {
	const evento = e.preventDefault();
	$("#volverBtn").show(); // mostramos nuevamente  los botones
	$("#tablaProductos").hide(); //tabla donde se buscan los productos
	document.getElementById('buscar').value='';
	document.getElementById('buscar').focus();
}

function validar_descuento(e,id, descuento_max, id_precio_venta, id_precio_final) {

	if (e.keyCode === 13 && !e.shiftKey) {
		e.preventDefault();
		var precio_venta = document.getElementById('venSin'+id_precio_venta).value;//document.getElementById("pres" + id_precio_venta).value //PRECIO VENTA

		id_descuento = id.id; // SE OBTIENE EL ID DESDE EL INPUT DESCUENTO  CON  LA PROPIEDAD THIS
		var valor_descuento = document.getElementById(id_descuento).value //SACO EL VALOR DEL INPUT GRACIAS AL ID ENVIADO DESDE LA FUNCION;
	
	
		if (valor_descuento > descuento_max) { //VALIDO QUE EL VALOR DEL DESCUENTO SEA MENOR AL VALOR REAL DEL DESCUENTO Y QUE SEA MAYOR A CERO;
			swal("No puede aplicar un descuento superior al predeterminado","","info");
			$('#' + id_descuento).val(0); //VUELVO EL VALOR DEL INPUT DESCUENTO A 0;
			$('#venCon' + id_precio_final).val(precio_venta);
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
	
	$('#venCon' + id_precio_f).val(precio_final);
	$('#total' + id_precio_f).val(precio_final);
}

let calcular_margen = (id,id_costo) =>{

	let id_margen= id.id;
	let precio;

	let precio_costo=document.getElementById('cos'+id_costo).value;
	let preciodescuento;
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
		let precio1=precio_final+porcosto;
		let preMarIva=precio1*1.19;
		precio = document.getElementById('venSin'+id_costo).value=redondeo(preMarIva,0);
		 preciodescuento=redondeo(precio * 0.25,0);
		document.getElementById(`venCon${id_costo}`).value=precio-preciodescuento;
		document.getElementById(`total${id_costo}`).value=precio-preciodescuento;
		// document.getElementById(`venCon${id_margen}`).value=precio-preciodescuento;
	}
	if(primerNum==2){
		let porcosto=redondeo(porcentaje*precio_costo,0);
		precio_final=precio_costo*3;
		precio = document.getElementById('venSin'+id_costo).value=redondeo(precio_final+porcosto,0);
		 preciodescuento=redondeo(precio * 0.25,0);
		document.getElementById(`venCon${id_costo}`).value=precio-preciodescuento;
		document.getElementById(`total${id_costo}`).value=precio-preciodescuento;
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

		let td=tablaC.rows[i].cells[7];

		valorTotal +=parseInt(convertirNumeros(td.getElementsByTagName('input')[0].value));
  
	}

	let totalapagar=document.getElementById(`totalF`).value=formatearNumeros(valorTotal);
	let neto = valorTotal/1.19;
	document.getElementById(`totalNeto`).value=formatearNumeros(redondeo(neto,0));
	let iva = convertirNumeros(totalapagar)-neto;
	
	document.getElementById(`iva`).value=formatearNumeros(redondeo(iva,0)); 
	document.getElementById(`totalapagar`).value=formatearNumeros(valorTotal);	  

}

let cantidadCalculo = (id,indice) =>{
	
	console.log('id ' + id);
	let input=`input[name=can${(id)}]`;
	var cantidad=0;
	var stock=0;
	if(indice==1){
		console.log('entro aca');
		 cantidad = document.getElementById(`cant${id}`).value;
		 stock=document.getElementById(`stk${id}`).innerHTML;
		 console.log('stock ' + stock);

		 if(stock<1){

			$.notify({
				title: "Precaución: ",
				message: "Stock se encuentra agotado !!!:",
				icon: 'fas fa-close'
			}, {
				type: "danger",
				placement: {
					from: "bottom",
					align: "center"
				},
				offset: 70,
				spacing: 70,
				z_index: 1031,
				delay: 2000,
				timer: 3000
			});	

		 }

	}else{
		
		 cantidad = `${document.querySelector(input).value}`;
	}

	
	if(indice==1){
		
		let precioVen=convertirNumeros(document.getElementById('venCon'+id).value);
		let precioT=cantidad*precioVen;

		
		document.getElementById('total'+id).value=(precioT);

	}else{
	
		
		let precioVen=convertirNumeros(document.getElementById('prect'+id).value);
		let precioT=cantidad*precioVen;
		
		document.getElementById('vent'+id).value=formatearNumeros(precioT);
	}
	
	recalcularValores();

} 
let cantidadCosto = (id) => {
	let costo=document.getElementById('cos'+id).value;
	document.getElementById('ven'+id).value=costo;

}
let actualizarPrecioVenta = async (idP,precioVent,descuento) => {

	const baseUrl = 'php/consultaFetch.php';

	let consulta=`UPDATE PRODUCTOS set precio_venta=${precioVent} , descuento=${descuento} WHERE id=${idP}`;

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
let actualizaMargen = async (idP,margen) => {

	const baseUrl = 'php/consultaFetch.php';

	let consulta=`UPDATE PRODUCTOS set margen_contado=${margen} WHERE id=${idP}`;

	const sql   = {sql: consulta, tag: `crud`}	

	
	
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
		
		
	} catch (error) {  }


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
	
	//
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
		var estadoVenta = document.getElementById('selectDocumento').value;

		if(estadoVenta==4){

			var numeroCotizacion=document.getElementById('id_cotizacion').value;
			

		}else if(estadoVenta==3){

		var numeroGuia=document.getElementById('id_guia').value;

		}else if(estadoVenta==2){

			var numeroFactura=document.getElementById('id_factura').value;
		}
		else if(estadoVenta==5){

			var numeroTajeta=document.getElementById('id_tarjeta').value;
		}
		else if(estadoVenta==1){

			var numeroBoleta=document.getElementById('id_boleta').value;
		}



		let fecha_ac = new Date();
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
		let fecha_venta=document.getElementById('fecha_venta').value;
		let fecha_hora=fecha_venta + "  " + fecha_ac.getHours() + ":" + fecha_ac.getMinutes() + ":" + fecha_ac.getSeconds();
		
		const baseUrl = 'php/consultaFetch.php';

	let consulta=`INSERT INTO VENTAS (id_vendedor,fecha_venta,estado_venta,id_cliente,descuento,descuento_pesos,neto,iva,total,total_sin_des,
	fecha_nulo,observacion,medio_pago,id_turno,id_cotizacion,id_factura,id_guia,id_tarjeta,id_boleta)
	VALUES(${ID_VENDEDOR},"${fecha_hora}",${estadoVenta},${cliente},${descuento},${convertirNumeros(descuento_pesos)},${netoConvertido},${ivaConvertido}
	,${totalFinalConvertido},${convertirNumeros(totalsindes)},NULL,"${observacion}",${medio_pago}
	,${ID_TURNO},"${numeroCotizacion}","${numeroFactura}","${numeroGuia}","${numeroTajeta}","${numeroBoleta}")`;
	
		

				const sql   = {sql: consulta, tag: `insert_return_id`}		

				console.error(consulta);
	
				try {
				//*-llamar ajax al servidor mediate api fetch.
				const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
				//*-request de los datos en formato texto(viene todo el request)
				const data = await response.text();
				//*-se parsea solo la respuesta del Json enviada por el servidor.
					
				if (!isNaN(data)) {	 	insertProductos(data);	}
				
				
				} catch (error) {  }

		}

let insertProductos = async (id) => {

	var tablaC = document.getElementById("tablaBodyCotizacion"),
	rIndex;
	var nFilas = $("#tablaBodyCotizacion > tr").length;
	let cotizacion=document.getElementById(`selectDocumento`).value;

for (var i = 0; i < nFilas; i++) {

	
	let input=`input[name=can${(i+1)}]`;
	let inputPreU=`input[name=preU${(i+1)}]`;
	let inputTotU=`input[name=totU${(i+1)}]`;
	var codigo = tablaC.rows[i].cells[1].innerHTML;
	// var cantidad = `${document.querySelector(input).value}` //usamos innerText para obtener solo el valor
	let cantidad=tablaC.rows[i].cells[2].children[0].value;
	var nombre = tablaC.rows[i].cells[3].innerText;
	// var precioUnitario = `${document.querySelector(inputPreU).value}`
	// var precioUnitarioConvertido = convertirNumeros(precioUnitario);
	let precioUnitarioConvertido=convertirNumeros(tablaC.rows[i].cells[7].children[0].value);
	// var totalUnitario = `${document.querySelector(inputTotU).value}`
	// var totalUnitarioConvertido = convertirNumeros(totalUnitario);
	let totalUnitarioConvertido=convertirNumeros(tablaC.rows[i].cells[5].children[0].value);
	let descuentoConvertido=convertirNumeros(tablaC.rows[i].cells[6].children[0].value);

	var proveedor = tablaC.rows[i].cells[10].innerText;

	const baseUrl = 'php/consultaFetch.php';

	let consulta=`INSERT INTO VENTAS_RELACIONAL (codigo_producto,precio_unitario,cantidad,total_unitario,id_venta,nombre_producto,descuento_producto,id_proveedor)

	VALUES("${codigo}",${totalUnitarioConvertido},${cantidad},${precioUnitarioConvertido},${id},"${nombre}",${descuentoConvertido},${proveedor})`;	

	console.error(consulta);
				const sql   = {sql: consulta, tag: `crud`}		
					
	
				try {
				
				const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
				
				const data = await response.text();					

				} catch (error) {  }		
			}

			if(cotizacion!=4){
			console.error('cotizacion ' + cotizacion);


			desContarStock();
			}else{
				swal("Cotizacion creada", "la cotizacion fue creada exitosamente", "success");
				setTimeout('window.location.href = "ingresar_venta.php";', 1500);	
			}
			

}
	let desContarStock = () => {

		let tablaC = document.getElementById("tablaBodyCotizacion"),
		rIndex;

		let nFilas = $("#tablaBodyCotizacion > tr").length;	
		let stock;
		let stockFinal;
		let idProducto;
			stock=tablaC.rows[0].cells[2];
			stockFinal= stock.getElementsByTagName('input')[0].value;
			
		for(let i=0; i < nFilas; i++ ){

			stock=tablaC.rows[i].cells[2];
			stockFinal= stock.getElementsByTagName('input')[0].value;
			idProducto=tablaC.rows[i].cells[9].innerHTML;
			actualizarStock(stockFinal,idProducto)

			}		
			
			swal("Venta creada", "los datos fueron guardados exitosamente", "success");
			setTimeout('window.location.href = "ingresar_venta.php";', 1500);
	}

	let actualizarStock = async (stockFinal,idProducto) => {

		const baseUrl = 'php/consultaFetch.php';

		const consulta = `UPDATE productos set stock =stock - (${stockFinal}) WHERE id=${idProducto}`;

		const sql = {sql: consulta, tag: `array_datos`} 
		
	try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		//*-se parsea solo la respuesta del Json enviada por el servidor.
		
		
		
	} catch (error) {  }

}

	let editarNonmbre = async(idProducto,nombreEditable) => {

					const baseUrl = 'php/consultaFetch.php';

					let consulta=`UPDATE PRODUCTOS set nombre="${nombreEditable}" WHERE id=${idProducto}`;

					const sql   = {sql: consulta, tag: `crud`}		
					
		
					try {
					//*-llamar ajax al servidor mediate api fetch.
					const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
					//*-request de los datos en formato texto(viene todo el request)
					const data = await response.text();
					//*-se parsea solo la respuesta del Json enviada por el servidor.				
					
					} catch (error) {  }

			
		}



let quitarDescuento = (e) => {

	const evento = e.preventDefault();
	let totalFijo = document.getElementById('totalapagar').value;

	let desIva=document.getElementById('totalapagar').value;
	let neto = (convertirNumeros(desIva) / (1.19));
	let iva = convertirNumeros(desIva)-neto;
	
	//
	document.getElementById('iva').value=formatearNumeros(redondeo(iva,0));
	document.getElementById('totalNeto').value=formatearNumeros(redondeo(neto,0));
	//document.getElementById('totalF').value=formatearNumeros(redondeo(totalFijo,0));
	document.getElementById('totalF').value=formatearNumeros(neto + iva);
	document.getElementById('descuentoPorcentaje').value=0;
	document.getElementById('descuentoPesos').value=0;


	/*********** */
	let tablaC = document.getElementById("tablaBodyCotizacion"),
	rIndex;
	let nFilas = $("#tablaBodyCotizacion > tr").length;	

	let descuento;
	let totalUnitario;
	let cant;
	let cantotal;
	let precU;
	let precUtotal;
	let valorTotal;
	let totU;
	let nuevoU;
	let totalUni;
	let nuevoTota;

	for(let i=0; i < nFilas;i++){

		descuento=`input[name=desU${(i+1)}]`;
		cant=`input[name=can${(i+1)}]`;
		precU=`input[name=venDesU${(i+1)}]`;
		totU=`input[name=totU${(i+1)}]`;
		nuevoTota=`input[name=preU${(i+1)}]`;

		totalUnitario = `${document.querySelector(descuento).value=0}`;
		cantotal = `${document.querySelector(cant).value}`;
		precUtotal = `${document.querySelector(precU).value}`;
		
		valorTotal = formatearNumeros(cantotal)*convertirNumeros(precUtotal);

		

		totalUni=`${document.querySelector(nuevoTota).value=formatearNumeros(valorTotal)}`;	
		document.querySelector(totU).value=precUtotal;
		recalcularValores();

	}


}

let ingresar_cliente = async() =>{

	$("#ingresarClientes").modal();
	$('body').on('shown.bs.modal', '#myModal', function () {
		$('input:visible:enabled:first', this).focus();
	})
	const comunas = await cargarRegiones();
}


function cargarComunas() {

	var id = document.getElementById("selectProvincias").value;

	console.log(id);
	$.ajax({
		type: 'POST',
		url: 'php/consulta.php',
		data: {
			tag: 'mostrarComunas',
			id: id
		},
		success: function (data) {
			$('#selectComunas').html(data).fadeIn();
			document.getElementById("selectComunas").disabled = false;

		},
		error: function (request, status, error) {
			console.error("Error: Could not cargarComunas");
		}
	});

}
//Provincias
function cargarProvincias() {

	var id = document.getElementById("selectRegiones").value;

	console.log(id);
	$.ajax({
		type: 'POST',
		url: 'php/consulta.php',
		data: {
			tag: 'mostrarProvincias',
			id: id
		},
		success: function (data) {
			$('#selectProvincias').html(data).fadeIn();
			$('#selectComunas').html("").fadeIn();

		},
		error: function (request, status, error) {
			console.error("Error: Could not cargarProvincias");
		}
	});

}
//Regiones
function cargarRegiones() {
	//document.getElementById("selectProvincias").disabled = true;
	//document.getElementById("selectComunas").disabled = true;

	$.ajax({
		type: 'POST',
		url: 'php/consulta.php',
		data: {
			tag: 'mostrarRegiones'
		},
		success: function (data) {
			$('#selectRegiones').html(data).fadeIn();
			document.getElementById("selectProvincias").disabled = false;

		},
		error: function (request, status, error) {
			console.error("Error: Could not cargarRegiones");
		}
	});
}

function comprobarCliente() {	
	if($("#rutCliente").val() != ""	){
		var rutCliente = $("#rutCliente").val();
		console.error(rutCliente);

		var sql = 'SELECT count(*) FROM clientes where rut=' + rutCliente;
	
		//-*AJAX	
		$.ajax({
			type: 'POST',
			url: 'php/consulta.php',
			data: { sql: sql, tag: 'array_de_datos' },

			success: function (data) {
				var arreglo = JSON.parse(data);
				existe = arreglo[0][0];
				if (existe < 1) {
			
					} else {
						$.notify({
							title: "Rut existente : ",
							message: "El rut de estes cliente ya existe en la base de datos:",
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
							delay: 1000,
							timer: 1000
						});
					document.getElementById('rutCliente').focus();
					$("#rutCliente").val(convertirRut(rutCliente));	
					}
				
			},
			error: function (request, status, error) {
				console.error("Error: Could not comprobarCLiente");
			}
		});

	}else{
		var rutCliente = $("#rutCliente").val();
		console.error(rutCliente);
		
	}	
	return;
}

function GuardarCliente(e) {
    e.preventDefault();
    var rutCliente = $("#rutCliente").val();
	var nombre = $("#nombre").val();
	var direccion = $("#direccion").val();
	var fono = $("#fono").val();
    var fono2 = $("#fono2").val();
    var giro = $("#giro").val();
	var ciudad = document.getElementById("selectComunas").value;
	var regiones =document.getElementById("selectRegiones").value;
	var provincias =document.getElementById("selectProvincias").value;  
    var referencia = $("#referencia").val();
    var credito = $("#credito_autorizado").val();
    var observacion = $("#observacion").val();

	if(rutCliente=='' || nombre=='' || ciudad==0 || 
	 provincias==0  ||  regiones==0){
		swal('Advertencia','debe llenar los datos','warning');
		return;
	}
	
	var  sql =`INSERT INTO clientes (rut,nombre,direccion,ciudad,fono_1,fono_2,referencia,giro,credito_autorizado,observacion)
	VALUES("${sacarPuntosGuionRut(rutCliente)}","${nombre}","${direccion}",${ciudad},"${fono}",NULL,NULL,NULL,NULL,NULL)`;

    console.error(sql);
 ;
    //AJAX
	$.ajax({
		type: 'POST',
		url: 'php/consulta.php',
		data: {
			sql: sql,
			tag: 'crud_productos'
		},
		success: function (data) {
			console.log(data);
			if (!isNaN(data)) {
				console.log(data);
				swal("Datos ingresados correctamente", "", "success");
				document.getElementById('rutCliente').focus();	
                document.getElementById('rutCliente').value='';	
				clientes();

			} else {
				console.error("No es correto");
			} //	window.location.href = "ver_clientes.php";

		},
		error: function (request, status, error) {
			console.error("Error: Could not guardarCliente2");
		}
	});


}
