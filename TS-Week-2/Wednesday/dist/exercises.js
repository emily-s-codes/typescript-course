"use strict";
// UEBUNG 1
// type Player = {
//     name: string;
//     lastLogin: Date;
//     id: number;
//     email: string;
//     gaming: PlayedGame
// }
Object.defineProperty(exports, "__esModule", { value: true });
const player1 = {
    name: 'Bob',
    lastLogin: new Date(),
    id: 124459876,
    email: 'bob@bob.com',
    gaming: {
        spielNamen: 'Flappy Duck',
        highScore: 12390
    }
};
const player2 = {
    name: 'Sam',
    lastLogin: new Date(),
    id: 98734,
    email: 'sam@sam.com',
    gaming: {
        spielNamen: 'Flappy Duck',
        highScore: 11111
    }
};
const player3 = {
    name: 'Blob',
    lastLogin: new Date(),
    id: 98734,
    email: 'blob@blob.com',
    gaming: {
        spielNamen: 'Floppy Dinosaur',
        highScore: 11111
    }
};
const player4 = {
    name: 'Slam',
    lastLogin: new Date(),
    id: 98734,
    email: 'slam@slam.com',
    gaming: {
        spielNamen: 'Floppy Dinosaur',
        highScore: 11211
    }
};
let floppyLeaderboard = [];
let flappyLeaderboard = [];
const leaderboardAdvanced = (x) => {
    x.forEach(player => {
        if (player.gaming.spielNamen === 'Flappy Duck')
            flappyLeaderboard.push(player);
        if (player.gaming.spielNamen === 'Floppy Dinosaur')
            floppyLeaderboard.push(player);
    });
    const flappyWinner = flappyLeaderboard.sort((a, b) => b.gaming.highScore - a.gaming.highScore)[0];
    const floppyWinner = floppyLeaderboard.sort((a, b) => b.gaming.highScore - a.gaming.highScore)[0];
    const allGames = [
        {
            game: flappyWinner.gaming.spielNamen,
            score: flappyWinner.gaming.highScore,
            player: flappyWinner
        }, {
            game: floppyWinner.gaming.spielNamen,
            score: floppyWinner.gaming.highScore,
            player: floppyWinner
        }
    ];
    return allGames;
};
console.log(leaderboardAdvanced([player1, player2, player3, player4]));
//# sourceMappingURL=exercises.js.map