// javascript

const list = [
    { name: '', lastLead: 0 }
]
function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

const date = new Date();
const saturday = 6;
const sunday = 0;
const thisMonth = date.getMonth();
let nextMonth = date.getMonth() + 1
nextMonth = nextMonth >= 12 ? 0 : nextMonth
const numOfDaysInThisMonth = date.getDate();
let numOfDaysInNextMonth = (new Date())
numOfDaysInNextMonth.setMonth(nextMonth)
numOfDaysInNextMonth = numOfDaysInNextMonth.getDate();



// console.log({numOfDaysInNextMonth, numOfDaysInThisMonth, nextMonth, thisMonth, saturday, sunday})
// console.log()


// convert alphabet to number function
export const alphabetToNumber = (words) => {
  let sum = 0
  const array = []
  for (let alphabet of words.split('')) {
    const digit = alphabet.charCodeAt(0) - (65+31)
    sum += digit
    array.push({digit, alphabet  })    
  }
  return {sum, array};
};

export const numberToAlphabet = (number) => {
  return String.fromCharCode(number + 65);
};

// console.log(alphabetToNumber('kirgawa'))

const input = document.getElementById('alphabets');
const btn = document.getElementById('generate');
const word = document.getElementById('word');
const number = document.getElementById('number');
const listD = document.getElementById('list');

function process() {
  listD.innerHTML = ''
  const result = alphabetToNumber(input.value);
  word.textContent = input.value
  number.textContent = result.sum;
  result.array.forEach(item => {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.textContent = item.alphabet
    const td2 = document.createElement('td');
    td2.textContent = item.digit
    tr.appendChild(td1)
    tr.appendChild(td2)
    listD.appendChild(tr);
  })
}
input.addEventListener('keyup', process);
btn.addEventListener('click', process);
