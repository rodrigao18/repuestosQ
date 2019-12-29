//Comunas
function cargarComunas() {

	var id = document.getElementById("selectProvincias").value;

	console.log(id);
	$.ajax({
		type: 'POST',
		url: 'php/consulta.php',
		data: {
			tag: 'mostrarComunas',
			id: id
		},
		success: function (data) {
			$('#selectComunas').html(data).fadeIn();
			document.getElementById("selectComunas").disabled = false;

		},
		error: function (request, status, error) {
			console.error("Error: Could not cargarComunas");
		}
	});

}
//Provincias
function cargarProvincias() {

	var id = document.getElementById("selectRegiones").value;

	console.log(id);
	$.ajax({
		type: 'POST',
		url: 'php/consulta.php',
		data: {
			tag: 'mostrarProvincias',
			id: id
		},
		success: function (data) {
			$('#selectProvincias').html(data).fadeIn();
			$('#selectComunas').html("").fadeIn();

		},
		error: function (request, status, error) {
			console.error("Error: Could not cargarProvincias");
		}
	});

}
//Regiones
function cargarRegiones() {
	//document.getElementById("selectProvincias").disabled = true;
	//document.getElementById("selectComunas").disabled = true;

	$.ajax({
		type: 'POST',
		url: 'php/consulta.php',
		data: {
			tag: 'mostrarRegiones'
		},
		success: function (data) {
			$('#selectRegiones').html(data).fadeIn();
			document.getElementById("selectProvincias").disabled = false;

		},
		error: function (request, status, error) {
			console.error("Error: Could not cargarRegiones");
		}
	});
}

//*-comprobar si cliente ya existe
function comprobarCliente() {	
	if($("#rutCliente").val() != ""	){
		var rutCliente = $("#rutCliente").val();
		console.error(rutCliente);

		var sql = 'SELECT count(*) FROM clientes where rut=' + rutCliente;
	
		//-*AJAX	
		$.ajax({
			type: 'POST',
			url: 'php/consulta.php',
			data: { sql: sql, tag: 'array_de_datos' },

			success: function (data) {
				var arreglo = JSON.parse(data);
				existe = arreglo[0][0];
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
				
			},
			error: function (request, status, error) {
				console.error("Error: Could not comprobarCLiente");
			}
		});

	}else{
		var rutCliente = $("#rutCliente").val();
		console.error(rutCliente);
		
	}	
	return;
}

function GuardarCliente(e) {
    e.preventDefault();
    var rutCliente = $("#rutCliente").val();
	var nombre = $("#nombre").val();
	var direccion = $("#direccion").val();
	var fono = $("#fono").val();
    var fono2 = $("#fono2").val();
    var giro = $("#giro").val();
    var ciudad = document.getElementById("selectComunas").value;
    var referencia = $("#referencia").val();
    var credito = $("#credito_autorizado").val();
    var observacion = $("#observacion").val();
	

	var sql = 'INSERT INTO clientes (rut,nombre,direccion,ciudad,fono_1,fono_2, ' +
    ' referencia,giro,credito_autorizado,observacion)VALUES' +
    ' ("' + sacarPuntosGuionRut(rutCliente) + '","' + nombre + '","' + direccion + '", ' + ciudad + ', "' + fono + '", ' +
    ' "' + fono2 + '","' + referencia + '", "' + giro + '", ' + credito + ',"' + observacion+ '")';

    console.error(sql);
 ;
    //AJAX
	$.ajax({
		type: 'POST',
		url: 'php/consulta.php',
		data: {
			sql: sql,
			tag: 'crud_productos'
		},
		success: function (data) {
			console.log(data);
			if (!isNaN(data)) {
				console.log(data);
				swal("Datos ingresados correctamente", "", "success");
                document.getElementById('rutCliente').focus();	
                document.getElementById('rutCliente').value='';	

			} else {
				console.error("No es correto");
			} //	window.location.href = "ver_clientes.php";

		},
		error: function (request, status, error) {
			console.error("Error: Could not guardarCliente2");
		}
	});


}

window.onload = cargarRegiones