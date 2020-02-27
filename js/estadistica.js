var ARRAYMESES = [];
var ARRAY_COTIZACIONES = [];
var ARRAY_NOTA_PEDIDO = [];
var ARR_BOLETAS=[];
var ARR_FACTURAS=[];
var ARR_GUIAS=[];
var ARR_COTIZACIONES=[];
var ARR_TARJETAS=[];
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
	numero_boletas_grafico();
	numero_facturas_grafico();
	numero_guias_grafico();
	numero_tarjetas_grafico();
}

	let numero_boletas_grafico = async() => {

		let fecha_ini=document.getElementById(`fecha_inicio`).value;
		let fecha_ter=document.getElementById(`fecha_termino`).value;

		const baseUrl = 'php/consultaFetch.php';
		let consulta=`SELECT SUM(total) as boletas FROM ventas where fecha_venta between "${fecha_ini} 00:00:00" and "${fecha_ter} 23:59:59" and estado_venta=1`;
		const sql   = {sql: consulta, tag: `array_datos`}
		
		try {
			//*-llamar ajax al servidor mediate api fetch.
			const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
			//*-request de los datos en formato texto(viene todo el request)
			const data = await response.text();				
			let array=JSON.parse(data);
			let numero_b=array[0]['boletas'];
			$("#boletas > p > b").html("");
			$("#boletas > p > b").append(`$${formatearNumeros(numero_b)}`);

		} catch (error) {  }		

	}

	let numero_facturas_grafico = async() => {

		let fecha_ini=document.getElementById(`fecha_inicio`).value;
		let fecha_ter=document.getElementById(`fecha_termino`).value;

		const baseUrl = 'php/consultaFetch.php';
		let consulta=`SELECT SUM(total) as facturas FROM ventas where fecha_venta between "${fecha_ini} 00:00:00" and "${fecha_ter} 23:59:59" and estado_venta=2`;
		const sql   = {sql: consulta, tag: `array_datos`}
		
		try {
			//*-llamar ajax al servidor mediate api fetch.
			const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
			//*-request de los datos en formato texto(viene todo el request)
			const data = await response.text();				
			let array=JSON.parse(data);
			let numero_b=array[0]['facturas'];
			$("#facturas > p > b").html("");
			$("#facturas > p > b").append(`$${formatearNumeros(numero_b)}`);

		} catch (error) {  }		

	}

	let numero_guias_grafico = async() => {

		let fecha_ini=document.getElementById(`fecha_inicio`).value;
		let fecha_ter=document.getElementById(`fecha_termino`).value;

		const baseUrl = 'php/consultaFetch.php';
		let consulta=`SELECT SUM(total) as guias FROM ventas where fecha_venta between "${fecha_ini} 00:00:00" and "${fecha_ter} 23:59:59" and estado_venta=3`;
		const sql   = {sql: consulta, tag: `array_datos`}
		
		try {
			//*-llamar ajax al servidor mediate api fetch.
			const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
			//*-request de los datos en formato texto(viene todo el request)
			const data = await response.text();				
			let array=JSON.parse(data);
			let numero_b=array[0]['guias'];
			$("#guias > p > b").html("");
			$("#guias > p > b").append( `$${formatearNumeros(numero_b)}` );

		} catch (error) {  }		

	}

	let numero_tarjetas_grafico = async() => {

		let fecha_ini=document.getElementById(`fecha_inicio`).value;
		let fecha_ter=document.getElementById(`fecha_termino`).value;

		const baseUrl = 'php/consultaFetch.php';
		let consulta=`SELECT SUM(total) as tarjetas FROM ventas where fecha_venta between "${fecha_ini} 00:00:00" and "${fecha_ter} 23:59:59" and estado_venta=5`;
		const sql   = {sql: consulta, tag: `array_datos`}
		
		try {
			//*-llamar ajax al servidor mediate api fetch.
			const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
			//*-request de los datos en formato texto(viene todo el request)
			const data = await response.text();				
			let array=JSON.parse(data);
			let numero_b=array[0]['tarjetas'];
			$("#tarjetas > p > b").html("");
			$("#tarjetas > p > b").append(`$${formatearNumeros(numero_b)}`);

		} catch (error) {  }		

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
	// var sql = 'SELECT COUNT(*) as venta from ventas where fecha_venta between "' + fecha1 + ' 00:00:00" and "' + fecha2 + ' 23:59:59" and id_vendedor=' + idVendedor[contadorCotizacion];
	let sql=`SELECT COUNT(IF(estado_venta=1,1,NULL)) AS boletas, COUNT(IF(estado_venta=2,1,NULL)) AS facturas, COUNT(IF(estado_venta=3,1,NULL)) AS guias,
	COUNT(IF(estado_venta=4,1,NULL)) AS cotizaciones,COUNT(IF(estado_venta=5,1,NULL)) AS tarjetas FROM
	 ventas  WHERE  fecha_venta BETWEEN "${fecha1} 00:00:00" AND "${fecha2} 23:59:59"`;

	
	console.log(sql);
    $.ajax({
        type: 'POST',
        url: 'php/consulta.php',
        data: { sql: sql, tag: 'array_de_datos' },

        success: function (data) {
            contadorCotizacion++;
			var arreglo = JSON.parse(data);
			
            ARR_BOLETAS.push(arreglo[0]['boletas']);            
			ARR_BOLETAS.push(arreglo[0]['facturas']);
		    ARR_BOLETAS.push(arreglo[0]['guias']);
			ARR_BOLETAS.push(arreglo[0]['cotizaciones']);
			ARR_BOLETAS.push(arreglo[0]['tarjetas']);
            // if (contadorCotizacion == idVendedor.length) {
				console.log(ARR_BOLETAS);
                pie_chart(ARR_BOLETAS);
				cargarProductos(fecha1, fecha2, nivel, idVendedorLogueado);
				   numerar(nivel, idVendedorLogueado);
				   ARR_BOLETAS=[];
            // }else{

            //     numeroCotizacionVendedores(fecha1, fecha2, nombresVendedores, idVendedor, nivel,contadorCotizacion);

            // }
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
	var sql = 'SELECT DISTINCT vr.codigo_producto,vr.nombre_producto FROM ' +
		' ventas_relacional vr inner join ventas v on v.id=vr.id_venta ' +
		' where v.fecha_venta between "' + fecha_1 + ' 00:00:00" and "' + fecha_2 + ' 23:59:59" group by vr.codigo_producto';
	
	
	$.ajax({
		type: 'POST',
		url: 'php/consulta.php',
		data: { sql: sql, tag: 'array_de_datos' },

		success: function (data) {

			var arreglo = JSON.parse(data);
			for (var i = 0; i < arreglo.length; i++) {
				codigoProducto.push(arreglo[i]['codigo_producto']);
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
		var sql = 'SELECT vr.nombre_producto,SUM(cantidad) as productos from ' +
		' ventas_relacional vr inner join ventas v on v.id=vr.id_venta ' +
		' where v.fecha_venta between "' + fecha_1 + ' 00:00:00" and "' + fecha_2 + ' 23:59:59" and vr.codigo_producto =' + codigoProducto[contador] + ' '+filtroVendedor+'   ';

	}else{

		var sql = 'SELECT vr.nombre_producto,SUM(cantidad) as productos from ' +
		' ventas_relacional vr inner join ventas v on v.id=vr.id_venta ' +
		' where v.fecha_venta between "' + fecha_1 + ' 00:00:00" and "' + fecha_2 + ' 23:59:59" and vr.codigo_producto =' + codigoProducto[contador] + ' ';
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
				nombreProducto.push(arreglo[i]['nombre_producto']);
			}

			NOMBREPRODUCTO=nombreProducto;
			if (contador == codigoProducto.length) {
				if(productosVendidos.length > 0){			

					graficoProductosMasVendidos(nombreProducto, productosVendidos);

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
			var sql = 'select DISTINCT v.total ,DATE_FORMAT(v.fecha_venta, "%d") as dia from ' +
				'  ventas_relacional vr inner join ventas v on v.id=vr.id_venta where month(fecha_venta)=' + mes + ' and DAY(fecha_venta)=' + arrayDias[i] + ' and YEAR(fecha_venta)=2020 ' + filtroVendedor;
		}
		else {
			var mes = parseInt(MES) + 1;
			var sql = 'select DISTINCT v.total ,DATE_FORMAT(v.fecha_venta, "%d") as dia from ' +
				'  ventas_relacional vr inner join ventas v on v.id=vr.id_venta where month(fecha_venta)=' + mes + ' and DAY(fecha_venta)=' + arrayDias[i] + ' and YEAR(fecha_venta)=2020 ';
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
						sumaUtilidad += parseInt(arreglo[i]["total"]);
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

window.onload=cargar_estadistica_onchange;