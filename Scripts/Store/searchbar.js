document.addEventListener("DOMContentLoaded", () => {
    const inputTxt = document.getElementById("search");
    const searchBtn = document.getElementById("searchbutton");
    const items = document.querySelectorAll("card");

    if (searchBtn && inputTxt) {
        searchBtn.addEventListener("click", searchFunc);
    }

    function searchFunc(event) {
        event.preventDefault();
        
        if (inputTxt.value == "peripherals" || inputTxt.value === "Peripherals") {
            console.log(inputTxt.value);
            
            window.location.href = "./Peripherals.html";
        }
        
        let searchTxt = inputTxt.value.toLowerCase();

        switch (true) {
            case searchTxt == "mouse":
                window.location.href = "./Peripherals.html";
                document.addEventListener("DOMContentLoaded", () => {
                    items.forEach(item => {
                        console.log("wada")
                        if (item.className != "mouse") {
                            item.style.display == "none";
                        }
                    });
                });
        }
    }
});