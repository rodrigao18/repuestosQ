	var PORCENTAJE = 0;
	var PORCENTAJE_FACTURADO = 0;
	var IDCLIENTE = 0; // AGRGADA 06/06/2018 PM 14:47;
	var SQLDESCARTAR = "";
	var DESCUENTO;
	var IDCONTACTO;
	var sql = 0;
	var ESTADOVENTA = 0;
	var MARCAS;
	var IDVENTARELACIONAL;
	//COTIZACIONNUMERO

	/*------------------------ Cargar Cliente -------------------------*/
	//*-datos vendedor
	function consultarDatosVendedor(id,estado_venta) {
		IDCLIENTE = id;
		
		
		ESTADOVENTA=estado_venta;
		//$sql = "SELECT id_cliente, rut_cliente, nombre_cliente, direccion_cliente, telefono_cliente, giro_cliente, nombreContacto1 FROM clientes where id_cliente =" + id;
		//var sql = "SELECT c.id_cliente, c.rut_cliente, c.nombre_cliente, c.direccion_cliente, c.telefono_cliente, c.giro_cliente, cc.nombre FROM clientes c INNER JOIN contacto_cliente cc ON c.id_cliente = cc.id_cliente where c.id_cliente = " + id;
		var sql = "SELECT id_vendedor,nombreVendedor, correoVendedor FROM vendedores WHERE id_vendedor=" + IDVENDEDOR;

		console.error('ESTADOVENTA '  + ESTADOVENTA);
		
		
		$("#tablaProductos").hide();
		$.ajax({
			type: 'POST',
			url: 'php/consulta.php',
			data: {
				sql: sql,
				tag: 'array_de_datos'
			},
			success: function (data) {
				//
				//
				var arreglo = JSON.parse(data);	       
				
				FormDatosVendedor(arreglo);
				convertirPaginaDeEstados();
				marcas();


			},
			error: function (request, status, error) {
				
			}
		});

	}

	let cargarCliente = async(id)=>{

		const baseUrl = 'php/consultaFetch.php';
    	let consulta=`SELECT id,nombre,rut FROM clientes`;
    	
    	const sql   = {sql: consulta, tag: `array_clientes`}
    
    try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
	        		
        $('#selectClientes').html(data).fadeIn();		
        $('#selectClientes option[value="' + id + '"]').attr("selected", true);		
		
	} catch (error) { console.log('error en la conexion ', error); }

	}

	let updateCliente = async()=>{

		let id = document.getElementById(`selectClientes`).value;
		const baseUrl = 'php/consultaFetch.php';
    	let consulta=`UPDATE VENTAS SET id_cliente=${id} WHERE id=${NUMEROVENTA}`;
    	
    	const sql   = {sql: consulta, tag: `crud`}
    
		try {
			
			const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
			const data = await response.text();
			$.notify({
				title: "Modificación: ",
				message: "Se Modificado el cliente:",
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

	//funcion que pone los datos del cliente
	function FormDatosVendedor(arreglo) {

		
		var idVendedor = arreglo[0]['idVendedor'];	
		var nombreVendedor = arreglo[0]['nombreVendedor'];

		var correo = arreglo[0]['correoVendedor'];
		//*-NAMES DE LOS INPUT-*
		$("#idVendedor").val(idVendedor);
		$("#nombreVendedor").val(nombreVendedor);	
		
		$("#correo").val(correo);	
		CargarProductos(NUMEROVENTA);
	}


	/*------------------------------------------------------------------*/

	//-ocultar
	function convertirPaginaDeEstados() {

		//cotizacion
		if (ESTADOVENTA == 1) {
			document.getElementById('titulo-detalle').value=`${NUMEROBOLETA}`;
			document.getElementById('titulo_documento').innerHTML=`Boleta`;
			document.getElementById('cabezera').className=`cabezera-boleta`;
			document.getElementById('btn_ventas').style.display=`block`;
			
		} else if (ESTADOVENTA == 0) {
			var row = document.getElementById("borrar");
			row.deleteCell(-1);
			row.deleteCell(-1);
			$("#tablaBodyCotizacion > tr td:last-child").hide();
			$("#tablaBodyCotizacion > tr td:nth-last-child(2)").hide();

		} else if (ESTADOVENTA == 3) {
			document.getElementById('titulo-detalle').value=`${NUMEROBOLETA}`;
			document.getElementById('titulo_documento').innerHTML=`Guia`;
			document.getElementById('cabezera').className=`cabezera-guia`;
			document.getElementById('grupo-btn').style.display=`none`;
		}
		else if (ESTADOVENTA == 4) {
			document.getElementById('titulo-detalle').value=`${NUMEROBOLETA}`;
			document.getElementById('titulo_documento').innerHTML=`Cotizacion`;
			document.getElementById('cabezera').className=`cabezera-cotizacion`;
			document.getElementById('btn-ocultar').style.display=`block`;
			document.getElementById('grupo-btn').style.display=`none`;

		}else if (ESTADOVENTA == 5) {
			document.getElementById('titulo-detalle').value=`${NUMEROBOLETA}`;
			document.getElementById('titulo_documento').innerHTML=`Tarjeta`;
			document.getElementById('cabezera').className=`cabezera-boleta-tarjetas`;
			document.getElementById('btn-ocultar').style.display=`block`;
			document.getElementById('grupo-btn').style.display=`none`;
			document.getElementById('btnImportar').style.display=`none`;


		}
		else if (ESTADOVENTA == 2) {
			document.getElementById('titulo-detalle').value=`${NUMEROBOLETA}`;
			document.getElementById('titulo_documento').innerHTML=`Factura`;
			document.getElementById('cabezera').className=`cabezera-factura`;
			// document.getElementById('btn-ocultar').style.display=`block`;
		}

	}
	//comprobar si el documento ya esta en la base
	let cambiarNumeroBoleta = async(e)=>{

		const evento = e.preventDefault();
		let n_documento;
		let id_documento='';
		n_documento=document.getElementById(`titulo-detalle`).value;
		console.error('ESTADOVENTA ' + ESTADOVENTA);
		if(ESTADOVENTA==1){
		
		id_documento=`id_boleta`;	
			}
		else{
			id_documento=`id_factura`;		
		}			

		const baseUrl = 'php/consultaFetch.php';
		
		let consulta=`SELECT count(*) FROM ventas WHERE ${id_documento}=${n_documento}`;
		const sql = {sql: consulta, tag: `array_datos`}  
		
		try {			
			const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });		
			const data = await response.text();			
			let array = JSON.parse(data);
			let existe=array[0][0];
			if(existe==0){
					
				upBoleta(n_documento);
			}else{
				$.notify({
					title: "Error: ",
					message: `El numero de documento ya existe:`,
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
			}
			
		} catch (error) {  }

	}

	//actualizar el numero del documento
	let upBoleta = async(n_documento) =>{
		console.error('ESTADOVENTA ' + ESTADOVENTA);
		if(ESTADOVENTA==1){		
			id_documento=`id_boleta`;	
			}
		else {
			id_documento=`id_factura`;		
		}

		const baseUrl = 'php/consultaFetch.php';

		let consulta=`UPDATE VENTAS SET ${id_documento}=${n_documento} WHERE id=${NUMEROVENTA}`;

		const sql = {sql: consulta, tag: `crud`}  
		console.error(consulta);
		try {
			//*-llamar ajax al servidor mediate api fetch.
			const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
			//*-request de los datos en formato texto(viene todo el request)
			const data = await response.text();	
			$.notify({
				title: "Info : ",
				message: ` Se cambio el numero del Documento a ${n_documento} :`,
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
			document.getElementById(`titulo-detalle`).value=n_documento;
			
		} catch (error) {  }

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

				var consulta=`SELECT  id,codigo,codigo_proveedor,nombre,costo,stock,margen_contado,precio_venta,descripcion,marca,ubicacion,descuento FROM PRODUCTOS where nombre LIKE "%${buscar}%" || codigo LIKE "%${buscar}%"`;
			}else{
				var consulta=`SELECT  id,codigo,codigo_proveedor,nombre,costo,stock,margen_contado,precio_venta,descripcion,marca,ubicacion,descuento FROM PRODUCTOS where nombre LIKE "%${buscar}%" || codigo LIKE "%${buscar}%"`;
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
				
				const tablaproductoss = await tablaProductosBusqueda(array);
				
				
			} catch (error) {  }
		
	}


	let tablaProductosBusqueda = (array) => {

		$("#salidaTabla").append('<div id="container"><div class="table-responsive" data-pattern="priority-columns"><div class="scroll"><button class="btn btn-sm btn-primary float-right" onclick = regresar(event)  data-toggle="tooltip" data-placement="top" title="" data-original-title="Regresar a resumen" ><i class="fas fa-chevron-left"></i>  </button>' +		
				'<table class="cabezera-tabla" id="tablaBuscar" >' +
				'<thead class="cabezera">' +
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
					'<td><input class="form-control" id="' + 'canBus' + parseFloat(i + 1) + '" onClick=calculoTablaUp('+(i+1)+')  min=1 type="number" value="1"></td>' +
					'<td><input  class="form-control" id="' + 'cos' + parseFloat(i + 1) + '" disabled onClick=cantidadCosto('+(i+1)+') onkeyup=cantidadCosto('+(i+1)+')  type="hidden" value=' + costo + '></td>' +
					'<td><input style="width:70px" class="form-control" id="' + 'mar' + parseFloat(i + 1) + '" '+
					'min=105 onclick="calcular_margen(this,' + parseFloat(i + 1) + ',true)" onkeypress="calcular_margen(this,' + parseFloat(i + 1) + ',true)"  type="number" value=' + margen + '></td>' +
					'<td><input style="width:70px" class="form-control" id="' + 'des' + parseFloat(i + 1) + '" '+
					' onkeypress="validar_descuento(event,this,50,' + parseFloat(i + 1) + ',' + parseFloat(i + 1) + ',true)"  type="number" min="0" max="99" data-toggle="tooltip" data-placement="top" title="descuento max 99" value="'+descuento+'"> </td>' +													
					'<td><input style="background: #d8d800;color:#111" class="form-control" id="' + 'venSin' + parseFloat(i + 1) + '"   type="number" value=' + redondeo(toFinal,0) + '></td>' +
					'<td><input style="background: #d8d800;color:#111" class="form-control" id="' + 'venCon' + parseFloat(i + 1) + '" onkeypress=calDescuento(event,this,'+(i+1)+')   type="number" value=' + redondeo(desFinal,0) + '></td>' +
					'<td><input style="width:100px; background: #d8d800;color:#111" class="form-control" id="' + 'total' + parseFloat(i + 1) + '"   type="number" value=' + redondeo(desFinal,0) + '></td>' +							
					'<td id="' + 'idPro' + parseFloat(i + 1) + '"  style="display:none;">'+id_producto+'</td>' +
					'<td id="' + 'descr' + parseFloat(i + 1) + '"  style="display:none;">'+descripcion+'</td>' +
					'<td id="' + 'desOcul' + parseFloat(i + 1) + '" style="display:none;">0</td>' +	
					'<td style="display:none;"><input type="hidden"  id="' + 'preConOcul' + parseFloat(i + 1) + '" value=' + redondeo(precioFinal,0) + '></td>' +						
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
					comprobarRepetidos(arrCod,'cols',IDVENTARELACIONAL);
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

		const consulta=`SELECT (fecha_venta) as fecha ,precio_unitario,p.precio_venta FROM ventas v INNER JOIN ventas_relacional vr ON vr.id_venta=v.id JOIN productos p ON vr.codigo_producto=p.codigo
		 WHERE vr.codigo_producto=${codigo} AND estado=1 ORDER BY v.id DESC LIMIT 1`;

		const sql = {sql: consulta, tag: `array_datos`} 
		
		try {
			//*-llamar ajax al servidor mediate api fetch.
			const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
			//*-request de los datos en formato texto(viene todo el request)
			const data = await response.text();
			//*-se parsea solo la respuesta del Json enviada por el servidor.	
			let array = JSON.parse(data);

			if(array.length > 0){
				document.getElementById('fecha_ultima_venta').innerHTML=`<ul><li>Fecha ultima <strong>venta</strong> : ${array[0]['fecha']}</li></ul>`;
				document.getElementById('precio_ultima_venta').innerHTML=`<ul><li>Precio  ultima <strong>venta</strong>  : ${formatearNumeros(array[0]['precio_unitario'])}</li></ul>`;				
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
	



		let agregarProductos =  async(e,btn) => {

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
			let cantidad = document.getElementById('canBus' + idTabla).value;
			let margen = document.getElementById('mar' + idTabla).value;
			let precio_sin = document.getElementById('venSin' + idTabla).value; // ID DEL SELECT PRECIO;
			let precio_Con= document.getElementById('venCon' + idTabla).value;
			let precioConOcul=document.getElementById(`preConOcul${idTabla}`).value;
			let desOcul=document.getElementById(`desOcul${idTabla}`).innerHTML;
			let total=document.getElementById(`venCon${idTabla}`).value;
			
			let precioTotal = cantidad * precio_Con;
			// let idProd = table.rows[idTabla].cells[11].innerHTML;
			let descuento = document.getElementById(`des${idTabla}`).value;
			
				const insert = await insertarNuevoProducto(codigo_producto,total,cantidad,nombre,precioTotal,desOcul);
		
			
		
			// var estadoEntr = "";
			// estadoEntr = document.getElementById('checkEnt').checked;

			// if(estadoEntr == true){
			// 	actualizarPrecioVenta(idProd,precio_sin,descuento);
			// }
			// 	actualizaMargen(idProd,margen);
			let nfilas=$("#tablaBodyCotizacion > tr").length + parseFloat(1);
			let arrCod=[];
			$("#tablaBodyCotizacion").append('<tr id="fila' + nfilas + '">' +
			// '<td> <span  class="editar" onclick="transformarEnEditable(this,2)" style="cursor:pointer;">'+codigo_proveedor+'</span> </td>' +
			'<td>' + codigo_producto + '</td>' +
			'<td> <span class="editar" onclick="transformarEnEditable(this,1)" style="cursor:pointer;">' + nombre + '</span> </td>' +
			'<td><input style="width:45px;text-align:center;" name="can' + parseFloat(nfilas) + '" style="width:50px" id="' + 'canAdd' + parseFloat(nfilas) + '" size="2" onClick=cantidadCalculoAdd('+nfilas+')  type="number" min=1 value="'+cantidad+'"></td>' +						
			'<td><input style="width:100px;text-align:center;" name="totU' + parseFloat(nfilas) + '" id="' + 'venAdd' + parseFloat(nfilas) + '" onkeypress="calcularPrecioTablaAdd(event,this,' + parseFloat(nfilas) + ')"   type="text" min=0 value="'+formatearNumeros(total)+'"></td>' +
			'<td><input style="text-align:center;"  name="desU' + parseFloat(nfilas) + '" id="' + 'desc' + parseFloat(nfilas) + '"   type="text" min=0 value="'+formatearNumeros(desOcul)+'"></td>' +
			'<td><input style="text-align:center;" disabled name="preU' + parseFloat(nfilas) + '" id="' + 'precAdd' + parseFloat(nfilas) + '"  onkeypress="totalFcalcular(event)" type="text" min=0 value="'+formatearNumeros(precioTotal)+'"></td>' +					
			'<td><button class="btn  btn-danger" id="cols' + nfilas + '" onclick=removerItem(' + parseFloat(nfilas) + ','+IDVENTARELACIONAL+','+codigo_producto+','+cantidad+',1)><i class="fa fa-trash" aria-hidden="true"></i></button></td>' +
			'<td style="display:none;">'+IDVENTARELACIONAL+'</td>' +
			'<td style="display:none;"><input name="venDesU' + parseFloat(nfilas) + '" id="' + 'venDescu' + parseFloat(nfilas) + '" value="'+(precioConOcul)+'"></td>' +	
			'</tr>');

				$('[data-toggle="tooltip"]').tooltip();
				//`agregarNumeracionItem();
				recalcularValores();
				//document.getElementById('obsProducto').value="";
				 comprobarRepetidos(arrCod,'cols',IDVENTARELACIONAL,codigo_producto,cantidad,1);
				
		}

	let calcularPrecioTablaAdd =(e,btn,id)=>{

		if(e.keyCode==13){
			const evento = e.preventDefault();
			let idTabla=btn.id;
			let precio_unitario=convertirNumeros(document.getElementById(idTabla).value);
			let cantidad=document.getElementById('canAdd'+id).value;
			console.log('preciounitario '+ (precio_unitario));
			console.log('cantidad'  + cantidad);
			let precio_final=precio_unitario*cantidad;
			document.getElementById('precAdd'+id).value=formatearNumeros(precio_final);

			recalcularValores();
		}

	}	

	//comprobar repetidos 
	let comprobarRepetidos = (arrCod,cols,idVR,codigo_producto,cantidad,index) => {	
			
		 			
		let tablaC = document.getElementById("tablaBodyCotizacion"),
		rIndex;
		let nFilas = $("#tablaBodyCotizacion > tr").length;		
		let codigoTemp;
		for(let i=0; i < nFilas;i++){

			codigoTemp=tablaC.rows[i].cells[0].innerHTML;
			arrCod.push(codigoTemp,cols+(i+1));
		}		
	
		borrarElement(arrCod,idVR,codigo_producto,cantidad,index);
		
	}


	let borrarElement = (arrCod,idVR,codigo_producto,cantidad,index2) => {

		var uniqs = arrCod.filter(function(item, index, array) {	

			switch(array.indexOf(item) === index){
				case  true: 
				
				break
				case false:
				
				let elimina=array.pop();		
				let idfila=elimina.slice(4); 

			
				swal('warning','ya ingreso esteproducto','info');
				removerItem(idfila,idVR,codigo_producto,cantidad,index2);
				break
			}

			return array.indexOf(item) === index;

		  })
	

	}

		let insertarNuevoProducto =async (codigo_producto,precio_costo,cantidad,nombre,precioTotal,desOcul) => {

			const baseUrl = 'php/consultaFetch.php';
	
			const consulta = `INSERT INTO ventas_relacional (codigo_producto,precio_unitario,cantidad,total_unitario,id_venta,nombre_producto,descuento_producto)
			VALUES("${codigo_producto}",${precio_costo},${cantidad},${precioTotal},${NUMEROVENTA},"${nombre.trim()}",${desOcul})`;
		
			const sql = {sql: consulta, tag: `insert_return_id`} 	
			
			console.error(consulta);

		try {
			//*-llamar ajax al servidor mediate api fetch.
			const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
			//*-request de los datos en formato texto(viene todo el request)
			const data = await response.text();
			IDVENTARELACIONAL=data;

		

			console.error('IDVENTARELACIONAL ' + IDVENTARELACIONAL);

			$.notify({
				title: "Producto: ",
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
			if(ESTADOVENTA!=4){
				const actualiSt= actualizarStockAdd(codigo_producto,cantidad);	
			}
		

		} catch (error) {  }
	
	
		}

		let actualizarStockAdd = async (idProducto,stockFinal,index) => {
			console.error('index ' + index);
			const baseUrl = 'php/consultaFetch.php';

			var consulta=``;

			if(index==1){

				consulta = `UPDATE productos set stock =stock + (${stockFinal}) WHERE codigo=${idProducto}`;

			}else if(index==undefined){

				consulta = `UPDATE productos set stock =stock - (${stockFinal}) WHERE codigo=${idProducto}`;
			}
			console.error(consulta);
			const sql = {sql: consulta, tag: `array_datos`} 
			
		try {
			//*-llamar ajax al servidor mediate api fetch.
			const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
			//*-request de los datos en formato texto(viene todo el request)
			const data = await response.text();
			//*-se parsea solo la respuesta del Json enviada por el servidor.
			
			
			
		} catch (error) {  }
	
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
				
				
			} catch (error) {  }
		
		
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
		
			let totalapagar=document.getElementById(`totalF`).value=formatearNumeros(valorTotal);
			let neto = valorTotal/1.19;
			
			document.getElementById(`Neto`).value=formatearNumeros(redondeo(neto,0));
			let iva = convertirNumeros(totalapagar)-neto;
			
			document.getElementById(`ivaTotal`).value=formatearNumeros(redondeo(iva,0)); 
			
		
		}

	function CargarProductos() {

		$("#salidaTabla").html("").fadeIn('slow');
		//$("#tablaTotalAgregado").html("");
		$("#salidaTablaTotal").html("");

		var sql = `SELECT vr.id,vr.codigo_producto,p.codigo_proveedor,id_cliente,p.precio_venta,id_proveedor,p.id AS idproducto,
		vr.nombre_producto AS nombre,DATE(v.fecha_venta) AS fecha_venta, vr.cantidad,vr.precio_unitario,vr.total_unitario,vr.id_venta,vr.descuento_producto
		FROM ventas_relacional vr INNER JOIN ventas v ON v.id=vr.id_venta JOIN productos p ON p.codigo=vr.codigo_producto WHERE vr.id_venta=${NUMEROVENTA} AND v.estado_venta=${ESTADOVENTA}`;
		console.error(sql);
		
		$.ajax({
			type: 'POST',
			url: 'php/consulta.php',
			data: {
				sql: sql,
				tag: 'array_de_datos'
			},
			success: function (data) {

				var arreglo = JSON.parse(data);	
				let id_cliente=arreglo[0]['id_cliente'];	
				cargarCliente(id_cliente);
				tablaProductos(arreglo);
				var nFilas = $("#tablaBodyCotizacion > tr").length;
				if (nFilas <= 0) {
					swal("Datos incompletos", "Sin productos", "info");
					return;
				} else {
			
					recalcularValores();
					document.getElementById('datosProductos').value = data;
				}


			},
			error: function (request, status, error) {
				alert("Error: Could not cargarProductos");
			}
		});

	}




	//*-cargar los productos al inicio id=tabla cotizada;
	function tablaProductos(arreglo) {

		
		for (var i = 0; i < arreglo.length; i++) {
			let nfilas=$("#tablaBodyCotizacion > tr").length + parseFloat(1);
		
			var IDVENTARELACIONAL = arreglo[i][0];
			var codigo_producto = arreglo[i][1];
			console.error('codigo_producto ' + codigo_producto);	
			var nombre = arreglo[i]["nombre"];
			//var nombreInput = '<input type="text" class="form-control" rows="5" value="' + nombre + '" "">';
			var nombreInput = '<div class="form-group"> <textarea class="form-control" rows="3" > ' + nombre + '</textarea> </div>';
			var cantidad = arreglo[i]["cantidad"];
			var precio = arreglo[i]["precio_unitario"];
			
			var total = arreglo[i]["total_unitario"];		
			var fechaVenta = arreglo[i]["fecha_venta"];
			let descuento_producto=arreglo[i]['descuento_producto'];

			columnaEditable = '<span>' + nombre + '</span>';
			$("#fechaVenta").html("Fecha venta : " + formatear_fecha(fechaVenta));

			$("#tablaBodyCotizacion").append(
				'<tr id="fila' + (i + 1) + '">' +				
				'<td>' + codigo_producto + '</td>' +
				'<td>' + columnaEditable + '</td>' +
				'<td><input style="width:45px;text-align:center;" name="can' + parseFloat(nfilas) + '"  id="' + 'cant' + parseFloat(nfilas) + '" size="2" onChange=cantidadCalculo(this,' + parseFloat(nfilas) + ')  type="number" min=1 value="'+cantidad+'"></td>' +
				'<td><input style="width:100px;text-align:center;" name="totU' + parseFloat(nfilas) + '" id="' + 'vent' + parseFloat(nfilas) + '" onkeypress="calcularPrecioTabla(event,this,' + parseFloat(nfilas) + ')"  type="text" min=0 value="'+formatearNumeros(precio)+'"></td>' +
				'<td><input style="text-align:center;" name="desU' + parseFloat(nfilas) + '" id="' + 'desc' + parseFloat(nfilas) + '"   type="text" min=0 value="'+formatearNumeros(descuento_producto)+'"></td>' +
				'<td><input style="text-align:center;" disabled name="preU' + parseFloat(nfilas) + '" id="' + 'prect' + parseFloat(nfilas) + '"   type="text" min=0 value="'+formatearNumeros(total)+'"></td>' +
				'<td><button class="btn  btn-danger" id="cols' + nfilas + '" onclick=removerItem(' + parseFloat(nfilas) + ','+IDVENTARELACIONAL+','+codigo_producto+','+cantidad+',1)><i class="fa fa-trash" aria-hidden="true"></i></button></td>' +		
				'<td style="display:none;">'+IDVENTARELACIONAL+'</td>'+
				'</tr>');
		}
	//	convertirPaginaDeEstados();
	$('[data-toggle="tooltip"]').tooltip();

	recalcularValores();
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
			document.getElementById('prect'+id).value=formatearNumeros(precio_final);

			recalcularValores();
		}
	}
	
	let calculoTablaUp = (id)=>{
		


		var stock=0;
		stock=document.getElementById(`stk${id}`).innerHTML;

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
		let cantidad=document.getElementById('canBus'+id).value;
		let precioVenta=convertirNumeros(document.getElementById('venCon'+id).value);
		let precioTotal=cantidad*precioVenta;
		console.log('precioTotal ' + precioTotal);
		document.getElementById('total'+id).value=(precioTotal);

		
	}
	let cantidadCalculo = (btn,id) =>{
		
		let idcan=btn.id;
		let cantidad=document.getElementById(idcan).value;
		console.log('cantidad' + cantidad);		
		let precioVen=convertirNumeros(document.getElementById('vent'+id).value);		
		console.log('precioVenta ' + precioVen);
		let precioT=cantidad*precioVen;
		document.getElementById('prect'+id).value=formatearNumeros(precioT);		
		recalcularValores();
	} 

	let cantidadCalculoAdd = (id)=>{

		let cantidad=document.getElementById('canAdd'+id).value;
		console.log('cantidad' + cantidad);		
		let precioVen=convertirNumeros(document.getElementById('venAdd'+id).value);		
		console.log('precioVenta ' + precioVen);
		let precioT=cantidad*precioVen;
		document.getElementById('precAdd'+id).value=formatearNumeros(precioT);		
	}

		//*-boton volver en la tabla busqueda-*//
	let regresar = (e)=> {
		const evento = e.preventDefault();
		$("#volverBtn").show(); // mostramos nuevamente  los botones
		$("#salidaTabla").hide(); //tabla donde se buscan los productos
		document.getElementById('buscar').value='';
		document.getElementById('buscar').focus();
	}


	let removerItem = async(id,idFr,codigo_producto,cantidad,index) => {						
				
		$("#fila" + id).remove();
		borrarItemBd(idFr);
		const recal = await recalcularValores();
		if(ESTADOVENTA!=4){			
			const actuStock = actualizarStockAdd(codigo_producto,cantidad,index);
		}
	

	}

	let borrarItemBd = async(idFr) =>{

		const baseUrl = 'php/consultaFetch.php';

		const consulta=`DELETE FROM VENTAS_RELACIONAL WHERE id=${idFr}`;
		const sql   = {sql: consulta, tag: `crud`}	
		
		
		try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		//*-se parsea solo la respuesta del Json enviada por el servidor.
		
		//const upFacturaa = await editar(1);	
		
	
		
		} catch (error) {  }
	}

	let editar = async(e) => {

		const evento = e.preventDefault();
		document.getElementById('loading').innerHTML=`<p>Actualizando....... <img width='80px' src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'></p>`;
		document.getElementById('contenido').className=`fade`;
		let neto = $("#Neto").val();
		let netoConvertido = convertirNumeros(neto);	
		let iva = $("#ivaTotal").val();
		let ivaConvertido = convertirNumeros(iva);
		let totalFinal = $("#totalF").val();
		let totalFinalConvertido = convertirNumeros(totalFinal);
		

		const baseUrl = 'php/consultaFetch.php';

		let consulta=`UPDATE ventas set neto=${netoConvertido},iva=${ivaConvertido}	,total=${totalFinalConvertido} WHERE id=${NUMEROVENTA}`;
					

		const sql   = {sql: consulta, tag: `crud`}		
		console.error(consulta);
		try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		console.error(data);
		if(data==1){

			const upVentas = await updateVentaRelacional();	
		}
		//*-se parsea solo la respuesta del Json enviada por el servidor.
		
				
		
		} catch (error) {  }
		
	} 

	let updateVentaRelacional = async () =>{

		let tablaC = document.getElementById("tablaBodyCotizacion"),
		rIndex;
		let nFilas = $("#tablaBodyCotizacion > tr").length;
		let contador=0;
		let porcentaje=0, exito=0;

		console.error('NUMEROVENTA ' + NUMEROVENTA);
	
		for (var i = 0; i < nFilas; i++) {

			let input;
			let inputPreU;
			let inputTotU;
			let desU;

			let codigoInterno = tablaC.rows[i].cells[0].innerHTML;
			let nombre = tablaC.rows[i].cells[1].innerText;		
			input=`input[name=can${(i+1)}]`;
			inputPreU=`input[name=preU${(i+1)}]`;
			inputTotU=`input[name=totU${(i+1)}]`;
			desU=`input[name=desU${(i+1)}]`;
			var cantidad = `${document.querySelector(input).value}` //usamos innerText para obtener solo el valor			
			let idfr = tablaC.rows[i].cells[7].innerHTML;
			var precioUnitario = `${document.querySelector(inputPreU).value}`;
			var precioUnitarioConvertido = convertirNumeros(precioUnitario);		
			var totalUnitario = `${document.querySelector(inputTotU).value}`;			
			let descuento_producto=`${document.querySelector(desU).value}`;
			var totalUnitarioConvertido = convertirNumeros(totalUnitario);

			

			const baseUrl = 'php/consultaFetch.php';
			
		
			//totalUnitarioConvertido y precioUnitario al reves para evitar problemas
			let consulta=`UPDATE ventas_relacional , productos p INNER JOIN ventas_relacional vr ON vr.codigo_producto=p.codigo 
						 set vr.codigo_producto="${codigoInterno}",vr.precio_unitario=${totalUnitarioConvertido},vr.cantidad=${cantidad}
						,vr.total_unitario=${precioUnitarioConvertido},vr.nombre_producto="${nombre}",vr.descuento_producto=${descuento_producto} WHERE vr.id=${idfr}`;		
				

			const sql   = {sql: consulta, tag: `crud`}		

			console.error(consulta);
			
			try {
				//*-llamar ajax al servidor mediate api fetch.
				const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
				//*-request de los datos en formato texto(viene todo el request)
				const data = await response.text();
				//*-se parsea solo la respuesta del Json enviada por el servidor.
				contador++; exito++;
				if (data == 1 && contador==nFilas) {
					porcentaje = (exito / nFilas) * 100;
					document.getElementById('contenido').className=`fade-in`;
					document.getElementById('loading').innerHTML=``;				
					swal('Venta Actualizada', 'todos los datos actualizados', 'info');	
						
						}	
				
				} catch (error) {console.log(error);}
		
		}
	}



