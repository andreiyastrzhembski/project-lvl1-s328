import readlineSync from 'readline-sync';

const greet = (gameDescription) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(gameDescription);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

export default greet;

export const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
