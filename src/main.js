var cartSidebar = document.getElementById('cartSidebar');

document.getElementById('cartIcon').addEventListener('click', function() {
    // Obtener el elemento de la barra lateral del carrito
   
    
    // Alternar la clase 'open' en la barra lateral del carrito para abrir o cerrar
    cartSidebar.classList.toggle('open');
});
document.getElementById('botoncerrar').addEventListener('click', function() {
    cartSidebar.classList.remove('open');
    
})




let products = [
    {product:"disco solido",
        price: 10,
        marca: "kingstom",
        img: "images/img-1.jpg",	
        cantidad:0,
        comprar: "comprar"
    },
    {product:"laptop",
        price: 100,
        marca: "Asus",
        img: "images/img-2.jpg",	
        cantidad:0,
        comprar: "comprar"
        
    },
    {product:"monitor", 
        price: 2900,
        marca: "Asus",
        img: "images/img-3.jpg",	
        cantidad:0,
        comprar: "comprar"
    },
    {product:"audifonos in ear",
        price: 200,
        marca: "hawuei",
        img: "images/img-4.jpg",	
        cantidad:0,
        comprar: "comprar"
    },
    {product:"tarjeta grafica",
    price: 1000,
    marca: "Gigabyte",
    img: "images/img-5.jpg",	
    cantidad:0,
    comprar: "comprar"
},
{product:"audifonos", 
    price: 400,
    marca: "steelseries",
    img: "images/img-6.jpg",	
    cantidad:0,
    comprar: "comprar"
},
{product:"parlante",
    price: 250,
    marca: "sony",
    img: "images/img-7.jpg",	
    cantidad:0,
    comprar: "comprar"
},
    ];
let imagenes = document.getElementById('images')

 GeneratorImagenes = () => {
   return (imagenes.innerHTML = products.map((x)=>{
    return (`
    <div class='contenedordeventa'>
       <div class="item" id = "item">
           <img width=250px height = 180px src=${x.img}>
       </div>
       <div class="cuadrocompra" id = "cuadrocompra">
            <div class="product-marca" id="product-marca">
                <p>${x.product}  ${x.marca}</p>
            </div>
            <div class="precio-compra" id="precio-compra">             
                        <p>precio:${x.price}</p>
                        <button class="botoncomprar">${x.comprar}</button>          
                </div>
        </div>
    </div>`
    )
   }).join(""))};
GeneratorImagenes(products)
let productincar=[];  
let cantidad = 0;



GeneratorProductos = () => {
    return (grupoproductos.innerHTML = productincar.map((x)=>{
     return (`
    <div class="conteiner-carrito">
        <div class="producto">${x.product}</div>
            <div class="conjunto-cantidad">             
                <i class="bi bi-dash-square-fill" id="minus-${x.product}"></i>
                <input type="text" class="input" style="width: 21px;" value="${x.cantidad}"></input>
                <i class="bi bi-plus-square-fill" id="plus-${x.product}"></i>
            </div>                                 
        </div>                        
    </div>`
     )
    }).join(""))};
let botonesComprar = document.getElementsByClassName('botoncomprar');

    for (let i = 0; i < botonesComprar.length; i++) {
        botonesComprar[i].addEventListener('click', function() {
         
            productincar.push(products[i])
            GeneratorProductos();
        });
    }


    document.addEventListener('click', function(event) {
        if (event.target.matches('.bi-plus-square-fill')) {
            const productId = event.target.id.split('-')[1]; // Obtener el ID del producto
            // Buscar el producto en el array 'productincar' por su ID
            const product = productincar.find(item => item.product === productId);
            if (product) {
                // Aumentar la cantidad del producto
                product.cantidad++;
                // Actualizar la visualización del carrito
                GeneratorProductos();
                calcularTotal();
            }
        } else if (event.target.matches('.bi-dash-square-fill')) {
            const productId = event.target.id.split('-')[1]; // Obtener el ID del producto
            // Buscar el producto en el array 'productincar' por su ID
            const product = productincar.find(item => item.product === productId);
            if (product && product.cantidad > 0) {
                // Disminuir la cantidad del producto si es mayor que 0
                product.cantidad--;
                // Actualizar la visualización del carrito
                GeneratorProductos();
                calcularTotal();
            }
        }

        

    });
    const totalElement = document.getElementById('total');
    totalElement.innerHTML = `<h3>TOTAL: 0$</h3>`;
    function calcularTotal() {
        let total = 0;
        // Iterar sobre cada producto en el carrito
        for (let i = 0; i < productincar.length; i++) {
            // Sumar el producto de la cantidad y el precio de cada producto
            total += productincar[i].cantidad * productincar[i].price;
        }
        
    
        totalElement.innerHTML = `<h3>TOTAL: ${total}$</h3>`;
        console.log(total);
    }
console.log(productincar)


