document.addEventListener("DOMContentLoaded", optionCheck);
const personalDetailsForm = document.getElementById("personalDetails");;
const paymentOpt = document.getElementsByName("paymentMethod");
const visaOption = document.getElementById("visaPaymentDetails");
const paypalOption = document.getElementById("paypalPaymentDetails");
const visaOptionLabel = document.getElementById("visaLabel");
const paypalOptionLabel = document.getElementById("paypalLabel");
const payBtn = document.getElementById("payBtn")

const Total = document.getElementById("finalPrice");
const totalItems = document.getElementById("totalItems");
const subTotal = document.getElementById("subTotal");
const discount = document.getElementById("discount");
const tax = document.getElementById("tax");

// Payment Option Selection Checking ===========================================
paymentOpt.forEach(opt => opt.addEventListener("change", optionCheck));

function optionCheck() {
    switch (true) {
        case this.value === "visa":
            visaOption.style.display = "flex";
            paypalOption.style.display = "none";
            visaOptionLabel.style.backgroundColor = "rgb(21, 127, 146)"
            paypalOptionLabel.style.backgroundColor = "transparent"
            window.payOption = "visa";
            break;
        
        case this.value === "paypal":
            paypalOption.style.display = "flex";
            visaOption.style.display = "none";
            paypalOptionLabel.style.backgroundColor = "rgb(21, 127, 146)"
            visaOptionLabel.style.backgroundColor = "transparent"
            window.payOption = "paypal";
            break;
        
        default:
            visaOption.style.display = "flex";
            paypalOption.style.display = "none";
            visaOptionLabel.style.backgroundColor = "rgb(21, 127, 146)"
            paypalOptionLabel.style.backgroundColor = "transparent"
            window.payOption = "visa";
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

//Issue is here
payBtn.addEventListener("click", payment);

function payment(event) {
    if (paymentOpt.value === "visa") {
        if (personalDetailsForm.checkValidity() && visaOption.checkValidity()) {
            event.preventDefault();
            alert("thanks for the payment, Your order will shipped within 3 days")
        }
    } else if (paymentOpt.value === "paypal") {
        if (personalDetailsForm.checkValidity() && paypalOption.checkValidity()) {
            event.preventDefault();
            alert("thanks for the payment, Your order will shipped within 3 days")
        }
    }
};