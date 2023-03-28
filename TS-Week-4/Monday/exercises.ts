/// NOTE TO SELF: this version works too, pay attn to 2D array representation, which doesn't correspond visually

import * as readline from "readline";

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});

type Action = 'moveLeft' | 'moveRight' | 'moveUp' | 'moveDown'

type Position = [number, number]

function performAction(y: Position, x: Action): Position {
    if (x === 'moveRight') {
        if (y[0] <= 7) {
            return [y[0] + 1, (y[1])]
        }
        return [y[0], y[1]]
    }
    if (x === 'moveLeft') {
        if (y[0] >= 1) {
            return [y[0] - 1, y[1]]
        }
        return [y[0], y[1]]
    }
    if (x === 'moveUp') {
        if (y[1] >= 1) {
            return [y[0], y[1] - 1]
        }
        return [y[0], y[1]]
    }
    if (x === 'moveDown') {
        if (y[1] <= 7) {
            return [y[0], y[1] + 1]
        }
        return [y[0], y[1]]
    }
    return [y[0], y[1]]
}

// console.log(performAction('moveSideways'))
// console.log(performAction('moveUp'))

//UEBUNG 2
// console.log(performAction([0, 0], 'moveRight'))
// console.log(performAction([1, 5], 'moveRight'))
// console.log(performAction([1, 7], 'moveRight'))
// console.log(performAction([1, 8], 'moveRight'))


//UEBUNG 3
// x,y moveRight = x+1, moveLeft = x-1, moveUp = y-1, moveDown = y+1
// console.log(performAction([0, 0], 'moveRight'))
// console.log(performAction([7, 5], 'moveRight'))
// console.log(performAction([8, 7], 'moveRight'))
// console.log(performAction([4, 8], 'moveRight'))
// console.log(performAction([0, 0], 'moveLeft'))
// console.log(performAction([1, 5], 'moveLeft'))
// console.log(performAction([8, 7], 'moveLeft'))
// console.log(performAction([4, 8], 'moveLeft'))
// console.log(performAction([0, 0], 'moveUp'))
// console.log(performAction([1, 5], 'moveUp'))
// console.log(performAction([8, 7], 'moveUp'))
// console.log(performAction([4, 8], 'moveUp'))
// console.log(performAction([0, 0], 'moveDown'))
// console.log(performAction([1, 5], 'moveDown'))
// console.log(performAction([8, 7], 'moveDown'))
// console.log(performAction([4, 8], 'moveDown'))


//UEBUNG 4

type FieldType = 'empty' | 'wall' | 'treasure'

const playingField: FieldType[][] = [
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
function runGame(
    startingPosition: [number, number],
    playingField: FieldType[][]
): void {
    console.log("Current Position: " + startingPosition);
    //let oneRight = playingField[Number(startingPosition[0] + 1)][Number(startingPosition[1])]
    // console.log('One Right: ' + playingField[Number(startingPosition[0] + 1)][Number(startingPosition[1])])
    console.log(
        "Gebe einen der folgenden Befehle ein: links, rechts, oben, unten"
    );
    let currentPosition = startingPosition;
    let finished: boolean = false
    let inputAnswer: Action;

    rl.question("Richtung: ", (answer) => {
        if (finished === true) return 'Game Over';
        if (answer === 'rechts') {
            if (playingField[(currentPosition[0]) + 1][currentPosition[1]] === 'empty') {
                currentPosition = performAction(currentPosition, 'moveRight')
                return 'nice one'
            }
            if (playingField[(currentPosition[0]) + 1][currentPosition[1]] === 'treasure') {
                currentPosition = currentPosition
                finished = true
                return 'TREASURE FOUND'
            }
            if (playingField[(currentPosition[0]) + 1][currentPosition[1]] === 'wall') {
                currentPosition = currentPosition
                return 'WALL!'
            }
        }
        if (answer === 'links') {
            currentPosition = performAction(currentPosition, 'moveLeft')
        }
        if (answer === 'oben') {
            currentPosition = performAction(currentPosition, 'moveUp')
        }
        if (answer === 'unten') {
            currentPosition = performAction(currentPosition, 'moveDown')
        }
        runGame(currentPosition, playingField);
    });
}

runGame([0, 0], playingField)

export { }