<!DOCTYPE html>
<html lang="en">

<head>
    <title>Sistema Cotización</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Main CSS-->
    <link rel="stylesheet" type="text/css" href="css/main.css?vknet28">
    <!-- Font-icon css-->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">

</head>

<body class="app sidebar-mini rtl">
    <?php include "header.php"; ?>
    <?php include "left-menu.php"; ?>
    <!-- Sidebar menu-->
    <div class="app-sidebar__overlay" data-toggle="sidebar"></div>

    <main class="app-content">
        <div class="app-title">
            <div>
                <h1><i class="fas fa-edit"></i> Editar categoría </h1>
                <p>Editar categoría</p>
            </div>
            <ul class="app-breadcrumb breadcrumb side">
                <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
                <li class="breadcrumb-item">Clientes</li>
                <li class="breadcrumb-item active"><a href="#">Ingresar categoría</a></li>
            </ul>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="tile">
                    <div class="tile-body"> </div>
                    <!--FORMULARIO-->
                    <form method="POST" id="formularioEd">
                        <div class="form-group">
                            <input type="hidden" class="form-control" id="id" name="id" aria-describedby="emailHelp">
                            <label for="exampleInputEmail1">Nombre Categoría</label>
                            <input type="text" class="form-control" id="nombre_categoria" name="nombre_categoria">
                        </div>
                      
                        <button class="btn btn-primary pull-right" onclick="editar_categoria(event)">Editar Categoria</button>
                    </form>
                </div>
            </div>
        </div>
    </main>
    <!-- Essential javascripts for application to work-->
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/main.js"></script>
    <!-- The javascript plugin to display page loading on top-->
    <script src="js/plugins/pace.min.js"></script>
    <script type="text/javascript" src="js/plugins/bootstrap-notify.min.js"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script type="text/javascript" src="js/editar_categorias_productos.js?vknet28"></script>
    <script type="text/javascript" src="js/funciones.js?vknet28"></script>
    <!-- Page specific javascripts-->
    <!-- Google analytics script-->


    <script>
        /*ID CATEGORIA*/
        var id = <?php echo $_POST['id'];?>;
        window.onload = cargar_datos_categoria(id);
    </script>

</body>

</html>