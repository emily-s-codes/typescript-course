"use strict";
/// NOTE TO SELF: this version works too, pay attn to 2D array representation, which doesn't correspond visually
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});
function performAction(y, x) {
    if (x === 'moveRight') {
        if (y[0] <= 7) {
            return [y[0] + 1, (y[1])];
        }
        return [y[0], y[1]];
    }
    if (x === 'moveLeft') {
        if (y[0] >= 1) {
            return [y[0] - 1, y[1]];
        }
        return [y[0], y[1]];
    }
    if (x === 'moveUp') {
        if (y[1] >= 1) {
            return [y[0], y[1] - 1];
        }
        return [y[0], y[1]];
    }
    if (x === 'moveDown') {
        if (y[1] <= 7) {
            return [y[0], y[1] + 1];
        }
        return [y[0], y[1]];
    }
    return [y[0], y[1]];
}
const playingField = [
    ["empty", "empty", "empty", "empty", "empty", "wall", "wall", "wall"],
    ["wall", "wall", "wall", "wall", "empty", "wall", "treasure", "wall"],
    ["wall", "wall", "wall", "wall", "empty", "wall", "empty", "wall"],
    ["empty", "empty", "empty", "empty", "empty", "wall", "empty", "wall"],
    ["empty", "wall", "wall", "wall", "wall", "wall", "empty", "wall"],
    ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "wall"],
    ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"],
    ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"],
];
// console.log(playingField[1][6]) // treasurere
function runGame(startingPosition, playingField) {
    console.log("Current Position: " + startingPosition);
    //let oneRight = playingField[Number(startingPosition[0] + 1)][Number(startingPosition[1])]
    // console.log('One Right: ' + playingField[Number(startingPosition[0] + 1)][Number(startingPosition[1])])
    console.log("Gebe einen der folgenden Befehle ein: links, rechts, oben, unten");
    let currentPosition = startingPosition;
    let finished = false;
    let inputAnswer;
    rl.question("Richtung: ", (answer) => {
        if (finished === true)
            return 'Game Over';
        if (answer === 'rechts') {
            if (playingField[(currentPosition[0]) + 1][currentPosition[1]] === 'empty') {
                currentPosition = performAction(currentPosition, 'moveRight');
                return 'nice one';
            }
            if (playingField[(currentPosition[0]) + 1][currentPosition[1]] === 'treasure') {
                currentPosition = currentPosition;
                finished = true;
                return 'TREASURE FOUND';
            }
            if (playingField[(currentPosition[0]) + 1][currentPosition[1]] === 'wall') {
                currentPosition = currentPosition;
                return 'WALL!';
            }
        }
        if (answer === 'links') {
            currentPosition = performAction(currentPosition, 'moveLeft');
        }
        if (answer === 'oben') {
            currentPosition = performAction(currentPosition, 'moveUp');
        }
        if (answer === 'unten') {
            currentPosition = performAction(currentPosition, 'moveDown');
        }
        runGame(currentPosition, playingField);
    });
}
runGame([0, 0], playingField);
//# sourceMappingURL=exercises.js.map