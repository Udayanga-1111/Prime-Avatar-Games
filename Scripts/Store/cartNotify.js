// Get the cart length from localStorage or initialize it to 0 if not present
const cartLength = JSON.parse(localStorage.getItem('cart'))?.length || 0;

// Find the cart span element
const cartSpan = document.querySelector('#cartNotification');

// Display the cart length in the cart span
if (cartSpan) {
    cartSpan.textContent = cartLength;

    // Listen for the custom event triggered when items are added to the cart
    document.addEventListener('cartUpdated', () => {
        const updatedCartLength = JSON.parse(localStorage.getItem('cart'))?.length || 0;
        cartSpan.textContent = updatedCartLength;
    });
}
// Override the localStorage.setItem method to detect changes to the cart
const originalSetItem = localStorage.setItem;
localStorage.setItem = function (key, value) {
    originalSetItem.apply(this, arguments);
    if (key === 'cart') {
        const event = new Event('cartUpdated');
        document.dispatchEvent(event);
    }
};