import { form, formCoplete } from './elements.js';
const constraint = /^[0-9]+$/;

const { number, month, year, code, submit, formFields } = form;

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

    if(number.value != ''){
      errorInput(number, '#21092f');
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

    if(month.value != ''){
      errorInput(month, '#21092f');
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

    if(year.value != ''){
      errorInput(year, '#21092f');
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

    if(code.value != ''){
      errorInput(code, '#21092f');
    }
  });
}

export function verifyEmpty(){
  submit.addEventListener('click', (e) => {
    if(number.value == ''){
      errorMessage(`Can't be blank`, '#error_number');
    }

    if(month.value == ''){
      errorMessage(`Can't be blank`, '#error_month');
    }

    if(year.value == ''){
      errorMessage(`Can't be blank`, '#error_month');
      errorInput(year, '#ff3333');
    }

    if(code.value == ''){
      errorMessage(`Can't be blank`, '#error_code');
    }

    if(number.value != '' && month.value != '' && year.value != '' && code.value != ''){
      e.preventDefault();
      formFields.style = 'display: none;'
      formCoplete.classList.remove('hide');
    }
  });
}

export function checklenght(){
  number.addEventListener('blur', () => {
    if(number.value.length < 16){
      errorMessage('length less than 16', '#error_number');
    }
  });
  month.addEventListener('blur', () => {
    if(month.value.length < 2){
      errorMessage('length less than 2', '#error_month');
    }
  });
  year.addEventListener('blur', () => {
    if(year.value.length < 2){
      errorMessage('length less than 2', '#error_month');
    }
  });
  code.addEventListener('blur',  () => {
    if(code.value.length < 3){
      errorMessage('length less than 3', '#error_code');
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
  const input = error_msg.parentNode.getElementsByTagName('input')[0];
  errorInput(input, '#ff3333');
  error_msg.innerText = msg;
}

function errorInput(inputElement, color){
  inputElement.style = `border-color: ${color}`;
}