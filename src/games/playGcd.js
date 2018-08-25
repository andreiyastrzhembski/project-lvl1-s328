import { cons } from 'hexlet-pairs';
import getRandomInt from '../random';
import launchGame from '../gameEngine';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const maxNum = 100;

const findGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGcd(b, a % b);
};

const getQuestion = () => {
  const a = getRandomInt(maxNum);
  const b = getRandomInt(maxNum);
  const question = `${a} ${b}`;
  const correctAnswer = findGcd(a, b);
  return cons(question, correctAnswer);
};

export default () => launchGame(gameDescription, getQuestion);
