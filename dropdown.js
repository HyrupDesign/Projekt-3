function myFunction() {
  var content = document.getElementById("dropdown-content");

  if (content.classList.contains("show")) {
    content.classList.remove("show");
  } else {
    content.classList.add("show");
  }
}

/*                    */
/*   billede slide    */
/*                    */

const slideIndices = {};

function openSlideshow(id) {
  document.getElementById(id).style.display = "block";
  if (!(id in slideIndices)) {
    slideIndices[id] = 0;
  }
  showSlide(slideIndices[id], id);
}

function closeSlideshow(id) {
  document.getElementById(id).style.display = "none";
}

function changeSlide(n, id) {
  slideIndices[id] += n;
  showSlide(slideIndices[id], id);
}

function showSlide(n, id) {
  const container = document.getElementById(id);
  const slides = container.querySelectorAll(".slide");

  if (n >= slides.length) slideIndices[id] = 0;
  if (n < 0) slideIndices[id] = slides.length - 1;

  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  slides[slideIndices[id]].style.display = "block";
}
