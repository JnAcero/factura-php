
const btnAddArticule = document.querySelector('.botonadd');
const divArticulos = document.querySelector('#divArticulos');
const btnGuardar = document.querySelector('#saveData');
const inputfecha = document.querySelector("input[name='fecha']");
let contadorIds = 0;
//Arreglos para encabezado y detalle
var invoiceHeaders = [];
var invoiceDetails = [];
//Funcion para fecha de factura
function updateFecha(){
    inputfecha.valueAsDate = new Date();
}
updateFecha();


//Funcion para eliminar un articulo
function eliminarArticulo(){
    const forms = document.querySelectorAll('form');
    console.log(forms);
    forms.forEach(form =>{
        form.addEventListener('click',(e)=>{
            e.preventDefault();
           if(e.target.classList.contains('restar')){
            let formHijo = e.target.parentNode.parentNode.parentNode;
            try{
                divArticulos.removeChild(formHijo);
            }catch{}
            
           }
        })
    })
}
//Funcion para calcular el total
function calcularTotal(){
    const inputValores = document.querySelectorAll("input[name='valor-articulo']");
    const inputCantidad = document.querySelectorAll("input[name='cantidad']");
    console.log(inputValores);
    inputValores.forEach(input=>{
        input.addEventListener('change',(e)=>{
            inputCantidad.forEach(ele=>{
                let valor = e.target.value;
                ele.addEventListener('change',(a)=>{
                    let cantidad = a.target.value;
                    console.log(valor, cantidad);
                    let nodoPadre = a.target.parentNode.parentNode;
                    nodoPadre.querySelector("input[name='total']").value = valor*cantidad;
                    a.stopImmediatePropagation();
                    a.preventDefault();
                })
            })
        e.stopImmediatePropagation();
        e.preventDefault();
        })
    })
}
//Funcion para enviar el formulario a PHP
async function submitForm(){
    console.log('entro');
    let data ={
        header:invoiceHeaders,
        details:invoiceDetails
    }
     await fetch('../php/api.php',{
        'method': 'POST',
        'headers':new Headers({'Content-Type': 'application/json'}),
        'body':JSON.stringify(data)
    })
    .then(response=>{
        return response.json();
    })
    .then(res=>{
        console.log(res);
    })
    
}

//Funcion para guardar DATOS
function guardarDatos(){
    btnGuardar.addEventListener("click", (e)=>{
        var frmData = document.querySelector("#formHeaders");
        console.log("Hola ");
        let dataHeader = Object.fromEntries(new FormData(frmData));
        invoiceHeaders.push(dataHeader);
        console.log(invoiceHeaders);

        const frmsDetails = document.querySelectorAll(".details");
        frmsDetails.forEach(frm=>{
            let dataDetail = Object.fromEntries(new FormData(frm));
            invoiceDetails.push(dataDetail);
        })
        console.log(invoiceDetails);
        e.preventDefault();
        e.stopImmediatePropagation();
        submitForm();
    });
}

//Funcion para añadir un nuevo articulo
const addArticule = (e)=>{
    contadorIds++;
    e.preventDefault();
    let template='';
    const formulario = document.createElement('form');
    formulario.setAttribute('class','mt-2 container details');
    formulario.setAttribute('id',contadorIds);
    template = `
        <div class="row g-0">
            <div class="col-sm-3">
                <input type="text" name="nombre-articulo" class="form-control" placeholder="Articulo">
            </div>
            <div class="col-sm-3">
                <input type="number" name="valor-articulo" class="form-control" min="0" placeholder="Valor $">
            </div>
            <div class="col-sm-2">
                <input type="number" name="cantidad" class="form-control"  min="0" placeholder="Cantidad" value="0">
            </div>
            <div class="col-sm-3">
                <input type="text" name="total" class="form-control" placeholder="Total">
            </div>
            <div class="col-sm-1 btns div-btns">            
                <button class="btn btn-danger restar">-</button>
            </div>
        </div>          
 `;
    formulario.innerHTML=template;
    divArticulos.appendChild(formulario);
    eliminarArticulo();
    calcularTotal();
    guardarDatos();
}
guardarDatos();
btnAddArticule.addEventListener('click', addArticule);

