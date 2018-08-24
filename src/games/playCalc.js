import readlineSync from 'readline-sync';
import greet, { getRandomInt } from '..';

const getOperation = () => {
  const num = getRandomInt(3);
  switch (num) {
    case 0:
      return '+';
    case 1:
      return '-';
    case 2:
      return '*';
    default:
      return null;
  }
};

const getCorrectAnswer = (a, b, operation) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};

const playCalc = () => {
  const userName = greet('What is the result of the expression?\n');
  const maxNum = 30;
  const maxAttempts = 3;
  for (let i = 0; i < maxAttempts; i += 1) {
    const operation = getOperation();
    const a = getRandomInt(maxNum);
    const b = getRandomInt(maxNum);

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
