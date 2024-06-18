const button = document.querySelector(".convert-button");
const currecySelect = document.querySelector(".currecy-select");

function convert() {
  const inputValue = document.querySelector(".input-currecy").value;
  const currenToConvertValue = document.querySelector(".currecy-value-real"); // Valor em Real
  const currecyValueConvertd = document.querySelector(".currecy-value"); // Outras moedas

  // console.log(currecySelect.value);
  const dolarToday = 5.36;
  const euroToday = 5.77;

  if (currecySelect.value == "dolar") {
    // se  o select estiver seleciomado o valor de dolar, entra aqui.
    currecyValueConvertd.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputValue / dolarToday);
  }

  if (currecySelect.value == "euro") {
    // se  o select estiver seleciomado o valor de euro, entra aqui.

    currecyValueConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputValue / euroToday);
  }

  currenToConvertValue.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputValue);
}

function changeCurrency() {
  const currecyName = document.getElementById("currency-name");
  const currencyImg = document.querySelector(".currency-img");

  if (currecySelect.value == "dolar") {
    currecyName.innerHTML = "Dólar americano";
    // currencyImg.src = "./"
  }

  if (currecySelect.value == "euro") {
    currecyName.innerHTML = "Euro";
    // currencyImg.src = "./assets/us.png";
  }
}

currecySelect.addEventListener("change", changeCurrency);
button.addEventListener("click", convert);
