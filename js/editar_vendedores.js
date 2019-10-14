function llamadaBaseDatos(id) {
	var sql =' SELECT * FROM vendedores WHERE id_vendedor='+id;
	$.ajax({
		type: 'POST',
		url: 'php/consulta.php',
		data: {
			id: id,
			tag: 'array_de_datos',
			sql: sql
		},
		success: function (data) {

			console.log(data);
			var arreglo = JSON.parse(data);
			FormularioEditable(arreglo);
		},
		error: function (request, status, error) {
			alert("Error: Could not editar vendedores");
		}
	});

}




function FormularioEditable(arreglo) {
	$("#primerasalida").html("");
	var id = arreglo[0][0];
	var nombreVendedor = arreglo[0][1];
	var correo = arreglo[0][2];
	var password = arreglo[0][3];
	var tipo_user=arreglo[0]["nivel"];
	var estado = arreglo[0]['activo'];
	console.error('tipo_user ' + tipo_user);
	document.getElementById('id').value=id;
	document.getElementById('nombreVendedor').value=nombreVendedor;
	document.getElementById('correo').value=correo;
	document.getElementById('passwordVendedor').value=password;	
	$('#selectPermisos option[value='+tipo_user+']').attr("selected", true);  

	if (estado == 0) {
		document.getElementById("switch-id").checked = false;
	} else {
		document.getElementById("switch-id").checked = true;
	}
}

function mesg() {
	estado = document.getElementById("switch-id").checked;
	console.log(estado);
	if (estado == false) {
		swal("Advertencia!", "desea inhabilitar este vendedor", "warning");
	}

}

function EditarVendedor(e) {

	e.preventDefault();

	var id = document.getElementById('id').value;
	var nombre = document.getElementById('nombreVendedor').value;
	var correo = document.getElementById('correo').value;
	var password = document.getElementById('passwordVendedor').value;
	var nivel = document.getElementById('selectPermisos').value;
	var activo = document.getElementById('switch-id').checked;
	var sql = 'UPDATE vendedores set nombreVendedor="'+nombre+'" , correoVendedor = "'+correo+'" , passwordVendedor = "'+password+'" , nivel='+nivel+' , activo='+activo+' where id_vendedor='+id+' ';	
	
	console.log(sql);

	$.ajax({
		type: 'POST',
		url: 'php/consulta.php',
		data: {
			sql: sql, tag: 'crud_productos' },
		success: function (data) {
			console.log(data);
			if (data == 1) {
			
				swal("Update!", "Datos actualizados correctamente!", "success");
				setTimeout('window.location="ver_vendedores.php"', 2000);
			} else {
				alert('Error En El Ingreso');
			}
		},
		error: function (request, status, error) {
			alert("Error: Could not editarProducto");
		}
	});

}


//window.onload = llamadaBaseDatos(id);
