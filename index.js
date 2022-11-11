const listaProductos=[];
const produc=document.getElementById("productos");
const sub=document.getElementById("sub");
class producto{
    constructor(titulo,desripcion,precio,img){
        this.titulo=titulo;
        this.desripcion=desripcion;
        this.precio=precio;
        this.img=img;
    }
}
const creeLed=new producto("Cree Leed","Luz blanca de alta potencia","2500","./assets/productos/creeled.jpg");
listaProductos.push(creeLed);
const cubreAuto=new producto("Cubre Auto","Cobertor de Auto","10000","./assets/productos/cubreautos.jpg");
listaProductos.push(cubreAuto);
const fundaAcientos=new producto("Funda Aciento","Funda de Aciento simil cuero","3500","./assets/productos/fundaacientos.jpg");
listaProductos.push(fundaAcientos);
const polarizado=new producto("Plarizado","Lamina de alta calidad para proteccion solar","3000","./assets/productos/polarizados.jpg");
listaProductos.push(polarizado);
// console.log("listaProductos");
// console.log(listaProductos);

listaProductos.forEach(element => {
    produc.innerHTML+=`
<div class="col" id="div-carta">
    <div class="card" id="carta">
        <img id="carta-img" src="${element.img}" alt="...">
        <div class="card-body" id="carta-cuerpo">
            <h5 class="card-title" id="carta-titulo">${element.titulo}</h5>
            <p class="card-text" id="carta-texto">${element.desripcion}.</p>
            <span id="carta-precio">$${element.precio}</span>
            <input class="form-check-input carta-check" type="checkbox" value="" id="flexCheckDefault">
        </div>
    </div>
</div>
`
});

sub.onclick=()=>{
    const formulario=document.getElementById("formulario");
    console.log(formulario)
    // window.open("./reservacion.html")    
}
