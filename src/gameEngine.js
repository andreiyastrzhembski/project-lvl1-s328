import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const maxAttempts = 3;

const launchGame = (gameDescription, getQuestion) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(gameDescription);
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  for (let i = 0; i < maxAttempts; i += 1) {
    const questionData = getQuestion();
    const question = car(questionData);
    const correctAnswer = cdr(questionData);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!\n');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!\n`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!\n`);
};

export default launchGame;
