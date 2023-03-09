"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greetEveryone(greeting, participants, blacklist) {
    let message = '';
    participants.forEach((participant) => {
        if (blacklist.includes(participant))
            message += 'blacklisted' + '\n';
        else
            message += greeting + ' ' + participant + '\n';
    });
    return message;
}
let welcomeText = 'Willkommen im TypeScript-Kurs';
let participants = ['Lars', 'Sophie', 'Ahmed', 'Marzio', 'Brigitte'];
let blacklist = ['Sophie', 'Brigitte'];
console.log(greetEveryone(welcomeText, participants, blacklist));
//# sourceMappingURL=uebung2.js.map