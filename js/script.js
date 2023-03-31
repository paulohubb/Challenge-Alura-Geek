// search - pesquisar produtos
const cards = document.querySelectorAll('.cards');
const filterInput = document.getElementById('filter');

function hasWhiteSpace(text) {
  return /\s/g.test(text);
}

filterInput.addEventListener('input', () => {
  const filterText = filterInput.value.toLowerCase();

  if (hasWhiteSpace(filterText)) return;

  for (const card of cards) {
    let cardTitle = card.querySelector('p');
    cardTitle = cardTitle.textContent.toLowerCase();

    if (cardTitle.includes(filterText)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  }
});

// slides
const slides = document.querySelectorAll(".banner");
const dots = document.querySelectorAll(".dot");
let slideIndex = 0;

function slidesMain() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    dots[i].classList.remove("active");
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].classList.add("active");

  setTimeout(slidesMain, 4000);
}

slidesMain();
