"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addToParticipants(name, participants) {
    participants.push(name);
    return participants;
}
function removeFromParticipants(name, participants) {
    const index = participants.indexOf(name);
    if (index > -1) {
        participants.splice(index, 1);
    }
    return participants;
}
function greetEveryone(greeting, participants) {
    let message = '';
    participants.forEach((participant) => {
        message += greeting + ' ' + participant + '\n';
    });
    return message;
}
let participants = ['Lars', 'Sophie', 'Ahmed', 'Marzio', 'Brigitte'];
participants = addToParticipants('Chad', participants);
console.log(greetEveryone('Hi', participants));
participants = removeFromParticipants('Marzio', participants);
console.log(greetEveryone('Hi', participants));
//# sourceMappingURL=uebung3.js.map