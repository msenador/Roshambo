const input = process.argv[2].toLowerCase();

console.log('Playing a game of Roshambo against the computer.');

class Roshambo {
    constructor () {
        this.arr = ['rock', 'paper', 'scissors'];
    }

    showPlays = (input, compChose) => {
        console.log(`Player plays ${input}`);
        console.log(`Computer plays ${compChose}`)
    }

    calcWinner (input , compChose) {
        if (input === 'rock' && compChose === 'paper'){
            this.showPlays(input, compChose);
            console.log(this.compWins());
        } else if (input === 'rock' && compChose === 'scissors'){
            this.showPlays(input, compChose);
            console.log(this.playerWins());
        } else if (input === 'rock' && compChose === 'rock'){
            this.showPlays(input, compChose);
            console.log(this.tieGame());
        } else if (input === 'paper' && compChose === 'scissors'){
            this.showPlays(input, compChose);
            console.log(this.compWins());
        } else if (input === 'paper' && compChose === 'paper'){
            this.showPlays(input, compChose);
            console.log(this.tieGame());
        } else if (input === 'paper' && compChose === 'rock'){
            this.showPlays(input, compChose);
            console.log(this.playerWins());
        } else if (input === 'scissors' && compChose === 'scissors'){
            this.showPlays(input, compChose);
            console.log(this.tieGame());
        } else if (input === 'scissors' && compChose === 'rock'){
            this.showPlays(input, compChose);
            console.log(this.compWins());
        } else if (input === 'scissors' && compChose === 'paper'){
            this.showPlays(input, compChose);
            console.log(this.playerWins());
        } else {
            console.log(`Error - ${input} and ${compChose}`)
        }
    }

    compWins = () => '~ Computer wins! ~';
    playerWins = () => '~ Player wins! ~';
    tieGame = () =>'~ Tie Game! ~';
}

class Player extends Roshambo{
    constructor() {
        super()
        this.move = input;
    }
}

class Computer extends Roshambo{
    constructor() {
        super();
        this.move = this.arr[Math.floor(Math.random() * 3)];
    }
}

let player = new Player();
let computer = new Computer();
let roshambo = new Roshambo();
roshambo.calcWinner(player.move,computer.move)