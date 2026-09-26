const cartCount = document.getElementById("cartCount");
const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".product-card");
const addButtons = document.querySelectorAll(".add-cart");
const installationForm = document.getElementById("installationForm");

/* =========================
ADD TO CART
========================= */

addButtons.forEach(button => {

button.addEventListener("click", function () {

const productName = this.dataset.product;

cart.push(productName);

updateCartCount();

this.textContent = "ADDED ✓";

setTimeout(() => {
this.textContent = "Add to Cart";
}, 1200);

});

});


function updateCartCount() {

cartCount.textContent = cart.length;

}


/* =========================
PRODUCT SEARCH
========================= */

if (searchInput) {

searchInput.addEventListener("input", function () {

const searchTerm =
this.value.toLowerCase().trim();

products.forEach(product => {

const productText =
product.textContent.toLowerCase();

if (productText.includes(searchTerm)) {

product.style.display = "";

} else {

product.style.display = "none";

}

});

});

}


/* =========================
CART BUTTON
========================= */

const cartButton =
document.querySelector(".cart-button");

if (cartButton) {

cartButton.addEventListener("click", function () {

if (cart.length === 0) {

alert("Your cart is empty.");

return;

}

alert(
"Your cart has " +
cart.length +
" item" +
(cart.length === 1 ? "" : "s") +
".\n\nCart checkout will be connected next."
);

});

}


/* =========================
INSTALLATION REQUEST
========================= */

if (installationForm) {

installationForm.addEventListener("submit", function(event) {

event.preventDefault();

alert(
"Thank you! Your installation request has been received.\n\n" +
"We will contact you to confirm the service."
);

installationForm.reset();

});

}
