const paymentOpt = document.getElementsByName("paymentMethod");
const visaOption = document.getElementById("visaPaymentDetails");
const paypalOption = document.getElementById("paypalPaymentDetails");
const visaOptionLabel = document

const Total = document.getElementById("finalPrice");
const totalItems = document.getElementById("totalItems");
const subTotal = document.getElementById("subTotal");
const discount = document.getElementById("discount");
const tax = document.getElementById("tax");

// Payment Option Selection Checking ===========================================
paymentOpt.forEach(opt => opt.addEventListener("change", optionCheck));

function optionCheck() {
    if (this.value === "visa") {
        visaOption.style.display = "flex";
        paypalOption.style.display = "none";
    }
    else if (this.value === "paypal") {
        paypalOption.style.display = "flex";
        visaOption.style.display = "none";
    }
};

// Order Info Table Implementation =============================================
let itemCount = localStorage.getItem("itemCount");
let rowTotal = localStorage.getItem("subTotal");
let discountTotal = localStorage.getItem("Discount");
let taxTotal = localStorage.getItem("Tax");
let finalPrice = localStorage.getItem("Total");

totalItems.innerText = itemCount;
subTotal.innerText = rowTotal;
discount.innerText = discountTotal;
tax.innerText = taxTotal;
Total.innerText = finalPrice;