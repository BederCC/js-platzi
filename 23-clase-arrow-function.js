const greeting = function (name) {
    return `Hi, my name is ${name}`;
}

// Arrow function - explicit return
const newGreeting = (name) => {
    return `Hi, my name is ${name}`;
}

// Arrow function - implicit return
const newGreetingImplicit = name => `Hi, my name is ${name}`;
const newGreetingImplicitWithTwoParameters = (name, lastName) => `Hi, my name is ${name} ${lastName}`;


// Lexical Binding
const fincitionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name} says: ${message}`);
    },
    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`);
    }
}

fincitionalCharacter.messageWithTraditionalFunction('With traditional function');
fincitionalCharacter.messageWithArrowFunction('With arrow function');