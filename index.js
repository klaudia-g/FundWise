const burger = document.querySelector('.burger');
const sections = document.querySelectorAll('section');

burger.addEventListener("click", ()=> {
    if(burger.classList.contains("active")){
        gsap.to(".nav-links", {x: "100%"});
        gsap.to(".burger", {color: "var(--light)"});
        gsap.set("body", {overflow: "auto"})
    }else{
        gsap.to(".nav-links", {x: "0%"});
        gsap.to(".burger", {color: "var(--dark)"});
        gsap.set("body", {overflow: "hidden"})
    }
    burger.classList.toggle("active");

});


