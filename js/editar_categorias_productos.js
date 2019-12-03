	//VARIABLE GLOBAL;
	var ID;
	//CARGAR DATOS CATEGORIA;
function cargar_datos_categoria(id){
	ID=id;
	//SQL SELECT;
	var sql = 'select id,nombre_categoria from categoria where id='+id;
	console.log(sql);
	//AJAX;
	$.ajax({
	type: 'POST',
	url: 'php/consulta.php',
	data: {sql:sql,tag: 'array_de_datos'},

	success:function (data) {		
				var arreglo = JSON.parse(data);
				console.log(arreglo);
				mostrar_formulario(arreglo);		 
	},
	error:function (request, status, error) {
				console.error("Error: Could not UPDATE");
	}
	});
}
	//CARGAR FORMULARIO
function mostrar_formulario(arreglo){
  
	var id = arreglo[0][0];
	var nombre_categoria = arreglo[0][1];
	var descripcion = arreglo[0][2];
	var alias = arreglo[0][3];
	//NAMES INPUT;
	$("#id").val(id);
	$("#nombre_categoria").val(nombre_categoria);

}
	//EDITAR CATEGORIA;
function editar_categoria(e){
	e.preventDefault();
	var nombre_categoria = $("#nombre_categoria").val();
	
	//SQL UPDATE;
	var sql ='UPDATE categoria set nombre_categoria = "'+nombre_categoria+'"  where id = '+ID+'';
	console.log(sql);
	//AJAX;
	$.ajax({
	type: 'POST',
	url:  'php/consulta.php',
	data: {sql:sql,tag: 'crud_productos'},

	success:function (data) {		
				if(data==1){
					swal("Update!", "Categoria modificada", "success");
					window.location.href = "ver_categorias_productos.php";
				} 
	},
	error:function (request, status, error) {
		   console.error("Error: Could not UPDATE");
	}
 });
}