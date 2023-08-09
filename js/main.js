const slider = document.querySelector('.products');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const menuBar = document.querySelector(".menu-bar");
const navbar = document.querySelector(".nav-links");

menuBar.addEventListener("click", () => {
  navbar.classList.toggle("show-links");
  console.log("clicked")
})

const lightImg1 = "images/lightring.png";
const lightImg2 = "images/lightpic2.png";
const lightImg3 = "images/lightpic3.png";
const lightImg4 = "images/lightpic4.png";

const darkImg1 = "images/darkring.png";
const darkImg2 = "images/darkpic2.png";
const darkImg3 = "images/darkpic3.png";
const darkImg4 = "images/darkpic4.png";

const leftImg1 = document.getElementById("left-img1");
const leftImg2 = document.getElementById("left-img2");
const rightImg1 = document.getElementById("right-img1");
const rightImg2 = document.getElementById("right-img2");

leftImg1.addEventListener('mouseover', () => {
  leftImg1.src = darkImg1;
});
leftImg1.addEventListener('mouseout', () => {
  leftImg1.src = lightImg1;
});

leftImg2.addEventListener('mouseover', () => {
  leftImg2.src = darkImg2;
});
leftImg2.addEventListener('mouseout', () => {
  leftImg2.src = lightImg2;
});

rightImg1.addEventListener('mouseover', () => {
  rightImg1.src = darkImg3;
});
rightImg1.addEventListener('mouseout', () => {
  rightImg1.src = lightImg3;
});
rightImg2.addEventListener('mouseover', () => {
  rightImg2.src = darkImg4;
});
rightImg2.addEventListener('mouseout', () => {
  rightImg2.src = lightImg4;
});


let slideIndex = 0;

prevBtn.addEventListener('click', () => {
  showSlide(slideIndex - 1);
});

nextBtn.addEventListener('click', () => {
  showSlide(slideIndex + 1);
});

function showSlide(index) {
  const slides = document.querySelectorAll('.product');
  
  if (index < 0) {
    index = slides.length - 1;
  } 
  else if (index >= slides.length) {
    index = 0;
  }
  
  slides.forEach(slide => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
  
  slideIndex = index;
}

showSlide(slideIndex);



const feedbacks = document.querySelectorAll('.feedback');
let currentIndex = 0;

function showFeedbacks(index) {
  feedbacks[currentIndex].classList.remove('focused');
  feedbacks[index].classList.add('focused');
    currentIndex = index;
}

function nextSlide() {
    const nextIndex = (currentIndex + 1) % feedbacks.length;
    showFeedbacks(nextIndex);
}
setInterval(nextSlide, 3000);