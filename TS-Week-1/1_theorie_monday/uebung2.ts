function greetEveryone(greeting: string, participants:string[], blacklist:string[]): string {
    let message = '';
    participants.forEach((participant) => {
        if (blacklist.includes(participant)) message += 'blacklisted' + '\n';
        else message += greeting + ' ' + participant + '\n';
    });
    return message;
}

let welcomeText: string = 'Willkommen im TypeScript-Kurs';

let participants: string[] = ['Lars', 'Sophie', 'Ahmed', 'Marzio', 'Brigitte'];

let blacklist: string[] = ['Sophie', 'Brigitte']

console.log(greetEveryone(welcomeText, participants, blacklist))

export {}