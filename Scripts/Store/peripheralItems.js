// define the class for peripheral items.

class item {
    constructor(
        itemNo,
        itemClass,
        imgSrc,
        itemName,
        itemPrice,
        ItemStatus,
    ) {
        this.itemNo = itemNo,
        this.itemClass = itemClass;
        this.imgSrc = imgSrc;
        this.itemName = itemName;
        this.itemPrice = itemPrice;
        this.ItemStatus = ItemStatus;
    }

    cardCreator = function () {
        let aDiv = document.createElement("a");
        aDiv.classList.add("card");
        aDiv.classList.add(this.itemClass)
        aDiv.setAttribute("href", "#store");
        aDiv.innerHTML =
            `<img src="${this.imgSrc}" alt="Item Picture" class="item-pic">
    
            <section class="item-details">
                <h2 class="item-name">${this.itemName}</h2>
                <h4 class="price">$${this.itemPrice}</h4>
                <h4 class="extra">${this.ItemStatus}</h4>
                <button class="addToCart" id="${this.itemNo}">+</button>
            </section>`;
        
        let itemSection = document.querySelector(".item-list"); // Assuming 'item-list' is a class
        itemSection.append(aDiv);
    };
}

// 01

const item1 = new item(
    "item1",
    "mouse",
    "./Stylesheets/Images/Peripherals-Images/Glorious-Model_D.webp",
    "Glorious Model D",
    "61.39",
    "Available"
)

item1.cardCreator();