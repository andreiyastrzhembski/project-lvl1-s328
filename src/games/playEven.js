import readlineSync from 'readline-sync';
import greet, { getRandomInt } from '..';

const isEven = number => number % 2 === 0;

const playEven = () => {
  const userName = greet('Answer "yes" if number even otherwise answer "no".\n');
  const maxNum = 100;
  const maxAttempts = 3;
  for (let i = 0; i < maxAttempts; i += 1) {
    const question = getRandomInt(maxNum);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
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
