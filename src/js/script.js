console.log("hi");
class Card {
    constructor (rank, suit, value) {
      this.rank = rank
      this.suit = suit
      this.value = value
    }
  }
  
  class Deck {
    /*Simple 52 card deck no jokers*/
  
    constructor() {
     /*this.player1 = []
     this.player2 = [] */
        this.ranks = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
      this.suits = ['Hearts','Spades','Clubs','Diamonds']
      this.deck = []
      this.test = 'test'
      
      // Creates this.deck
      for (this.suit of this.suits){
        for (this.rank of this.ranks){
          this.deck.push(`${this.rank} of ${this.suit}`)}}}
    /*deal(){
        this.player1.push(this.deck.slice(0, 26))
        this.player2.push(thilayer1, player2).deck.slice(26, 53)
    }*/
  /*play(){
    player1(stack1,pop[0])


  }*/
    _shuffle(a) {
      /**
       * Shuffles array in place.
       * @param {Array} a items An array containing the items.
       * https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array */
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
      }
      return a;}
  
    get() {
      return this.deck}
    
    shuffle() {
      this._shuffle(this.deck)
      return this.deck}
    
    draw() {
      return this.deck.pop()}
  }
  
  let deck = new Deck()
  
  //console.log(deck.get())
  console.log(deck.shuffle())
  //console.log(deck.draw())
  //console.log(deck.get())

  class Player {
      constructor() {
        this.stack = []

      }
  }
  let player1 = new Player();
  let player2 = new Player();

const stack1 = deck.deck.slice(0, 26)
const stack2 = deck.deck.slice(26);
player1.stack = stack1
player2.stack = stack2
console.log(player2)
// console.log(`player1.stack[0]: ${player1.stack[0]}`)
// console.log(`player1.stack[0][0]: ${player1.stack[0][0]}`)
function playWar() {
    for(let i = 0; i < player1.stack.length; i++) {
       for(let j = 0; j < player2.stack.length; i++) {
           
        if(player1.stack[i] > player2.stack[j]) {
            console.log('Player1 wins')
            player1.stack.push(i,j);
            player1.stack.shift();
            player2.stack.shift();
            console.log(i)
            console.log(j)
            console.log(player1.stack.length)
            console.log(player2.stack.length)
        }
        if(player2.stack[j] > player1.stack[i]) {
            console.log('Player2 wins')
            player2.stack.push(i,j);
            player2.stack.shift();
            player1.stack.shift();
            console.log(i)
            console.log(j)
            console.log(player2.stack.length)
        }
       }
       
         
    }
     
}
console.log(playWar())