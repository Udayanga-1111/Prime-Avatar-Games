const abc = [];
const addToHtml = function () {
    abc.forEach(product => {
        let aDiv = document.createElement("div");
        aDiv.classList.add("card");
        aDiv.classList.add(product.itemClass)
        aDiv.innerHTML =
            `<img src="${product.imgSrc}" alt="Item Picture" class="item-pic">
    
            <section class="item-details">
                <h2 class="item-name">${product.itemName}</h2>
                <h4 class="price">${product.itemPrice} LKR</h4>
                <button class="addToCart none" id="${product.itemNo}">Add To Cart</button>
            </section>
            
            <button class="addToCart none2" id="${product.itemNo}">Add To Cart</button>`;
        
        let itemSection = document.querySelector(".item-list"); // Assuming 'item-list' is a class
        itemSection.append(aDiv);
    })

    let filterKey = localStorage.getItem("filterValue");
    const cards = document.querySelectorAll(".card");
    const ps = document.getElementById("psFilter");
    const xbox = document.getElementById("xboxFilter");
    const plays = document.getElementById("playsFilter");
    cards.forEach(card => {
        card.style.display = "none"; // Hide all items by default
    })

    switch (true) {
        case (filterKey == "filterPS"):
            cards.forEach(card => {
                if (card.classList.contains("ps")) {
                    card.style.display = "flex"; // Show keyboard items
                }
            });
            ps.style.color = "rgb(82, 220, 238)";
            break;
        
        case (filterKey == "filterXbox"):
            cards.forEach(card => {
                if (card.classList.contains("xbox")) {
                    card.style.display = "flex"; // Show mouse items
                }
            });
            xbox.style.color = "rgb(82, 220, 238)";
            break;
        case (filterKey == "filterPlays"):
            cards.forEach(card => {
                if (card.classList.contains("plays")) {
                    card.style.display = "flex"; // Show monitor items
                }
            });
            plays.style.color = "rgb(82, 220, 238)";
            break;
        
        case(filterKey=="filterAll"):
            cards.forEach(card => {
                card.style.display = "flex"; // Show all items if no filter is applied
            });
            break;
    }
};


const initApp = () => {
    fetch('./Scripts/Store/items.json') // Ensure the file is in the root directory of the server
        .then(response => response.json())
        .then(data => {
            abc.push(...data.consoles); // Spread operator to push all items into the array
            
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