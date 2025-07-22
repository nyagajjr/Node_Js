const add = document.querySelector("#count-el")
const txt = document.querySelector("#my_calculator")
const err = document.querySelector("#Message")
const msg = document.querySelector("#bjack")
const saver = document.querySelector("#save-message")
let count = 0

console.log(err)
console.log(msg)

function danger(){
    count += 1
    add.textContent = count
    err.textContent = "Don't ignore my calculator button below"
    
}

function next(){
    window.location.href = "calc.html"
}

function info(){
    msg.textContent = "Coming soon!"
}

function save(){
    let str_inc = count + " - "
    saver.textContent += str_inc
    add.textContent = 0
    count -= count
}