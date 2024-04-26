let initialStock = document.querySelector("#initial-stock");

let stocksNumber = document.querySelector("#stocks-number");

let currentStock = document.querySelector("#current-stock");

let btnCalculate = document.querySelector("#btn-calculate");

let outputMessage = document.querySelector("#output-message");


function calcStatus() {
  if (initialStock.value && stocksNumber.value && currentStock.value) {

    if (Number(initialStock.value) > 0 && Number(stocksNumber.value) > 0 && Number(currentStock.value) > 0) {
      if (Number(currentStock.value) > Number(initialStock.value)) { console.log("profit"); }
      else if (Number(currentStock.value) < Number(initialStock.value)) { console.log("loss"); }
      else { console.log("nothing"); }
    }
    else { outputMessage.innerText = "Please enter value greater than 0"; }

  }



  else outputMessage.innerText = "wrong input";


}


btnCalculate.addEventListener("click", calcStatus);
