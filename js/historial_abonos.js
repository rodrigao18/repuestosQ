var VENDEDORES;
var CLIENTES;





//*-cargar datos mediante async wait()
let cargarVentas = async (id) => { 

	const baseUrl = 'php/consultaFetch.php';
    let consulta=`SELECT DATE_FORMAT(fecha_cancelacion,'%d/%m/%Y') as fecha,valor_abono,forma_pago FROM pagos WHERE id_Venta=${id} ORDER BY fecha_cancelacion DESC`;
	 
	
	const sql = {sql: consulta, tag: `array_datos`} 
    console.error(sql);
	try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		//*-se parsea solo la respuesta del Json enviada por el servidor.
		let array = JSON.parse(data);		
		
		const tablaFactutass = await tablaVentas(array);
		//*-promesa de la funcion denguaje la ejecuto a la espera
		//*-de la respuesta del servidor.	
		
	
	} catch (error) {
		console.log('error en la conexion ', error);
	}
	
}

let tablaVentas = (arreglo) => {
	
	let tbody = document.getElementById('tablaBody');
	

	for (let i of arreglo) { 

		let estadoColumna;
		let estadoDocumento;
        let numero;
        
		if(i['forma_pago']==1){
			estadoDocumento=`<span class='badge badge-success'>Efectivo</span>`;
			
		}else if(i['forma_pago']==2){
			estadoDocumento=`<span class='badge badge-warning'>Cheque</span>`;
			
		}
		
	
		tbody.innerHTML +=
        `<tr>
			<td>${i['fecha']}</td>
			<td>${formatearNumeros(i['valor_abono'])}</td>
			<td>${estadoDocumento}</td>
		 </tr>`
	 	
	}
	$('[data-toggle="tooltip"]').tooltip();
	
 }

