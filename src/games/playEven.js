import readlineSync from 'readline-sync';
import greet, { getRandomInt } from '..';

const isEven = number => number % 2 === 0;

const playEven = () => {
  const userName = greet();
  const maxNum = 100;
  const maxAttempts = 3;
  for (let i = 0; i < maxAttempts; i += 1) {
    const questionNum = getRandomInt(maxNum);
    const correctAnswer = isEven(questionNum) ? 'yes' : 'no';
    console.log(`Question: ${questionNum}`);
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
