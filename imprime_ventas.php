<?php 
# Cargamos la librería dompdf.
//require_once 'lib/dompdf/dompdf_config.inc.php';

//$request = array("cotizacion"=>$_POST["cotizacionNumero"],"rut"=>$_POST["id"],"estado"=>$_POST["estadoVenta"]);

$fecha_inicio=$_POST["fecha_inicio_text"];
$fecha_termino=$_POST["fecha_termino_text"];
// $idClientePdf=$_POST["id_cliente"];
// $estadoVneta=$_POST["estadoVenta"];
// $idVenta=$_POST['id'];
//incluimos el template
ob_start(); 
require_once "detalle_ventas_por_dia.php";
$template = ob_get_clean();

//echo $template;

require_once 'lib/dompdf/autoload.inc.php';
use Dompdf\Dompdf;

$mipdf = new Dompdf();
$mipdf->load_Html($template);

#Definimos el tamaño y orientación del papel que queremos.#O por defecto cogerá el que está en el fichero de configuración.
$mipdf->set_paper("A4", "landscape");

//render
$mipdf->render();

#Enviamos el fichero PDF al navegador.
$mipdf->stream("cotizacion", array("Attachment" => 0));
//0: vista preliminar
//1: descargar pdf


?>
