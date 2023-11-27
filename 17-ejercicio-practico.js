// Social Media Profile

// 1. User Information
const username = 'beduExpert';
const fullName = 'Beder Casa';
const age = 25;
const isStudent = true;

// 2. address
const address = {
    street: 'Av. huayruropata',
    city: 'Cusco',
    state: 'Wanchaq',
    zipCode: '08000',
};

// 3. Hobbies
const hobbies = ['Programming', 'Playing Ps4', 'Reading'];

// 4. Generating personalized bio
const bio = `Hello there! My name is ${fullName}. At the ripe age of ${age}, I find myself residing in the charming city of ${address.city}, nestled in the heart of ${address.state}. Amidst the tapestry of life, my passions include ${hobbies[0]}, ${hobbies[1]}, and ${hobbies[2]}. Join me on this journey of exploration and discovery!`;

// 5. Displaying bio
console.log(bio);
