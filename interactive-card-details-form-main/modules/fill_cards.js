export function fillSectionCard(element, content){
  element.innerText = content;
}

export function formatString(arr, str){
  for(let i = 1; i <= arr.length; i++){
    if(i%4 === 0){
      str += arr[i-1] + ' ';
    }
  
    if(i%4 !== 0){
      str += arr[i-1];
    }
  }

  return str.slice(9);
}