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
    let Total = 0;
    cart.forEach((item) => {
        let row = document.createElement("tr");
        let subTotal = item.itemPrice * item.quantity;
        Total += subTotal;
        row.innerHTML = `
            <td id="td1">
                <img class="cartItemPic" src="${item.imgSrc}" alt="Item Image">
                <div class="cartItemDetails">
                    ${item.itemName}
                    <button class="removeItem" data-id="${item.itemNo
            }">Remove</button>
                </div>
            </td>
            <td >
                <div id="qtd">
                    <button class="itemAdder minusQ" data-id="${item.itemNo
            }"><</button>
                    ${item.quantity}
                    <button class="itemAdder plusQ" data-id="${item.itemNo
            }">></button>
                </div>
            </td>
            <td class="currencyTD">$ ${item.itemPrice}</td>
            <td class="currencyTD">$ ${subTotal.toFixed(2)}</td>
            
        `;

        const totalPrice = document.querySelector(".TotalPrice");
        totalPrice.innerText = `$ ${Total.toFixed(2)}`;
        cartTable.appendChild(row);
    });

    // Handle remove item functionality
    document.querySelectorAll(".removeItem").forEach((button) => {
        button.addEventListener("click", (event) => {
            let itemId = event.target.dataset.id;
            cart = cart.filter((item) => item.itemNo !== itemId);
            localStorage.setItem("cart", JSON.stringify(cart));
            location.reload(); // Reload page to update table
        });
    });

    //quantity increment button
    document.querySelectorAll(".plusQ").forEach((button) => {
        button.addEventListener("click", (event) => {
            let itemId = event.target.dataset.id;
            console.log(itemId);
            cart.forEach((item) => {
                if (itemId == item.itemNo) {
                    item.quantity++;
                }
            });
            localStorage.setItem("cart", JSON.stringify(cart));
            location.reload(); // Reload page to update table
        });
    });

    //quantity decrement button

    document.querySelectorAll(".minusQ").forEach((button) => {
        button.addEventListener("click", (event) => {
            let itemId = event.target.dataset.id;
            console.log(itemId);
            cart.forEach((item) => {
                if (itemId == item.itemNo) {
                    if (item.quantity > 1) {
                        item.quantity--;
                    }
                }
            });
            localStorage.setItem("cart", JSON.stringify(cart));
            location.reload(); // Reload page to update table
        });
    });

});