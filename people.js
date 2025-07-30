const fullName = require('./modules/names.js');
const hobbies = require('./modules/hobbies.js');

const person = () => {
  return {
    fullName: fullName('Samuele', 'Finotello'),
    hobbies: hobbies('calcio', 'computer', 'ps')
  }
}

console.log(person());