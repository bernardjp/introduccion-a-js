
const $selectBaseCurrency = document.getElementById('input-currency');
const $startButton = document.getElementById('apply-filters');
const $resetButton = document.getElementById('reset-filters');
const $tableBody = document.getElementById('table-rates');
const $tableTitle = document.getElementById('table-title');

const $inputDate = document.getElementById('input-date');
const currentDate = new Date().toISOString().substring(0, 10);

let currencyBase,
    currencyRatesList;

$startButton.onclick = function exchangeRateList(event) {
    let baseCurrencyInput = document.getElementById('input-currency').value;
    let dateInput = document.getElementById('input-date').value;

    resetDisplay();
    inputValidation(baseCurrencyInput, dateInput); //PENDIENTE.
    apiResponseHandler(baseCurrencyInput, dateInput);

    event.preventDefault();
};

$resetButton.onclick = function resetPage(event) {
    $inputDate.value = currentDate;
    resetDisplay(); 

    event.preventDefault();
}

function inputValidation(currency, date) { //No tiene validaciones todavia.
    //Es necesario validar un "Select"?
    //Validar date: fecha minima, fecha maxima.
    //Validar currency: Que exista, que se haya seleccionado algo.
};

function apiResponseHandler(currency, date){
    fetch(`https://api.exchangeratesapi.io/${date}?base=${currency}`)
        .then(response => response.json())
        .then(response => createDisplay(response))
        .catch(error => apiErrorMessage(error))
};

function createDisplay(apiResponse){
    document.getElementById('table-container').classList.remove('hidden');
    $tableBody.innerHTML = '';

    const baseCurrency = apiResponse.base;
    const completeList = apiResponse.rates;
    const currenciesList = Object.keys(completeList);
    const ratesList = Object.values(completeList);

    document.querySelector('#base-currency').innerText = baseCurrency;
    document.querySelector('#date').innerText = $inputDate.value;

    currenciesList.forEach((currency, index) => {
        const $tr = document.createElement('tr');
        const $tdCurrency = document.createElement('td');
        const $tdRate = document.createElement('td');

        if(currency !== baseCurrency){
            $tdCurrency.innerText = currency;
            $tdRate.innerText = ratesList[index];
            $tr.appendChild($tdCurrency);
            $tr.appendChild($tdRate);
            $tableBody.appendChild($tr); 
        }
    })
};

function apiErrorMessage(error) {
    console.error('Fallo:', error);
    document.querySelector('#error-message').classList.remove('hidden');
    document.querySelector('#error-message').innerText = 'Failed to fetch API data. Try again later.';
}

function resetDisplay(){   
    document.getElementById('table-container').classList.add('hidden');
    document.getElementById('table-rates').innerHTML = '';
};

//Setup inicial de la landingPage.
fetch('https://api.exchangeratesapi.io/latest')
    .then(response => response.json())
    .then(response => {
        currencyBase = response.base;
        currencyRatesList = Object.keys(response.rates);
    })
    .then(response => {
        defaultBaseCurrency(currencyBase);
        defaultListCurrency(currencyRatesList);
    })
    .catch(error => apiErrorMessage(error))

function defaultBaseCurrency(currency){
    const $option= document.createElement('option');
    $option.selected;
    $option.innerText = `${currency}`;
    $selectBaseCurrency.appendChild($option);
}

function defaultListCurrency(currenciesList){
    currenciesList.forEach((currency, index) => {
        const $option= document.createElement('option');
        $option.innerText = `${currency}`;
        $selectBaseCurrency.appendChild($option);
    });
}

(function dateInputSetup() {
    $inputDate.value = currentDate;
    $inputDate.setAttribute('min', '1999-01-04');
    $inputDate.setAttribute('max', currentDate);
})()

