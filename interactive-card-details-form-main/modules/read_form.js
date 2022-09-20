import { form } from './elements.js';
import { fillSectionCard, formatString } from './fill_cards.js';
import { cards } from './elements.js';

const { name, number, month, year, code, submit, formFields } = form;
const { numbers, card_year, card_month, user_name } = cards.card_front;
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
    
    fillSectionCard(numbers, formatString(card_numbers.join(''), str_numbers));
  });

  month.addEventListener('input', (e) => {
    fillSectionCard(card_month, month.value);
  });

  year.addEventListener('input', (e) => {
    fillSectionCard(card_year, year.value);
  });

  code.addEventListener('input', (e) => {
    fillSectionCard(cvc, code.value);
  });
}


export {readingForm};