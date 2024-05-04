document.getElementById('cartIcon').addEventListener('click', function() {
    // Obtener el elemento de la barra lateral del carrito
    var cartSidebar = document.getElementById('cartSidebar');
    
    // Alternar la clase 'open' en la barra lateral del carrito para abrir o cerrar
    cartSidebar.classList.toggle('open');
});
document.getElementById('id boton').addEventListener('click', function() {
    cartSidebar.classList.remove('open');
    
})

let products = [
    {product:"disco-solido",
        price: 10,
        marca: "kingstom",
        img: "images/img-1.jpg"	
    },
    {product:"laptop",
        price: 100,
        marca: "Asus",
        img: "images/img-2.jpg"	
    },
    {product:"monitor", 
        price: 2900,
        marca: "Asus",
        img: "images/img-3.jpg"	
    },
    {product:"audifonos",
        price: 200,
        marca: "hawuei",
        img: "images/img-4.jpg"	
    },
    ];
let imagenes = document.getElementById('images')

 Generator = () => {
   return (imagenes.innerHTML = products.map((x)=>{
    return (`
    <div class='contenedordeventa'>
       <div class="item" id = "item">
           <img src="images/img-7.jpg">
       </div>
       <div class="cuadrocompra" id = "cuadrocompra">
           <p>Producto: Camisa</p>
       </div>
       <div class="cuadrocompra" id = "cuadrocompra">
           <button>Producto: Camisa</button>
       </div>
    </div>`
    )
   }))};
Generator(products)
