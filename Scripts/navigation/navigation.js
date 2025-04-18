const peripherals = document.getElementById("peripheralsLink");
const consoles = document.getElementById("consoleLink");
const ps = document.getElementById("psFilter");
const xbox = document.getElementById("xboxFilter");
const plays = document.getElementById("playsFilter");

const mouse = document.getElementById("mouseFilter");
const monitor = document.getElementById("monitorFilter");
const router = document.getElementById("routerFilter");
const chair = document.getElementById("chairFilter");
const simulator = document.getElementById("simulatorFilter")
const keyboard = document.getElementById("keyboardFilter");

const processor = document.getElementById("processorFilter");
const ram = document.getElementById("ramFilter");
const motherboard = document.getElementById("motherboardFilter");
const graphicCard = document.getElementById("graphicCardFilter");
const storage = document.getElementById("storageFilter");

peripherals.addEventListener("click", () => {
    localStorage.setItem("filterValue", "filterAll");
})

consoles.addEventListener("click", () => {
    localStorage.setItem("filterValue", "filterAll");
})

ps.addEventListener("click", () => {
    localStorage.setItem("filterValue", "filterPS");
    window.location.href = "Consoles.html";
})

xbox.addEventListener("click", () => {
    window.location.href = "Consoles.html";
    localStorage.setItem("filterValue", "filterXbox");
})

plays.addEventListener("click", () => {
    window.location.href = "./Consoles.html";
    localStorage.setItem("filterValue", "filterPlays");
})

mouse.addEventListener("click", () => {
    window.location.href = "peripherals.html";
    localStorage.setItem("filterValue", "filterMouse");
})
keyboard.addEventListener("click", () => {
    window.location.href="peripherals.html"
    localStorage.setItem("filterValue", "filterKeyboard");
})

chair.addEventListener("click", () => {
    window.location.href="peripherals.html"
    localStorage.setItem("filterValue", "filterChair");
})

simulator.addEventListener("click", () => {
    window.location.href="peripherals.html"
    localStorage.setItem("filterValue", "filterSimulator");
})

monitor.addEventListener("click", () => {
    window.location.href="peripherals.html"
    localStorage.setItem("filterValue", "filterMonitor");
})

router.addEventListener("click", () => {
    window.location.href="peripherals.html"
    localStorage.setItem("filterValue", "filterRouter");
})

processor.addEventListener("click", () => {
    window.location.href="peripherals.html"
    localStorage.setItem("filterValue", "filterProcessor");
})

ram.addEventListener("click", () => {
    window.location.href="peripherals.html"
    localStorage.setItem("filterValue", "filterRam");
})

motherboard.addEventListener("click", () => {
    window.location.href="peripherals.html"
    localStorage.setItem("filterValue", "filterMotherboard");
})

graphicCard.addEventListener("click", () => {
    window.location.href="peripherals.html"
    localStorage.setItem("filterValue", "filterGraphicCard");
})

storage.addEventListener("click", () => {
    window.location.href="peripherals.html"
    localStorage.setItem("filterValue", "filterStorage");
})