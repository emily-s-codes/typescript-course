function addToParticipants(name: string, participants:string[]):string[] {
    participants.push(name);
    return participants;
}

function removeFromParticipants(name: string, participants:string[]):string[] {
    const index = participants.indexOf(name);
    if (index>-1) {
        participants.splice(index,1);
    }
    return participants;
}

function greetEveryone(greeting: string, participants:string[]): string {
    let message = '';
    participants.forEach((participant) => {
        message += greeting + ' ' + participant + '\n';
    });
    return message;
}

let participants: string[] = ['Lars', 'Sophie', 'Ahmed', 'Marzio', 'Brigitte'];

participants = addToParticipants('Chad', participants);

console.log(greetEveryone('Hi', participants));

participants = removeFromParticipants('Marzio', participants);
console.log(greetEveryone('Hi', participants));
export{}