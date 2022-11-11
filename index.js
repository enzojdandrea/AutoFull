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

produc.innerHTML+=`
<div class="col div-carta">
    <div class="card carta">
        <img src="./assets/productos/creeled.jpg" class="card-img-top" alt="...">
        <div class="card-body carta-cuerpo">
            <h5 class="card-title carta-titulo">Card title</h5>
            <p class="card-text carta-texto">This is a longer card with supporting.</p>
            <span>$3500</span>
            <input class="form-check-input carta-check" type="checkbox" value="" id="flexCheckDefault">
        </div>
    </div>
</div>
`




// quiero agregar esto
/* <div class="col div-carta">
    <div class="card carta">
        <img src="./assets/productos/creeled.jpg" class="card-img-top" alt="...">
        <div class="card-body carta-cuerpo">
            <h5 class="card-title carta-titulo">Card title</h5>
            <p class="card-text carta-texto">This is a longer card with supporting.</p>
            <span>$3500</span>
            <input class="form-check-input carta-check" type="checkbox" value="" id="flexCheckDefault">
        </div>
    </div>
</div> */

