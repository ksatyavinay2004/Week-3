document.getElementById('add-to-cart').addEventListener('click', function() {
    const productName = document.getElementById('product-name').innerText;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('product-price').innerText;

    alert(You added ${quantity} of ${productName} to your cart. Total: ${price} x ${quantity});
});