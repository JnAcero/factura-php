<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/bootstrap/bootstrap.min.css">
    <link rel="stylesheet" href="./css/style.css">
    <script src="js/bootstrap/bootstrap.min.js" defer></script>
    <title>Document</title>
</head>

<body>
    <div class="container w-50">
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
            <div class="card-body">
                <div class="container details">
                    <div class="row g-0">
                        <div class="col">
                            <label>Nombre</label>
                            <input type="text" name="nombre-articulo" class="form-control">
                        </div>
                        <div class="col">
                            <label>Valor</label>
                            <input type="number" name="valor-articulo" class="form-control">
                        </div>
                        <div class="col">
                            <label>Cantidad</label>
                            <input type="text" name="cantidad" class="form-control">
                        </div>
                        <div class="col">
                            <label>Total</label>
                            <input type="text" name="total" class="form-control">
                        </div>
                        <div class="col">
                           <label></label>
                           <div class="d-flex">                            
                            <button class="btn btn-warning">+</button>
                            <button class="btn btn-success">-</button>
                        </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>

</body>

</html>