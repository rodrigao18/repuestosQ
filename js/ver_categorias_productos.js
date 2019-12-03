
	//CARGAR LAS CATEGORIAS EN LA TABLA PM 14:06
    function cargar_categorias(){
        //SQL SELECT;
        var sql ='select id, nombre_categoria from categoria';
        console.log('sql: ', sql);	
        //AJAX
        $.ajax({
        type: 'POST',
        url: 'php/consulta.php',
        data: {	sql:sql,tag: 'array_de_datos'},
        success:function (data) {				
                    var arreglo = JSON.parse(data);
                    console.log(arreglo);
                    mostrar_formulario(arreglo);
        },
      error:function (request, status, error) {
                     alert("Error: Could not cargado");
         }
     });
    }
      //CARGAR TABLA CATEGORIAS;
    function mostrar_formulario(arreglo){
        $("#salida").append(
            '<table class="table table-striped " id="tablaProductosDescartados">' +
            '<thead>' +
            '<tr>' +
            '<th scope="col">Código</th>' +		
            '<th scope="col">Nombre</th>' +            
        '<th></th>' +
        '<th></th>' +
            '</tr>' +
            '</thead>' +
            '<tbody id="tablaBody"></tbody></table>');
    
            for (var i = 0; i < arreglo.length; i++) {
            var id = arreglo[i][0];
            var nombre = arreglo[i][1];	
        var descripcion = arreglo[i][2];
        var alias = arreglo[i][3];		
            
        $("#tablaBody").append('<tr>' +
            '<td width="10%">' + id + '</td>' +	
            '<td width="10%">' + nombre + '</td>' +            
            '<td width="10%"><form method="POST" action="editar_categorias_productos.php">' +
            '<button type="submit" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Editar" name="id" value="' + id + '" ><i class="fas fa-edit" aria-hidden="true"></i></button></form></td>' +
            '<td width="10%"><button class="btn  btn-danger" data-toggle="tooltip" data-placement="top" title="Borrar" onclick=eliminar_categoria(event,' + id + ')><i class="fas fa-trash" aria-hidden="true"></i></button></td>' +
            '</tr>');
        }
        $('[data-toggle="tooltip"]').tooltip();
        lenguaje();
    }

    function lenguaje() {
	
	
        var f = new Date();
        var fecha = f.getDate() + "-" + (f.getMonth() + 1) + "-" + f.getFullYear();
    
        var table=$('#tablaProductosDescartados').DataTable({
    
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
            "order": [[1, "asc"]],
            "stateSave":true
        });
    
    
         new $.fn.dataTable.Buttons(table, {
            buttons: [
                {
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
    
    function eliminar_categoria(e,id){
        e.preventDefault();
        swal({
            title: "Borrar categoria",
            text: "¿ Esta seguro de eliminar esta categoria ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                //SQL DELETE;
                var sql ='DELETE from categoria where id=' + id;
                console.log(sql);
                //AJAX;
                $.ajax({
                type: 'POST',
                url:  'php/consulta.php',
                data: {sql:sql,tag: 'crud_productos'},
                success: function (data) {
                if(data==1){
                    swal("Delete!", "categoria elminada!", "success");
                    window.location.href="ver_categorias_productos.php";
                } 
                },
                error:function (request, status, error) {
                console.error("Error: Could not borrado");
                    }
                    });
                    } else {
                    return;
                    }
                });
    
    
    }
    
    window.onload = cargar_categorias