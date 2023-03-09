// function concatinate(ein: string, string: string): string {
//     return ein + ' ' + string
// }

// console.log(concatinate('one', 'string'))

// function toNumber(one: string): number {
//     return Number(one)
// }

// console.log(toNumber('lol'))
// console.log(typeof toNumber('lol'))

// const chain = (x: string, y: number): string => {
//     return x.repeat(y)
// }
// console.log(chain('test', 0))

// const isVowel = (z: string): boolean => {
//     let vowels = ['a', 'e', 'i', 'o', 'u']
//     if (vowels.includes(z))
//         return true
//     else return false
// }
// console.log(isVowel('z'), isVowel('a'))

// const vowels = (v: string, n: number): string => {
//     let vowels = ['a', 'e', 'i', 'o', 'u']
//     let arrayV = Array.from(v)
//     let output = '';
//     arrayV.forEach((letter) => {
//         if (vowels.includes(letter))
//             return output += (letter.repeat(n))
//         else return output += letter
//     })
//     return output
// }

// console.log(vowels('car', 4))

// const sixSidedDice = (): number => {
//     return Math.floor(Math.random() * 6) + 1
// }

// console.log(sixSidedDice())

// const aSidedDice = (a: number): number => {
//     return Math.floor(Math.random() * a) + 1
// }
// console.log(aSidedDice(9))


//* mögliche Tippfehler ? Player 2 hat die Abweichung 0 => 10? */
function diceGame(player1: number, player2: number): string {
    let dice1: number = Math.floor(Math.random() * 12) + 1
    let dice2: number = Math.floor(Math.random() * 12) + 1
    let wuerfelergebnis: number = dice1 + dice2
    let winner: string = ''
    let player1score: number = Math.abs(wuerfelergebnis - player1)
    let player2score: number = Math.abs(wuerfelergebnis - player2)
    if (player1score < player2score) {
        winner = 'Player 1'
    }
    if (player2score < player1score) {
        winner = 'Player 2'
    }
    if (player2score === player1score) {
        winner = 'niemand'
    }
    return 'Player 1 hat die Abweichung ' + player1 + ' und Player 2 hat die Abweichung ' + player2 + ', das Würfelergebnis ist ' + wuerfelergebnis + ': also ' + winner + ' gewinnt!'
}
console.log(diceGame(10, 20))

export { }