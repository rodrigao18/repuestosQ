

function cargarVendedores(e) {
	$("#salidaVendedores").html("").fadeIn('slow');
	e.preventDefault();
	var sql = 'SELECT id_vendedor,nombreVendedor,correoVendedor,nivel,activo FROM vendedores';

	console.error(sql);

	$.ajax({
		type: 'POST',
		url: 'php/consulta.php',
		data: {
			tag: 'array_de_datos',
			sql: sql
		},
		success: function (data) {
			var arreglo = JSON.parse(data);
			console.log(arreglo.length);

			mostrarFormulario(arreglo);


		},
		error: function (request, status, error) {
			console.error("Error: Could not cargarVendedores");
		}
	});
}

function mostrarFormulario(arreglo) {
	$("#salidaVendedores").append('<div class="tablaProductos">' +
		'<table class="table table-striped" id="tablaVendedores">' +
		'<thead>' +
		'<tr>' +
		'<th scope="col">Código</th>' +
		'<th scope="col">Nombre</th>' +
		'<th scope="col">Nivel</th>' +
		'<th scope="col">Estado</th>' +
		'<th scope="col"> </th>' +
		'<th scope="col"> </th>' +
		'</tr>' +
		'</thead>' +
		'<tbody id="tablaBody"> </tbody>' +
		'</table></div>');

	for (var i = 0; i < arreglo.length; i++) {
		var id = arreglo[i]['id_vendedor'];
		var nombre = arreglo[i]['nombreVendedor'];
		var nivel = arreglo[i]['nivel'];
		var estado = arreglo[i]['activo'];
		var EstadoColumna;
		var columnaNivel; 
		if(estado==1){
			EstadoColumna = "<span class='badge badge-info'>Activo</span>";
		}else if(estado==0){
			EstadoColumna = "<span class='badge badge-danger'>Inactivo</span>";
		}
		if(nivel==0){
			columnaNivel = "<span class='badge badge-success'>Administrador</span>";
		}else if(nivel==1){
			columnaNivel = "<span class='badge badge-primary'>Vendedor</span>";
		}

		$("#tablaBody").append('<tr>' +
			'<td width="10%">' + id + '</td>' +
			'<td width="30%">' + nombre + '</td>' +
			'<td width="10%">' + columnaNivel + '</td>' +
			'<td width="10%">' + EstadoColumna + '</td>' +
			'<td width="10%"><form method="POST" action="editar_vendedores.php">' +
			'<button type="submit" class="btn btn-secondary"  data-toggle="tooltip" data-placement="top" title="Editar" name="id" value="' + id + '" ><i class="fas fa-edit" aria-hidden="true"></i></button></form></td>' +
			'<td width="10%"><button class="btn  btn-danger"  data-toggle="tooltip" data-placement="top" title="Borrar" onclick=eliminarVendedor(event,' + id + ')><i class="fa fa-trash" aria-hidden="true"></i></button></td>' +
			'</tr>');

	}
	$('[data-toggle="tooltip"]').tooltip();
	lenguaje();
}


function lenguaje() {

	var f = new Date();
	var fecha = f.getDate() + "-" + (f.getMonth() + 1) + "-" + f.getFullYear();

	var table=$('#tablaVendedores').DataTable({

		language: {
			"decimal": "",
			"emptyTable": "No hay información",
			"info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
			"infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
			"infoFiltered": "(Filtrado de _MAX_ total entradas)",
			"infoPostFix": "",
			"thousands": ",",
			"lengthMenu": "Mostrar _MENU_ Entradas",
			"loadingRecords": "Cargando...",
			"processing": "Procesando...",
			"search": "Buscar:",
			"zeroRecords": "Sin resultados encontrados",
			"paginate": {
				"first": "Primero",
				"last": "Ultimo",
				"next": "Siguiente",
				"previous": "Anterior"
			}
		},
		"aria": {
			"sortAscending": ": activate to sort column ascending",
			"sortDescending": ": activate to sort column descending"
		}
	});

    new $.fn.dataTable.Buttons(table, {
		buttons: [
			{
				extend: 'excelHtml5',
				title: 'ver_vendedores' + fecha + ''
            }, {
				extend: 'pdfHtml5',
				title: 'ver_vendedores' + fecha + ''
            }]

	});

	table.buttons(0, null).container().prependTo(
		table.table().container()
	);
}



function eliminarVendedor(e, id) {
	e.preventDefault();

	$.ajax({
		type: 'POST',
		url: 'php/funcionesVendedores.php',
		data: {
			tag: 'eliminarVendedor',
			id: id
		},
		success: function (data) {
			console.log(data);
			if (data == 1) {
				alert('Borrado exitoso');
				cargarVendedores(e);
			} else {
				alert('No Borrado');
			}
		},
		error: function (request, status, error) {
			console.error("Error: Could not eliminarVendedor");
		}
	});

}

window.onload = cargarVendedores
