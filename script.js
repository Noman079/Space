let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountains_behind = document.getElementById('mountains_behind')
let mountains_front = document.getElementById('mountains_front')
let text = document.getElementById('text')
let btn = document.getElementById('btn')

window.addEventListener('scroll', function(){
    let value = window.scrollY
     
     moon.style.top = value * 1.5 + 'px';
     mountains_behind.style.top = value * 0.5 + 'px';
     mountains_front.style.top = value * 0 + 'px';
     text.style.marginRight = value * 4 + 'px'
     text.style.marginTop = value * 1.5 + 'px'
     btn.style.marginTop = value * 1.5 + 'px'
})

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
});

let loader = document.getElementById("preloader");
window.addEventListener("load", function(){
  loader.style.display = "none";
})

document.getElementById("scrollToLast").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default anchor behavior
  document.getElementById("last").scrollIntoView({ behavior: "smooth" });
});
