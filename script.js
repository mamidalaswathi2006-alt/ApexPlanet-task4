//==========================================
// MOBILE MENU
//==========================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

//==========================================
// CLOSE MENU AFTER CLICK
//==========================================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

//==========================================
// TYPING EFFECT
//==========================================

const professions = [

    "AI & ML Enthusiast",
    "Frontend Developer",
    "Python Developer",
    "Web Developer"

];

let professionIndex = 0;
let characterIndex = 0;
let deleting = false;

const typingElement = document.querySelector(".typing");

function typeEffect(){

    const current = professions[professionIndex];

    if(!deleting){

        typingElement.textContent = current.substring(0, characterIndex);

        characterIndex++;

        if(characterIndex > current.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }

    else{

        typingElement.textContent = current.substring(0, characterIndex);

        characterIndex--;

        if(characterIndex < 0){

            deleting = false;

            professionIndex++;

            if(professionIndex >= professions.length){

                professionIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting ? 60 : 120);

}

typeEffect();

//==========================================
// SCROLL TO TOP BUTTON
//==========================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        topBtn.style.display = "block";

    }

    else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

//==========================================
// ACTIVE NAVIGATION
//==========================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 150;

        if(scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") == "#" + current){

            link.classList.add("active");

        }

    });

});
//==========================================
// SCROLL REVEAL ANIMATION
//==========================================

const revealElements = document.querySelectorAll(
".about,.skills,.projects,.experience,.education,.certificates,.contact,.project-card,.skill-box,.certificate-card,.contact-card,.education-card,.experience-card,.stat-card"
);

function revealOnScroll(){

    revealElements.forEach((element)=>{

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            element.classList.add("fade");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

//==========================================
// PROJECT CARD HOVER EFFECT
//==========================================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(139,92,246,.28),
        #111827 70%)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="#111827";

    });

});

//==========================================
// PARALLAX HERO IMAGE
//==========================================

const heroImage=document.querySelector(".hero-right img");

window.addEventListener("mousemove",(e)=>{

    const x=(window.innerWidth/2-e.pageX)/35;
    const y=(window.innerHeight/2-e.pageY)/35;

    heroImage.style.transform=
    `translate(${x}px,${y}px)`;

});

//==========================================
// BUTTON RIPPLE EFFECT
//==========================================

document.querySelectorAll(".btn,.btn2,.project-btn").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const x=e.clientX-this.offsetLeft;

const y=e.clientY-this.offsetTop;

ripple.style.left=x+"px";
ripple.style.top=y+"px";

ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

//==========================================
// PRELOADER (OPTIONAL)
//==========================================

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

//==========================================
// CONSOLE MESSAGE
//==========================================

console.log("%cWelcome to Swathi's Portfolio 🚀",
"color:#8b5cf6;font-size:20px;font-weight:bold;");

console.log("%cDesigned with HTML, CSS & JavaScript",
"color:#ffffff;font-size:14px;");

//==========================================
// END OF SCRIPT
//==========================================