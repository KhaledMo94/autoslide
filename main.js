let mySlides = document.querySelectorAll(".mySlides");
let dots = document.querySelectorAll(".dot");
let slideIndex = 1;

function showSlide (n){
    if (n > mySlides.length){
        slideIndex = 1;
    }
    if (n <1){
        slideIndex = mySlides.length;
    }
    for(let i=0; i<mySlides.length;i++){
        mySlides[i].style.display = "none";
    }
    dots.forEach(dot =>{
        dot.classList.remove("active")
    })
    mySlides[slideIndex-1].style.display="block";
    dots[slideIndex-1].classList.add("active");
}

function currentSlide(n){
    showSlide(slideIndex = n);
}

function changeSlides(n){
    slideIndex+=n;
    showSlide(slideIndex)
}
showSlide()
function startSlide(){
    id = setInterval(function(){
        slideIndex++;
        showSlide(slideIndex);
},2000);}

function stopSlide(){
    clearInterval(id);
}
startSlide();
document.querySelector(".container").addEventListener("mouseenter",stopSlide);
document.querySelector(".container").addEventListener("mouseleave",startSlide)

