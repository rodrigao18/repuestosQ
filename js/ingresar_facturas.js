var ID;

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
		
	} catch (error) { console.log('error en la conexion ', error); }

}