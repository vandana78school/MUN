const eventDate = new Date("July 31, 2026 09:00:00").getTime();

setInterval(function(){

const now = new Date().getTime();

const distance = eventDate - now;

const days = Math.floor(distance/(1000*60*60*24));

const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

const seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML=days;

document.getElementById("hours").innerHTML=hours;

document.getElementById("minutes").innerHTML=minutes;

document.getElementById("seconds").innerHTML=seconds;

},1000);

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>80){

nav.style.background="#02101D";

}else{

nav.style.background="rgba(0,0,0,.5)";

}

});