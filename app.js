const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-button");
const output = document.querySelector("#output-div");


function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current){
        var loss = (initial - current)* quantity
        var lossPercentage = (loss/initial) * 100;

        showMsg(`Hey Your Loss is ${loss} and The Percent is ${lossPercentage.toFixed(2)} %`);

    }else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit/initial) * 100

        showMsg(`Hey Your Profit is ${profit} and The Percent is ${profitPercentage.toFixed(2)} %`);

    } else {
        showMsg("No pain no gain and no gain no pain");
    }
} 


function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
}

function showMsg(message) {
    output.innerHTML = message;
  }


submitBtn.addEventListener("click", submitHandler)