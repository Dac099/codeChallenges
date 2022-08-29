const container = document.querySelector('.container');
const thanks_card = document.querySelector('.thanks-card');
const rating_card = document.querySelector('.rating-card');
const ratings = document.querySelector('.rating-card--nums').getElementsByTagName('li');
const submit_btn = document.querySelector('.rating-card--btn');
const target_rating = document.querySelector('.thanks-card--rating');
let rating = 0;

thanks_card.style.display = "none";

for (let i = 0; i < 5; i++) {
  ratings[i].addEventListener('click', () => {
    rating = ratings[i].innerText;
  });
}

submit_btn.addEventListener('click', () => {
  rating_card.style.display = 'none';
  target_rating.innerHTML = `You selected ${rating} out of 5`;
  thanks_card.style.display = "grid";
});