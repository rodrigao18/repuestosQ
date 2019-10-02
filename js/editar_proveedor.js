var ID;
//*-select de los datos del cliente-*//
let cargarProveedor = async (id) => {

    ID=id;	
	const baseUrl = 'php/consultaFetch.php';
    let consulta=`SELECT id,rut,nombre,direccion,ciudad,fono,contacto,correo,observacion
                  FROM proveedores where id=${id}`;	 
	
	const sql = {sql: consulta, tag: `array_datos`} 
	
	try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		//*-se parsea solo la respuesta del Json enviada por el servidor.
		let array = JSON.parse(data);
			
        let id_ciu=array[0]['ciudad'];      	     
       
        const InnerComunass = await innerComunas(id_ciu);
        const datosProveeodor = await cargarInputsProveedor(array);     		
		
	} catch (error) { console.log('error en la conexion ', error); }


}

//*-inner join de comunas provincias y regiones-*//
let innerComunas = async (id) => {

    const baseUrl = 'php/consultaFetch.php';
    let consulta=`SELECT r.id,p.id,c.id from provincias p inner join regiones r on r.id = p.idRegion join comunas c on p.id = c.idProvincia
                  where c.id = ${id} group by r.nombre having count(*) >=1`;	 
	
    const sql = {sql: consulta, tag: `array_datos`}    
    
	try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		//*-se parsea solo la respuesta del Json enviada por el servidor.
		let array = JSON.parse(data);
		const regioness = await regiones(array);
		
	} catch (error) { console.log('error en la conexion ', error); }

}


//*-cargar el select de region-*//
let regiones = async (array) => {

    const baseUrl = 'php/consultaFetch.php';
    let consulta=`SELECT id , nombre FROM regiones`;

    const sql = {sql: consulta, tag: `array_region`}  

    try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
	
		$('#selectRegiones').html(data).fadeIn();
            if (array != undefined) { $('#selectRegiones option[value="' + array[0][0] + '"]').attr("selected", true); }
            
        const provinciass = await provincias(array);
        
	} catch (error) { console.log('error en la conexion ', error); }
}


//*-cargar el select de provincias-*//
let provincias = async (array) => {

    let idpro = document.getElementById("selectRegiones").value;
    const baseUrl = 'php/consultaFetch.php';
    let consulta=`SELECT id , nombre FROM provincias WHERE idRegion=${idpro}`;

    const sql = {sql: consulta, tag: `array_provincias`}    
    
    try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
	
		$('#selectProvincias').html(data).fadeIn();
            if (array != undefined) { $('#selectProvincias option[value="' + array[0][1] + '"]').attr("selected", true); }
            
        const Comunass = await comunas(array);
        
	} catch (error) { console.log('error en la conexion ', error); }
}

//*-cargar el select de comuna-*//
let comunas = async (array) => {

    let idpro = document.getElementById("selectProvincias").value;
    const baseUrl = 'php/consultaFetch.php';
    let consulta=`SELECT id , nombre FROM comunas WHERE idProvincia=${idpro}`;

    const sql = {sql: consulta, tag: `array_comunas`}    
    
    try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
	
		$('#selectComunas').html(data).fadeIn();
            if (array != undefined) { $('#selectComunas option[value="' + array[0][2] + '"]').attr("selected", true); }
        
	} catch (error) { console.log('error en la conexion ', error); }
}

//*-cargar los datos en los inputs-*//
let cargarInputsProveedor = async (array) => {

    document.getElementById('rutProveedor').value=array[0]['rut'];
	document.getElementById('nombre').value=array[0]['nombre'];
	document.getElementById('direccion').value=array[0]['direccion'];   
    document.getElementById('fono').value=array[0]['fono'];
    document.getElementById('contacto').value=array[0]['contacto'];
    document.getElementById('correo').value=array[0]['correo'];   
    document.getElementById('observacion').value=array[0]['observacion'];

}

let EditarProveedor = async (e) => {

    const evento = e.preventDefault();
    let rutProveedor = $("#rutProveedor").val();
	let nombre = $("#nombre").val();
	let direccion = $("#direccion").val();
	let fono = $("#fono").val();   
    let ciudad = document.getElementById("selectComunas").value;
    let contacto = $("#contacto").val();
    let correo = $("#correo").val();
    let observacion = $("#observacion").val();

    const baseUrl = 'php/consultaFetch.php';

	let consulta=`UPDATE proveedores set rut="${rutProveedor}",nombre="${nombre}",direccion="${direccion}",ciudad=${ciudad},fono="${fono}",
	contacto="${contacto}",correo="${correo}",observacion="${observacion}" WHERE id=${ID}`;
    	
	const sql   = {sql: consulta, tag: `crud`}
	console.error(sql);

	try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		//*-se parsea solo la respuesta del Json enviada por el servidor.
		console.error(data);
		if(data==1){  swal('UPDATE','El proveedor fue actualizado exitosamente','success'); }     		
		
	} catch (error) { console.log('error en la conexion ', error); }

}