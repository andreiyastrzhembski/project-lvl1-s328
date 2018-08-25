import { getRandomInt } from '..';
import { cons } from 'hexlet-pairs';
import launchGame from '../gameEngine';

const isEven = number => number % 2 === 0;

const getQuestion = () => {
  const maxNum = 100;
  const question = getRandomInt(maxNum);
  return cons(question, isEven(question) ? 'yes' : 'no');
};

const playEven = () => {
  launchGame('Answer "yes" if number even otherwise answer "no".\n', getQuestion);
};

export default playEven;
