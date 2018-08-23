import readlineSync from 'readline-sync';

const greet = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export default greet;

export const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
