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

clien.innerHTML+=`
    <div class="container text-center ">
        <div class="row justify-content-center">
            <div class="card text-bg-primary mb-3 col-3">
                <div class="card-header">
                    <h2 class="">Gracias <span class="span-cliente">${datosCliente[0]} ${datosCliente[1]}</span> por comprar nuestros productos.</h2>
                </div>
                <div class="card-body">
                    <p class="card-text">El Total de lo comprado es <span class="text-warning">$${tot}</span>.</p>
                </div>
            </div>
        </div>
    </div>
`


console.log(datosCliente);
console.log(tot);

