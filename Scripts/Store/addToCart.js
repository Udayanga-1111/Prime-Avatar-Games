document.addEventListener("DOMContentLoaded", () => {
    const cartTable = document.getElementById("cartTableBody"); // Get the tbody of the table
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartTable.innerHTML = `<tr><td colspan="4">Your cart is empty</td></tr>`;
        return;
    }

    cart.forEach((item, index) => {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td id="td1">
                ${item.itemName}
                <button class="removeItem" data-id="${item.itemNo}">Remove</button>
            </td>
            <td>${item.quantity}</td>
            <td>${item.itemPrice}</td>
            
        `;

        cartTable.appendChild(row);
    });

    // Handle remove item functionality
    document.querySelectorAll(".removeItem").forEach(button => {
        button.addEventListener("click", (event) => {
            let itemId = event.target.dataset.id;
            cart = cart.filter(item => item.itemNo !== itemId);
            localStorage.setItem("cart", JSON.stringify(cart));
            location.reload(); // Reload page to update table
        });
    });
});
