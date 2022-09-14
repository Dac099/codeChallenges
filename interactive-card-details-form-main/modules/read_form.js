import { form } from './elements.js';
import { fillSectionCard, formatString } from './fill_cards.js';
import { cards } from './elements.js';

const { name, number, month, year, code } = form;
const { numbers, date, user_name } = cards.card_front;
const { cvc } = cards.card_back;

function readingForm(){
  let card_numbers = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  let str_numbers;

  name.addEventListener('input', (e) => {
    fillSectionCard(user_name, name.value);
  });

  number.addEventListener('input', (e) => {
    const position = number.value.length - 1;

    card_numbers.splice(position, 1, number.value[position]);
    
    console.log(formatString(card_numbers.join(''), str_numbers));

    fillSectionCard(numbers, formatString(card_numbers.join(''), str_numbers));
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