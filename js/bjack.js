let firstCard = 10
let secondCard = 1
let sum = firstCard + secondCard
let cards = [firstCard, secondCard]

let hasBlackJack = false
let isAlive = true
let message = "" 
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")


// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.

function startGame(){
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
    let card = 10
    sum += card
    cards.push(card)
    renderGame()
}
