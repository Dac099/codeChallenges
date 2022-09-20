const cards = {
  card_front: {
    numbers: document.querySelector('.card-front--numbers'),
    user_name: document.querySelector('.card-front--name'),
    card_year: document.querySelector('.date-year'),
    card_month: document.querySelector('.date-month')
  },
  card_back: {
    cvc: document.querySelector('.card-back--numbers')
  }
};

const form = {
  name: document.querySelector('#card_name'),
  number: document.querySelector('#card_number'),
  month: document.querySelector('#card_month'),
  year: document.querySelector('#card_year'),
  code: document.querySelector('#card_code'),
  submit: document.querySelector('#btn-submit'),
  formFields: document.querySelector('#form')
};

const formCoplete = document.querySelector('#form-complete');

export {cards, form, formCoplete};