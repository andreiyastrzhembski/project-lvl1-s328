import readlineSync from 'readline-sync';

let userName;

const greet = () => {
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default greet;

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

export const playEven = () => {
  console.log('\n');
  const max = 100;
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomInt(max);
    let isEven = false;
    if (num % 2 === 0) {
      isEven = true;
    }
    const correctAnswer = num % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (isEven && answer === 'yes') {
      console.log('Correct!');
    } else if (!isEven && answer === 'no') {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
