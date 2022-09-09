import { form } from './elements.js';
import { fillSectionCard } from './fill_cards.js';
import { cards } from './elements.js';

const { name, number, month, year, code } = form;
const { numbers, date, user_name } = cards.card_front;
const { cvc } = cards.card_back;

function readingForm(){
  name.addEventListener('input', (e) => {
    fillSectionCard(user_name, name.value);
  });

  number.addEventListener('input', (e) => {
    fillSectionCard(numbers, number.value);
  });

  month.addEventListener('input', (e) => {
    fillSectionCard(date, month.value);
  });

  year.addEventListener('input', (e) => {
    fillSectionCard(date, year.value);
  });

  code.addEventListener('input', (e) => {
    fillSectionCard(cvc, code.value);
  });
}

export {readingForm};