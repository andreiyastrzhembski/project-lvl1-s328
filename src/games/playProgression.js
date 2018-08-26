import { cons } from 'hexlet-pairs';
import getRandomInt from '../random';
import launchGame from '../gameEngine';

const gameDescription = 'What number is missing in this progression?';
const startNum = getRandomInt(100);

const getQuestion = () => {
  const question = null;
  const correctAnswer = startNum;
  return cons(question, correctAnswer);
};

export default () => launchGame(gameDescription, getQuestion);
