document.addEventListener("DOMContentLoaded", optionCheck);
const theForm = document.getElementById("paymentForm");
const paymentOpt = document.getElementsByName("paymentMethod");
const visaOption = document.getElementById("visaPaymentDetails");
const paypalOption = document.getElementById("paypalPaymentDetails");

const cardInputs = document.querySelectorAll(".visaInfo");
const paypalInputs = document.querySelectorAll(".paypalInfo");

const visaOptionLabel = document.getElementById("visaLabel");
const paypalOptionLabel = document.getElementById("paypalLabel");
const payBtn = document.getElementById("payBtn")

const Total = document.getElementById("finalPrice");
const totalItems = document.getElementById("totalItems");
const subTotal = document.getElementById("subTotal");
const discount = document.getElementById("discount");
const tax = document.getElementById("tax");

// Default Values ==============================================================
var payOption = "visa";

// Payment Option Selection Checking ===========================================
paymentOpt.forEach(opt => opt.addEventListener("change", optionCheck));

function optionCheck() {
    switch (true) {
        case this.value === "visa":
            visaOption.style.display = "flex";
            paypalOption.style.display = "none";
            visaOptionLabel.style.backgroundColor = "rgb(21, 127, 146)"
            paypalOptionLabel.style.backgroundColor = "transparent"
            payOption = "visa";

            cardInputs.forEach(input => input.setAttribute("required",true));
            paypalInputs.forEach(input => input.removeAttribute("required"));
            break;
        
        case this.value === "paypal":
            paypalOption.style.display = "flex";
            visaOption.style.display = "none";
            paypalOptionLabel.style.backgroundColor = "rgb(21, 127, 146)"
            visaOptionLabel.style.backgroundColor = "transparent"
            payOption = "paypal";

            paypalInputs.forEach(input => input.setAttribute("required", true));
            cardInputs.forEach(input => input.removeAttribute("required"));
            break;
        
        default:
            visaOption.style.display = "flex";
            paypalOption.style.display = "none";
            visaOptionLabel.style.backgroundColor = "rgb(21, 127, 146)"
            paypalOptionLabel.style.backgroundColor = "transparent"
            payOption = "visa";
            cardInputs.forEach(input => input.setAttribute("required", true));
            paypalInputs.forEach(input => input.removeAttribute("required"));
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

// Payment Alert ===============================================================

// //Issue is here
payBtn.addEventListener("click", payment);

function payment(event) {
    if (payOption === "visa") {
        if(theForm.checkValidity()) {
            event.preventDefault();
            alert("thanks for the payment, Your order will shipped within 3 days")
        }
    } else if (payOption === "paypal") {
        if (theForm.checkValidity()) {
            event.preventDefault();
            alert("thanks for the payment, Your order will shipped within 3 days")
        }
    }
};