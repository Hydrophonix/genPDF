const div = document.getElementById('link');
let data = {};

div.addEventListener('click', function() {
  const xhr = new XMLHttpRequest();

  xhr.open('POST', '/test', true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = () => {
    if (xhr.readyState != 4) return;
    if (xhr.status != 200) {
      console.log('error');
    } else {
      const data = JSON.parse(xhr.responseText);
      if (data.status !== 'success') {
        console.log('error');
      }
    }
  };

  const inp = document.getElementsByTagName('input');

  Array.from(inp, item => data[item.name] = item.value);
  data.sum = sum.textContent;
  data.sumWords = sumWords.textContent;
  data.organization = document.getElementById('organization').value;
  data.zayava = document.getElementById('zayava').value;
  data.skladnist = document.getElementById('skladnist').value;
  data.tup = document.getElementById('tup').value;
  console.log(data);
  xhr.send(JSON.stringify(data));
  setTimeout(() => window.open('/test/download'), 3000);
})

const sum = document.getElementById('sum');
const sumWords = document.getElementById('sumWords');
const hr = document.getElementById('workHours');
hr.addEventListener('change', () => {
  sum.textContent = `${(hr.value * 143).toFixed(2)} (${hr.value} × 143,00)`;
  sumWords.textContent = `(${toWords(hr.value * 143)} 00 коп )`;
});

const words = {
  num: ["", "одна", "дві", "три", "чотири", "п'ять", "шість", "сім", "вісім", "дев'ять"],
  dec: ["десять", "одинадцять", "дванадцять", "тринадцять", "чотирнадцять", "п'ятнадцять", "шістнадцять", "сімнадцять", "вісімнадцять", "дев'ятнадцять"],
  des: ["", "", "двадцять", "тридцять", "сорок", "п'ятдесят", "шістдесят", "сімдесят", "вісімдесят", "дев'яносто"],
  sot: ["", "сто", "двісті", "триста", "чотириста", "п'ятсот", "шістсот", "сімсот", "вісімсот", "дев'ятсот"],
  raz: [
    ["грн", "грн", "грн", "грн", "грн", "грн", "грн", "грн", "грн", "грн"],
    ["тисяч", "тисяча", "тисячі", "тисячі", "тисячі", "тисяч", "тисяч", "тисяч", "тисяч", "тисяч"]
  ]
}

function toWords(number) {
  const arr = number.toString().split(/(?=(?:\d{3})+$)/);
  if (arr[0].length === 1) arr[0] = `00${arr[0]}`;
  if (arr[0].length === 2) arr[0] = `0${arr[0]}`;
  return arr.reduce((str, item, i, arr) =>
    `${str}
     ${wordsIteration(item)}
     ${item[1] == 1 ? words.raz[arr.length -1 - i][0] : words.raz[arr.length -1 - i][item[2]]}`, '');
}

function wordsIteration(item) {
  if ((item.slice(-2, 0) < 20) && (item[1] == 1)) {
    return `${words.sot[item[0]]} ${words.dec[item[2]]}`
  } else {
    return `${words.sot[item[0]]} ${words.des[item[1]]} ${words.num[item[2]]}`
  }
}

document.getElementById('expert').addEventListener('change', () =>
  document.getElementById('expert2').textContent = `_____________ ${document.getElementById('expert').value}`
);
