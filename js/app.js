/*----------------- Constants -----------------*/
const suits = ["♥️","♦️","♠️ ","♣️"]
const cards =["2","3","4","5",
"6","7","8","9",
  "10","J","Q","K","A"]
/*------------- Variables (state) -------------*/
let deck,hit,stand,turn,winner
/*--------- Cached Element References ---------*/
let standRef = document.getElementById('stand')
let hitRef = document.getElementById('hit') 
/*-------------- Event Listeners --------------*/
standRef.addEventListener('click',console.log('hi'))
hitClick = hitRef.addEventListener('click',console.log('hello'))
/*----------------- Functions -----------------*/
init()

function init(){
deck =getDeck()
turn = 1
winner = null
}
// render()
// }
// function handleclick(){

// }

function getDeck(){
  let deck = []
  for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
    for (let cardsIdx = 0; cardsIdx < cards.length; cardsIdx++) {
      let card = {
        suit: suits[suitIdx],
        cards: cards[cardsIdx]
      }
      deck.push(card);
    }
  }
  console.log(deck);
}
