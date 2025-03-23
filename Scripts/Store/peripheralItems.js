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