
class Card {
    constructor (rank, suit, value) {
      this.rank = rank
      this.suit = suit
      this.value = value
    }
  }
  
  class Deck {
    constructor() {
      this.cards = []
      
      let ranks = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "Jack",
        "Queen",
        "King",
        "Ace"
      ]
      
      let suits = [
        "Heart",
        "Club",
        "Diamond",
        "Spade"
      ]
    
      /** Imperative: with `for` loops */
  //     for (let i = 0; i < ranks.length; i++) {
  //       for (let j = 0; j < suits.length; j++) {
  //         let rank = ranks[i]
  //         let suit = suits[j]
  //         let value = i
          
  //         this.cards.push(new Card(rank, suit, value))
  //       }   
  //     }
      
      /** Declarative: with `Array.forEach` methods */
      ranks.forEach((rank, value) => {
        suits.forEach(suit => this.cards.push(new Card(rank, suit, value)))
      })
    } // end of Deck constructor
    
    /** for shuffling, research how to shuffl the contnents of an Array.
     * if you see "Fisher-Yates" or "Knuth", your getting warm!
     */
  }
  
  const deck = new Deck()
  
  console.log(deck.cards)
  class Deck {
    /*Simple 52 card deck no jokers*/
  
    constructor() {
      this.ranks = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
      this.suits = ['H','S','C','D']
      this.deck = []
      this.test = 'test'
      
      // Creates this.deck
      for (this.suit of this.suits){
        for (this.rank of this.ranks){
          this.deck.push([this.suit,this.rank])}}}
  
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
  console.log(deck.draw())
  //console.log(deck.get())