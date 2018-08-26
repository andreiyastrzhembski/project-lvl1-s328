import { cons, car, cdr } from 'hexlet-pairs';
import getRandomInt from '../random';
import launchGame from '../gameEngine';

const gameDescription = 'What number is missing in this progression?';
const progressionLength = 10;
const maxStartNum = 100;

const getProgressionAndCorrectAnswer = (startNum, step, xPosition) => {
  let progression = '';
  let nextStep = 0;
  let correctAnswer = null;
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === xPosition) {
      progression += ' ..';
      correctAnswer = startNum + nextStep;
      nextStep += step;
    } else {
      progression += ` ${startNum + nextStep}`;
      nextStep += step;
    }
  }
  return cons(progression, correctAnswer);
};

const getQuestion = () => {
  const startNum = getRandomInt(maxStartNum);
  const step = getRandomInt(progressionLength, 1);
  const xPosition = getRandomInt(progressionLength - 1);
  const question = car(getProgressionAndCorrectAnswer(startNum, step, xPosition));
  const correctAnswer = cdr(getProgressionAndCorrectAnswer(startNum, step, xPosition)).toString();
  return cons(question, correctAnswer);
};

export default () => launchGame(gameDescription, getQuestion);
