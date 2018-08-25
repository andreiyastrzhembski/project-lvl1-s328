import { car, cdr } from 'hexlet-pairs';
import greet, {
  getAnswer, checkAnswer, congrat,
} from '.';

const maxAttempts = 3;

const launchGame = (gameDescription, getQuestion) => {
  const userName = greet(`${gameDescription}\n`);
  for (let i = 0; i < maxAttempts; i += 1) {
    const questionData = getQuestion();
    const question = car(questionData);
    const correctAnswer = cdr(questionData);
    const answer = getAnswer(question);
    if (!checkAnswer(answer, correctAnswer, userName)) {
      return;
    }
  }
  congrat(userName);
};

export default launchGame;
