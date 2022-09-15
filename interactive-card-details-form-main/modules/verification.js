import { form } from './elements.js';
const constraint = /^[0-9]+$/;

const { number, month, year, code, submit } = form;

export function verifyNumbers(){
  number.addEventListener('input', () => {
    if(!checkConstraint(number)){
      errorMessage('Wrong format, numbers only', '#error_number');
    }else{
      errorMessage('', '#error_number');
    }

    if(number.value == ''){
      errorMessage('', '#error_number');
    }
  });

  month.addEventListener('input', () => {
    if(!checkConstraint(month)){
      errorMessage('Wrong format, numbers only', '#error_month');
      year.style = 'margin-bottom: 25px';
    }else{
      errorMessage('', '#error_month');
    }

    if(month.value ==''){
      errorMessage('', '#error_month');
      year.style = 'margin-bottom: 0px';
    }
  });

  year.addEventListener('input', () => {
    if(!checkConstraint(year)){
      errorMessage('Wrong format, numbers only', '#error_month');
      year.style = 'margin-bottom: 25px';
    }else{
      errorMessage('', '#error_month');
    }

    if(year.value == ''){
      errorMessage('', '#error_month');
      year.style = 'margin-bottom: 0px';
    }
  });

  code.addEventListener('input', () => {
    if(!checkConstraint(code)){
      errorMessage('Wrong format, numbers only', '#error_code');
    }else{
      errorMessage('', '#error_code');
    }

    if(code.value == ''){
      errorMessage('', '#error_code');
    }
  });
}

export function verifyEmpty(){
  submit.addEventListener('click', () => {
    if(number.value == ''){
      errorMessage(`Can't be blank`, '#error_number');
    }

    if(month.value == ''){
      errorMessage(`Can't be blank`, '#error_month');
      year.style = 'margin-bottom: 15px';
    }

    if(year.value == ''){
      errorMessage(`Can't be blank`, '#error_month');
      year.style = 'margin-bottom: 15px';
    }

    if(code.value == ''){
      errorMessage(`Can't be blank`, '#error_code');
    }
  });
}

function checkConstraint(input){
  const value = input.value;
  if(!value.match(constraint)){
    return false;
  }
  return true;
}

function errorMessage(msg, id){
  const error_msg = document.querySelector(id);
  error_msg.innerText = msg;
}