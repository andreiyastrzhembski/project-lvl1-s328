import { getRandomInt } from '..';
import { cons } from 'hexlet-pairs';
import launchGame from '../gameEngine';

const findGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGcd(b, a % b);
};

const getQuestion = () => {
  const maxNum = 100;
  const a = getRandomInt(maxNum);
  const b = getRandomInt(maxNum);
  const question = `${a} ${b}`;
  const correctAnswer = findGcd(a, b);
  return cons(question, correctAnswer);
};

const playGcd = () => {
  launchGame('Find the greatest common divisor of given numbers.\n', getQuestion);
};

export default playGcd;
