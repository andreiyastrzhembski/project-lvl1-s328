import { cons, car, cdr } from 'hexlet-pairs';
import getRandomInt from '../random';
import launchGame from '../gameEngine';

const gameDescription = 'What is the result of the expression?';
const maxNum = 100;
const maxOperations = 2;

const getExprAndCorrectAnswer = (a, b, operation) => {
  switch (operation) {
    case 0:
      return cons(`${a} + ${b}`, a + b);
    case 1:
      return cons(`${a} - ${b}`, a - b);
    case 2:
      return cons(`${a} * ${b}`, a * b);
    default:
      return null;
  }
};

const getQuestionAndCorrectAnswer = () => {
  const a = getRandomInt(maxNum);
  const b = getRandomInt(maxNum);
  const operation = getRandomInt(maxOperations);
  const exprAndCorrectAnswer = getExprAndCorrectAnswer(a, b, operation);
  const question = car(exprAndCorrectAnswer);
  const correctAnswer = cdr(exprAndCorrectAnswer).toString();
  return cons(question, correctAnswer);
};

export default () => launchGame(gameDescription, getQuestionAndCorrectAnswer);
