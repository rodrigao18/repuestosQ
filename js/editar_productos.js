var ID;
//*-cargar datos mediante async wait()-*//
let cargarProductos = async (id) => { 

	ID=id;	
	const baseUrl = 'php/consultaFetch.php';
    let consulta=`SELECT id,codigo,nombre,descripcion,costo,proveedor,ubicacion,categoria,marca,stock_m,stock,margen_contado,margen_oferta,margen_credito
    FROM productos where id=${id}`;	 
	
	const sql = {sql: consulta, tag: `array_datos`} 
	
	try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		//*-se parsea solo la respuesta del Json enviada por el servidor.
		let array = JSON.parse(data);
			
        let id_pro=array[0]['proveedor'];      	
        let id_cat=array[0]['categoria'];
        let id_mar=array[0]['marca'];
       
        const Proveedores = await Proveedor(id_pro,id);
        const Categoriaa = await Categoria(id_cat);
        const Marcaa = await Marca(id_mar);
        const Productoss = await Productos(array);		
		
	} catch (error) { console.log('error en la conexion ', error); }
	
}

//*-cargar proveedor en el select-*//
let Proveedor = async (id)  =>{
	
	const baseUrl = 'php/consultaFetch.php';
    let consulta=`SELECT id,nombre FROM proveedores`;
    	
    const sql   = {sql: consulta, tag: `proveedor`}
    
    try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
	        		
        $('#select_proveedor').html(data).fadeIn();		
        $('#select_proveedor option[value="' + id + '"]').attr("selected", true);		
		
	} catch (error) { console.log('error en la conexion ', error); }

}

//*-cargar categoría en el select-*//
let Categoria = async  (id) => {

	const baseUrl = 'php/consultaFetch.php';
    let consulta=`SELECT id,nombre_categoria FROM categoria`;
    	
    const sql   = {sql: consulta, tag: `categoria`}
    
    try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
	   	
        $('#select_categoria').html(data).fadeIn();		
        $('#select_categoria option[value="' + id + '"]').attr("selected", true);		
		
	} catch (error) { console.log('error en la conexion ', error); }

}

//*-cargar marca en el select-*//
let Marca = async (id) => {

	const baseUrl = 'php/consultaFetch.php';
    let consulta=`SELECT id,marca FROM marca`;
    	
    const sql   = {sql: consulta, tag: `marca`}
    
    try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
	   	
        $('#select_marca').html(data).fadeIn();		
        $('#select_marca option[value="' + id + '"]').attr("selected", true);		
		
	} catch (error) { console.log('error en la conexion ', error); }

}

//*-llenar los input-*//
let Productos = (array) => {

	document.getElementById('codigoProducto').value=array[0]['codigo'];
	document.getElementById('nombreProducto').value=array[0]['nombre'];
	document.getElementById('ubicacion').value=array[0]['ubicacion'];
	document.getElementById('costo').value=array[0]['costo'];
	document.getElementById('stock_minimo').value=array[0]['stock_m'];
	document.getElementById('stock_maximo').value=array[0]['stock'];
	document.getElementById('margen_contado').value=array[0]['margen_contado'];
	document.getElementById('margen_oferta').value=array[0]['margen_oferta'];
	document.getElementById('margen_credito').value=array[0]['margen_credito'];
	document.getElementById('descripcion').value=array[0]['descripcion'];

}

//*-actualizar los input-*//
let editarProductos = async (e) => {

	const evento = e.preventDefault();
	let codigo=document.getElementById('codigoProducto').value;
	let proveedor=document.getElementById('select_proveedor').value;
	let categoria=document.getElementById('select_categoria').value;
	let marca=document.getElementById('select_marca').value;
	let nombre=document.getElementById('nombreProducto').value;
	let ubicacion=document.getElementById('ubicacion').value;
	let costo=document.getElementById('costo').value;
	let stock_minimo=document.getElementById('stock_minimo').value;
	let stock=document.getElementById('stock_maximo').value;
	let margen_contado=document.getElementById('margen_contado').value;
	let margen_oferta=document.getElementById('margen_oferta').value;
	let margen_credito=document.getElementById('margen_credito').value;
	let descripcion=document.getElementById('descripcion').value;

	const baseUrl = 'php/consultaFetch.php';

	let consulta=`UPDATE productos set proveedor=${proveedor},nombre="${nombre}",descripcion="${descripcion}",ubicacion="${ubicacion}",categoria=${categoria},
	marca=${marca},costo=${costo},stock_m=${stock_minimo},stock=${stock},
	margen_contado=${margen_contado},margen_oferta=${margen_oferta},margen_credito=${margen_credito} WHERE id=${ID}`;
    	
	const sql   = {sql: consulta, tag: `crud`}
	console.error(sql);

	try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		//*-se parsea solo la respuesta del Json enviada por el servidor.
		console.error(data);
		if(data==1){  swal('UPDATE','El producto fue actualizado exitosamente','success'); }     		
		
	} catch (error) { console.log('error en la conexion ', error); }


}






