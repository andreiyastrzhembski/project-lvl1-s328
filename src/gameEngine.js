import { car, cdr } from 'hexlet-pairs';
import greet, {
  getAnswer, checkAnswer, congrat,
} from '.';


const launchGame = (gameDescription, getQuestion) => {
  const userName = greet(gameDescription);
  const maxAttempts = 3;
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
