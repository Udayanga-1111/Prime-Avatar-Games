const abc = [];
const addToHtml = function () {
    abc.forEach(product => {
        let aDiv = document.createElement("a");
        aDiv.classList.add("card");
        aDiv.classList.add(product.itemClass)
        aDiv.setAttribute("href", "#store");
        aDiv.innerHTML =
            `<img src="${product.imgSrc}" alt="Item Picture" class="item-pic">
    
            <section class="item-details">
                <h2 class="item-name">${product.itemName}</h2>
                <h4 class="price">$${product.itemPrice}</h4>
                <h4 class="extra">${product.itemStatus}</h4>
                <button class="addToCart" id="${product.itemNo}">+</button>
            </section>`;
        
        let itemSection = document.querySelector(".item-list"); // Assuming 'item-list' is a class
        itemSection.append(aDiv);
    })
};


const initApp = () => {
    fetch('./Scripts/Store/peripherals.json') // Ensure the file is in the root directory of the server
        .then(response => response.json())
        .then(data => {
            abc.push(...data);
            console.log(abc);
            
            addToHtml();
        })
};

initApp();

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("addToCart")) {
        const itemId = event.target.id;
        const selectedItem = abc.find(item => item.itemNo === itemId);

        if (selectedItem) {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
                        // Check if item already exists
            let existingItem = cart.find(item => item.itemNo === itemId);
            if (existingItem) {
                existingItem.quantity += 1; // Increment quantity
            } else {
                selectedItem.quantity = 1; // Set initial quantity
                cart.push(selectedItem);
            }
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${selectedItem.itemName} has been added to your cart.`);
        }
    }
});