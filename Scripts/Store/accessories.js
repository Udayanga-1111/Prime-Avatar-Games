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
    const slotName = document.querySelector(".slot-name");
    const cards = document.querySelectorAll(".card");
    const processor = document.getElementById("processorFilter");
    const ram = document.getElementById("ramFilter");
    const motherboard = document.getElementById("motherboardFilter");
    const graphicCard = document.getElementById("graphicCardFilter");
    const storage = document.getElementById("storageFilter");
    cards.forEach(card => {
        card.style.display = "none"; // Hide all items by default
    })

    switch (true) {
        case (filterKey == "filterProcessor"):
            cards.forEach(card => {
                if (card.classList.contains("processor")) {
                    card.style.display = "flex"; // Show keyboard items
                }
            });
            processor.style.color = "rgb(82, 220, 238)";
            slotName.innerHTML = "Processors";
            break;
        case (filterKey == "filterRam"):
            cards.forEach(card => {
                if (card.classList.contains("ram")) {
                    card.style.display = "flex"; // Show mouse items
                }
            });
            ram.style.color = "rgb(82, 220, 238)";
            slotName.innerHTML = "Memory Cards";
            break;
        case (filterKey == "filterMotherboard"):
            cards.forEach(card => {
                if (card.classList.contains("motherboard")) {
                    
                    card.style.display = "flex"; // Show monitor items
                }
            });
            motherboard.style.color = "rgb(82, 220, 238)";
            slotName.innerHTML = "Motherboards";
            break;
        
        case (filterKey == "filterGraphicCard"):
            cards.forEach(card => {
                if (card.classList.contains("graphicCard")) {
                    card.style.display = "flex"; // Show router items
                }
            });
            graphicCard.style.color = "rgb(82, 220, 238)";
            slotName.innerHTML = "Graphics Cards";
            break;
        
        case (filterKey == "filterStorage"):
            cards.forEach(card => {
                if (card.classList.contains("storage")) {
                    card.style.display = "flex"; // Show router items
                }
            });
            storage.style.color = "rgb(82, 220, 238)";
            slotName.innerHTML = "Storage Devices";
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
            abc.push(...data.Accessories); // Spread operator to push all items into the array
            
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