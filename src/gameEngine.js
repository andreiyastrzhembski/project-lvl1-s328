import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const maxAttempts = 3;

export const greet = (gameDescription) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(gameDescription);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

const getAnswer = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ').toString();
};

const checkAnswer = (answer, correctAnswer, userName) => {
  if (answer.toString() === correctAnswer.toString()) {
    console.log('Correct!\n');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  console.log(`Let's try again, ${userName}!\n`);
  return false;
};

const congrat = (userName) => {
  console.log(`Congratulations, ${userName}!\n`);
};

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
