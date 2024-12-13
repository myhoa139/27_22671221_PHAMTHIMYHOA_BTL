
  document.addEventListener('DOMContentLoaded', function() {
      const addToCartButtons = document.querySelectorAll('.btn.btn-primary.btn-custom');

      addToCartButtons.forEach(button => {
          button.addEventListener('click', function() {
              const card = this.closest('.product-card');
              const image = card.querySelector('.card-img-top').src;
              const title = card.querySelector('.card-title').textContent;
              const price = card.querySelector('.card-text').textContent;

              const productData = {
                  image: image,
                  title: title,
                  price: price
              };

              // Save product data to local storage
              const cart = JSON.parse(localStorage.getItem('cart')) || [];
              cart.push(productData);
              localStorage.setItem('cart', JSON.stringify(cart));

              alert('Sản phẩm đã được thêm vào giỏ hàng!');
          });
      });
      let cartCount = 0;

document.getElementById('add-to-cart').addEventListener('click', function() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
});
  });
