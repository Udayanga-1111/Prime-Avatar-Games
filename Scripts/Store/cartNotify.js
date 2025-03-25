// Get the cart length from localStorage or initialize it to 0 if not present
const cartLength = JSON.parse(localStorage.getItem('cart'))?.length || 0;

// Find the cart span element
const cartSpan = document.querySelector('#cartNotification');

// Display the cart length in the cart span
if (cartSpan) {
    cartSpan.textContent = cartLength;
}