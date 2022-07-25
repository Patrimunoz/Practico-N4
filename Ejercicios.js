function Obtener(obj) {
    //Obtener y Recorrer las Llaves de un Objeto
    //Aqui tu codigo
   var arr = ['hola', 'chau', 'adios'];
console.log(Object.keys(arr));
   

}

function Fecha(num) {
    //Escriba una función de JavaScript para obtener el día de una fecha en particular.
    //Aqui tu codigo
var Anniversary22 = new Date('October 8, 2022 12:30');
var weekday = Anniversary22.getDay();

console.log(weekday); 
}

function verificarPassword(usuario, password) {
    // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
    // Devuelve "true" si coinciden
    // De lo contrario, devuelve "false"
    // // Tu código:
   
if(password === usuario.password){
    return true;
}
    return false;
}

function crearGato(nombre, edad) {
    // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
    // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
    // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
    // Devuelve el objeto
    // Tu código:
    
     var gato = {
    nombre: nombre,
    edad: edad,
    meow: function () {
      return "Meow!";
    }
  };
  return gato;
}
var miGato = crearGato('Benji', 2);
console.log(miGato); 

}
function agregarMetodoCalculoDescuento(producto) {
    // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
    // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
    // El método resta el descuento del precio y devuelve el precio con descuento
    // Devuelve el objeto "producto" al final de la función
    // Ejemplo:
    // producto.precio -> 20
    // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
    // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
    // Tu código:
  var cantidad,precio,desc,compra,pagar;
    
    precio = parseFloat(prompt("Ingresar precio"));
    cantidad = parseFloat(prompt("Ingresar cantidad"));
    
    compra = precio*cantidad;
    desc = compra*.25;
    pagar = compra-desc;
   
    document.write("El descuento es: "+desc);
    document.write("El total a pagar es: "+pagar);
 
    

}
function ordenarArray
    // A partir del array pasado por parametros, ordenarlo (ascendente o descendente) de la forma que tu quieras
    // Mostrar array ordenado.
    // Tu código:
}
