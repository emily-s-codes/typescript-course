"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
function whereTo(pos, action) {
    const x = pos[0];
    const y = pos[1];
    switch (action) {
        case 'moveLeft': {
            return [x - 1, y];
        }
        case 'moveRight': {
            return [x + 1, y];
        }
        case 'moveUp': {
            return [x, y - 1];
        }
        case 'moveDown': {
            return [x, y + 1];
        }
        case undefined: {
            return [x, y];
        }
    }
}
function isLegalPosition(pos) {
    const x = pos[0];
    const y = pos[1];
    if (x < 0) {
        return false;
    }
    if (x > 7) {
        return false;
    }
    if (y < 0) {
        return false;
    }
    if (y > 7) {
        return false;
    }
    if (playingField[x][y] === 'wall') {
        return false;
    }
    return true;
}
function performAction(pos, action) {
    const nextPos = whereTo(pos, action);
    if (isLegalPosition(nextPos)) {
        return nextPos;
    }
    return pos;
}
function inputToAction(userInput) {
    if (userInput == 'links') {
        return 'moveLeft';
    }
    if (userInput == 'rechts') {
        return 'moveRight';
    }
    if (userInput == 'oben') {
        return 'moveUp';
    }
    if (userInput == 'unten') {
        return 'moveDown';
    }
    return undefined;
}
const readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});
function runGame(startingPosition, playingField) {
    console.log("Current Position: " + startingPosition);
    console.log("Gebe einen der folgenden Befehle ein: links, rechts, oben, unten");
    let currentPosition = startingPosition;
    let finished = false;
    rl.question("Richtung: ", (answer) => {
        currentPosition = performAction(currentPosition, inputToAction(answer));
        const x = currentPosition[0];
        const y = currentPosition[1];
        const field = playingField[x][y];
        console.log('current position: ', field);
        runGame(currentPosition, playingField);
    });
}
runGame([0, 0], playingField);
//# sourceMappingURL=liveExercises.js.map