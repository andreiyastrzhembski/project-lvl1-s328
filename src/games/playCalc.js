import { cons, car, cdr } from 'hexlet-pairs';
import getRandomInt from '../random';
import launchGame from '../gameEngine';

const gameDescription = 'What is the result of the expression?';
const maxNum = 100;
const maxOperations = 3;

const getCorrectAnswer = (a, b, operation) => {
  switch (operation) {
    case 0:
      return cons('+', a + b);
    case 1:
      return cons('-', a - b);
    case 2:
      return cons('*', a * b);
    default:
      return null;
  }
};

const getQuestion = () => {
  const operation = getRandomInt(maxOperations);
  const a = getRandomInt(maxNum);
  const b = getRandomInt(maxNum);
  const question = `${a} ${car(getCorrectAnswer(a, b, operation))} ${b}`;
  const correctAnswer = cdr(getCorrectAnswer(a, b, operation));
  return cons(question, correctAnswer);
};

export default () => launchGame(gameDescription, getQuestion);
