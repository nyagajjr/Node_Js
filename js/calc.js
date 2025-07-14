let num1 = 10
let num2 = 2

document.querySelector("#num1-el").textContent = num1 
document.querySelector("#num2-el").textContent = num2

let yield = document.querySelector("#sum-el")

function addition(){
    yield.textContent = num1 + num2
}

function subtract(){
    yield.textContent = num1 - num2
}

function divide(){
    yield.textContent = num1 / num2
}

function multiply(){
    yield.textContent = num1 * num2
}



