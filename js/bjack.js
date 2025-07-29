let sum = 0
let cards = []
console.log(cards)

let hasBlackJack = false
let isAlive = false
let message = "" 
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")


// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.

function randomNumber(){
    // Random numbers between 1 and 14
    let randomness = Math.floor(Math.random() * 13) + 1

    if (randomness > 10){
        return 10
    } else if( randomness === 1){
        return 11
    } else{
        return randomness
    }
}

function startGame(){
    isAlive = true
    for (let i = 0; i < 2; i++){
        let randomFloor = randomNumber()
        sum += randomFloor
        cards.push(randomFloor)
    }

    renderGame()
}

function renderGame(){

    cardsEl.textContent = "Cards: "
    for(i=0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
    message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message

}


function newCard(){
    if( isAlive === true && hasBlackJack === false){
        let card = randomNumber()
        sum += card
        cards.push(card)
        renderGame()
    }
    
}
