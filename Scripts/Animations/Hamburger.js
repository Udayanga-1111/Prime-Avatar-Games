const menuButn = document.getElementById("open-sidebar-button");
const closeButn = document.getElementById('close-sidebar-button');
const sidebar = document.querySelector(".links-container");

menuButn.addEventListener("click", () => {
    console.log(sidebar.classList)
    sidebar.classList.toggle("slideAnimation");
});

closeButn.addEventListener("click", () => {
    console.log(sidebar.classList)
    sidebar.classList.toggle("slideAnimation");
});