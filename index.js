let nombre = prompt ("ingrese su nombre")
let Variableletra = nombre.charAt(0).toUpperCase()

if (nombre !="") 
{console.log ("Hola" + "" + nombre)}
else{
    console.log ("No ingresaste tu nombre")
    console.log (Variableletra +nombre.slice(1))
    alert ("Hola" +  nombre)
    nombre = prompt ("ingresa tu nombre nuevamente")
    console.log (Variableletra +nombre.slice(1))
    alert ("Hola" +  nombre)
 }

 function Persona (obj){
    this.nombre = obj.nombre
    this.edad = obj.edad
    this.trabaja = obj.trabaja
    this.profecion = obj.profecion
    this.CambiarNombre = function (NuevoNombre) {
        this.nombre = NuevoNombre
    }
 
 }

 let Sebastian = new Persona ( {
    nombre: 'Sebastian',
    edad: 22,
    trabaja: 'ture',
    profecion: 'Jugador de rugby',
 } )

 console.log(Sebastian)

 Sebastian.CambiarNombre('Sebastian Pechi')
 console.log(Sebastian)

 class productos {
    constructor(OBJ) {
        this.Nombre = OBJ.Nombre.toUpperCase()
        this.Cantidad = parseInt(OBJ.Cantidad)
        this.Precio = Number(OBJ.Precio)
    }

     //Metodo
     Iva = () => this.Precio * 1.21
     total = () => this.Precio * this.Cantidad
     Verproducto = () => {
        return `Nombre: ${this.nombre} Cantidad: ${this.cantidad} Precio: ${this.precio}`
     }

 }

let trueOfalse = true

const Nombre = prompt('ingresa el Nombre del producto')
const Cantidad = prompt('ingrece la Cantidad del producto')
const Precio = prompt('ingrse el Precio del producto')

function ingresoproducto() {
    while(trueOfalse){
        if(Nombre === '' || Cantidad === '' || Precio === ''){
            alert('NO PUEDES DEJAR ESPACIOS VACIOS')
            Nombre = prompt('ingresa el Nombre del producto')
            Cantidad = prompt('ingrece la Cantidad del producto')
            Precio = prompt('ingrse el Precio del producto')
            trueOfalse = true
        } else {
           let producto = new productos({
              Nombre: Nombre,
              Cantidad: Cantidad,
              Precio: Precio,
           })

             console.log(producto)

             producto.Iva()
             producto.total()
             alert(producto.Verproducto())



              trueOfalse = false
            
        }  
    
    }
}



let nombresArr = []
let costArr = []
let sizeArr = []
let true0false = []

class Productos {

  constructor (name,cost, size) {
     
    this.name = name
    this.cost = cost 
    this.size = size


  }

}


const dbProductos = [
    {
        id: 1,
        Name: "Musculosa Masculina",
        Cost: 900,
        Size: "s, m, l, xl, xxl,",   
    },
     {
        id: 2,
        Name: "Musculosa Femenina",
        Cost: 900,
        Size: "s, m, l, xl, xxl," ,
    }, 
     {
        id: 3,
        Name: "Remera flash",
        Cost: 900,
        Size: "s, m, l, xl, xxl,",
    },
     {
        id: 4,
        Name: "Equipo de juego",
        Cost: 1500,
        Size: "s, m, l, xl, xxl,",
    },
    {
        id: 5,
        Name: "Camperon Flash",
        Cost: 2780,
        Size: "s, m, l, xl, xxl,",
    }, 
    {
        id: 6,
        Name: "Chomba Flash",
        Cost: 1200,
        Size: "s, m, l, xl, xxl,",
    }

]


let productosArr = []
let carrito = []
let True0False = true

class producto{
    constructor(id, Name, Cost, Size){
        this.id = id;
        this.Name = Name;
        this.Cost = Cost;
        this.Size = Size;
    }
    Iva(){
        return this.price * 0.21;
    }
}

function pushProductos(){
    for (const producto of dbProductos){
        productosArr.push (new Productos(Productos.id, Productos.Name,
            Productos.Cost, Productos.Size))
    }
}

pushProductos()

function initprogram() {
    let selectSection = prompt ("¿Que quieres ver? \n 1.Añadir producto \n 2.Escoge el color \n 3.Escoge el talle \n 4.Ver productos \n 5.Añadir el ultimo producto \n 6.Añadir el primer producto \n 7.Buscar producto \n 8.Ver productos con - \n 9.slir")

}

 console.log(productosArr);



 function agregarproducto(){
     let name = prompt ("Intriduce el nombre del producto");
     let cost = Number(prompt("Introduce el costo del producto"));
     let size = prompt("Introduce el talle del producto")
     while (true0false){
        if (name == "" || cost == 0 || isNaN(cost) || size == "" ){
             alert("No has introducido un valor")
         let name = prompt ("Intriduce el nombre del producto");
         let cost = Number(prompt("Introduce el costo del producto"));
         let size = prompt("Introduce el talle del producto")
        }
        else {
            let productos = new productos (name, cost, size)
            productosArr.push (producto)
            cosole.log (productosArr)
            initprogram()
        }

     }
 }


 function VerProductosForOF() {
    auxiliardeproductos(productosArr, alert)
    alert("fin de la lista")
    initprogram()

 }


 function auxiliardeproductos(arr, fn) {
     for(const producto of arr) {
         fn(producto.name + " " + producto.cost + " " + producto.size)

     }


 }

 function CalcularElPromedio (arrayproductos) {
     let MontoTotal = 0
     let CantidadDeProductos = arrayproductos.length
     PorCadaUno(arrayproductos, (producto) => {
        MontoTotal += producto.cost
     })
     
 }

 function PorCadaUno (arrayproductos, funcion){
    for(const producto of arrayproductos) {
         funcion(productos)
    }
    
 initprogram()
 }


 initprogram()

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
   let acumulador = 0

const duplicados = []

function mayorQue(n) {
   return (m) => m > n
}

mayorQue(10)(11)

let mayorQue10 = mayorQue(10)
mayorQue(11)


function PorCadaUno (arr, funcion) {
    
   for (const elemento of arr) {

       funcion (elemento)
           
   }


}

PorCadaUno(numeros, duplicarNumeros)

PorCadaUno (numeros, (el) => {
    duplicados.push(el * 2)
})

console.log(duplicados)


function duplicarNumeros(num) {
    duplicados.push(num * 2)
}
