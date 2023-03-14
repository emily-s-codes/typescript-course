"use strict";
// UEBUNG 1
// type MyString = string
// const emily: MyString = 'Emily was here'
// console.log(emily)
// UEBUNG 2
// type StringOrNumber = string | number
// const myNumber: number = 6
// let thisNumber: StringOrNumber = myNumber
// thisNumber = true // Type 'boolean' is not assignable to type 'StringOrNumber'
// UEBUNG 3
// function introduction(x: StringOrNumber): string {
//     return 'Hello, my content is ' + x
// }
// console.log(introduction('a long and complicated string!'))
// console.log(introduction(true)) // Argument of type 'boolean' is not assignable to parameter of type 'StringOrNumber'.
// console.log(introduction(6))
// UEBUNG 4
// const showContent = (x: string | undefined): string => {
//     if (typeof x === 'string') {
//         return 'Hello, my content is ' + x
//     } else {
//         return 'No content to display'
//     }
// }
// console.log(showContent(undefined))
// console.log(showContent('blah blah blah'))
// UEBUNG 5
// const keepPlaying = (x: number | boolean): boolean => {
//     if (typeof x === 'boolean') {
//         return x
//     }
//     else {
//         return x < 10
//     }
// }
// console.log(keepPlaying(true))
// console.log(keepPlaying(false))
// console.log(keepPlaying(6))
// console.log(keepPlaying(11))
// console.log(keepPlaying('very funny')) // Argument of type '"very funny"' is not assignable to parameter of type 'number | boolean'.
// UEBUNG 6 & 7
// const output = document.getElementById('return')
// // const inputValue = (<HTMLInputElement>document.getElementById('input'))
// const inputField = <HTMLInputElement>document.getElementById('input')
// inputField!.onkeyup = function () {
//     move(inputField.value)
// }
// const move = (x: string): number | undefined => {
//     let points: number | undefined;
//     let converted = x.toLowerCase()
//     let accepted: string[] = ['links', 'rechts', 'vor', 'zurück', 'zurueck']
//     if (accepted.includes(converted)) {
//         if (converted === 'zurueck') { points = 3 }
//         else points = accepted.indexOf(converted)
//     }
//     else {
//         points = undefined
//     }
//     let pointsString: string;
//     if (typeof points === "number") {
//         pointsString = points?.toString()
//     }
//     else {
//         pointsString = 'Invalid entry'
//     }
//     output!.innerText = pointsString ?? 'Invalid entry'
//     return points
// }
// console.log('zurück', move('zurück'))
// console.log('zurueck', move('Zurueck'))
// console.log('oben', move('oben'))
// console.log('VoR', move('VoR'))
// console.log('random string', move('move sideways'))
//# sourceMappingURL=exercises.js.map