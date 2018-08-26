import { cons, car, cdr } from 'hexlet-pairs';
import getRandomInt from '../utils';
import launchGame from '../gameEngine';

const gameDescription = 'What number is missing in this progression?';
const progressionLength = 10;
const maxStartNum = 100;
const maxStep = 10;

const getProgressionAndCorrectAnswer = (startNum, step, xPosition) => {
  let progression = '';
  const correctAnswer = startNum + step * xPosition;
  for (let i = 1; i <= progressionLength; i += 1) {
    if (i === xPosition) {
      progression += ' ..';
    } else {
      progression += ` ${startNum + step * i}`;
    }
  }
  return cons(progression, correctAnswer);
};

const getQuestionAndCorrectAnswer = () => {
  const startNum = getRandomInt(maxStartNum);
  const step = getRandomInt(maxStep, 1);
  const xPosition = getRandomInt(progressionLength, 1);
  const progressionAndCorrectAnswer = getProgressionAndCorrectAnswer(startNum, step, xPosition);
  const question = car(progressionAndCorrectAnswer);
  const correctAnswer = cdr(progressionAndCorrectAnswer).toString();
  return cons(question, correctAnswer);
};

export default () => launchGame(gameDescription, getQuestionAndCorrectAnswer);
