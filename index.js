document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartCountElement = document.getElementById('cart-count');

    let cartCount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            cartCount++;
            cartCountElement.textContent = cartCount;
            alert('Product added to cart!');
        });
    });
});
function myFunction() {
    var myWindow = window.open("cart-page.html", "", "width=600,height=500");
  }