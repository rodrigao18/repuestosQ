//funcion comun
function redondeo(numero, decimales) {
	if(isNaN(numero)||numero==null){
		return 0;
	}
	var flotante = parseFloat(numero);
	var resultado = Math.round(flotante * Math.pow(10, decimales)) / Math.pow(10, decimales);
	return resultado;
}
//DAR  GUION AL RUT
function formatearRut(rut) {
	var rutFormateado;
	rut = rut.toString();
	var cuerpo, dv;
	cuerpo = rut.slice(0, -1);
	dv = rut.slice(-1);
	rutFormateado = cuerpo + "-" + dv;
	return rutFormateado;

}

//FUNCION PARA CONVERTIR LOS NUMEROS DE COMAS A NORMAL;
function convertirNumeros(str) {
	var numero = str.replace(/,/g, "");
	return numero;
}

//FUNCION PARA CONVERTIR LOS NUMEROS DE COMAS A NORMAL;
function formatearNumeros(str) {
	var numero =new Intl.NumberFormat('es-MX').format(Math.round(str));
	return numero;
}
//sacar gion al rut
function convertirRut(str) {
	var rut = str.replace(/-/g, "");
	return rut;
}
//sacar gion al rut
function sacarPuntosGuionRut(str) {
	if(str==null){
	return;
	}else{
		var rut = str.replace(/[.-]/g, "");
		console.log(rut)
		return rut;
	}

}
//formatear fechas (08/08/2018 a 08-08-2018):
function formatear_fecha(fecha) {
	var fecha = fecha.replace(/^(\d{4})(\d{2})(\d{2})$/g, '$1-$2-$3');
	return fecha;
}
//*-convertir fecha pasada por un post;
function convert_fecha(str) {
    var fechaConver;
    var fecha = str.toString();
    var año = fecha.slice(0, -4);
    var mes=fecha.slice(-4,-2);
    var dia = fecha.slice(-2);
    fechaConver= año+"-" + mes + "-" + dia;
    console.log(año+"-"+mes+"-"+dia);
    return fechaConver;
}
//funcion que saca los elementos inactivos del arreglo
function sacarInactivos(arreglo) {
	for (var i = 0; i < arreglo.length; i++) {
		if (arreglo[i]['activo'] == "0") {
			//console.log("hay uno inactivo");
			var eliminado = arreglo.splice(i, 1);
			console.log(eliminado);
		}
	}

	return arreglo;
}


//evita el evento enter
window.addEventListener("keypress", function (event) {
	if (event.keyCode == 13) {
		event.preventDefault();

	}
}, false);

//funcion que limitar a numeros y k || K para el rut
function soloRut(string){
    if (string.length>14){
        console.error('max caracteres');
		return false;
	}else{

    var out='';
    var filtro = '1234567890';

    for(var i=0; i<string.length; i++){
        if ( filtro.indexOf(string.charAt(i)) !=-1) {

            out+=string.charAt(i);
        }
    }
    return out;
}
}


//funcion que pasar de minusculas a Mayusculas
function mayusculas(tx){
    //retornar valor convertido a mayusculas
    return tx.toUpperCase();
}
//-funcion que crea un formulario.
//-se le pasan dos parametros
//-la variable semana que se enviara via post por un campo oculto.
//-la variable ruta corresponde a la ruta de la pagina enviada atraves de tag method post del formulario.

function enviarParametroPost(semana,ruta){
  //Creamos el formulario auxiliar
  var form = document.createElement( "form" );
  // Le añadimos atributos como el name, action y el method
  form.setAttribute( "name", "formulario" );
  form.setAttribute( "action", ruta );
  form.setAttribute( "method", "post" );
  // Creamos un input para enviar el valor
  var input = document.createElement( "input" );
  // Le añadimos atributos como el name, type y el value
  input.setAttribute( "name", "semana" );
  input.setAttribute( "type", "hidden" );
  input.setAttribute( "value", semana );
  // Añadimos el input al formulario
  form.appendChild( input );

  // Añadimos el formulario al documento
  document.getElementsByTagName( "body" )[0].appendChild( form );

  // Hacemos submit
  document.formulario.submit();

}

//poner puntos a al rut
function validaRut(rut,indice) {
	if(rut==""){
	return rut;
	}
    if(indice==1){
    comprobarCliente();
    }
    else if(indice==2){
     comprobarProveedor();
    }else if(indice==3){

    }
    var actual = rut.replace(/^0+/, "");
    if (actual != '' && actual.length > 1) {
        var sinPuntos = actual.replace(/\./g, "");
        var actualLimpio = sinPuntos.replace(/-/g, "");
        var inicio = actualLimpio.substring(0, actualLimpio.length - 1);
        var rutPuntos = "";
        var i = 0;
        var j = 1;
        var suma=0;
        for (i = inicio.length - 1; i >= 0; i--) {
            var letra = inicio.charAt(i);
            rutPuntos = letra + rutPuntos;
            if (j % 3 == 0 && j <= inicio.length - 1) {
                rutPuntos = "." + rutPuntos;
            }
            j++;
        }
        var dv = actualLimpio.substring(actualLimpio.length - 1);
        rutPuntos = rutPuntos + "-" + dv;
    }
    return rutPuntos;
}

