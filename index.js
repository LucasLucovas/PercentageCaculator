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
        pResult.textContent = calcNumP.toFixed(2);
    }
    
}



const opcionCambiada = () => {
    if (Select.value == 1){
        button.addEventListener("click", ()=> getPercentage())
    }else if ( Select.value == 2){
        button.addEventListener("click",()=> getPercentageWithNum())
    }

};
  
  Select.addEventListener("change", opcionCambiada);




