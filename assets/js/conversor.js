const button = document.querySelector(".convert-button")


function convert(){
   const inputValue = document.querySelector(".input-currecy").value
   const currenToConvertValue = document.querySelector(".currecy-value-real")
   const currecyValueConvertd = document.querySelector(".currecy-value")
  

   const dolarToday = 5.36;

   const convertdValue = inputValue / dolarToday

   currenToConvertValue.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
   }).format(inputValue);


   currecyValueConvertd.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
   }).format(convertdValue);


   console.log(convert);
}

button.addEventListener("click", convert)