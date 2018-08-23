import readlineSync from 'readline-sync';
import greet, { getRandomInt } from '..';

const playEven = () => {
  const userName = greet();
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

export default playEven;