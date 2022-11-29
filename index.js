
const produc=document.getElementById("productos");
const sub=document.getElementById("sub");

const mostrarProductos = async ()=>{
    const productosfetch = await fetch("productos.json");
    const productosJSON = await productosfetch.json();
    productosJSON.forEach(element => {
        produc.innerHTML+=`
    <div class="col" id="div-carta">
        <div class="card" id="carta">
            <img class="card-img" id="carta-img" src="${element.img}" alt="...">
            <div class="card-body" id="carta-cuerpo">
                <h5 class="card-title" id="carta-titulo">${element.titulo}</h5>
                <p class="card-text" id="carta-texto">${element.descripcion}.</p>
                <span id="carta-precio">$${element.precio}</span>
                <input class="form-check-input carta-check" type="checkbox" value="" id="${element.codigo}">
            </div>
        </div>
    </div>
    `
    });
}

mostrarProductos();


sub.onclick=()=>{
    const formNombre=document.getElementById("form_nombre");
    const formApellido=document.getElementById("form_apellido");
    const formTelefono=document.getElementById("form_telefono");
    const formAuto=document.getElementById("form_auto");
    const nombre = formNombre.value;
    const apellido = formApellido.value;
    const telefono = formTelefono.value;
    const auto = formAuto.value;
    const listaCompra=[];
    
    if(parseInt(nombre.length)>=4 && parseInt(apellido.length)>4 && parseInt(telefono.length)>8 && parseInt(auto.length)>4){
        const cliente =[nombre,apellido,telefono,auto];
        const comprar = async ()=>{
            const productosfetch = await fetch("productos.json");
            const productosJSON = await productosfetch.json();
            productosJSON.forEach(e => {
                if(document.getElementById(`${e.codigo}`).checked){
                    listaCompra.push(e.codigo);
                    document.getElementById(`${e.codigo}`).checked=false;
                }
            });
            localStorage.setItem("cliente",JSON.stringify(cliente));
            localStorage.setItem("listaCompras",JSON.stringify(listaCompra));
            window.open("./reservacion.html","_self")    
        }
        comprar();        
    }else{
        alert("Debe completar todos los campos")
    }
    formNombre.value="";
    formApellido.value="";
    formTelefono.value="";
    formAuto.value="";   
}

