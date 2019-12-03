var editando = false;
var MARGEN;
//funcion para tranformar una celda editable
function transformarEnEditable(nodo,indice) {

	//El nodo recibido es SPAN

	if (editando == false) {
		//*-editar el nombre del producto s el indice es igual a 1
		if(indice==1){
				
			var nodoTd = nodo.parentNode; //Nodo TD
			var nodoTr = nodoTd.parentNode; //Nodo TR
			var nodosEnTr = nodoTr.getElementsByTagName('td');
			var nombreEditable = nodoTd.textContent;
			var nuevoCodigoHtmlNombre= '<td> <textarea type="text" rows="3" id="nombre" style="width:100%;" onkeyup="salir(event,this,1)" onkeypress="pulsar(event,this,1)">' + nombreEditable + '</textarea>  </td>';
			
			nodoTd.innerHTML = nuevoCodigoHtmlNombre;

			}
			if(indice==2){
				var nodoTd = nodo.parentNode; //Nodo TD
				var nodoTr = nodoTd.parentNode; //Nodo TR
				var nodosEnTr = nodoTr.getElementsByTagName('td');
				var codigoPrEditable = nodoTd.textContent;
				var nuevoCodigoHtmlCodigoPr= '<td> <textarea type="text" rows="3" id="codigo" style="width:100%;" onkeyup="salir(event,this,2)" onkeypress="pulsar(event,this,2)">' + codigoPrEditable + '</textarea>  </td>';
				
				nodoTd.innerHTML = nuevoCodigoHtmlCodigoPr;		
			}
			

		
		editando = "true";
	} else {
		alert('Solo se puede editar una línea. Recargue la página para poder editar otra');
	}


}

function pulsar(e, nodo,editaNombre) {

	if (e.keyCode === 13 && !e.shiftKey) {
		e.preventDefault();
	//*-editar nombre 	
	if(editaNombre==1){

		var nodoTd = nodo.parentNode; //Nodo TD
		var nodoTr = nodoTd.parentNode; //Nodo TR		
		var nodosEnTr = nodoTr.getElementsByTagName('td');
    var nombreProducto = document.getElementById('nombre').value;
	var idOrdenR = nodosEnTr[0].textContent;		
	var idProducto = nodosEnTr[7].textContent;
		var nombreEditable = document.getElementById('nombre').value;
	console.error('idProducto ' + idProducto);	

		$.notify({
			title: "Nombre modificado : ",
			message: "Se actualizó la información de la factura",
			icon: 'fas fa-check'
		}, {
				type: "info",
				placement: {
					from: "top",
					align: "right"
				},
				offset: 70,
				spacing: 70,
				z_index: 1031,
				delay: 1000,
				timer: 2000
			});

		
			//editarNonmbre(idProducto,nombreEditable);

			var nuevoCodigoHtmlNombre = '<td> <span onclick="transformarEnEditable(this,1)" style="cursor:pointer;">' + nombreEditable + '</span> </td>';
        
			nodoTd.innerHTML = nuevoCodigoHtmlNombre;

	//*-sino edito precio	
	}else if(editaNombre==2){
       
		var nodoTd = nodo.parentNode; //Nodo TD
		var nodoTr = nodoTd.parentNode; //Nodo TR		
		var nodosEnTr = nodoTr.getElementsByTagName('td');
    	var nombreProducto = document.getElementById('codigo').value;
    	var idOrdenR = nodosEnTr[0].textContent;		
		var codigoEditable = document.getElementById('codigo').value;
		var idProducto = nodosEnTr[7].textContent;
		
		$.notify({
			title: "Código modificado : ",
			message: "Se actualizó la información de la factura",
			icon: 'fas fa-barcode'
		}, {
				type: "success",
				placement: {
					from: "top",
					align: "right"
				},
				offset: 70,
				spacing: 70,
				z_index: 1031,
				delay: 1000,
				timer: 2000
			});

			editarCodiProveedor(idProducto,codigoEditable);

			var nuevoCodigoHtmlNombre = '<td> <span onclick="transformarEnEditable(this,2)" style="cursor:pointer;">' + codigoEditable + '</span> </td>';
        
			nodoTd.innerHTML = nuevoCodigoHtmlNombre;

}
		

		editando = false;

	}
}
//*-salir de la celda editable si no deseo editar
function salir(event, nodo,salirEscape){
  if (event.code === 'Escape' || event.keyCode === 27) {
	console.log('escape');
	event.preventDefault();

	if(salirEscape==1){

		var nodoTd = nodo.parentNode; //Nodo TD
		var nodoTr = nodoTd.parentNode; //Nodo TR		
		var nodosEnTr = nodoTr.getElementsByTagName('td');
    var nombreProducto = document.getElementById('nombre').value;
    var idOrdenR = nodosEnTr[0].textContent;		
		var nombreEditable = document.getElementById('nombre').value;
			var nuevoCodigoHtmlNombre = '<td> <span class="editar" onclick="transformarEnEditable(this,1)" style="cursor:pointer;"> ' + nombreEditable + '</span> </td>';
			nodoTd.innerHTML = nuevoCodigoHtmlNombre;


	}
	if(salirEscape==2){

		var nodoTd = nodo.parentNode; //Nodo TD
		var nodoTr = nodoTd.parentNode; //Nodo TR		
		var nodosEnTr = nodoTr.getElementsByTagName('td');
    var nombreProducto = document.getElementById('codigo').value;
    var idOrdenR = nodosEnTr[0].textContent;		
		var codigoEditable = document.getElementById('codigo').value;
			var nuevoCodigoHtmlNombre = '<td> <span class="editar" onclick="transformarEnEditable(this,2)" style="cursor:pointer;"> ' + codigoEditable + '</span> </td>';
			nodoTd.innerHTML = nuevoCodigoHtmlNombre;


	}

		editando = false;
	  }
}



