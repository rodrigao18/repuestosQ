var ID;
//*-select de los datos del cliente-*//
let cargarCliente = async (id) => {

    ID=id;	
	const baseUrl = 'php/consultaFetch.php';
    let consulta=`SELECT id,rut,nombre,direccion,ciudad,fono_1,fono_2,referencia,giro,credito_autorizado,observacion
                  FROM clientes where id=${id}`;	 
	
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
        const datosClientes = await cargarInputs(array);     		
		
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
let cargarInputs = async (array) => {

    document.getElementById('rutCliente').value=array[0]['rut'];
	document.getElementById('nombre').value=array[0]['nombre'];
	document.getElementById('direccion').value=array[0]['direccion'];   
    document.getElementById('fono').value=array[0]['fono_1'];
    document.getElementById('fono2').value=array[0]['fono_2'];
    document.getElementById('referencia').value=array[0]['referencia'];
    document.getElementById('giro').value=array[0]['giro'];
    document.getElementById('credito_autorizado').value=0;
    document.getElementById('observacion').value=array[0]['observacion'];

}

let editarCliente = async (e) => {

    const evento = e.preventDefault();
    let rutCliente = $("#rutCliente").val();
	let nombre = $("#nombre").val();
	let direccion = $("#direccion").val();
	let fono = $("#fono").val();
    let fono2 = $("#fono2").val();
    let giro = $("#giro").val();
    let ciudad = document.getElementById("selectComunas").value;
    let referencia = $("#referencia").val();
    let credito = $("#credito_autorizado").val();
    let observacion = $("#observacion").val();

    const baseUrl = 'php/consultaFetch.php';

	let consulta=`UPDATE clientes set rut="${rutCliente}",nombre="${nombre}",direccion="${direccion}",ciudad=${ciudad},fono_1="${fono}",
	fono_2="${fono2}",giro="${giro}",referencia="${referencia}",credito_autorizado=${credito},observacion="${observacion}" WHERE id=${ID}`;
    	
	const sql   = {sql: consulta, tag: `crud`}
	console.error(sql);

	try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		//*-se parsea solo la respuesta del Json enviada por el servidor.
		console.error(data);
		if(data==1){  swal('UPDATE','El cliente fue actualizado exitosamente','success'); }     		
		
	} catch (error) { console.log('error en la conexion ', error); }

}

//*-comprobar si existe un cliente en la base-*//
let comprobarCliente = async  () => { 

    if(document.getElementById('rutCliente').value!= ""){   

    let rutCliente = $("#rutCliente").val(); 
    const baseUrl = 'php/consultaFetch.php';
        console.error('rutCliente' + rutCliente);
    let consulta=`SELECT count(*) FROM clientes where rut=${rutCliente}`;

    const sql = {sql: consulta, tag: `array_datos`} 

    try {
		//*-llamar ajax al servidor mediate api fetch.
		const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
		//*-request de los datos en formato texto(viene todo el request)
		const data = await response.text();
		//*-se parsea solo la respuesta del Json enviada por el servidor.
        let array = JSON.parse(data);
        
        let existe = array[0][0]; 

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
      		
		
    } catch (error) { console.log('error en la conexion ', error); }
    
}    else{ let rutCliente = $("#rutCliente").val(); console.error(rutCliente);   }

}

const editRut = ()=>{
    let btnest = document.getElementById('rutCliente');
   let btn = document.getElementById('rutCliente').disabled=false;
}
