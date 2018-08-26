import { cons } from 'hexlet-pairs';
import getRandomInt from '../random';
import launchGame from '../gameEngine';

const gameDescription = 'Is this number prime?';
const maxNum = 100;

const isEven = number => number % 2 === 0;

const getQuestion = () => {
  const question = getRandomInt(maxNum);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => launchGame(gameDescription, getQuestion);
