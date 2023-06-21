let pedidos = 0;
let carrito = document.getElementById("carroNumero");
const form = document.querySelector("#consultas");
let consulta;
let satisfaccion;

////objetos
// const plato1 = {
//     nombre: "Platillo de carne",
//     img: "./images/food/CarneSimple.jpg",
//     precio: 6.50,
//     descripcion: "Platillo de carne con arroz y tomate"
// }
// const plato2 = {
//     nombre: "Platillo de carne2",
//     img: "./images/food/CarneSimple.jpg",
//     precio: 6.50,
//     descripcion: "Platillo 2 de carne con arroz2 y tomate2"
// }



//// Array de objetos
// const arr1 = [
//     {
//         nombre: "Platillo de carne",
//         img: "./images/food/CarneSimple.jpg",
//         precio: 6.50,
//         descripcion: "Platillo de carne con arroz y tomate"
//     },
//     {
//         nombre: "Estofado de carne",
//         img: "./images/food/Estofado.jpg",
//         precio: 7.30,
//         descripcion: "Estofado de carne con salsa de tomate natural"
//     }
// ];


// const usuarios = [
//     {
//         nombre: "NICO",
//         contrasena: "NICOCRAVERO"
//     },
//     {
//         nombre: "Ruan",
//         contrasena:"MoniRuan"
//     },
//     {
//         nombre: "Bernat",
//         contrasena: "BernatEsteva"
//     },
//     {
//         nombre: "Mario",
//         contrasena: "Mario124"
//     }
// ];

// usuarios.forEach(usuario => {

//     alert(usuario.nombre);
//     if(usuario.contrasena.length < 10)
//     {
//         alert("Contraseña debil");
//     }    

// })


carrito.innerHTML = 0;

function SumarComida()
{
    if(pedidos <= 9)
    {
        pedidos += 1;
    }else{
        alert("Tienes el máximo de ítems");
    }

    carrito.innerHTML = pedidos;


}

function RestarComida()
{
    if(pedidos > 0)
    {
        pedidos -= 1;

    }
    carrito.innerHTML = pedidos;
}

form.addEventListener('submit', (e) => {

    e.preventDefault();

    consulta = document.querySelector("#message").value;

    satisfaccion = document.querySelector('input[name="satisfaccion"]:checked').value;

    switch(satisfaccion)
    {
        case "0":
            satisfaccion = "Muy mala";
            break;
        case "1":
            satisfaccion = "Normal";
            break;
        case "2":
            satisfaccion = "Muy buena";
            break;
    }

    alert("Su consulta ha sido enviada exitosamente");

    
    console.log("La consulta fue: " + consulta + ". La satisfaccion del usuario fue " + satisfaccion);

    form.reset();
});

