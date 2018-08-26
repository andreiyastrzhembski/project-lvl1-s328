import { cons, car, cdr } from 'hexlet-pairs';
import getRandomInt from '../random';
import launchGame from '../gameEngine';

const gameDescription = 'What is the result of the expression?';
const maxNum = 100;
const maxOperations = 3;

const getQuestionAndCorrectAnswer = (a, b, operation) => {
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

const getQuestion = () => {
  const a = getRandomInt(maxNum);
  const b = getRandomInt(maxNum);
  const operation = getRandomInt(maxOperations);
  const question = car(getQuestionAndCorrectAnswer(a, b, operation));
  const correctAnswer = cdr(getQuestionAndCorrectAnswer(a, b, operation)).toString();
  return cons(question, correctAnswer);
};

export default () => launchGame(gameDescription, getQuestion);
