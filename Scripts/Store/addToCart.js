document.addEventListener("DOMContentLoaded", () => {

    // Get the references for interactive elements =================================================
    const cartTable = document.getElementById("cartTableBody");
    const cartStatus = document.querySelector(".cartStatus");
    const checkoutBtn = document.querySelector(".checkoutbtn");
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

    // Default disabled Buttons ====================================================================
    if (cart.length <= 0) {
        addToFavBtn.disabled = true;
        addToFavBtn.style.cursor = "not-allowed";
        clearCartButton.disabled = true;
        clearCartButton.style.cursor = "not-allowed";
        checkoutBtn.disabled = true;
        checkoutBtn.style.cursor = "not-allowed";
    }

    
    let favCart = JSON.parse(localStorage.getItem("favCart")) || [];
    if (favCart.length <= 0) {
        applyFavBtn.disabled = true;
        applyFavBtn.style.cursor = "not-allowed";
    }

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
                        <p>${item.itemPrice} LKR</p>
                        <button class="removeItem" data-id="${item.itemNo}">Remove</button>
                    </div>

                </section>

                <section id="qsec" class="main-section">
                    <button class="itemAdder minusQ" data-id="${item.itemNo}">-</button>
                    ${item.quantity}
                    <button class="itemAdder plusQ" data-id="${item.itemNo }">+</button>
                </section>

                <section class ="main-section currencySec">
                    <p>${subTotal.toFixed(2)}</p>
                </section>
            </td>
        `;

        // Order calculations ======================================================================
        itemCount.innerText = cart.length;
        subTotalSec.innerText = `${rawTotal.toFixed(2)} LKR`;
        discountSec.innerText = `${totalDiscount.toFixed(2)} LKR`;
        let totalWithoutTax = (rawTotal - totalDiscount).toFixed(2);
        let taxAmount = ((totalWithoutTax * 0.2) / 100).toFixed(2);
        taxSec.innerText = `${taxAmount} LKR`;
        let totalAmount = (rawTotal - totalDiscount + Number(taxAmount)).toFixed(2);
        totalPrice.innerText = `${totalAmount} LKR`;
        finalPrice.innerText = `${totalAmount} LKR`;
        cartTable.appendChild(row);

        localStorage.setItem("itemCount", cart.length);
        localStorage.setItem("subTotal", rawTotal.toFixed(2));
        localStorage.setItem("Discount", totalDiscount.toFixed(2));
        localStorage.setItem("Tax", taxAmount);
        localStorage.setItem("Total", totalAmount);
    });

    // Handle checkout functionality ===============================================================
    checkoutBtn.addEventListener("click", () => {
        window.location.href = "./payment.html";
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
            cart.forEach((item) => {
                if (itemId == item.itemNo) {
                    if (item.itemPrice<=100000 && item.quantity < 10) {
                        item.quantity++;
                    } else if(item.quantity < 5){
                        item.quantity++;
                    } else {
                        alert("maximum quantity reached!!")
                    }
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
