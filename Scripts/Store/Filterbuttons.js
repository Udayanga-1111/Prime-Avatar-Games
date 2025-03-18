let FilterDisplay = document.querySelector('.filter-list-2');
let isShow = false;

function ShowFilters() {
    isShow = !isShow;
    FilterDisplay.classList.toggle('show', isShow);
}

let GetXbox = document.querySelectorAll(".xbox");
let GetPlayStation = document.querySelectorAll(".PS");
let GetPlay = document.querySelectorAll(".plays");

let isHide = true;

function ResetFilter() {
    isShow = false;
    GetPlayStation.forEach(PS => {
        PS.classList.toggle("hide", isShow);
    });
    

    GetPlay.forEach(plays => {
        plays.classList.toggle("hide", isShow);
    });

    GetXbox.forEach(xbox => {
        xbox.classList.toggle("hide", isShow);
    });

}


function DisplayXbox() {
    isHide = !isHide;

    GetPlayStation.forEach(PS => {
        PS.classList.toggle("hide");
    });

    GetPlay.forEach(plays => {
        plays.classList.toggle("hide");
    });

    GetXbox.forEach(xbox => {
        xbox.classList.toggle("show")
    })
}

function DisplayPlaystation() {
    
    GetXbox.forEach(xbox => {
        xbox.classList.toggle("hide");
    });

    GetPlay.forEach(plays => {
        plays.classList.toggle("hide");
    });
}