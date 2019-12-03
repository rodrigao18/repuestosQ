var PORCENTAJE = 0;
var PORCENTAJE_FACTURADO = 0;
var IDCLIENTE = 0; // AGRGADA 06/06/2018 PM 14:47;
var SQLDESCARTAR = "";
var DESCUENTO;
var IDCONTACTO;
var sql = 0;
var ESTADOVENTA = 0;
//COTIZACIONNUMERO

/*------------------------ Cargar Cliente -------------------------*/
//*-datos vendedor
function consultarDatosVendedor(id,estado_venta) {
	IDCLIENTE = id;
	console.error('estado_venta ' + estado_venta);
	ESTADOVENTA=estado_venta;
	//$sql = "SELECT id_cliente, rut_cliente, nombre_cliente, direccion_cliente, telefono_cliente, giro_cliente, nombreContacto1 FROM clientes where id_cliente =" + id;
	//var sql = "SELECT c.id_cliente, c.rut_cliente, c.nombre_cliente, c.direccion_cliente, c.telefono_cliente, c.giro_cliente, cc.nombre FROM clientes c INNER JOIN contacto_cliente cc ON c.id_cliente = cc.id_cliente where c.id_cliente = " + id;
	var sql = "SELECT id_vendedor,nombreVendedor, correoVendedor FROM vendedores WHERE id_vendedor=" + IDVENDEDOR;

	//console.info("consultarDatosCliente");
	console.log(sql)
	console.log(IDVENDEDOR);
	$("#tablaProductos").hide();
	$.ajax({
		type: 'POST',
		url: 'php/consulta.php',
		data: {
			sql: sql,
			tag: 'array_de_datos'
		},
		success: function (data) {
			//console.log(data);
			//console.info("consultarDatosCliente_fin__");
			var arreglo = JSON.parse(data);	
			console.log(arreglo);	
			FormDatosVendedor(arreglo);
			convertirPaginaDeEstados();


		},
		error: function (request, status, error) {
			console.error("Error: Could not delete");
		}
	});

}

//funcion que pone los datos del cliente
function FormDatosVendedor(arreglo) {

	
	var idVendedor = arreglo[0]['idVendedor'];	
	var nombreVendedor = arreglo[0]['nombreVendedor'];
	//var direccion = arreglo[0]['direccion'];
	//var celular = arreglo[0]['celular'];
	var correo = arreglo[0]['correoVendedor'];
	//*-NAMES DE LOS INPUT-*
	$("#idVendedor").val(idVendedor);
	$("#nombreVendedor").val(nombreVendedor);	
	//$("#direccion").val(direccion);
	//$("#celular").val(celular);
	$("#correo").val(correo);	
	CargarProductos(NUMEROVENTA);
}


/*------------------------------------------------------------------*/

//-ocultar
function convertirPaginaDeEstados() {

	//cotizacion
	if (ESTADOVENTA == 1) {
		document.getElementById('titulo-detalle').innerHTML=`Boleta`;
		document.getElementById('cabezera').className=`cabezera-boleta`;

	} else if (ESTADOVENTA == 0) {
		var row = document.getElementById("borrar");
		row.deleteCell(-1);
		row.deleteCell(-1);
		$("#tablaBodyCotizacion > tr td:last-child").hide();
		$("#tablaBodyCotizacion > tr td:nth-last-child(2)").hide();

	} else if (ESTADOVENTA == 3) {
		document.getElementById('titulo-detalle').innerHTML=`Guía`;
		document.getElementById('cabezera').className=`cabezera-guia`;
	}
	else if (ESTADOVENTA == 4) {
		document.getElementById('titulo-detalle').innerHTML=`Cotización`;
		document.getElementById('cabezera').className=`cabezera-cotizacion`;
	}

}
/*------------------------------------------------------------------*/

/*------------------------ Cargar contacto -------------------------*/

//funcion que consultar el id de contacto guardado anteriormente
//Funcion que sirve para DETALLE DE VENTAS
function consultarIdContacto() {
	console.info(COTIZACIONNUMERO);
	var sql = "SELECT id_contacto FROM ventas WHERE numeroCotizacion=" + COTIZACIONNUMERO;
	//console.log(sql);

	$.ajax({
		type: 'POST',
		url: 'php/consulta.php',
		data: {
			sql: sql,
			tag: 'array_de_datos'
		},

		success: function (data) {

			var arreglo = JSON.parse(data);

			cargarDatosContacto(arreglo[0]["id_contacto"]);


		},
		error: function (request, status, error) {
			alert("Error: Could not guardarCliente");
		}
	});

}
/*-----------------------------------------------------------------------------*/

/*-Cargar productos------------------------------------------------------------*/

function CargarProductos() {

	$("#salidaTabla").html("").fadeIn('slow');
	//$("#tablaTotalAgregado").html("");
	$("#salidaTablaTotal").html("");

	var sql = `SELECT vr.id,vr.codigo_producto,vr.nombre_producto AS nombre,DATE(v.fecha_venta) AS fecha_venta, vr.cantidad,vr.precio_unitario,vr.total_unitario,vr.id_venta
	FROM ventas_relacional vr INNER JOIN ventas v ON v.id=vr.id_venta WHERE vr.id_venta=${NUMEROVENTA} AND v.estado_venta=${ESTADOVENTA}`;

	console.log(sql);
	$.ajax({
		type: 'POST',
		url: 'php/consulta.php',
		data: {
			sql: sql,
			tag: 'array_de_datos'
		},
		success: function (data) {

			var arreglo = JSON.parse(data);	
			console.clear;
			console.log(arreglo);
			tablaProductos(arreglo);
			var nFilas = $("#tablaBodyCotizacion > tr").length;
			if (nFilas <= 0) {
				swal("Datos incompletos", "Sin productos", "info");
				return;
			} else {
		
				calcularValores();
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
		var idVentaRelacional = arreglo[i][0];
		var id = arreglo[i][1];
		var nombre = arreglo[i]["nombre"];
		//var nombreInput = '<input type="text" class="form-control" rows="5" value="' + nombre + '" "">';
		var nombreInput = '<div class="form-group"> <textarea class="form-control" rows="3" > ' + nombre + '</textarea> </div>';
		var cantidad = arreglo[i]["cantidad"];
		var precio = arreglo[i]["precio_unitario"];
		var precioMostrar = new Intl.NumberFormat('es-MX').format(Math.round(precio));
		var total = arreglo[i]["total_unitario"];
		var totalMostrar = new Intl.NumberFormat('es-MX').format(Math.round(total));
		var fechaVenta = arreglo[i]["fecha_venta"];
	

		columnaEditable = '<span>' + nombre + '</span>';
		$("#fechaVenta").html("Fecha venta : " + formatear_fecha(fechaVenta));

		$("#tablaBodyCotizacion").append(
			'	<tr id="fila' + (i + 1) + '">' +
			
			'	<th  scope="row">' + id + '</th>' +
			'	<td>' + columnaEditable + '</td>' +
			'	<td>' + cantidad + '</td>' +
			'	<td>' + precioMostrar + '</td>' +
			'	<td>' + totalMostrar + '</td>' +			
			'	</tr>');
	}
//	convertirPaginaDeEstados();
$('[data-toggle="tooltip"]').tooltip();
}
/*-----------------------------------------------------------------------------*/





//*-funcion que entrega el checkbox entregado o  no, dependiendo del estado 
function accionBotonEntregado(idVentaRelacional, id1, cantidad) {
	var accion = "";
	if (ESTADOVENTA == 1) {
		accion = '';
	} else {
		accion = '<td width="10%" id ="estado"> <center> <div class="form-check">' +
			'<input  class="form-check-input" type="checkbox" onchange="cambiarEstadoenlaBD(' + idVentaRelacional + ',' + id1 + ',1,' + cantidad + ')"  id="sw' + (idVentaRelacional) + '"</div></center> </td>' +
			'<td width="10%" > <center> <div class="form-check">' +
			'<input  class="form-check-input" type="checkbox" onchange="cambiarEstadoenlaBD(' + idVentaRelacional + ',' + id1 + ',2)"  id="sf' + (idVentaRelacional) + '"</div></center></td>';
	}

	return accion;
}










//FUNCION PARA BORRAR UN ITEM  LO HACE DE FORMA INMEDIATA AL A BASE
function borrarItemBD(sql) {
	
	conssole.log(sql);
	$.ajax({
		type: 'POST',
		url: 'php/consulta.php',
		data: {	tag: 'crud_datos',	sql: sql	},
		success: function (data) {
			if (data == 1) {
				//alert("I-tem Borrado,Se Actualizo la informcion de Venta");
				actualizarMontos(false);
				$.notify({
					title: "Item borrado : ",
					message: "Se actualizo la información de venta.",
					icon: 'fas fa-check'
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
					timer: 2000
				});



			}
		},
		error: function (request, status, error) {
			alert("Error: Could not finalizarCotizacionE");
		}
	});

}



//VENTANA DE CONFIRMACION PARA BORRAR UN ITEM DE LA TABLA EN LA INTERFAZ GRÁFICA Y LLAMA A LA FUNCION CALCULAR VALORES IVA , NETO ETC;
function removerItem(id, idtabla, e, mostrar) {
	var sql = "DELETE from ventas_relacional where id =" + idtabla;
	var idRe = id.id;
	if (mostrar) { //mostramos mensaje de confirmacion
		e.preventDefault();
		swal({
				title: "Borrar producto",
				text: "¿ Esta seguro de eliminar este producto ?",
				icon: "warning",
				buttons: true,
				dangerMode: true,
			})
			.then((willDelete) => {
				if (willDelete) {
					$("#fila" + idRe).remove();
					borrarItemBD(sql);
				} else {
					return;
				}
			});
	} else { //No mostramos mensaje de confirmacion
		$("#fila" + idRe).remove();
		borrarItemBD(sql);
	}

}







/*------------------------------------------------------------------*/

//*-calcular valores-------------------------------------------------
//*-neto iva total
function calcularValores() {
	var columnaValorTotal = 4; //definimos la variable de la columna con el valor total
	var tablaC = document.getElementById("tablaBodyCotizacion"),
		rIndex;
	var nFilas = $("#tablaBodyCotizacion > tr").length;
	var montos;
	var sumaTotal = 0;
	var montoTrasnformado;
	for (var i = 0; i < nFilas; i++) {
		montos = tablaC.rows[i].cells[columnaValorTotal].innerHTML;
		montoTrasnformado = convertirNumeros(montos)
		sumaTotal += parseInt(montoTrasnformado);
	}
	//console.log(sumaTotal);
	var netoSacado = sumaTotal;
	var netoSacadoMostrar = Intl.NumberFormat('es-MX').format(Math.round(netoSacado));
	var ivaSacado = netoSacado * (0.19);
	var ivaSacadoMostrar = Intl.NumberFormat('es-MX').format(Math.round(ivaSacado));
	var totalSacado = (netoSacado) + (ivaSacado);
	var totalSacadoMostrar = Intl.NumberFormat('es-MX').format(redondeo(totalSacado, 0));

	$("#totalNeto").val(netoSacadoMostrar);
	//$("#iva").val(ivaSacadoMostrar);
	//$("#totalF").val(totalSacadoMostrar);

	var datos = {
		netoSacado: netoSacado,
		ivaSacado: ivaSacado,
		totalSacado: totalSacado
	}
	return datos;
}



//*-recalcular el neto y el iva
function actualizarMontos(mostrar) {
	var nFilas = $("#tablaBodyCotizacion > tr").length;
	var datos = calcularValores();

	var sql = 'UPDATE ventas set neto = "' + Math.round(datos.netoSacado) + '" , iva = "' + Math.round(datos.ivaSacado) + '", total = "' + Math.round(datos.totalSacado) + '"' +
		'where numeroVenta = ' + NUMEROVENTA + ';'

	$.ajax({
		type: 'POST',
		url: 'php/consulta.php',
		data: {
			tag: 'crud_productos',
			sql: sql
		},
		success: function (data) {
			//countFacturadoTrue(1, mostrar);
			//countEntregadoTrue(1, mostrar);
			if (data == 1) {

			}
		},
		error: function (request, status, error) {
			console.error("Error: Could not a-ctualizarMontos");

		}
	});

}
