import readlineSync from 'readline-sync';
import greet, { getRandomInt } from '..';

const getOperation = () => {
  const num = getRandomInt(3);
  if (num === 0) {
    return '+';
  }
  if (num === 1) {
    return '-';
  }
  if (num === 2) {
    return '*';
  }
  return null;
};

const getCorrectAnswer = (a, b, operation) => {
  if (operation === '+') {
    return a + b;
  }
  if (operation === '-') {
    return a - b;
  }
  if (operation === '*') {
    return a * b;
  }
  return null;
};

const playCalc = () => {
  const userName = greet('What is the result of the expression?\n');
  const max = 30;
  for (let i = 0; i < 3; i += 1) {
    const operation = getOperation();
    const a = getRandomInt(max);
    const b = getRandomInt(max);

    const correctAnswer = getCorrectAnswer(a, b, operation);
    console.log(`Question: ${a} ${operation} ${b}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer.toString() === correctAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playCalc;
