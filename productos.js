const listaProductos=[];
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