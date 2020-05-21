
const $selectBaseCurrency = document.getElementById('input-currency');
const $startButton = document.getElementById('apply-filters');
const $resetButton = document.getElementById('reset-filters');

let currencyBase,
    currencyRatesList;

//  BOTON DE INICIO:
//1- Tomar los parametros de los inputs.
//  1a- validar valores?    
//2- Crear y enviar el request a la API.
//3- Crear una lista con los valores retornados de la API.
//  3a- Crear una pantalla para una respuesta positva.
//  3b- Crear una pantalla para una respuesta negativa.
//4- Resetar la lista si se cargan valores nuevos en los inputs.

$startButton.onclick = 



//Setup inicial de la landingPage.
//Si encapsulo todo en una funcion luego puedo usar la misma para resetar el formulario.
fetch('https://api.exchangeratesapi.io/latest')
    .then(answer => answer.json())
    .then(answer => {
        currencyBase = answer.base;
        currencyRatesList = Object.keys(answer.rates);
    })
    .then(answer => {
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

function formValidation (){

}
