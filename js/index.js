// document.getElementById("count-el").innerText = 6
const txt = document.querySelector("#my_calculator")

const err = document.querySelector("#Message")
console.log(err)

function danger(){
    err.textContent = "Click my calculator button below"
    
}

function next(){
    window.location.href = "calc.html"
}