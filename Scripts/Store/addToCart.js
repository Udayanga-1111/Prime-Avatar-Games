document.addEventListener("DOMContentLoaded", () => {
    const cartTable = document.getElementById("cartTableBody"); // Get the tbody of the table
    const totalSection = document.querySelector(".totalSection");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartTable.style.display = "none";
        totalSection.style.display = "none";
        const cartStatus = document.querySelector(".cartStatus");
        cartStatus.innerText = `Your cart is empty....!`;
        return;
    }
    let Total;
    cart.forEach((item, Total) => {
        let row = document.createElement("tr");
        let subTotal = item.itemPrice * item.quantity
        Total+=subTotal
        row.innerHTML = `
            <td id="td1">
                <img class="cartItemPic" src="${item.imgSrc}" alt="Item Image">
                <div class="cartItemDetails">
                    ${item.itemName}
                    <button class="removeItem" data-id="${item.itemNo}">Remove</button>
                </div>
            </td>
            <td >
                <div id="qtd">
                        <button class="itemAdder minusQ"><</button>
                    ${item.quantity}
                    <button class="itemAdder plusQ">></button>
                </div>
            </td>
            <td>$ ${item.itemPrice}</td>
            <td>$ ${subTotal}</td>
            
        `;

        const totalPrice = document.querySelector(".TotalPrice");
        totalPrice.innerText = `$ ${Total}`
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