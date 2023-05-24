<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/bootstrap/bootstrap.min.css">
    <link rel="stylesheet" href="./css/style.css">
    <script src="js/bootstrap/bootstrap.min.js" defer></script>
    <script src="./js/app.js" defer></script>
    <title>Document</title>
</head>

<body>
    <div class="container w-75">
        <div class="card">
            <div class="card-header">
                <h5>Factura</h5>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-6">
                        <label>Numero Factura</label>
                        <input type="text" name="num-factura" class="form-control">
                    </div>
                    <div class="col-sm-6">
                        <label>Fecha</label>
                        <input type="date" name="fecha" class="form-control">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <label>N. Documneto</label>
                        <input type="text" name="documento" class="form-control">
                    </div>

                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <label>Nombre</label>
                        <input type="text" name="nombre" class="form-control">
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
        <div class="card-header">
                <h5>Articulos</h5>
            </div>
            <div class="card-body" id="divArticulos">
            </div>
        </div>
        <div class="card d-flex">
            <button class="botonadd">+</button>
        </div>

    </div>

</body>

</html>