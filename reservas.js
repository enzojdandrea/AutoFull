const produc=document.getElementById("productos");

listaProductos.forEach(element => {
    const titulo=element.titulo.replaceAll(" ","");
    produc.innerHTML+=`
<div class="col" id="div-carta">
    <div class="card" id="carta">
        <img id="carta-img" src="${element.img}" alt="...">
        <div class="card-body" id="carta-cuerpo">
            <h5 class="card-title" id="carta-titulo">${element.titulo}</h5>
        </div>
    </div>
</div>
`
});