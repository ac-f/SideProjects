const funcType = ['+', '-', 'x', '÷'];
const processEl = document.getElementById('process');
const resultEl = document.getElementById('result');
const btnEls = document.querySelectorAll('.btn');

let process = '';
let result = 0;

btnEls.forEach((el) => el.addEventListener('click', eventHandler));

function eventHandler(event) {
  const type = event.target.dataset.type;
  const btnValue = event.target.innerText;
  switch (type){
    case 'num': {
      numHandler(btnValue);
      break;
    }
    case 'func': {
      funcHandler(btnValue);
      break;
    }
    default: {
      throw('undefined type', type);
    }
  }
}

function numHandler(value) {
  process+=value;
  processEl.innerText = process;
}
function funcHandler(value) {
  switch (value) {
    case 'AC': {
      process = '';
      result = 0;
      processEl.innerText = process;
      resultEl.innerText = result;
      break;
    }
    case 'DEL': {
      process = process.substring(0, process.length-1);
      processEl.innerText = process;
      break;
    }
    case '=': {
      //避免使用者，在還沒有任何運算內容時就按下=
      if(process!==''){
        const result = calc(processEl.innerText);
        process = result;
        processEl.innerText = result;
        resultEl.innerText = result;
      }
      break;
    }
    default: {
      const lastIndex = process.length-1;
      if(process!==''){
       //避免使用者一次按很多次func btn
        if (!funcType.includes(process.charAt(lastIndex))) {
          process += value;
          processEl.innerText = process;
        }
      }
      break;
    }
  }
}

function calc(calcStr){
  let str = calcStr;
  const lastIndex = calcStr.length-1;
  if(funcType.includes(str.charAt(lastIndex))) {
    str = str.substring(0, lastIndex);
  }
  str = str.replaceAll('x', '*');
  str = str.replaceAll('÷', '/');
  return `${eval(str)}`;//避免轉型後變成數字，無法用string 的methods
}