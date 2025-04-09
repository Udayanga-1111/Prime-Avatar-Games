document.addEventListener("DOMContentLoaded", () => {

    // Get the references for interactive elements =================================================
    const cartTable = document.getElementById("cartTableBody");
    const cartStatus = document.querySelector(".cartStatus");
    const clearCartButton = document.getElementById("clearCartBtn");
    const addToFavBtn = document.getElementById("addToFavBtn");
    const applyFavBtn = document.getElementById("applyFavBtn");
    const itemCount = document.getElementById("itemCount");
    const subTotalSec = document.getElementById("subTotalSec");
    const discountSec = document.getElementById("discountSec");
    const taxSec = document.getElementById("taxSec");
    const totalPrice = document.getElementById("TotalPrice");
    const finalPrice = document.querySelector(".finalPrice");

    // get the cart from local storage =============================================================
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length > 0) {
        cartStatus.style.display="none";
    }
    let rawTotal = 0;
    let totalDiscount = 0;
    cart.forEach((item) => {
        let row = document.createElement("tr");
        let subTotal = item.itemPrice * item.quantity;
        row.classList.add("tableRow");
        rawTotal += subTotal;
        totalDiscount += Number(item.itemDiscount) * item.quantity;
        console.log(totalDiscount);
        row.innerHTML = `
            <td id="main-td">
                <section class="main-section itemsec">
                    
                    <img class="cartItemPic" src="${item.imgSrc}" alt="Item Image">
                    
                    <div class="cartItemDetails">
                        <p>${item.itemName}</p>
                        <p>${item.itemPrice}</p>
                        <button class="removeItem" data-id="${item.itemNo}">Remove</button>
                    </div>

                </section>

                <section id="qsec" class="main-section">
                    <button class="itemAdder minusQ" data-id="${item.itemNo}">-</button>
                    ${item.quantity}
                    <button class="itemAdder plusQ" data-id="${item.itemNo }">+</button>
                </section>

                <section class ="main-section currencySec">
                    <p>$ ${subTotal.toFixed(2)}</p>
                </section>
            </td>
        `;

        // Order calculations ======================================================================
        itemCount.innerText = cart.length;
        subTotalSec.innerText = `$ ${rawTotal.toFixed(2)}`;
        discountSec.innerText = `$ ${totalDiscount.toFixed(2)}`;
        let totalWithoutTax = (rawTotal - totalDiscount).toFixed(2);
        let taxAmount = ((totalWithoutTax * 0.2) / 100).toFixed(2);
        taxSec.innerText = `$ ${taxAmount}`;
        let totalAmount = (rawTotal - totalDiscount + Number(taxAmount)).toFixed(2);
        totalPrice.innerText = `$ ${totalAmount}`;
        finalPrice.innerText = `$ ${totalAmount}`;
        cartTable.appendChild(row);

        localStorage.setItem("Total", totalAmount);
    });

    // Handle remove item functionality ============================================================
    document.querySelectorAll(".removeItem").forEach((button) => {
        button.addEventListener("click", (event) => {
            let itemId = event.target.dataset.id;
            cart = cart.filter((item) => item.itemNo !== itemId);
            localStorage.setItem("cart", JSON.stringify(cart));
            location.reload(); // Reload page to update table
        });
    });

    //quantity increment button ====================================================================
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

    //quantity decrement button ====================================================================
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

    // Cart clear Function =========================================================================
    clearCartButton.addEventListener("click", () => {
        cart.length = 0;
        localStorage.setItem("cart", JSON.stringify(cart));
        location.reload(); // Reload page to update table
    });

    // Add to Favorite function ====================================================================
    addToFavBtn.addEventListener("click", () => {
        if (cart.length > 0) {
            let favCart = JSON.parse(localStorage.getItem("favCart")) || [];
            favCart.length = 0;
            favCart = cart;
            localStorage.setItem("favCart", JSON.stringify(favCart));
            alert("Added to favorites...!");
            location.reload(); // Reload page to update table
        } else {
            alert("Shop First")
        }
    });

    // Apply favorite function =====================================================================
    applyFavBtn.addEventListener("click", () => {
        let cart = JSON.parse(localStorage.getItem("favCart")) || []; // Fallback to an empty array
        localStorage.setItem("cart", JSON.stringify(cart));
        location.reload(); // Reload page to update table
    });
});

const backBtn = document.querySelector(".backBtn");

backBtn.addEventListener("click", () => {
    history.back();
});
