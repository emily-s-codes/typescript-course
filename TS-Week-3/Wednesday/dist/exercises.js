"use strict";
// UEBUNG 1 & 2
Object.defineProperty(exports, "__esModule", { value: true });
const emily = ['emily', new Date('1990-12-11')];
const now = new Date();
function daysUntil(x) {
    const nextBday = new Date(new Date().getFullYear() + '-' + (x[1].getMonth() + 1) + '-' + x[1].getDate());
    const msec = (nextBday.getTime() - now.getTime());
    const days = (msec / 1000 / 60 / 60 / 24); // 
    // console.log(x[0] + ', your birthday is in ' + days + ' days')
    return days;
}
// console.log(daysUntil(emily))
// UEBUNG 3
const classList = [['emily', new Date('1990-12-11')], ['andrew', new Date('1995-07-21')]];
const birthdayListArray = [];
function birthdayList(x) {
    x.forEach(student => {
        birthdayListArray.push([student[0], daysUntil(student)]);
    });
    return birthdayListArray.sort((a, b) => a[1] - b[1]);
}
//console.log(birthdayList(classList))
//UEBUNG 4
function nextBirthday(x) {
    const sortedList = birthdayList(classList)[0];
    return sortedList[0];
}
console.log(nextBirthday(classList));
//# sourceMappingURL=exercises.js.map