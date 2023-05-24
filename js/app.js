const btnAddArticule = document.querySelector('.botonadd');
const divArticulos = document.querySelector('#divArticulos');
//Funcion para eliminar un articulo
function eliminarArticulo(){
    const forms = document.querySelectorAll('form');
    console.log(forms);
    forms.forEach(form =>{
        form.addEventListener('click',(e)=>{
            e.preventDefault();
           if(e.target.classList.contains('restar')){
            let nodoPadre = e.target.parentNode.parentNode.parentNode;
            nodoPadre.style.display = 'none';
            console.log(nodoPadre);
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
                })
            })
        
        })
    })
}

//Funcion para añadir un nuevo articulo
const addArticule = (e)=>{
    e.preventDefault();
    let template='';
    const formulario = document.createElement('form');
    formulario.setAttribute('class','mt-1 container details');
    template = `
        <div class="row g-0">
            <div class="col-sm-3">
                <input type="text" name="nombre-articulo" class="form-control" placeholder="Articulo">
            </div>
            <div class="col-sm-3">
                <input type="number" name="valor-articulo" class="form-control" min="0" placeholder="Valor">
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

}
btnAddArticule.addEventListener('click',addArticule);
