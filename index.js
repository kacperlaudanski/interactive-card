//Source fields (inputs)


const cardOwner = document.querySelector('.cardholderName');
const cardNumber = document.querySelector('.cardnumber');
const month = document.querySelector('.month');
const year = document.querySelector('.year');
const cvc = document.querySelector('.cvc-code');

//Card fields

const cardDataNumber = document.querySelector('.card-number');
const cardDataName = document.querySelector('.card-name');
const cardMonth = document.querySelector('.card-month');
const cardYear = document.querySelector('.card-year');
const cardCvc = document.querySelector('.cvc-card-text');

const btn = document.querySelector('.confirm-button');


function cardDataOutput(event) {

  event.preventDefault();

  if (cardNumber.value === '') {
    setErrorFor1(cardNumber, "Can't be blank");
  } else if (isNaN(cardNumber.value) === true) {
    cardDataNumber.innerHTML = cardNumber.value;
    setErrorFor1(cardNumber, "Wrong format, numbers only");
  } else if(cardNumber.value.length<16){
    setErrorFor1(cardNumber, "Card number is too short");
  }   else {
      cardDataNumber.innerHTML = cardNumber.value;
      setSuccesFor1(cardNumber);
    }

  if (cardOwner.value === '') {
    setErrorFor1(cardOwner, "Can't be blank");
  } else if (isNaN(cardOwner.value) === false) {
    cardDataName.innerHTML;
    setErrorFor1(cardOwner, "Wrong format, letters only");
  } else {
    cardDataName.innerHTML = cardOwner.value;
    setSuccesFor1(cardOwner);
  }

  if (month.value === '') {
    setErrorForM2(month, "Can't be blank");
  } else {
      cardMonth.innerHTML = month.value;
      setSuccesForM2(month);
    }

  if (year.value === '') {
    setErrorForY2(year, "Can't be blank");
  } else {
    cardYear.innerHTML = year.value;
    setSuccesForY2(year);
  }

  if (cvc.value === '') {
    setErrorFor3(cvc, "Can't be blank");
  } else {
    cardCvc.innerHTML = cvc.value;
    setSuccesFor3(cvc);
  }
}

btn.addEventListener('click', cardDataOutput);

function setSuccesFor1(input) {
  const group1 = input.parentElement;

  group1.className = 'outline succes';
}

function setErrorFor1(input, message) {
  const group1 = input.parentElement;
  const small = group1.querySelector('small');

  small.innerText = message;

  group1.className = 'outline wrong';
}

function setSuccesForM2(input) {
  const group2Month = input.parentElement;

  group2Month.className = 'outline succes';
}

function setErrorForM2(input, message) {
  const group2Month = input.parentElement;
  const small = group2Month.querySelector('small');

  small.innerText = message;

  group2Month.className = 'outline wrong';
}

function setSuccesForY2(input) {
  const group2Year = input.parentElement;

  group2Year.className = 'outline succes';
}

function setErrorForY2(input, message) {
  const group2Year = input.parentElement;
  const small = group2Year.querySelector('small');

  small.innerText = message;

  group2Year.className = 'outline wrong';
}

function setSuccesFor3(input) {
  const group3 = input.parentElement;

  group3.className = 'outline succes';
}

function setErrorFor3(input, message) {
  const group3 = input.parentElement;
  const small = group3.querySelector('small');

  small.innerText = message;
  group3.className = 'outline wrong';
}

document.getElementById('cardholder').addEventListener('input', () => {
  cardDataName.innerText = cardOwner.value;
})

document.getElementById('numberOfCard').addEventListener('input', () => {
  cardDataNumber.innerText = cardNumber.value;
})

document.getElementById('expiry-month').addEventListener('input', () => {
  cardMonth.innerText = month.value;
})

document.getElementById('expiry-year').addEventListener('input', () => {
  cardYear.innerText = year.value;
})

document.getElementById('cvcCardCode').addEventListener('input', () => {
  cardCvc.innerText = cvc.value;
})
