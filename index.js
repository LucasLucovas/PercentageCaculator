let inputPercentage = document.getElementById('InputPercentage'); 
let inputNumber = document.getElementById('InputNum');
let button = document.querySelector('.buttonCalc')
let pResult = document.getElementById('Result')
let Select = document.getElementById("SelectCalc")


function getPercentage(percentage,number){
    percentage = inputPercentage.value;
    number = inputNumber.value;
    const calcPercent = percentage * number / 100;
    if (calcPercent == 0) {
        pResult.textContent = "Fill the fields"
    } else {
        pResult.textContent = calcPercent.toFixed(2);
    }
}




function getPercentageWithNum(num,total){
    num = inputPercentage.value;
    total = inputNumber.value;
    const calcNumP = num * 100 / total
    if (isNaN(calcNumP)) {
        pResult.textContent = "Fill the fields"
    }else{
        pResult.textContent = calcNumP.toFixed(2) + "%";
    }
    
}

function getDiscountValue(price,discount){
    discount = inputPercentage.value 
    price = inputNumber.value 
    const percentagePriceWithDiscount = 100 - discount;
    const priceWithDiscount = (price * percentagePriceWithDiscount) / 100;
    pResult.textContent = " $" + priceWithDiscount.toFixed(2)
}



const changedOption = () => {
    if (Select.value == 1){
        inputPercentage.placeholder = "%"
        inputNumber.placeholder = "Total"
        button.addEventListener("click", ()=> getPercentage())
    }else if ( Select.value == 2){
        inputPercentage.placeholder = "Numero"
        inputNumber.placeholder = "Total"
        button.addEventListener("click",()=> getPercentageWithNum())
    }else if(Select.value == 3) {
        inputPercentage.placeholder = "% de descuento"
        inputNumber.placeholder = "Precio"
        button.addEventListener("click",()=> getDiscountValue())
    }

};
  
Select.addEventListener("change", changedOption);




