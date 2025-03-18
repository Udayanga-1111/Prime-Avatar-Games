// define the class for console items.

class item {
    constructor(
        itemClass,
        imgSrc,
        itemName,
        itemPrice,
        ItemStatus,
    ) {
        this.itemClass = itemClass;
        this.imgSrc = imgSrc;
        this.itemName = itemName;
        this.itemPrice = itemPrice;
        this.ItemStatus = ItemStatus;
    }

    cardCreator = function () {
        let aDiv = document.createElement("a");
        aDiv.classList.add(this.itemClass);
        aDiv.setAttribute("href", "#store");
        aDiv.innerHTML =
            `<div class="card">
                <img src="${this.imgSrc}" alt="item picture" class="item-pic">
                <section class="item-details">
                    <h2 class="item-name">${this.itemName}</h2>
                    <h4 class="price">$ ${this.itemPrice}</h4>
                    <h4 class="extra">${this.ItemStatus}</h4>
                    <button class="addToCart">Add To Cart</button>
                </section>
            </div>`;
        
        let itemSection = document.querySelector(".item-list"); // Assuming 'item-list' is a class
        itemSection.append(aDiv);
    };
}

// Item Objects.

// 01

const PSSlim = new item(
    "PS",
    "./Stylesheets/Images/Console-Images/PS-4-Slim.webp",
    "Play Station 4 Slim",
    "392.23",
    "Available"
);

PSSlim.cardCreator();

// 02

const XboxSeries = new item(
    "xbox",
    "./Stylesheets/Images/Console-Images/X-box_Series_X.webp",
    "X Box Series X",
    "648",
    "Available"
)

XboxSeries.cardCreator();

// 03

const RGConsloe = new item(
    "plays",
    "./Stylesheets/Images/Console-Images/RG353VS-black.webp",
    "RG353VS",
    "112.55",
    "Available"
)

RGConsloe.cardCreator();


// 04

const LigionGo = new item(
    "plays",
    "./Stylesheets/Images/Console-Images/Legion_GO.webp",
    "Ligion GO",
    "1190.32",
    "Available"
)

LigionGo.cardCreator();

// 05

const xboxS = new item(
    "xbox",
    "./Stylesheets/Images/Console-Images/X-Box-Series_S.webp",
    "X Box Series S",
    "409.28",
    "Available"
)

xboxS.cardCreator();

// 06

const PS5Pro = new item(
    "PS",
    "./Stylesheets/Images/Console-Images/PS-5-Pro_Console-2TB.webp",
    "PS 5 Pro Console",
    "1012.97",
    "Available"
)

PS5Pro.cardCreator();