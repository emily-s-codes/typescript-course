// UEBUNG 1
// type Player = {
//     name: string;
//     lastLogin: Date;
//     id: number;
//     email: string;
//     gaming: PlayedGame
// }

// type Admin = {
//     name: string;
//     id: number;
//     email: string;
//     employeeId: number
// }


// UEBUNG 2

// const emily: Player = {
//     name: 'Emily',
//     lastLogin: new Date(),
//     id: 12345,
//     email: 'emily@emily.com'
// }

// function getEmail(player: Player): string {
//     return player.email
// }

// console.log(getEmail(emily))


// UEBUNG 3

// const alicia: Admin = {
//     name: 'Alicia',
//     employeeId: 54321,
//     id: 54321,
//     email: 'admin@alicia.com'
// }

// function alwaysGetEmail({ email }: { email: string }): string {
//     return email
// }

// console.log(alwaysGetEmail(emily))
// console.log(alwaysGetEmail(alicia))


// UEBUNGEN 4 & 5

// type PlayedGame = {
//     spielNamen: string;
//     highScore: number;
// }

// const player1: Player = {
//     name: 'Bob',
//     lastLogin: new Date(),
//     id: 124459876,
//     email: 'bob@bob.com',
//     gaming: {
//         spielNamen: 'Flappy Duck',
//         highScore: 1239
//     }
// }
// const player2: Player = {
//     name: 'Sam',
//     lastLogin: new Date(),
//     id: 98734,
//     email: 'sam@sam.com',
//     gaming: {
//         spielNamen: 'Flappy Duck',
//         highScore: 11111
//     }
// }

// function evaluateWinner(object1: PlayedGame, object2: PlayedGame): number {
//     console.log(object1, object2)
//     if (object1.spielNamen != object2.spielNamen)
//         return 0
//     else {
//         if (object1.highScore > object2.highScore)
//             return 1
//         if (object1.highScore < object2.highScore)
//             return -1
//         else return 0
//     }

// }

// console.log(evaluateWinner(player1.gaming, player2.gaming))


// UEBUNG 6

// const game1: PlayedGame = {
//     spielNamen: 'Flappy Duck',
//     highScore: 100
// }
// const game2: PlayedGame = {
//     spielNamen: 'Flappy Duck',
//     highScore: 200
// }
// const game3: PlayedGame = {
//     spielNamen: 'Flappy Duck',
//     highScore: 500
// }
// const game4: PlayedGame = {
//     spielNamen: 'Floppy Dinosaur',
//     highScore: 700
// }

// const myArray: PlayedGame[] = [
//     game1, game2, game3, game4
// ]
// let leaderboardArray: PlayedGame[] = [];

// function leaderboard(x: PlayedGame[], name: string): PlayedGame[] {
//     x.forEach(score => {
//         if (score.spielNamen === name) {
//             leaderboardArray.push(score)
//         }
//     })
//     return leaderboardArray.sort((a, b) => b.highScore - a.highScore)
// }

// console.log(leaderboard(myArray, 'Flappy Duck'))


// UEBUNG 7

type Leaderboard = Highscore[]

type Highscore = {
    game: string;
    score: number;
    player: Player
}

type Player = {
    name: string;
    lastLogin: Date;
    id: number;
    email: string;
    gaming: PlayedGame
}

type PlayedGame = {
    spielNamen: string;
    highScore: number;
}

const player1: Player = {
    name: 'Bob',
    lastLogin: new Date(),
    id: 124459876,
    email: 'bob@bob.com',
    gaming: {
        spielNamen: 'Flappy Duck',
        highScore: 12390
    }
}
const player2: Player = {
    name: 'Sam',
    lastLogin: new Date(),
    id: 98734,
    email: 'sam@sam.com',
    gaming: {
        spielNamen: 'Flappy Duck',
        highScore: 11111
    }
}
const player3: Player = {
    name: 'Blob',
    lastLogin: new Date(),
    id: 98734,
    email: 'blob@blob.com',
    gaming: {
        spielNamen: 'Floppy Dinosaur',
        highScore: 11111
    }
}
const player4: Player = {
    name: 'Slam',
    lastLogin: new Date(),
    id: 98734,
    email: 'slam@slam.com',
    gaming: {
        spielNamen: 'Floppy Dinosaur',
        highScore: 11211
    }
}

let floppyLeaderboard: Player[] = [];
let flappyLeaderboard: Player[] = [];


const leaderboardAdvanced = (x: Player[]): Leaderboard => {
    x.forEach(player => {
        if (player.gaming.spielNamen === 'Flappy Duck')
            flappyLeaderboard.push(player)
        if (player.gaming.spielNamen === 'Floppy Dinosaur')
            floppyLeaderboard.push(player)
    })
    const flappyWinner: Player = flappyLeaderboard.sort((a, b) => b.gaming.highScore - a.gaming.highScore)[0]
    const floppyWinner: Player = floppyLeaderboard.sort((a, b) => b.gaming.highScore - a.gaming.highScore)[0]

    const allGames: Highscore[] = [
        {
            game: flappyWinner.gaming.spielNamen,
            score: flappyWinner.gaming.highScore,
            player: flappyWinner
        }, {
            game: floppyWinner.gaming.spielNamen,
            score: floppyWinner.gaming.highScore,
            player: floppyWinner
        }
    ]
    return allGames
}

console.log(leaderboardAdvanced([player1, player2, player3, player4]))

export { }