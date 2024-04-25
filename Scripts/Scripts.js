
//navbar hamburger collapse
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navbarFunction() {
    var x = document.getElementById("mytopnav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  } 


//begin quote carousel//
let time = 10000;
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  
}

// Thumbnail image controls
//function currentSlide(n) {
//   showSlides(slideIndex = n);
//  }

//automatic slideshow start
slideshow();

function slideshow(){
  
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  slides[slideIndex-1].style.display = "flex";  
  
  setTimeout(slideshow, time); // Change image every 2 seconds
}


function showSlides(n) { //define function for the manual slideshow
  
    //define i and slides in scope
    let i; 
    let slides = document.getElementsByClassName("mySlides");
    //let dots = document.getElementsByClassName("dot"); removed this
    //for loop to hide all slides that are less than the total slide length
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    if (n < 1) {slideIndex = slides.length}  
    if (n > slides.length) {slideIndex = 1} 
    
    //for (i = 0; i < dots.length; i++) {
    //  dots[i].className = dots[i].className.replace(" active", "");
    //}
    slides[slideIndex-1].style.display = "flex";  
    //dots[slideIndex-1].className += " active";
    
    console.log(slideIndex)
    //there was a bug in the original code. If you spam clicked an arrow it would permanently change the index and spam through, so we defined a separate function for the automatic slideshow    
    
    }

// ----typing text start----




//build a function that uses a nested loop to type text by going through the index and letter counters and displaying the array at a given speed


  //store text, typing speed,the index counter, and letter counter here
var count = 0;
function typing_text(){
  //recursive if statement that keeps executing until count reaches text length at 50ms
  if(count < text.length){
    span_id.textContent += text[count];
    count++;
    setTimeout(typing_text, speed);
  }
  else{
    return;
  }
  
  
}








