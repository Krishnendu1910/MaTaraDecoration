gsap.registerPlugin(ScrollTrigger);

/* HERO */
gsap.from(".hero-title",{y:80,opacity:0,duration:1.5});

/* SECTION REVEAL */
gsap.utils.toArray(".section").forEach(sec=>{
  gsap.from(sec,{
    opacity:0,y:80,duration:1,
    scrollTrigger:{trigger:sec,start:"top 80%"}
  });
});

/* MODAL */
const modal=document.querySelector(".modal");
document.querySelectorAll(".book-btn,.open-modal")
.forEach(b=>b.onclick=()=>modal.style.display="flex");
document.querySelector(".close").onclick=()=>modal.style.display="none";

/* MOBILE MENU */
const hamburger=document.querySelector(".hamburger");
const mobileMenu=document.querySelector(".mobile-menu");
const mobileLinks=document.querySelectorAll(".mobile-menu a");

hamburger.onclick=()=>mobileMenu.style.right="0";
mobileLinks.forEach(l=>l.onclick=()=>mobileMenu.style.right="-260px");
document.addEventListener("click",e=>{
  if(!mobileMenu.contains(e.target)&&!hamburger.contains(e.target)){
    mobileMenu.style.right="-260px";
  }
});

/* EXPLORE MORE */
const exploreBtn=document.getElementById("exploreBtn");
const moreServices=document.querySelector(".more-services");
let expanded=false;

exploreBtn.onclick=()=>{
  if(!expanded){
    moreServices.style.display="grid";
    gsap.from(".more-services .service-card",{opacity:0,y:60,stagger:.15});
    exploreBtn.innerHTML='Show Less <span class="arrow">↑</span>';
    expanded=true;
  }else{
    moreServices.style.display="none";
    exploreBtn.innerHTML='Explore More <span class="arrow">↓</span>';
    expanded=false;
    document.getElementById("services")
      .scrollIntoView({behavior:"smooth"});
  }
};
/* ================= WHATSAPP AUTO BOOKING ================= */
document.getElementById("bookingForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("custName").value;
  const phone = document.getElementById("custPhone").value;
  const details = document.getElementById("custDetails").value;

  const message = 
`Hello Ma Tara Decoration,
Name: ${name}
Phone: ${phone}
Event Details: ${details}`;

  const whatsappURL = 
`https://wa.me/917439872795?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
});

/* ================= DARK MODE TOGGLE ================= */
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.onclick = () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
};

/* ================= PAYMENT DEMO ================= */
function payNow(){
  alert("Payment Successful (Demo)");
  document.getElementById("paymentModal").style.display="none";
}

function closePayment(){
  document.getElementById("paymentModal").style.display="none";
}

/* Example trigger (optional) */
document.querySelectorAll(".book-btn").forEach(btn=>{
  btn.addEventListener("dblclick", ()=>{
    document.getElementById("paymentModal").style.display="flex";
  });
});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{
  let current="";
  sections.forEach(sec=>{
    const top = window.scrollY;
    const offset = sec.offsetTop - 120;
    if(top >= offset) current = sec.getAttribute("id");
  });

  navLinks.forEach(link=>{
    link.classList.remove("active");
    if(link.getAttribute("href") === `#${current}`){
      link.classList.add("active");
    }
  });
});
