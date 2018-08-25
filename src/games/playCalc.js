import { getRandomInt } from '..';
import { cons } from 'hexlet-pairs';
import launchGame from '../gameEngine';

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

const getQuestion = () => {
  const maxNum = 100;
  const operation = getOperation();
  const a = getRandomInt(maxNum);
  const b = getRandomInt(maxNum);
  const question = `${a} ${operation} ${b}`;
  const correctAnswer = getCorrectAnswer(a, b, operation);
  return cons(question, correctAnswer);
};

const playCalc = () => {
  launchGame('What is the result of the expression?\n', getQuestion);
};

export default playCalc;
