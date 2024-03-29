"use strict";
// UEBUNG 1 -- SUMME
Object.defineProperty(exports, "__esModule", { value: true });
// function sum(x: Array<number>): number {
//     let sumOfNumbers: number = 0
//     for (let i = 0; i < x.length; i++) {
//         sumOfNumbers += x[i]
//     }
//     return sumOfNumbers
// }
// OR
// function sum(x: Array<number>): number {
//     let sumOfNumbers: number = 0
//     x.forEach(element =>{
//     summe += element
//})
//     return sumOfNumbers
// }
// OR
// function sum(x: Array<number>): number {
//     return x.reduce((a, b) => a + b, 0)
// }
// console.log('sum', sum([1, 3, 5]))
// console.log(sum([1, 3, 5, 7]))
// console.log(sum([]))
// UEBUNG 2 -- Summe mit Type-Union
// function sum(x: (string | number)[]): string {
//     let sumOfNumbers: string = ''
//     for (let i = 0; i < x.length; i++) {
//         sumOfNumbers += x[i]
//     }
//     return sumOfNumbers
// }
// console.log(sum([1, 'three', 5]))
// console.log(sum([1, 3, 5, 'seven']))
// console.log(sum([]))
// UEBUNG 4 -- Generic Length
// function genericLength<T>(x: Array<T>): number {
//     return x.length
// }
// console.log(genericLength([1, 2, 3]))
// console.log(genericLength([1, 2, 'seven', false]))
// console.log(genericLength([1, 2, 'seven', false, 22, 54, 0]))
// console.log(genericLength([]))
// UEBUNG 5 -- Generic Last
// function genericLast<T>(x: Array<T>): T | undefined {
//     if (x.length > 0) {      // NOTE: x.slice(-1) returns an ARRAY with the final value which is why it doesn't solve this exercise
//         return x[x.length - 1]
//     }
//     else { return undefined }
// }
// console.log(genericLast([1, 2, 3]))
// console.log(genericLast([7]))
// console.log(genericLast([]))
// UEBUNG 6 -- Generic Last 2
// function genericLast2<T>(x: Array<T> | T): T {
//     if (Array.isArray(x)) return x[x.length - 1]
//     else return x
// }
// OR 
// function genericLast2<T>(x: Array<T> | T): T | undefined { // can return undefined because genericLast() can return undefined
//     if (Array.isArray(x)) {
//         return genericLast(x)
//     }
//     return x
// }
// console.log(genericLast2([1, 2, 3]))
// console.log(genericLast2(2))
// console.log(genericLast2(true))
// console.log(genericLast2('yesterday'))
// console.log(genericLast2([98, 2, 23]))
// UEBUNG 7 -- Generic Range 
function genericRange(x, y, z) {
    if (y < 0) {
        return [];
    }
    if (z > x.length) {
        return [];
    }
    if (z < y) {
        return [];
    }
    if (y === z && z === 0) {
        return x[0];
    }
    else
        return x.slice(y, z);
}
console.log('else', genericRange([1, 2, 3, 4, 5], 2, 4));
console.log('y<0', genericRange([1, 2, 3, 4, 5], -1, 4));
console.log('z>x.length', genericRange([1, 2, 3], 0, 4));
console.log('else', genericRange([1, 2, 3], 0, 2));
console.log('y===z===0', genericRange([1, 2, 3], 0, 0));
console.log('z<y', genericRange([1, 2, 3], 3, 0));
//# sourceMappingURL=exercises.js.map