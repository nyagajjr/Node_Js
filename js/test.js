firstCard = 12
secondCard = 5
thirdCard = 4
cards = [firstCard, secondCard, thirdCard]

count = 0

function addThem(){
    for (let i = 0; i < cards.length; i++){
        count += cards[i]
    }
    return count
}

console.log(addThem())