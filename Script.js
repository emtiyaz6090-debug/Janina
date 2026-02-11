/* Scroll Progress */

window.onscroll = function(){
let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
let scrolled = (winScroll / height) * 100;
document.getElementById("progressBar").style.width = scrolled + "%";
}

/* Smooth Scroll */

function scrollToSection(num){
document.querySelectorAll("section")[num].scrollIntoView({behavior:"smooth"});
}

/* Slider */

let index=0;
setInterval(()=>{
index++;
if(index>2) index=0;
document.getElementById("slides").style.transform=`translateX(-${index*100}%)`;
},3000);

/* Love Counter (October 1, 2024) */

function updateCounter(){
let startDate = new Date("October 1, 2024 00:00:00").getTime();
let now = new Date().getTime();
let distance = now - startDate;

let days = Math.floor(distance / (1000*60*60*24));
let hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
let minutes = Math.floor((distance % (1000*60*60))/(1000*60));

document.getElementById("loveCounter").innerHTML =
`${days} Days 💖 ${hours} Hours ⏳ ${minutes} Minutes`;
}

setInterval(updateCounter,1000);

/* Quiz */

function checkAnswer(correct){
let result=document.getElementById("quizResult");
if(correct){
result.innerHTML="Correct! Our love started in October 2024 💕";
result.style.color="green";
}else{
result.innerHTML="Oops! Try again 😘";
result.style.color="red";
}
}

/* Game */

function moveButton(btn){
btn.style.position="absolute";
btn.style.top=Math.random()*80+"%";
btn.style.left=Math.random()*80+"%";
}
/* DARK MODE TOGGLE */

function toggleMode(){
document.body.classList.toggle("dark");
}

/* SCROLL REVEAL CINEMATIC */

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
sections.forEach(sec => {
const top = sec.getBoundingClientRect().top;
if(top < window.innerHeight - 100){
sec.classList.add("show");
}
});
});

/* MULTI PAGE LOVE LETTER */

let currentPage = 0;
const pages = document.querySelectorAll(".page");

function nextPage(){
pages[currentPage].classList.remove("active");
currentPage++;

if(currentPage >= pages.length){
currentPage = 0;
}

pages[currentPage].classList.add("active");
}

/* Glow Particle Generator */

setInterval(()=>{
let glow=document.createElement("div");
glow.classList.add("glow");
glow.style.left=Math.random()*100+"%";
document.body.appendChild(glow);
setTimeout(()=>glow.remove(),6000);
},800);
