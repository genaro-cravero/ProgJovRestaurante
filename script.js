let pedidos = 0;
let carrito = document.getElementById("carroNumero");

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