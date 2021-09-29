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
         document.getElementById("body").style.backgroundColor ="red";
    }
    else if(current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        outputArea.innerText = "You had a profit of " + profit +
         " and profit percentage is "+ profitPercentage + " %";
         document.getElementById("body").style.backgroundColor ="green";
        }
    else {
        outputArea.innerText = "You had no gains or losses";
        document.getElementById("body").style.backgroundColor ="yellow";
    }
}

selectButton.addEventListener("click", clickHandler);

function clickHandler(){
    var initial = Number(initialPrice.value);
    var quantity = Number(quantityStock.value);
    var current = Number(currentPrice.value);
    
    calculateProfitOrLoss(initial, quantity, current); 
}
