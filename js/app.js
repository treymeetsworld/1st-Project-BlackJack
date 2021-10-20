/*----------------- Constants -----------------*/
const suits = ["♥️","♦️","♠️","♣️"]
const cards =["2","3","4","5","6","7","8","9","10","J","Q","K","A"]

/*------------- Variables (state) -------------*/
let hit,stand,turn,winner,playerCard1, playerCard2, dealerCard1, dealerCard2 
let deck = []
let cardsOut = []
let platerTotal = []
let dealerTotal = []


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
let dealInputEl = document.getElementById('dealerInput')
let playInputEl = document.getElementById('playerInput')

/*-------------- Event Listeners --------------*/
// standRef.addEventListener('click',console.log('hi'))
// hitClick = hitRef.addEventListener('click',console.log('hello'))
// dealRef.addEventListener('click',console.log('hi'))
// startRef.addEventListener('click',init)
/*----------------- Functions -----------------*/
init()

function init(){
  getDeck()
  shuffleDeck(deck)
  turn = 1
  winner = null
  p1El.innerText = cardsOut.pop()
  p2El.innerText = cardsOut.pop()

  d1El.innerText = cardsOut.pop()
  d2El.innerText = cardsOut.pop()
  deckEl.innerText = cardsOut.length
  
  cardValues()
}



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
  return deck
}

function shuffleDeck(deck){
  for (let i = 1;i = deck.length;i++){
    let randIdx = Math.floor(Math.random() * deck.length)
    let randCard = deck.splice(randIdx,1)
    cardsOut.push(randCard)
     
    
  }
  return cardsOut
}

function cardValues() {
  playerCard1 = parseInt(p1El.innerText.replace(/[♥️♦️♠️♣️]/,'').replace(/[KQJ]/,'10').replace(/[A]/,'11'))

  playerCard2 = parseInt(p2El.innerText.replace(/[♥️♦️♠️♣️]/,'').replace(/[KQJ]/,'10').replace(/[A]/,'11'))

  dealerCard1 = parseInt(d1El.innerText.replace(/[♥️♦️♠️♣️]/,'').replace(/[KQJ]/,'10').replace(/[A]/,'11'))

  dealerCard2 = parseInt(d2El.innerText.replace(/[♥️♦️♠️♣️]/,'').replace(/[KQJ]/,'10').replace(/[A]/,'11'))
  
  playInputEl.value = playerCard1 + playerCard2
  dealInputEl.value = dealerCard1 + dealerCard2

  return playInputEl.value,dealInputEl.value
}
// function compareCards(){
 
  

// }


