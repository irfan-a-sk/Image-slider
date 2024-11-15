let slideIndex = 0;
slideShow(slideIndex);

function plus_slides(n) {
  slideShow((slideIndex += n));

  //   Background colors change on click

  let counter = slideIndex;
  const colors = ["red", "green", "white", "black", "purple"];
  document.getElementById("next").addEventListener("click", () => {
    counter++;
    const colorIndex = counter % colors.length;
    document.getElementById("bg").style.backgroundColor = colors[colorIndex];
  });
  document.getElementById("prev").addEventListener("click", () => {
    counter++;
    const colorIndex = counter % colors.length;
    document.getElementById("bg").style.backgroundColor = colors[colorIndex];
  });
}

function currentSlide(n) {
  slideShow((slideIndex = n));
}

function slideShow(n) {
  let i;
  let slides = document.getElementsByClassName("myslides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Automatic slider Logic

let slideIndex2 = 0;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("myslides");
  let dots = document.getElementsByClassName("dot");

  // Hide all slides and remove active class from all dots
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show the current slide and activate the corresponding dot
  slideIndex2++;
  if (slideIndex2 > slides.length) {
    slideIndex2 = 1; // Reset to the first slide
  }
  slides[slideIndex2 - 1].style.display = "block";
  dots[slideIndex2 - 1].className += " active";

  //  Background colors change in every 3 seconds
  const colors = ["red", "green", "white", "black", "purple"];
  const colorIndex = slideIndex2 % colors.length;
  document.getElementById("bg").style.backgroundColor = colors[colorIndex];
}

// Change image every 3 seconds
setInterval(showSlides, 3000);
