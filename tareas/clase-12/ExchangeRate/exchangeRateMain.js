
const $selectBaseCurrency = document.getElementById('input-currency');
const $startButton = document.getElementById('apply-filters');
const $resetButton = document.getElementById('reset-filters');
const $tableBody = document.getElementById('table-rates');

let currencyBase,
    currencyRatesList;

//  BOTON DE INICIO:
//1- Tomar los parametros de los inputs.
//  1a- validar valores?    
//2- Crear y enviar el request a la API.
//  3- Crear una lista con los valores retornados de la API.
//  3a- Crear una pantalla para una respuesta positva.
//  3b- Crear una pantalla para una respuesta negativa.
//4- Resetar la lista si se cargan valores nuevos en los inputs.

$startButton.onclick = function exchangeRateList(event) {
    let baseCurrencyInput = document.getElementById('input-currency').value;
    let dateInput = document.getElementById('input-date').value;

    resetDisplay();
    inputValidation(baseCurrencyInput, dateInput); //PENDIENTE.
    apiResponseHandler(baseCurrencyInput, dateInput);

    event.preventDefault();
};

$resetButton.onclick = function resetPage(event) {
    resetDisplay(); 
    resetInputs();

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
        .catch(error => {console.error('Fallo:', error)})
};

function createDisplay(apiResponse){
    console.log('respuesta:', apiResponse);
    document.getElementById('table-container').classList.remove('hidden');
    $tableBody.innerHTML = '';

    const completeList = apiResponse.rates;
    const currenciesList = Object.keys(completeList);
    const ratesList = Object.values(completeList);

    currenciesList.forEach((currency, index) => {
        const $tr = document.createElement('tr');
        const $tdCurrency = document.createElement('td');
        const $tdRate = document.createElement('td');

        $tdCurrency.innerText = currency;
        $tdRate.innerText = ratesList[index];
        $tr.appendChild($tdCurrency);
        $tr.appendChild($tdRate);
        $tableBody.appendChild($tr);
    })
};

function resetDisplay(){   
    document.getElementById('table-container').classList.add('hidden');
    document.getElementById('table-rates').innerHTML = '';
};

function resetInputs(){
    dateInputSetup();
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
    .catch(error => console.error('Fallo', error))

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
    const currentDate = new Date().toISOString().substring(0, 10);
    const inputDate = document.getElementById('input-date');
    inputDate.value = currentDate;
    inputDate.setAttribute('min', '1999-01-04');
    inputDate.setAttribute('max', currentDate);
})()

