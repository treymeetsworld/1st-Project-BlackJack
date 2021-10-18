/*----------------- Constants -----------------*/
const suits = ["♥️","♦️","♠️","♣️"]
const cards =["2","3","4","5","6","7","8","9","10","J","Q","K","A"]
/*------------- Variables (state) -------------*/
let hit,stand,turn,winner,bet
let deck = []
/*--------- Cached Element References ---------*/
let standRef = document.getElementById('stand')
let hitRef = document.getElementById('hit') 
/*-------------- Event Listeners --------------*/
standRef.addEventListener('click',console.log('hi'))
hitClick = hitRef.addEventListener('click',console.log('hello'))
/*----------------- Functions -----------------*/
init()

function init(){
  getDeck()
  turn = 1
  winner = null
}
// render()
// }
// function handleclick(){

// }

function getDeck(){
  
  for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
    for (let cardsIdx = 0; cardsIdx < cards.length; cardsIdx++) {
      let card = {
        suit: suits[suitIdx],
        cards: cards[cardsIdx]
      }
      deck.push(card);
      
    }
  }
  
}

function shuffleDeck(cardsIn){
  let cardsOut = []
  for (let i = 1;i = cardsIn.length;i++){
    let randIdx = Math.floor(Math.random() * cardsIn.length)
    let randCard = cardsIn.splice(randIdx,1)
    cardsOut.push(randCard)
  }
}
function dealCard(){
  
}