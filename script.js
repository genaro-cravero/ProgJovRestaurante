let pedidos = 0;
let carrito = document.getElementById("carroNumero");
const form = document.querySelector("#consultas");
let consulta;
let satisfaccion;


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

