function guardar_grafico1(){
	$('#grafico').html2canvas({
		onrendered: function (canvas) {
			var grafico1=canvas.toDataURL("image/jpg", 1.0);		
			
			document.getElementById('grafico_para_pdf_1').value = grafico1;
			guardar_grafico2();
		}
		
	});
}
function guardar_grafico2(){
	$('#graficoBarras').html2canvas({
		onrendered: function (canvas) {
			var grafico2=canvas.toDataURL("image/jpg", 1.0);		
			
			document.getElementById('grafico_para_pdf_2').value = grafico2;
			guardar_grafico3();
		}		
	});
}
function guardar_grafico3(){
	$('#graficoBarrasClientes').html2canvas({
		onrendered: function (canvas) {
			var grafico3=canvas.toDataURL("image/jpg", 1.0);		
		
			document.getElementById('grafico_para_pdf_3').value = grafico3;
			guardar_grafico4();
		}		
	});
}
function guardar_grafico4(){
	$('#graficoBarrasProductosVendidos').html2canvas({
		onrendered: function (canvas) {
			var grafico4=canvas.toDataURL("image/jpg", 1.0);		
		
			document.getElementById('grafico_para_pdf_4').value = grafico4;
			guardar_grafico5();
		}		
	});
}
function guardar_grafico5(){
	$('#graficoVentasMensual').html2canvas({
		onrendered: function (canvas) {
			var grafico5=canvas.toDataURL("image/jpg", 1.0);		
		
			document.getElementById('grafico_para_pdf_5').value = grafico5;
			guardar_grafico6();
		}		
	});
}
function guardar_grafico6(){
	$('#graficoRentabilidad').html2canvas({
		onrendered: function (canvas) {
			var grafico6=canvas.toDataURL("image/jpg", 1.0);		
			
			document.getElementById('grafico_para_pdf_6').value = grafico6;
			guardar_grafico7();
		}		
	});
}
function guardar_grafico7(){
	$('#graficorRentabilidadNota').html2canvas({
		onrendered: function (canvas) {
			var grafico7=canvas.toDataURL("image/jpg", 1.0);			
			document.getElementById('grafico_para_pdf_7').value = grafico7;
			guardar_grafico8();
		}		
	});
}
function guardar_grafico8(){
	$('#graficoVentasMensual').html2canvas({
		onrendered: function (canvas) {
			var grafico8=canvas.toDataURL("image/jpg", 1.0);			
			document.getElementById('grafico_para_pdf_8').value = grafico8;
			canvas_imagen();
		}		
	});
}

function canvas_imagen() {
	
	document.getElementById('dato_para_pdf_1').value = PORCENTAJE_NOTA_COTIZACION;
	document.getElementById('dato_para_pdf_2').value = PORCENTAJE_NOTA_PEDIDO;
	document.getElementById('dato_grafico2_vendedor1_coti').value = ARRAY_COTIZACIONES_PHP;
	document.getElementById('dato_grafico2_vendedor2_coti').value = ARRAY_NOTA_PHP;
	
	
	console.log(FECHA_2);
	document.getElementById('fecha_1').value = FECHA_1;
	document.getElementById('fecha_2').value = FECHA_2;
	document.getElementById('arrayGanancia').value = ARRAYGANANCIA;
	document.getElementById('arrayUtilidad').value =ARRAYUTILIDAD;
	document.getElementById('arrayDiaMes').value =ARRAYDIAMES;
	document.getElementById('promedioGanancia').value = PROMEDIOGANANCIA;
	document.getElementById('promedioVenta').value = PROMEDIOVENTA;



	/*************************************************************************** */	
	console.error("Imagenes renderizadas se activa el boton PDF");
	if (NIVEL > 0) {
		document.getElementById('crear_pdf').disabled = true;

	} else {
		document.getElementById('crear_pdf').disabled = false;
	}



}
