var prod = [];

function menu(){
    console.log("Elija una opcion: ")
    console.log("1. Agregar Producto");
    console.log("2. modificar stock");
    console.log("3. Registrar Venta");
    console.log("4. Mostrar Promedio");
    console.log("5. Productos con stock");
    console.log("6. Salir");

    var correcta = false;
    var opc;
    while(!correcta){
        opc = prompt("Opcion: ");
        if(opc <=6 && opcion >= 1)
            correcta = true;
    }

    return opc;
}


function agregar(){
    console.log("Ingrese valores de producto");
    var producto = {}
    producto["codigo"] = prompt("codigo: ");
    producto["descripcion"] = prompt("descripcion: ");
    producto["tipo"] = prompt("tipo");
    producto["precioCompra"] = prompt("Precio de compra: ");
    producto["precioVenta"] = prompt("Precio de venta: ");
    producto["stock"] = prompt("Stock: ");

    products.push(producto);
}

function modificarStock(){
    var codigo = prompt("Codigo de producto a modificar stock: "); 
    var producto = jsObject.find(obj => {return obj["codigo"] == codigo});
    if(producto)
        producto.stock += prompt("Ingrese el cambio en stock(puede ser negativo si ha disminuido): ");
    else
        console.log("EL CODIGO DEL PRODUCTO NO EXISTE");
}

function venta(){
    var codigo = prompt("Codigo de producto a vender: ");
    var cantidad = prompt("Cantidad de producto a vender: ");
    var producto = jsObject.find(obj => {return obj["codigo"] == codigo});
    if(producto)
        producto.stock -= cantidad;

}

function promedio(){
    var sum = 0;
    prod.forEach(element => {
        sum += element.stock;
    });

    return sum/products.length;
}

function Stock(){
    var nostock = jsObjects.filter(obj => {
        return obj.stock == 0;
    });

    console.log(nostock);
}


function main(){
    var exit = false;
    while(!exit)
    {
        var opcion = menu();
        switch(opcion){
            case 1: agregar();
                 break;
            case 2: modificarStock();
                break;
            case 3: venta();
                break;
            case 4: promedio();
                break;
            case 5: Stock();
                break;
            case 6: exit = true;
                break;
            default: console.log("OPCION ERRONEA");
        }
    }
    
}

main();