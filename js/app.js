/*----------------- Constants -----------------*/
const suits = ["♥️","♦️","♠️","♣️"]
const cards =["2","3","4","5","6","7","8","9","10","J","Q","K","A"]

/*------------- Variables (state) -------------*/
let turn,winner,playerCard1, playerCard2, dealerCard1, dealerCard2 
let deck = []
let cardsOut = []
let playerTotal = []
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
standRef.addEventListener('click',stand)
hitClick = hitRef.addEventListener('click',hit)
dealRef.addEventListener('click',deal)
startRef.addEventListener('click',init)
/*----------------- Functions -----------------*/
init()

function init(){
  getDeck()
  shuffleDeck(deck)
  turn = 1
  winner = null
  // startRef.innerText = 'Restart'
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
function deal(){
  p1El.innerText = cardsOut.pop()
  p2El.innerText = cardsOut.pop()
  d1El.innerText = cardsOut.pop()
  deckEl.innerText = cardsOut.length
  d2El.innerText = ''
  cardValues()
  isWinner()
  if (deckEl.innerText == 0){
    shuffleDeck(deck)
  }
}

function cardValues() {
  playerTotal = []
  dealerTotal = []
  playerCard1 = parseInt(p1El.innerText.replace(/[♥️♦️♠️♣️]/,'').replace(/[KQJ]/,'10').replace(/[A]/,'11'))

  playerCard2 = parseInt(p2El.innerText.replace(/[♥️♦️♠️♣️]/,'').replace(/[KQJ]/,'10').replace(/[A]/,'11'))

  dealerCard1 = parseInt(d1El.innerText.replace(/[♥️♦️♠️♣️]/,'').replace(/[KQJ]/,'10').replace(/[A]/,'11'))

  dealerCard2 = parseInt(d2El.innerText.replace(/[♥️♦️♠️♣️]/,'').replace(/[KQJ]/,'10').replace(/[A]/,'11'))
  
  playerTotal1 = playerCard1 + playerCard2 
  dealerTotal1 = dealerCard1 
  
  playInputEl.value = playerTotal1
  playerTotal.push(playerTotal1)
  dealInputEl.value = dealerTotal1
  dealerTotal.push(dealerTotal1)
  return playInputEl.value,dealInputEl.value
}

function hit(){ 
  let sum 
  p1El.innerText = cardsOut.pop()
  deckEl.innerText = cardsOut.length
  playerHit = p1El.innerText
    playerHit =  parseInt(p1El.innerText.replace(/[♥️♦️♠️♣️]/,'').replace(/[KQJ]/,'10').replace(/[A]/,'11'))
    playerTotal.push(playerHit)
    sum = playerTotal.reduce((a,b)=>{
      return [parseInt(a) + parseInt(b)]
    },0)
    playerTotal = sum
    playInputEl.value = sum
    isWinner()
  }


function stand(){
  playerTotal = parseInt(playInputEl.value)
  dealerTotal.push(parseInt(dealInputEl.value)) 
  dealerTotal.pop()
  let sum
  d2El.innerText = cardsOut.pop()
  deckEl.innerText = cardsOut.length
  dealerStand = d2El.innerText
    dealerStand =  parseInt(d2El.innerText.replace(/[♥️♦️♠️♣️]/,'').replace(/[KQJ]/,'10').replace(/[A]/,'11'))
    dealerTotal.push(dealerStand)
    sum = dealerTotal.reduce((a,b)=>{
      return [parseInt(a) + parseInt(b)]
    },0)
    dealerTotal = sum
    dealInputEl.value = sum
    isWinner()
    isAce()
    isGreater()
}
function isWinner() {
  if (playInputEl.value == 21){
    console.log(" YOU WIN!!");
  }
  if (dealInputEl.value == 21){
    console.log("dealer wins");
  }
  if (d1El.innerText == 11 && d2El.innerText == 11){
    console.log('dealer wins 2');
  }else if(p1El.innerText == 11 && p2El.innerText == 11){
    console.log('player wins2');
  }
  if (playInputEl.value > 21){
    console.log(" YOU LOSE");
  }
  if (dealInputEl.value > 21){
    console.log("YOU WIN");
  if (cardsOut.length === 0){
    console.log("game over");
    }
  }
}
function isGreater(){
  if (d1El.innerText + d2El.innerText < 14){
    d2El.innerText = cardsOut.pop()
    deckEl.innerText = cardsOut.length
    dealerStand = d2El.innerText
    dealerStand =  parseInt(d2El.innerText.replace(/[♥️♦️♠️♣️]/,'').replace(/[KQJ]/,'10').replace(/[A]/,'11'))
    dealerTotal.push(dealerStand)
    sum = dealerTotal.reduce((a,b)=>{
      return [parseInt(a) + parseInt(b)]
    },0)
    dealerTotal = sum
    dealInputEl.value = sum
    evaluate()
  }else if(dealInputEl.value > 14){
    evaluate()
  }
}
function evaluate(){
  if (dealInputEl.value > playInputEl.value){
    console.log('dealer wins1');
  }else if(playInputEl.value > dealInputEl.value) {
    console.log('player wins1');
  }else {
    console.log('its a tie');
  }
}
function isAce(){
  if (d1El.innerText == 11 && dealInputEl.value > 21){
    console.log('isace 1');
    return d1El.innerText = 1
  }else if (d2El.innerText == 11 && dealInputEl.value > 21){
    console.log('isace 2');
    return d2El.innerText = 1
  } 
  if (p1El.innerText == 11 && playInputEl.value > 21){
    console.log('isace 3');
    return p1El.innerText = 1
  }else if (p2El.innerText == 11 && playInputEl.value > 21){
    console.log('isace 4');
    return p2El.innerText = 1
  }
}