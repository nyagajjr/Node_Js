// document.getElementById("count-el").innerText = 6
const txt = document.querySelector("#my_calculator")
const err = document.querySelector("#Message")
const msg = document.querySelector("#bjack")


console.log(err)
console.log(msg)

function danger(){
    err.textContent = "Click my calculator button below"
    
}

function next(){
    window.location.href = "calc.html"
}

function info(){
    msg.textContent = "Coming soon!"
}
