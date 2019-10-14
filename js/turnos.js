var TOTALVENTATARDE;
var TOTALMAÑANA;
function consultarVendor(index) {
	console.error('ID_VENDEDOR' + ID_VENDEDOR);

	var sql = 'SELECT nombreVendedor FROM vendedores where id_vendedor =' + ID_VENDEDOR;
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
			document.getElementById('vendedor').value = arreglo[0]['nombreVendedor'];
			cargarDinero(index);
		},
		error: function (request, status, error) {
			console.error("Error: Could not buscarProductos");
		}
	});
}
//*-primera funcion de iniciar turno
function cargarDinero(index) {
	console.log(index);
	console.log(ID_TURNO);
	//*-verifico que turno es;
	if (index == 'cambio turno') {
		console.error('entro a cambio turno');
		//*-el cero es por que la variable ventas anterior
		//*-va hacer null
		consultarTotalVenta(index,0);
		return;
	} else if (index == 'turno final') {
		console.log('entro a la primera funcion');
		//consultarVentasTurnoAnterior(index);
		consultarTipoTurnoAnterior(index);
		return;
	}

	//*-selecciono trigo los valores de la ultima fila con limit 1 para iniciar el primer turno
	//*-esos valores fueron ingresados en fin de turno.
	var sql = 'SELECT caja_chica from turnos  order by id desc limit 1';

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
			console.log(arreglo);
			if (arreglo.length < 1) {
				document.getElementById('cajaAnteriorPrimerT').value = 0;
			} else {
				document.getElementById('cajaAnteriorPrimerT').value = formatearNumeros(arreglo[0]['caja_chica']);
			}
		},
		error: function (request, status, error) {
			console.error("Error: Could not buscarProductos");
		}
	});
}

//*-boton para iniciar el primer turno/***** /
function inicioTurno(e) {
	e.preventDefault();
	if ($('#cajaInicial').val() == '') {

		swal('Precaución', 'Debe ingresar un monton en la caja inicial', 'info');

	} else {
		var cajaAnterior = document.getElementById('cajaAnteriorPrimerT').value;
		var cajaInicial = document.getElementById('cajaInicial').value;

		//*-creo el primer turno con la fecha de inicio de turno y fecha de fin de turno vacia.
		var sql = 'INSERT INTO turnos (tipo_turno,id_vendedor,fecha_inicio_turno,fecha_termino_turno,caja_chica,caja_inicial,caja_final,transbank)' +
			' VALUES (1,' + ID_VENDEDOR + ',NOW(),NULL,' + convertirNumeros(cajaAnterior) + ',' + convertirNumeros(cajaInicial) + ',0,0)';		

		$.ajax({
			type: 'POST',
			url: 'php/consulta.php',
			data: {
				tag: 'crud_productos',
				sql: sql
			},
			success: function (data) {
				if (data == 1) {
					swal("Turno iniciado", "Se ha iniciado el primer turno", "success");
					console.log('se ha creado el primer turno');
					window.location = 'ingresar_ventas.php';
				}

			},
			error: function (request, status, error) {
				console.error("Error: Could not finalizarCotizacion");
			}
		});
	}

}
/******* VENTAS **********/
function consultarTipoTurnoAnterior(index) {

	var sql = 'SELECT tipo_turno from turnos where id=' + (ID_TURNO) + ' ';
	console.log(sql);
	$.ajax({
		type: 'POST',
		url: 'php/consulta.php',
		data: {
			tag: 'array_de_datos',
			sql: sql
		},
		success: function (data) {
			var tipoTurno = 0;
			var arreglo = JSON.parse(data);
			console.log(arreglo.length);
			if (arreglo.length == 0) {
				tipoTurno = 1;
			} else { 
				tipoTurno = arreglo[0]['tipo_turno'];
			}	
			consultarVentasTurnoAnterior(index,tipoTurno);	
		},
		error: function (request, status, error) {
			console.error("Error: Could not consultar tipo turno anterior");
		}
	});
}


function consultarVentasTurnoAnterior(index,tipoTurno) {
	var totalVentasAnterior = 0;

	console.log("tipo turno actual: " + tipoTurno);
	 if (index == 'turno final') {
	//	var sql = 'SELECT  sum(total) as totalVenta  from ventas  where id_turno=' + (ID_TURNO-1) + ' and medio_pago = 1';
		 //haremos 2 turnos
		 if (tipoTurno == 1) {
			 var sql = 'SELECT  sum(totalVenta) as totalVenta  from ventas v inner join turnos t on t.id=v.id_turno  where v.id_turno=' + (ID_TURNO - 1) + ' and v.medio_pago = 1 and t.tipo_turno=1';
		 }
		 //haremos solo un turno
		 if (tipoTurno == 2) {
			var sql = 'SELECT  sum(totalVenta) as totalVenta  from ventas v inner join turnos t on t.id=v.id_turno  where v.id_turno=' + (ID_TURNO-1) + ' and v.medio_pago = 1 and t.tipo_turno=1';
		 }
		
	}
	console.log(sql);
	
	$.ajax({
		type: 'POST',
		url: 'php/consulta.php',
		data: {
			tag: 'array_de_datos',
			sql: sql
		},
		success: function (data) {
			var arrTotalVenta = JSON.parse(data);
			var arrVenAnterior = arrTotalVenta[0]['totalVenta'];				
			//*-si en tramos a turno final hacemos lo mismo que el cambio de turno	
			  if (index == 'turno final') {
					totalVentasAnterior = arrVenAnterior;

				if (arrVenAnterior == null) {

					totalVentasAnterior = 0;

				} else {

					totalVentasAnterior = arrVenAnterior;
				}

			}

		
			//*-llamo a esta funcion solo en le cambio de turno		
			//*-consulto el valor del trasnbak anterio
			//*-solo en turno final.
		
		if (index == 'turno final') {
			consultarTotalVenta(index,totalVentasAnterior,tipoTurno);
			} 			
		
		},
		error: function (request, status, error) {
			console.error("Error: Could not finalizarCotizacion");
		}
	});

}




/******** FIN VENTAS ****/
///*entro al cambio de turno puede ser fin de turno igual
/*consultar total de ventas turno 1 efectivo*/
function consultarTotalVenta(index,totalVentasAnterior,tipoTurno) {
	
	//*-SUMA DE LAS VENTAS DEL PRIMER TURNO O CAMBIO DE TURNO
	//*SI CONSULTAMOS POR LOS VALORES DE ANTES DEL FIN DE TURNO....
	if (index == 'cambio turno') {
	
		var sql = 'SELECT  sum(total) as totalVenta  from ventas  where id_turno=' + ID_TURNO + ' and medio_pago = 1';

	} else if (index == 'turno final') {
		var sql = 'SELECT  sum(total) as totalVenta  from ventas  where id_turno=' + ID_TURNO + ' and medio_pago = 1';
	}
	
	console.log(sql);
	
	$.ajax({
		type: 'POST',
		url: 'php/consulta.php',
		data: {
			tag: 'array_de_datos',
			sql: sql
		},
		success: function (data) {
			var arrTotalVenta = JSON.parse(data);
			var totalVen = arrTotalVenta[0]['totalVenta'];
			
			//*si estamos en cambio de turno le pasamos la suma de venta 
			//*-a total venta en efectivo.
			if (index == 'cambio turno') {
				//document.getElementById('cajaAnteriorCambioTurno').value = totalVen;
				if (totalVen == null) {

					document.getElementById('totalVentaCambio').value = 0;

				} else {

					document.getElementById('totalVentaCambio').value = totalVen;
				}
				
			//*-si en tramos a turno final hacemos lo mismo que el cambio de turno	
			} else if (index == 'turno final') {
				
				document.getElementById('totalVentaFinal').value = totalVen;

				if (totalVen == null) {
			
					document.getElementById('totalVentaFinal').value = 0;					
					TOTALVENTATARDE = 0;
				} else {
					
					var total = parseInt(totalVentasAnterior) + parseInt(totalVen);
					console.log('total ' + total);
					TOTALVENTATARDE = totalVen;
					document.getElementById('totalVentaFinal').value = formatearNumeros(total);
				}

			}
		
			//*-llamo a esta funcion solo en le cambio de turno
			if (index == 'cambio turno') { 
				consultarTransbank(index,0);
			}
			//*-consulto el valor del trasnbak anterio
			//*-solo en turno final.
		 else if (index == 'turno final') {
				traansbankAnterior(index,tipoTurno);
			} 			
		
		},
		error: function (request, status, error) {
			console.error("Error: Could not finalizarCotizacion");
		}
	});

}


//*-consultar el valor del transbank anterior
//*-solo se hace en final de turno.
function traansbankAnterior(index,tipoTurno) {
	var id_turno = ID_TURNO - 1;
	var transVal = 0;

console.error('tipo turno en transbank es: ' + tipoTurno);
	if (index == 'turno final') {
		if (tipoTurno == 1) {
			var sql = 'SELECT  sum(total) as transbank from ventas  where id_turno=' + id_turno + ' and (medio_pago = 5)';
		 }
		if (tipoTurno == 2) {
			var sql = 'SELECT  sum(total) as transbank from ventas  where id_turno=' + id_turno + ' and (medio_pago = 2 or medio_pago = 3)';	
		 }	
	
	}
	console.log(sql);
	
	$.ajax({
		type: 'POST',
		url: 'php/consulta.php',
		data: {
			tag: 'array_de_datos',
			sql: sql
		},
		success: function (data) {
			var arrTransbank = JSON.parse(data);
			console.log(arrTransbank);
			if (arrTransbank[0]['transbank'] == null) {			 
				transVal = 0;	
				console.log(transVal);
			} else {			
					transVal=arrTransbank[0]['transbank'];				
			}	
		
			 if (index == 'turno final') {
				consultarTransbank(index,transVal);
			}
			
			
		},
		error: function (request, status, error) {
			console.error("Error: Could not finalizarCotizacion");
		}
	});
}

//*-consultar  el transbank actual.
function consultarTransbank(index, transVal) {
	
	
	var trasnsActual = 0;
	if (index == 'cambio turno') {
		var sql = 'SELECT  sum(total) as transbank from ventas  where id_turno=' + ID_TURNO + ' and (medio_pago = 2 or medio_pago = 3)';
	} else if (index == 'turno final') {
		var sql = 'SELECT  sum(total) as transbank from ventas  where id_turno=' + ID_TURNO + ' and (medio_pago = 2 or medio_pago = 3)';
	}
	console.log(sql);
	
	$.ajax({
		type: 'POST',
		url: 'php/consulta.php',
		data: {
			tag: 'array_de_datos',
			sql: sql
		},
		success: function (data) {
			var arrTransbank = JSON.parse(data);

			if (arrTransbank[0]['transbank'] == null) {
				if (index == 'cambio turno') {
					trasnsActual = 0;
				} else if (index == 'turno final') {
					trasnsActual= 0;
				}
			} else {
				if (index == 'cambio turno') {
					trasnsActual= arrTransbank[0]['transbank'];
				} else if (index == 'turno final') {
					trasnsActual = arrTransbank[0]['transbank'];
				}

			}
			console.log('trasnsActual ' + trasnsActual);
			conCajaInicio1(index, transVal,trasnsActual);
		},
		error: function (request, status, error) {
			console.error("Error: Could not finalizarCotizacion");
		}
	});

}

//*-datos caja inicial turno 1 para empezar el turno 2;
function conCajaInicio1(index, transVal,trasnsActual) {
console.log('transVal ' + transVal);
	//*--monto transbank del turno anterior y final
	//--mientras el valor del tranbank sea mayor a 0
	
	if (trasnsActual > 0) {
		var transTrasnformado = convertirNumeros(trasnsActual);
	} else { 
		transTrasnformado = 0;
	}
	//solo transformo el trasnbank si es final de turno
	//*-
	if (index == 'turno final') {
		if (transVal > 0) {
			var trasAnterior = convertirNumeros(transVal);
		} else { 
			trasAnterior = 0;
		}
		
	} 

	var sql = 'SELECT caja_inicial,transbank  from turnos t inner join vendedores v on v.id_vendedor=t.id_vendedor order by t.id desc limit 1';
	
	if (index == 'cambio turno') {
		//*-total del las ventas en efectivo turno actual
		var totalVentas = document.getElementById('totalVentaCambio').value;
	
	} else if (index == 'turno final') {
		var totalVentas = document.getElementById('totalVentaFinal').value;	
		console.log('total ventas ' + totalVentas);
	}

	console.error(sql);
	
	$.ajax({
		type: 'POST',
		url: 'php/consulta.php',
		data: {
			tag: 'array_de_datos',
			sql: sql
		},
		success: function (data) {
			var arrCajaInicio = JSON.parse(data);
			var cajaInicial =arrCajaInicio[0]['caja_inicial']; 
			let totalVentaMañana = 0;
			//*-caja inicial turno 2 es la caja del turno anterio mas las ventas del turno 1;		

			if (index == 'cambio turno') {
				document.getElementById('cajaAnteriorCambioTurno').value = formatearNumeros(cajaInicial);
				var totalTransbak = parseInt(transVal) + parseInt(transTrasnformado);
				document.getElementById('transbankCambioTurno').value = formatearNumeros(totalTransbak);
				//*-total ventas ;						
				document.getElementById('totalVentaCambio').value = formatearNumeros(totalVentas);
				totalVentaMañana = parseInt(totalTransbak) + parseInt(totalVentas);
				console.log('totalVentasMañana ' + totalVentaMañana);
				document.getElementById('totalMañana').value = formatearNumeros(totalVentaMañana);
				

			} else if (index == 'turno final') {
			
				document.getElementById('cajaAnteriorFinal').value = formatearNumeros(cajaInicial);
				var totalTransbakFinal = parseInt(trasAnterior) + parseInt(transTrasnformado);
				//*-valor trasnbank tarde.
				document.getElementById('totalTrasnTarde').value = formatearNumeros(transTrasnformado);
				//*-valor venta solo turno tarde
				document.getElementById('totalTarde').value = formatearNumeros(TOTALVENTATARDE);
				//*-valor total turno tarde suma de ventas efectivo y transbank
				document.getElementById('totalTurnoTarde').value = formatearNumeros(parseInt(transTrasnformado) + parseInt(TOTALVENTATARDE));
				
				//*-total del dia 
				
				//*-diferencia total mañama
				let tMañanaEfec = document.getElementById('totalTurnoTarde').value;
				let tMañanaTrasn = convertirNumeros(tMañanaEfec);
				let totalMañana = parseInt(tMañanaTrasn) - parseInt(TOTALVENTATARDE);				
				let totalVentafinal = document.getElementById('totalVentaFinal').value;
				let totalVentafinalC = convertirNumeros(totalVentafinal);


				document.getElementById('transbankFinal').value = formatearNumeros(totalTransbakFinal);
				//diferencia total mañana trasbank
				let totaTrasMañana = document.getElementById('transbankFinal').value;
				let totaTrasMañanaTras = convertirNumeros(totaTrasMañana);
			
				let totalTrasnMañ = parseInt(totaTrasMañanaTras) - parseInt(transTrasnformado);
				console.log('total tramsban de la mañana ' + totalTrasnMañ);
				let totTurnoTarde = document.getElementById('totalTurnoTarde').value;
				let totTurnoTardeTras = convertirNumeros(totTurnoTarde);
				let totalMañanaEfec = document.getElementById('totalTarde').value;
				let totalTurnoTardeEfecC = convertirNumeros(totalMañanaEfec);

				console.log('total turno de la tarde ' + totTurnoTardeTras);
				console.log('total tarde efectivo ' + totalTurnoTardeEfecC);
				let totalEfectivoMañana = parseInt(totalVentafinalC) - parseInt(totalTurnoTardeEfecC);
				console.log('total efectivo mañana ' + totalEfectivoMañana);
				console.log(document.getElementById('totalDia').value = formatearNumeros(parseInt(totalTrasnMañ) + (parseInt(totalEfectivoMañana) + parseInt(totTurnoTardeTras))));
				
				document.getElementById('totalVentaFinal').value = totalVentas;

				//total efectivo en caja
				let cajaFinal = document.getElementById('cajaAnteriorFinal').value;
				let cajaTransformada = convertirNumeros(cajaFinal);
				document.getElementById('totalEfectivoCaja').value = formatearNumeros(parseInt(totalEfectivoMañana) + parseInt(totalTurnoTardeEfecC) + parseInt(cajaTransformada));
			}
			
		},
		error: function (request, status, error) {
			console.error("Error: Could not finalizarCotizacion");
		}
	});
}


//*-terminar turno 1 y empezar el cambio de turno;
function cambioTurno(e) {
	e.preventDefault();

	var cajaFinal = document.getElementById('totalVentaCambio').value;
	var transbank = document.getElementById('transbankCambioTurno').value;

	var sql = 'UPDATE turnos set caja_final=' + convertirNumeros(cajaFinal) + ' , transbank=' + convertirNumeros(transbank) + ' , fecha_termino_turno=NOW()  order by id desc limit 1 ';

	console.log(sql);

	$.ajax({
		type: 'POST',
		url: 'php/consulta.php',
		data: {
			tag: 'crud_productos',
			sql: sql
		},
		success: function (data) {
			console.error('update para el cambio de turno se cierra el turno 1 y empieza el dos');
			if (data == 1) {
				$.notify({
					title: "Cierre primer turno : ",
					message: "Se carrado el primer turno",
					icon: 'fas fa-check'
				}, {
					type: "info",
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
				inicialTurno2();
			}

		},
		error: function (request, status, error) {
			console.error("Error: Could not finalizarCotizacion");
		}
	});
}
//*-inicio el cambio de turno
function inicialTurno2() {

	var cajaAnterior = document.getElementById('cajaAnteriorCambioTurno').value;

	var sql = 'INSERT INTO turnos (tipo_turno,id_vendedor,fecha_inicio_turno,fecha_termino_turno,caja_chica,caja_inicial,caja_final,transbank)' +
		' VALUES (2,' + ID_VENDEDOR + ',NOW(),NULL,0,' + convertirNumeros(cajaAnterior) + ',0,0)';

	console.log(sql);

	$.ajax({
		type: 'POST',
		url: 'php/consulta.php',
		data: {
			tag: 'crud_productos',
			sql: sql
		},
		success: function (data) {
			if (data == 1) {
				$.notify({
					title: "Cambio de turno : ",
					message: "Se iniciado el cambio de turno",
					icon: 'fas fa-check'
				}, {
					type: "info",
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
			window.location = 'ingresar_ventas.php';
		},
		error: function (request, status, error) {
			console.error("Error: Could not finalizarCotizacion");
		}
	});
}

function finDeturno(e) {

	e.preventDefault();
	if ($("#cajaChica").val() == '') {

		swal('Precaución', 'Debe ingresar un monton en la caja chica', 'info');

	} else {
		var cajaFinal = document.getElementById('totalVentaFinal').value;
		var transbank = document.getElementById('transbankFinal').value;
		var cajaChica = document.getElementById('cajaChica').value;

		var sql = 'UPDATE turnos set caja_final=' + convertirNumeros(cajaFinal) + ' , transbank=' + convertirNumeros(transbank) + ' , fecha_termino_turno=NOW() , caja_chica= ' + convertirNumeros(cajaChica) + ' order by id desc limit 1 ';

		console.log(sql);

		$.ajax({
			type: 'POST',
			url: 'php/consulta.php',
			data: {
				tag: 'crud_productos',
				sql: sql
			},
			success: function (data) {
				if (data == 1) {
					$.notify({
						title: "Cierre turno final : ",
						message: "Se carrado el turno final",
						icon: 'fas fa-check'
					}, {
						type: "info",
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
				window.location = 'ingresar_ventas.php';
			},

			error: function (request, status, error) {
				console.error("Error: Could not finalizarCotizacion");
			}
		});
	}
}