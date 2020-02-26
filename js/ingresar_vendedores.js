


let GuardarVendedor = async(e) => {


    const evento=e.preventDefault();
    let vendedor=document.getElementById(`nombreVendedor`).value;
    let correo=document.getElementById(`correo`).value;
    let pass=document.getElementById(`passwordVendedor`).value;

    const baseUrl = 'php/consultaFetch.php';

    const consulta=`INSERT INTO vendedores (nombreVendedor,correoVendedor,passwordVendedor,nivel,activo)
    VALUES("${vendedor}","${correo}","${pass}",0,1)`;

    const sql = {sql: consulta, tag: `crud`} 

    try {
        //*-llamar ajax al servidor mediate api fetch.
        const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
        //*-request de los datos en formato texto(viene todo el request)
        const data = await response.text();
        swal("Vendedor","Dato ingresado exitosamente","info");
        setTimeout('window.location.href = "ver_vendedores.php";', 1500);	
        
    } catch (error) {  }
}


