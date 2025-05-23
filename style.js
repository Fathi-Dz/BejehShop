function togglemode() {
  document.body.classList.toggle("dark-mode");
  const btn = document.querySelector('.toggle-theme');
  if (document.body.classList.contains("dark-mode")) {
      btn.textContent = "☀️ Mode Terang";
  } else {
      btn.textContent = "🌙 Mode Gelap";
  }
}
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("carousel-slide");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }    

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";  
  dots[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 5000); // 5 detik
}

function plusSlides(n) {
  slideIndex += n - 1;
  showSlides();
}

function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}




