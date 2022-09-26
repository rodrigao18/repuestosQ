var PROVEEDORES;



let proveedores = async() => {
    document.getElementById('loading').innerHTML = `<i class="fas fa-spinner fa-pulse"></i> Cargando facturas espere......`;
    const baseUrl = 'php/consultaFetch.php';
    let consulta = `	SELECT id,nombre FROM proveedores`;


    const sql = { sql: consulta, tag: `array_datos` }
    try {
        //*-llamar ajax al servidor mediate api fetch.
        const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
        //*-request de los datos en formato texto(viene todo el request)
        const data = await response.text();
        //*-se parsea solo la respuesta del Json enviada por el servidor.
        let array = JSON.parse(data);
        var arr = new Array();
        for (var i = 0; i < array.length; i++) {
            arr[array[i][0].toString()] = array[i][1];

        }
        PROVEEDORES = arr;

        const cargarFAct = await cargarFacturas();
        //*-promesa de la funcion denguaje la ejecuto a la espera
        //*-de la respuesta del servidor.	


    } catch (error) {
        console.log('error en la conexion ', error);
    }
}

//*-cargar datos mediante async wait()
let cargarFacturas = async() => {
    const baseUrl = 'php/consultaFetch.php';
    let consulta = `SELECT f.id,id_proveedor,p.rut,numero_factura,fecha_ingreso,DATE(fecha_emision) as fechaEmision,neto,iva,total 
    FROM facturas f inner join proveedores p on p.id=f.id_proveedor ORDER BY f.id ASC`;


    const sql = { sql: consulta, tag: `array_datos` }

    try {
        //*-llamar ajax al servidor mediate api fetch.
        const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
        //*-request de los datos en formato texto(viene todo el request)
        const data = await response.text();
        //*-se parsea solo la respuesta del Json enviada por el servidor.
        let array = JSON.parse(data);

        const tablaFactutass = await tablaFacturas(array);
        //*-promesa de la funcion denguaje la ejecuto a la espera
        //*-de la respuesta del servidor.	
        const botones = await lenguaje();
        document.getElementById('loading').innerHTML = ``;
    } catch (error) {
        console.log('error en la conexion ', error);
    }

}

let tablaFacturas = (arreglo) => {

    for (var i = 0; i < arreglo.length; i++) {

        $("#tablaBody").append(`<tr>		   
		<td>${PROVEEDORES[arreglo[i]['id_proveedor']]}</td>
		   <td>${arreglo[i]['rut']}</td>
		   <td>${arreglo[i]['numero_factura']}</td>
		   <td>${arreglo[i]['fechaEmision']}</td>
		   <td>${formatearNumeros(arreglo[i]['neto'])}</td>
		   <td>${formatearNumeros(arreglo[i]['iva'])}</td>		
		   <td>${formatearNumeros(arreglo[i]['total'])}</td>				  
		   <td><form method="POST" action="editar_facturas.php">
		   <button type="submit" class="btn btn-secondary" data-toggle="tooltip"
			data-placement="top" title="Editar" name="id" value=${arreglo[i]['id']}><i class="fas fa-edit" aria-hidden="true"></i></button></form></td>		
			<td ><button class="btn  btn-danger" data-toggle="tooltip" data-placement="top" title="Borrar" onclick=eliminarProducto(event,${arreglo[i]['id']})><i class="fa fa-trash" aria-hidden="true"></i></button></td>			
		 </tr>`);
    }

    $('[data-toggle="tooltip"]').tooltip();
}


function lenguaje() {

    var f = new Date();
    var fecha = f.getDate() + "-" + (f.getMonth() + 1) + "-" + f.getFullYear();

    var table = $('#tablaProductos').DataTable({

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
        },
        "order": [
            [1, "asc"]
        ],
        "stateSave": true
    });


    new $.fn.dataTable.Buttons(table, {
        buttons: [{
            extend: 'excelHtml5',
            title: 'ver_ventas' + fecha + ''
        }, {
            extend: 'pdfHtml5',
            title: 'ver_ventas' + fecha + ''
        }]

    });

    table.buttons(0, null).container().prependTo(
        table.table().container()
    );


}

function eliminarProducto(e, id, index) {
    e.preventDefault();
    let mensaje;
    let titulo;
    if (index == 1) {
        titulo = `Eliminar producto`;
        mensaje = `¿esta seguro de eliminar la boleta ?`;
    } else {
        titulo = `Anular producto`;
        mensaje = `¿esta seguro de anular la boleta ?`;
    }

    swal({
            title: `${titulo}`,
            text: `${mensaje}`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                elimiarVenta(id);

            } else {
                return;
            }

        });
}

let elimiarVenta = async(idP) => {

    const baseUrl = 'php/consultaFetch.php';

    let consulta = `DELETE FROM facturas WHERE id=${idP}`;

    const sql = { sql: consulta, tag: `crud` }

    try {
        //*-llamar ajax al servidor mediate api fetch.
        const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
        //*-request de los datos en formato texto(viene todo el request)
        const data = await response.text();
        const borraVrelacional = borrVentaRe(idP);
    } catch (error) { console.log('error en la conexion ', error); }

}
let borrVentaRe = async(idP) => {

    const baseUrl = 'php/consultaFetch.php';
    let consulta = `DELETE FROM FACTURAS_RELACIONAL  WHERE idfactura=${idP}`;

    const sql = { sql: consulta, tag: `crud` }

    console.error(consulta);

    try {
        //*-llamar ajax al servidor mediate api fetch.
        const response = await fetch(baseUrl, { method: 'post', body: JSON.stringify(sql) });
        //*-request de los datos en formato texto(viene todo el request)
        const data = await response.text();
        //*-se parsea solo la respuesta del Json enviada por el servidor.	


        $.notify({
            title: "Borrado: ",
            message: "Se Borro la factura:",
            icon: 'fas fa-check'
        }, {
            type: "success",
            placement: {
                from: "top",
                align: "right"
            },
            offset: 70,
            spacing: 70,
            z_index: 1031,
            delay: 2000,
            timer: 3000
        });

        setTimeout('location.reload()', 1000);


    } catch (error) { console.log('error en la conexion ', error); }


}

window.onload = proveedores