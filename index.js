const productos = ['Prodcuto1',  'Prodcuto2',  'Prodcuto3',  'Prodcuto4',  'Prodcuto5'];

for (let index = 0; index < productos.length; index++) {
    console.log('Productos' + (index + 1) + ':' + productos[index]);
}

productos.pop();

console.log(productos);

