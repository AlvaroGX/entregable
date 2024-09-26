document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('#purchaseForm');
    forms.forEach(form => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const productId = form.querySelector('input[name="product_id"]').value;
            const productName = form.querySelector('input[name="product_name"]').value;
            const productPrice = form.querySelector('input[name="product_price"]').value;
            const quantity = form.querySelector('input[name="quantity"]').value;

            alert(`Producto agregado al carrito:\nID: ${productId}\nNombre: ${productName}\nPrecio: $${productPrice}\nCantidad: ${quantity}`);
        });
    });
});


