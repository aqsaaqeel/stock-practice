var initialPrice = document.querySelector("#initial-price");
var quantityStock = document.querySelector("#quantity-stock");
var currentPrice = document.querySelector("#current-price");
var selectButton = document.querySelector("#select-button");
var outputArea = document.querySelector("#output-area");

function calculateProfitOrLoss(initial, quantity, current) {
    if(initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        outputArea.innerText = "You suffered a loss of " + loss +
         " and loss percentage is "+ lossPercentage + " %";
    }
    else if(current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        outputArea.innerText = "You suffered a profit of " + profit +
         " and profit percentage is "+ profitPercentage + " %";
    }
    else {
        outputArea.innerText = "You had no gains or losses";
    }
}

selectButton.addEventListener("click", clickHandler);

function clickHandler(){
    var initial = initialPrice.value;
    var quantity = quantityStock.value;
    var current = currentPrice.value;
    
    calculateProfitOrLoss(initial, quantity, current); 
}
