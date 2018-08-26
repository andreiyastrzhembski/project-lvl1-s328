import { cons } from 'hexlet-pairs';
import getRandomInt from '../utils';
import launchGame from '../gameEngine';

const gameDescription = 'Answer "yes" if number prime otherwise answer "no".';
const maxNum = 100;

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num !== 1;
};

const getQuestionAndCorrectAnswer = () => {
  const question = getRandomInt(maxNum, 1);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(`Is this number prime? ${question}`, correctAnswer);
};

export default () => launchGame(gameDescription, getQuestionAndCorrectAnswer);
