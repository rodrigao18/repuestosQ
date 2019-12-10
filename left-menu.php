<?php
        session_start();

        if (!isset($_SESSION["user"])) {
            ?>
<script>
	window.location.href = "login.php";

</script>
<?php
        exit();
        }
        $user           = $_SESSION["user"];
        $correo         = $_SESSION["correo"];
        $idVendedor	    = $_SESSION['idVendedor'];
		$nivel          = $_SESSION['nivel'];
		$sucursal=$_SESSION['sucursal'];
		include "php/consulta.php";
        $sql = "SELECT id, tipo_turno FROM turnos WHERE fecha_termino_turno is NULL";
        $turno = consultar($sql);
        $idTurno=0;
        $idTipoTurno=0;
		$tipoTurno='';
		$copyright='<i class="fas fa-copyright"></i>	2019 Copyright Todos los derechos reservados -
		 <i class="fas fa-envelope"></i>  andres.chapa@yoimplemento.cl </p>';
		 

?>
	<!-- Sidebar menu-->
	<div class="app-sidebar__overlay" data-toggle="sidebar"></div>
	<aside class="app-sidebar">
		<div class="app-sidebar__user "><i class="fas fa-laptop fa-3x"></i> 
			<div>
				<p class="app-sidebar__user-name pl-3">
						<?php echo $user; ?>
				</p>
				<p class="app-sidebar__user-designation pl-3">
					<?php if ($nivel==0) {
    echo "Administrador";
} elseif ($nivel==1) {
    echo "Vendedor";
} elseif ($nivel==2) {
    echo "Usuario";
}?>



				</p>
				<p class="app-sidebar__user-designation pl-3">
					<?php if (count($turno) > 0) {
    $idTurno=$turno[0]['id'];
	$idTipoTurno=$turno[0]['tipo_turno'];
	
    if ($turno[0]['tipo_turno']==1) {
        $tipoTurno='mañana';
    } else {
        $tipoTurno='tarde';
    }
    echo "Turno: ". $tipoTurno . "(".$turno[0][0].")" ;
} else {
    echo "Turno : Sin turno";
    $idTurno=0;
    $idTipoTurno=0;
} 
      ?>

				</p>

	<p class="app-sidebar__user-designation pl-3">
	<?php if ($sucursal==1) {
    echo "Sucursal : Terminal-1";
} elseif ($sucursal==2) {
    echo "Sucursal : Terminal-2";
} ?>

	</p>							
			</div>
		</div>
		<ul class="app-menu">
			<li><a class="app-menu__item" href="index.php"><i class="app-menu__icon fas fa-home "></i><span class="app-menu__label">Inicio</span></a></li>
<!-- Ventas -->
			<li class="treeview"><a class="app-menu__item" href="#" data-toggle="treeview"><i class="app-menu__icon fas fa-store"></i><span class="app-menu__label">Ventas</span><i class="treeview-indicator fa fa-angle-right"></i></a>
				<ul class="treeview-menu">
				<li><a class="treeview-item" href="ingresar_venta.php"><i class="icon fas fa-angle-right"></i> Ingresar ventas </a></li>
					<li><a class="treeview-item" href="ver_ventas.php"><i class="icon fas fa-angle-right"></i> Ventas</a></li>					
					<li><a class="treeview-item" href="ver_cotizaciones.php"><i class="icon fas fa-angle-right"></i> Cotizaciones</a></li>
					<li><a class="treeview-item" href="ver_guias.php"><i class="icon fas fa-angle-right"></i> Guías</a></li>
					<li><a class="treeview-item" href="ver_facturas_ventas.php"><i class="icon fas fa-angle-right"></i> Facturas ventas</a></li>

				</ul>

			</li>

			<!-- Ordenes de compra -->

			<!-- <?php
            $reparaciones='<li class="treeview"><a class="app-menu__item" href="#" data-toggle="treeview"><i class="app-menu__icon fas fa-truck-loading"></i><span class="app-menu__label">Reparaciones</span><i class="treeview-indicator fa fa-angle-right"></i></a>
				<ul class="treeview-menu">
					<li><a class="treeview-item" href="ver_reparaciones.php"><i class="icon fas fa-angle-right"></i> Ver reparaciones</a></li>
					
				</ul>
			
			</li>';
            if ($nivel==0) {
                echo $reparaciones;
            } else {
                echo "";
            }
            ?> -->
			<!--Productos nuevos--->
			<?php
            $menuProductosNuevos='<li class="treeview"><a class="app-menu__item" href="#" data-toggle="treeview"><i class="app-menu__icon fas fa-shopping-cart"></i><span class="app-menu__label">Productos </span><i class="treeview-indicator fa fa-angle-right"></i></a>
				<ul class="treeview-menu">
					<li><a class="treeview-item" href="ver_productos.php"><i class="icon fas fa-angle-right"></i> Ver productos </a></li>
					<li><a class="treeview-item" href="ingresar_productos_nuevos.php"><i class="icon fas fa-angle-right"></i> Ingresar productos </a></li>
					<li><a class="treeview-item" href="ver_categorias_productos.php"><i class="icon fas fa-angle-right"></i> Ver categorias productos </a></li>
					<li><a class="treeview-item" href="ver_marcas.php"><i class="icon fas fa-angle-right"></i> Ver marcas </a></li>

				</ul>
			</li>';
            if ($nivel==0) {
                echo $menuProductosNuevos;
            } else {
                echo "";
            }
            ?>

			<?php
			$menuInventario='<li class="treeview"><a class="app-menu__item" href="#" data-toggle="treeview"><i class="app-menu__icon fas fa-clipboard-list"></i><span class="app-menu__label">Inventario </span><i class="treeview-indicator fa fa-angle-right"></i></a>
			<ul class="treeview-menu">
				<li><a class="treeview-item" href="ver_inventarios.php"><i class="icon fas fa-angle-right"></i> Ver registros </a></li>
				<li id="ingresarProductos"><a class="treeview-item" href="ingresar_inventario.php"><i class="icon fas fa-angle-right"></i> Ingresar inventario </a></li>
				
			</ul>
			</li>';
			if ($nivel==1 || $nivel==0) {
			//echo //$menuInventario;
			} else {
			echo "";
			}
			?>
			
			<!--Clientes--->
			<?php
            $Clientes='<li class="treeview"><a class="app-menu__item" href="#" data-toggle="treeview"><i class="app-menu__icon fa fa-user"></i><span class="app-menu__label">Clientes</span><i class="treeview-indicator fa fa-angle-right"></i></a>
				<ul class="treeview-menu">
					<li><a class="treeview-item" href="ver_clientes.php"><i class="icon fas fa-angle-right"></i> Ver clientes</a></li>
					<li><a class="treeview-item" href="ingresar_clientes.php"><i class="icon fa fa-angle-right"></i> Ingresar clientes</a></li>

				</ul>
			</li>';
            if ($nivel==1 || $nivel==0) {
                echo  $Clientes;
            } else {
                echo "";
            }
            ?>

			<!-- <?php
            $Tecnicos='<li class="treeview"><a class="app-menu__item" href="#" data-toggle="treeview"><i class="app-menu__icon fas fa-user-cog"></i><span class="app-menu__label">Técnicos</span><i class="treeview-indicator fa fa-angle-right"></i></a>
				<ul class="treeview-menu">
					<li><a class="treeview-item" href="ver_tecnicos.php"><i class="icon fas fa-angle-right"></i> Ver técnicos</a></li>
					<li><a class="treeview-item" href="ingresar_tecnicos.php"><i class="icon fa fa-angle-right"></i> Ingresar técnicos</a></li>

				</ul>
			</li>';
            if ($nivel==1 || $nivel==0) {
                echo  $Tecnicos;
            } else {
                echo "";
            }
            ?> -->
	<!-- Vendedores -->

	<?php
            $menuProveedores='<li class="treeview"><a class="app-menu__item" href="#" data-toggle="treeview"><i class="app-menu__icon fas fa-truck"></i><span class="app-menu__label">Proveedores</span><i class="treeview-indicator fa fa-angle-right"></i></a>
				<ul class="treeview-menu">
					<li><a class="treeview-item" href="ver_proveedores.php"><i class="icon fas fa-angle-right"></i> Ver proveedores</a></li>
					<li><a class="treeview-item" href="ingresar_proveedores.php"><i class="icon fas fa-angle-right"></i> ingresar proveedores</a></li>
				
				</ul>
			</li>';
            if ($nivel==0) {
                echo $menuProveedores;
            } else {
                echo "";
            }
            ?>
			<!--Facturas-->
	<?php
            $menuFacturas='<li class="treeview"><a class="app-menu__item" href="#" data-toggle="treeview"><i class="app-menu__icon fas fa-clipboard-list"></i><span class="app-menu__label">Facturas</span><i class="treeview-indicator fa fa-angle-right"></i></a>
				<ul class="treeview-menu">
					<li><a class="treeview-item" href="ver_facturas.php"><i class="icon fas fa-angle-right"></i> Listado facturas</a></li>	
					<li><a class="treeview-item" href="ver_facturas_compras.php"><i class="icon fas fa-angle-right"></i> Facturas de compras</a></li>					
				
				</ul>
			</li>';
            if ($nivel==0) {
                echo $menuFacturas;
            } else {
                echo "";
            }
            ?>
			<!-- Vendedores -->

			<?php
            $menuVendedores='<li class="treeview"><a class="app-menu__item" href="#" data-toggle="treeview"><i class="app-menu__icon fas fa-users"></i><span class="app-menu__label">Vendedores</span><i class="treeview-indicator fa fa-angle-right"></i></a>
				<ul class="treeview-menu">
					<li><a class="treeview-item" href="ver_vendedores.php"><i class="icon fas fa-angle-right"></i> Ver vendedores</a></li>
					<li><a class="treeview-item" href="ingresar_vendedores.php"><i class="icon fas fa-angle-right"></i> ingresar vendedor</a></li>
				
				</ul>
			</li>';
            if ($nivel==0) {
                echo $menuVendedores;
            } else {
                echo "";
            }
            ?>



<!-- <?php
$menuFlujoCajas='<li class="treeview"><a class="app-menu__item" href="#" data-toggle="treeview"><i class="app-menu__icon fas fa-chart-line"></i><span class="app-menu__label">Flujo de cajas</span><i class="treeview-indicator fa fa-angle-right"></i></a>
			<ul class="treeview-menu">
			<li><a class="treeview-item" href="resultado_operacional.php"><i class="icon  fas fa-angle-right"></i>  Ingresar gastos generales</a></li>		
			<li><a class="treeview-item" href="ver_categorias.php"><i class="icon fas fa-angle-right"></i> Ver categorias de gastos</a></li>

			</ul>
			</li>';
if ($nivel==0) {
    echo $menuFlujoCajas;
} else {
    echo "";
}

?> -->

 <li class="treeview"><a class="app-menu__item" href="#" data-toggle="treeview"><i class="app-menu__icon fas fa-clock"></i><span class="app-menu__label">Turnos</span><i class="treeview-indicator fa fa-angle-right"></i></a>
				<ul class="treeview-menu">
						<li id="inicioTurnoLink"><a class="treeview-item" href="inicio_turno.php"><i class="icon fas fa-angle-right"></i> Inicio turno</a></li>
						<li id="cambioTurnoLink"><a class="treeview-item" href="cambio_turno.php"><i class="icon fas fa-angle-right"></i> Cambio de turno </a></li>
						<li id="finTurnoLink"><a class="treeview-item" href="fin_turno.php"><i class="icon fas fa-angle-right"></i> Fin de turno </a></li>

				</ul>
			</li>
			
			<!-- <?php
$retiro='<li class="treeview"><a class="app-menu__item" href="#" data-toggle="treeview"><i class="app-menu__icon fas fa-cart-arrow-down"></i><span class="app-menu__label">Retiro de dinero</span><i class="treeview-indicator fa fa-angle-right"></i></a>
			<ul class="treeview-menu">
			<li><a class="treeview-item" href="ver_retiro_dinero.php"><i class="icon fas fa-angle-right"></i> Ver retiro de dinero</a></li>
			<li><a class="treeview-item" href="retiro_dinero.php"><i class="icon fas fa-angle-right"></i> Retirar</a></li>
			

			</ul>
			</li>';
if ($nivel==0) {
    echo $retiro;
} else {
    echo "";
}

            ?>			 -->
			<?php
$menuRespaldarBase='<li class="treeview"><a class="app-menu__item" href="#" data-toggle="treeview"><i class="app-menu__icon fas fa-database"></i><span class="app-menu__label">Respaldar base</span><i class="treeview-indicator fa fa-angle-right"></i></a>
			<ul class="treeview-menu">
			<li><a class="treeview-item" href="respaldar_base.php"><i class="icon fas fa-cloud-download-alt"></i> Guardar archivo</a></li>
			

			</ul>
			</li>';
if ($nivel==0) {
    echo $menuRespaldarBase;
} else {
    echo "";
}

            ?>			

		</ul>
	
	</aside>
	<script>

var ID_TURNO = <?php echo $idTurno;?>;
var TIPO_TURNO = <?php echo $idTipoTurno;?>;
var ID_VENDEDOR = <?php echo $idVendedor; ?>;
var NIVEL = <?php echo $nivel;?>;
var SUCURSAL= <?php echo $sucursal;?>;

if(SUCURSAL==1){
var sucur="Terminal-1";	
}else if(SUCURSAL==2){
var sucur="Terminal-2";	
}
console.error(sucur);
document.getElementById("sucursal").innerHTML=sucur;
if(ID_TURNO==0){

   document.getElementById('cambioTurnoLink').style.display ='none';
   document.getElementById("finTurnoLink").style.display ='none';
}

if(TIPO_TURNO==1){
   document.getElementById("inicioTurnoLink").style.display ='none';

}
if(TIPO_TURNO==2){
   document.getElementById("inicioTurnoLink").style.display ='none';
   document.getElementById("cambioTurnoLink").style.display ='none';
}
if(NIVEL==1){
   document.getElementById("ingresarProductos").style.display ='none';
   //document.getElementById("importar").style.display ='none';
}

</script>