const observer = new IntersectionObserver((entries) => { 
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("inAnimations");
        }
    });
});

// hidden is just an class name that i used to call get the DOM elements
const allHidden = document.querySelectorAll(".hidden");

allHidden.forEach((hidden) => observer.observe(hidden));