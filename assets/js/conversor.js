const button = document.querySelector(".convert-button");
const currecyselect = document.querySelector(".currecy-select");

function convert() {
  const inputValue = document.querySelector(".input-currecy").value;
  const currenToConvertValue = document.querySelector(".currecy-value-real");
  const currecyValueConvertd = document.querySelector(".currecy-value");

  console.log(currecyselect.value);
  const dolarToday = 5.36;
  const euroToday = 5.77;

  if (currecyselect.value == "dolar") {
    // se  o select estiver seleciomado o valor de dolar, entra aqui.
    currecyValueConvertd.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputValue / dolarToday);
  }

  if (currecyselect.value == "euro") {
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

button.addEventListener("click", convert);
