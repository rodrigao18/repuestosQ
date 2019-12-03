	//INGREAR CATEGORIA
    function guardar_categoria(e) {
        e.preventDefault();
        var nombre_categoria = $("#nombre_categoria").val();
        var descripcion = $("#descripcion").val();
          var alias = $("#alias").val();
          //SQL SELECT;		
        var sql =	'insert into categoria (nombre_categoria)VALUES' +
                  '("' + nombre_categoria + '")';
        console.log(sql); 
          //AJAX
          $.ajax({
          type: 'POST',
          url:  'php/consulta.php',
          async:true,
          data: {sql:sql,tag:'crud_productos'},
          success: function (data) {
                      console.log(data);
                      if (data == 1) {
                          swal("Insert!", "Datos ingredos correctamente!", "success");
                          window.location.href = "ver_categorias_productos.php";
                      } 
          },
          error:function (request, status, error) {
                    console.error("Error: Could not guardarProveedor");
                  }
          });
      }