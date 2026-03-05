//FAQ Section js
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");

  button.addEventListener("click", () => {
    // Close others
    faqItems.forEach((i) => {
      if (i !== item) {
        i.classList.remove("active");
      }
    });

    // Toggle current
    item.classList.toggle("active");
  });
});

// Application section js
const track = document.querySelector(".slider-track");
const leftBtn = document.querySelector(".arrow.left");
const rightBtn = document.querySelector(".arrow.right");

const cardWidth = 374;
let position = 0;

rightBtn.addEventListener("click", () => {
  const maxScroll =
    track.scrollWidth - document.querySelector(".slider-wrapper").offsetWidth;

  position -= cardWidth;

  if (Math.abs(position) > maxScroll) {
    position = -maxScroll;
  }

  track.style.transform = `translateX(${position}px)`;
});

leftBtn.addEventListener("click", () => {
  position += cardWidth;

  if (position > 0) {
    position = 0;
  }

  track.style.transform = `translateX(${position}px)`;
});
