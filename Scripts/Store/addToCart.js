document.addEventListener("DOMContentLoaded", () => {
    const cartTable = document.getElementById("cartTableBody"); // Get the tbody of the table
    const totalSection = document.querySelector(".totalSection");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartTable.style.display = "none";
        const cartStatus = document.querySelector(".cartStatus");
        cartStatus.innerText = `Your cart is empty....!`;
        return;
    }
    let Total = 0;
    let rawTotal = 0;
    let totalDiscount = 0;
    cart.forEach((item) => {
        let row = document.createElement("tr");
        let subTotal = item.itemPrice * item.quantity;
        row.classList.add("tableRow");
        rawTotal += subTotal;
        totalDiscount += item.itemDiscount || 0;
        console.log(totalDiscount);
        row.innerHTML = `
            <td id="main-td">
                <section class="main-section itemsec">
                    
                    <img class="cartItemPic" src="${item.imgSrc}" alt="Item Image">
                    
                    <div class="cartItemDetails">
                        <p>${item.itemName}</P
                        <p>${item.itemPrice}</p>
                        <button class="removeItem" data-id="${item.itemNo}">Remove</button>
                    </div>

                </section>

                <section id="qsec" class="main-section">
                    <button class="itemAdder minusQ" data-id="${item.itemNo}">-</button>
                    ${item.quantity}
                    <button class="itemAdder plusQ" data-id="${item.itemNo}">+</button>
                </section>

                <section class ="main-section currencySec">
                    <p>$ ${subTotal.toFixed(2)}</p>
                </section>
            </td>
        `;

        const itemCount = document.getElementById("itemCount");
        const subTotalSec = document.getElementById("subTotalSec");
        const discountSec = document.getElementById("discountSec");
        const totalPrice = document.querySelector(".TotalPrice");

        itemCount.innerText = cart.length;
        subTotalSec.innerText = `$ ${rawTotal.toFixed(2)}`;
        discountSec.innerText = `$ ${totalDiscount.toFixed(2)}`
        totalPrice.innerText = `$ ${(rawTotal-totalDiscount).toFixed(2)}`;
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

const backBtn = document.querySelector(".backBtn");

backBtn.addEventListener("click", () => {
    history.back();
});