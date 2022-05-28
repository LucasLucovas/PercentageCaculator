let inputPercentage = document.getElementById('InputPercentage'); 
let inputNumber = document.getElementById('InputNum');
let button = document.querySelector('buttonCalc')
function getPercentage(percentage,number){
    percentage = inputPercentage.value;
    number = inputNumber.value;
    calcPercent = percentage * number / 100
}

