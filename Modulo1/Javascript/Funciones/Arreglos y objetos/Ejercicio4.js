let factura = [];
let cliente = {
  pedido: "",
  plato: 0,
  precio: 0,
};
let total = 0
let nClientes = parseInt(
  prompt(`Ingrese el numero de clientes que hay en la mesa`)
);

if (nClientes > 0) {
  for (let index = 0; index < nClientes; index++) {
    cliente.plato = parseInt(
      prompt(`Ingrese el pedido del usuario: \n
        1 -arroz con pollo -15k \n
        2 -pastas -12k \n
        3 -mute -20k \n
        4 -pescado frito -17k \n
        5 -sobrebarriga -25k \n
        6 -No tengo hambre`)
    );
    switch (cliente.plato) {
      case 1:
        cliente.precio = 15000;
        cliente.pedido = "arroz con pollo"
        factura.push(cliente);
        cliente = {};
        break;
      case 2:
        cliente.precio = 12000;
        cliente.pedido = "pastas"
        factura.push(cliente);
        cliente = {};
        break;
      case 3:
        cliente.precio = 20000;
        cliente.pedido = "mute"
        factura.push(cliente);
        cliente = {};
        break;
      case 4:
        cliente.precio = 17000;
        cliente.pedido = "pescado frito"
        factura.push(cliente);
        cliente = {};
        break;
      case 5:
        cliente.precio = 25000;
        cliente.pedido = "sobrebarriga"
        factura.push(cliente);
        cliente = {};
        break;
      default:
        cliente.precio = 0;
        cliente.pedido = "No tengo hambre"
        factura.push(cliente);
        cliente = {};
        break;
    }
  }
  factura.forEach(i => {
    total += i.precio
  })

  console.log(factura);
  console.log("Total a pagar: ",total);
} else {
  alert("No se pueden hacer pedidos en esta mesa, vaya a la siguiente");
  nClientes = parseInt(
    prompt(`Ingrese el numero de clientes que hay en la mesa`)
  );
}
