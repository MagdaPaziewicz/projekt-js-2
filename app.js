const qs = (selector) => document.querySelector(selector);

const calculatorbtn = qs('.calculator');
const result = qs('.result');
const number = qs('.number');
const currencies = qs('.currencies');

calculatorbtn.addEventListener('click', (e) => {
  e.preventDefault()
  fetch('https://api.nbp.pl/api/exchangerates/tables/a/?format=json')
   .then((response) => response.json())
   .then((data) => {
    const currency = data[0].rates.filter((elem) => elem.code === currencies.value);
    result.innerText = `To ${currency[0].mid * number.value} PLN`;
  })
   .catch((error) => console.log(error));
});
