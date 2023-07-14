const burger = document.querySelector('.burger');
const articles = document.querySelectorAll('article');
const teamCards = document.querySelectorAll('.team-card');
const navLinks = document.querySelectorAll('.nav-links a');





burger.addEventListener("click", ()=> {
    if(burger.classList.contains("active")){
        gsap.to(".nav-links", {x: "100%"});
        gsap.to(".burger", {color: "var(--light)"});
        gsap.set("body", {overflow: "auto"})
    }else{
        gsap.to(".nav-links", {x: "0%"});
        gsap.to(".burger", {color: "var(--dark)"});
        gsap.set("body", {overflow: "hidden"});
        gsap.fromTo(".nav-links a",
        {opacity: 0},
        {opacity: 1, delay: .3, stagger: .1})
    }
    burger.classList.toggle("active");
    console.log(burger.classList)

});

navLinks.forEach(link =>{
    link.addEventListener('click',()=>{
        gsap.to(".nav-links", {x: "100%"});
        gsap.to(".burger", {color: "var(--light)"});
        gsap.set("body", {overflow: "auto"})
        burger.classList.toggle("active");
    })
})

articles.forEach((article)=>{

    if(article.classList.contains('odd')){
    gsap.fromTo(article, 
        {x:"+150", opacity: "0"}, {x:"0", opacity:"1", duration: .7, ease:'easeInOut',
        scrollTrigger: {
            trigger: article,
            start: "top 60%",
                   
        }
    });
    }else{
        gsap.fromTo(article, 
            {x:"-150", opacity: "0"}, {x:"0", opacity:"1", duration: .7, ease:'easeInOut',
            scrollTrigger: {
                trigger: article,
                start: "top 60%",
                
                
            }
        })
    }
});

teamCards.forEach((teamCard)=>{

    gsap.fromTo(teamCard, 
        {y:"+30", opacity: "0"}, {y:"0", opacity:"1", duration: 1, ease:'easeInOut',
        scrollTrigger: {
            trigger: teamCard,
            start: "top 80%",
           
        
        }
    });

});
