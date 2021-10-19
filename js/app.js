/*----------------- Constants -----------------*/
const suits = ["♥️","♦️","♠️","♣️"]
const cards =["2","3","4","5","6","7","8","9","10","J","Q","K","A"]
/*------------- Variables (state) -------------*/
let hit,stand,turn,winner
let deck = []
let cardsOut = []
/*--------- Cached Element References ---------*/
let standRef = document.getElementById('stand')
let hitRef = document.getElementById('hit') 
let dealRef = document.getElementById('dealBtn')
let startRef = document.getElementById('startBtn')
let deckEl = document.querySelector('.deck')
let p1El = document.getElementById('p1')
let p2El = document.getElementById('p2')
let d1El = document.getElementById('d1')
let d2El = document.getElementById('d2')
/*-------------- Event Listeners --------------*/
// standRef.addEventListener('click',console.log('hi'))
// hitClick = hitRef.addEventListener('click',console.log('hello'))
dealRef.addEventListener('click',console.log('hi'))
startRef.addEventListener('click',init)
/*----------------- Functions -----------------*/
init()

function init(){
  getDeck()
  turn = 1
  winner = null
  deckEl.innerText = deck.length
  // render()
  cardsOut = shuffleDeck(deck)
  p1El.innerText = shuffleDeck(deck).pop()
  p2El.innerText = shuffleDeck(deck).pop()
  d1El.innerText = shuffleDeck(deck).pop()
  d2El.innerText = shuffleDeck(deck).pop()
}


// function render(){
// if (deck.length === 52){

// }
// return deckCount
// }


function getDeck(){
  
  for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
    for (let cardsIdx = 0; cardsIdx < cards.length; cardsIdx++) {
      let card = {
        suit: suits[suitIdx],
        cards: cards[cardsIdx]
      }
      let joinedCard  =`${card.cards} ${card.suit}`
      deck.push(joinedCard);
      
    }
  }
  
}

function shuffleDeck(deck){
  for (let i = 1;i = deck.length;i++){
    let randIdx = Math.floor(Math.random() * deck.length)
    let randCard = deck.splice(randIdx,1)
    cardsOut.push(randCard)
    return cardsOut 
    
  }
}

// function dealCard (){
//   p1El.innerText = shuffleDeck(deck).pop()
//   p2El.innerText = cardsOut.pop()
//   d1El.innerText = cardsOut.pop()
//   d2El.innerText = cardsOut.pop()
//     return playerCard1,playerCard2,d1El,d2El
// }
