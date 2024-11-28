export class Team {
  constructor(...characters) {
    this.characters = characters;
  }

  *[Symbol.iterator]() {
    let index = 0;
    while (index < this.characters.length) {
        yield this.characters[index];
        index += 1;
    }
  }
}

let player1 = {name: 'Piter', type: 'magician'};
let player2 = {name: 'Igor', type: 'swordsman'};
let player3 = {name: 'Abdul', type: 'rubaka'};

let team = new Team(player1, player2, player3);
let iterator = team[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
