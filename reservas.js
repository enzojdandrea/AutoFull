const produc=document.getElementById("productos");
const clien=document.getElementById("cliente");
const listaProComprados = JSON.parse(localStorage.getItem("listaCompras"));
const datosCliente = JSON.parse(localStorage.getItem("cliente"));
let tot=0;

console.log(listaProComprados);

listaProComprados.forEach(element => {
    listaProductos.forEach(e=>{
        if(element===e.codigo){
            console.log(e.codigo);
            console.log(e.precio);
            tot+=parseInt(e.precio);
            produc.innerHTML+=`
            <div class="col" id="div-carta">
                <div class="card" id="carta">
                    <img class="card-img" id="carta-img" src="${e.img}" alt="...">
                    <div class="card-body" id="carta-cuerpo">
                        <h5 class="card-title" id="carta-titulo">${e.titulo}</h5>
                    </div>
                </div>
            </div>
            `
        }
    })
    
});


console.log(datosCliente);
console.log(tot);

