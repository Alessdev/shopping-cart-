document.getElementById('cartIcon').addEventListener('click', function() {
    // Obtener el elemento de la barra lateral del carrito
    var cartSidebar = document.getElementById('cartSidebar');
    
    // Alternar la clase 'open' en la barra lateral del carrito para abrir o cerrar
    cartSidebar.classList.toggle('open');
});
document.getElementById('id boton').addEventListener('click', function() {
    cartSidebar.classList.remove('open');
    
})