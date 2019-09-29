var ARRAYMESES = [];
var ARRAY_COTIZACIONES = [];
var ARRAY_NOTA_PEDIDO = [];
//*-cargar estadisticas
function cargar_estadisticas(fecha_1, fecha_2, nivel, idVendedorLogueado) {
	//*-obtener mes a partir de la fecha del calendario
	
	var fecha = new Date(fecha_2);
	var dia = 1;
	fecha.setDate(fecha.getDate() + dia);
	var numeroMes = fecha.getMonth()//*-obtener el mes
	var numeroYears = fecha.getFullYear();//*-obtener el año
	MES = numeroMes;
	YEARS = numeroYears;

	//*-limpiar array----------------
	ARRAY_COTIZACIONES = [];
	ARRAY_NOTA_PEDIDO = [];
	ARRAYMESES = [];

	
	//obtener_fecha(fecha_1);
	cargarVendedor(fecha_1, fecha_2, numeroCotizacionVendedores, nivel, idVendedorLogueado);
	//cargo las fechas para las ventas del archivo verventas_por_fechas
	cargarFechas();

}
function cargar_estadistica_onchange(fecha_1, fecha_2, nivel, idVendedorLogueado){
	ARRAYMESES = [];
	var fecha_inicio = $("#fecha_inicio").val();
	var fecha_termino = $("#fecha_termino").val();

	cargar_estadisticas(fecha_inicio, fecha_termino, nivel, idVendedorLogueado);



}
//*-llamar a vendedor-----------------------------------------------------------------------
function cargarVendedor(fecha_1, fecha_2, numeroCotizacionVendedores, nivel, idVendedorLogueado) {
	var nombresVendedores = [];
	var idVendedor = [];
	var contadorCotizacion=0;
	if (nivel > 0) {
		filtroVendedor = 'WHERE id_vendedor=' + idVendedorLogueado;
		var sql = 'SELECT id_vendedor,nombreVendedor FROM vendedores ' + filtroVendedor + '  order by nombreVendedor ASC';
	} else {
		var sql = 'SELECT id_vendedor,nombreVendedor FROM vendedores  order by nombreVendedor DESC';
	}

	$.ajax({
		type: 'POST',
		url: 'php/consulta.php',
		data: { sql: sql, tag: 'array_de_datos' },

		success: function (data) {
			var arreglo = JSON.parse(data);
			for (var i = 0; i < arreglo.length; i++) {
				nombresVendedores.push(arreglo[i]['nombreVendedor']);
				idVendedor.push(arreglo[i]['id_vendedor']);
			}

			numeroCotizacionVendedores(fecha_1, fecha_2, nombresVendedores, idVendedor, nivel,contadorCotizacion,idVendedorLogueado);

		},
		error: function (request, status, error) {
			console.error('Error: Could not cargarVendedor');
		}
	});

}

/*Contar cotizaciones y notas de pedido--------------------------------------------------------*/
//*-numero de cotizaciones vendedor 1
function numeroCotizacionVendedores(fecha1, fecha2, nombresVendedores, idVendedor, nivel,contadorCotizacion,idVendedorLogueado) {
	
	codigoProducto = [];
	nombreProducto = [];
	productosVendidos = [];
	var sql = 'SELECT COUNT(*) as venta from ventas where fechaVenta between "' + fecha1 + ' 00:00:00" and "' + fecha2 + ' 23:59:59" and id_vendedor=' + idVendedor[contadorCotizacion];
	
    $.ajax({
        type: 'POST',
        url: 'php/consulta.php',
        data: { sql: sql, tag: 'array_de_datos' },

        success: function (data) {
            contadorCotizacion++;
            var arreglo = JSON.parse(data);
            ARRAY_COTIZACIONES.push(arreglo[0]['venta']);
			
            if (contadorCotizacion == idVendedor.length) {
			
			
                graficoVendedores(nombresVendedores, ARRAY_COTIZACIONES);
				cargarProductos(fecha1, fecha2, nivel, idVendedorLogueado);
			   	numerar(nivel, idVendedorLogueado);
            }else{

                numeroCotizacionVendedores(fecha1, fecha2, nombresVendedores, idVendedor, nivel,contadorCotizacion);

            }
        },
        error: function (request, status, error) {
            console.error('Error: Could not documento');
        }
    });

}
function cargarProductos(fecha_1, fecha_2, nivel, idVendedorLogueado) {
	codigoProducto = [];
	nombreProducto = [];
	productosVendidos = [];
	var sql = 'SELECT DISTINCT vr.codigoProducto,vr.nombreProducto FROM ' +
		' ventas_relacional vr inner join ventas v on v.numeroVenta=vr.idVenta ' +
		' where v.fechaVenta between "' + fecha_1 + ' 00:00:00" and "' + fecha_2 + ' 23:59:59" group by vr.codigoProducto';
	
	$.ajax({
		type: 'POST',
		url: 'php/consulta.php',
		data: { sql: sql, tag: 'array_de_datos' },

		success: function (data) {

			var arreglo = JSON.parse(data);
			for (var i = 0; i < arreglo.length; i++) {
				codigoProducto.push(arreglo[i]['codigoProducto']);
			}
			var contador = 0;
			if (codigoProducto.length > 0) {
				ProductosMasVendidos(fecha_1, fecha_2, nivel, idVendedorLogueado, contador, nombreProducto, codigoProducto, productosVendidos);
				numerar(nivel, idVendedorLogueado);
			} else {
				//*-llamada a la funcion cuando no hay datos y cargue bien el grafico ventas mensual
				numerar(nivel, idVendedorLogueado);
				graficoProductosMasVendidos();
			
			}

		},
		error: function (request, status, error) {
			console.error('Error: Could not documento');
		}
	});
}
//*-productos vendidos---------------------------------------------------------------------------------------------
function ProductosMasVendidos(fecha_1, fecha_2, nivel, idVendedorLogueado, contador, nombreProducto, codigoProducto, productosVendidos) {

	if (nivel > 0) {
		var filtroVendedor = 'AND v.id_vendedor=' + idVendedorLogueado;
		var sql = 'SELECT nombreProducto,SUM(cantidad) as productos from ' +
		' ventas_relacional vr inner join ventas v on v.numeroVenta=vr.idVenta ' +
		' where v.fechaVenta between "' + fecha_1 + ' 00:00:00" and "' + fecha_2 + ' 23:59:59" and vr.codigoProducto =' + codigoProducto[contador] + ' '+filtroVendedor+'   ';

	}else{

		var sql = 'SELECT nombreProducto,SUM(cantidad) as productos from ' +
		' ventas_relacional vr inner join ventas v on v.numeroVenta=vr.idVenta ' +
		' where v.fechaVenta between "' + fecha_1 + ' 00:00:00" and "' + fecha_2 + ' 23:59:59" and vr.codigoProducto =' + codigoProducto[contador] + ' ';
	}




	

	$.ajax({
		type: 'POST',
		url: 'php/consulta.php',
		data: { sql: sql, tag: 'array_de_datos' },
	
		success: function (data) {

			contador++;
			var arreglo = JSON.parse(data);

			for (var i = 0; i < arreglo.length; i++) {
				productosVendidos.push(arreglo[i]['productos']);
				nombreProducto.push(arreglo[i]['nombreProducto']);
			}

			NOMBREPRODUCTO=nombreProducto;
			if (contador == codigoProducto.length) {
				if(productosVendidos.length > 0){			

					graficoProductosMasVendidos(nombreProducto.slice(0, 7), productosVendidos);

				}	else{
					graficoProductosMasVendidos();
				}
			} else {
				ProductosMasVendidos(fecha_1, fecha_2, nivel, idVendedorLogueado, contador, nombreProducto, codigoProducto, productosVendidos);
			}

		},
		error: function (request, status, error) {
			console.error('Error: Could not documento');
		}
	});


}
//*Calcular los meses y sus dias---------------------------------------------
function fechaPorDia(año, dia) {
	var date = new Date(año, 0);
	return new Date(date.setDate(dia));
}

//*-numerar los meses y sus dias
function numerar(nivel, idVendedorLogueado) {
	var arrayMeses = [];
	//*-dias del mes
	var arrayDias = [];
	var meses = new Array(12);
	meses[0] = "ene";
	meses[1] = "febr";
	meses[2] = "mar";
	meses[3] = "abr";
	meses[4] = "may";
	meses[5] = "jun";
	meses[6] = "jul";
	meses[7] = "agos";
	meses[8] = "sep";
	meses[9] = "oct";
	meses[10] = "nov";
	meses[11] = "dec";

	for (i = 1; i < 366; i++) {
		let fecha = fechaPorDia(YEARS, i);

		let mes = fecha.getMonth();
		let dia = fecha.getDate();
		let dia_semana = fecha.getDay();
		if (fecha.getMonth() == MES) {

			arrayMeses.push(meses[mes] + dia);
			arrayDias.push(dia);

		}
	}
	ventasDiaPorMes(arrayMeses, arrayDias, nivel, idVendedorLogueado);

}

//*-funcion que trae las ventas por dia
function ventasDiaPorMes(arrayMeses, arrayDias, nivel, idVendedorLogueado) {

	var contador = 0;
	var utilidadProductos = [];

	for (var i = 0; i < arrayDias.length; i++) {
		utilidadProductos[i] = 0;
	}

	for (var i = 0; i < arrayDias.length; i++) {

		if (nivel > 0) {
			var mes = parseInt(MES) + 1;
			var filtroVendedor = 'AND v.id_vendedor=' + idVendedorLogueado;
			var sql = 'select DISTINCT v.totalVenta ,DATE_FORMAT(v.fechaVenta, "%d") as dia from ' +
				'  ventas_relacional vr inner join ventas v on v.numeroVenta=vr.idVenta where month(fechaVenta)=' + mes + ' and DAY(fechaVenta)=' + arrayDias[i] + ' and YEAR(fechaVenta)=2019 ' + filtroVendedor;
		}
		else {
			var mes = parseInt(MES) + 1;
			var sql = 'select DISTINCT v.totalVenta ,DATE_FORMAT(v.fechaVenta, "%d") as dia from ' +
				'  ventas_relacional vr inner join ventas v on v.numeroVenta=vr.idVenta where month(fechaVenta)=' + mes + ' and DAY(fechaVenta)=' + arrayDias[i] + ' and YEAR(fechaVenta)=2019 ';
		}


		$.ajax({
			type: 'POST',
			url: 'php/consulta.php',
			data: { sql: sql, tag: 'array_de_datos' },
			
			success: function (data) {
				if (data < 0) {
					return;
				} else {
					contador++;
					var arreglo = JSON.parse(data);
					var sumaUtilidad = 0;
					for (var i = 0; i < arreglo.length; i++) {
						sumaUtilidad += parseInt(arreglo[i]["totalVenta"]);
						//utilidadProductos.push(sumaUtilidad);
						utilidadProductos[parseInt(arreglo[i]["dia"] - 1)] = sumaUtilidad;

					}

					if (contador == arrayDias.length) {
					var arrayUtilidadPhp = utilidadProductos.toString();
							ARRAYUTILIDAD=arrayUtilidadPhp;
							ARRAYDIAMES=arrayMeses;

						areaVentasMensual(arrayMeses, utilidadProductos);

					}
				}

			},
			error: function (request, status, error) {
				console.error('Error: Could not documento');
			}
		});

	}
}