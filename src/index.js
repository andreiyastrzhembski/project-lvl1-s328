import readlineSync from 'readline-sync';

const greet = (gameDescription) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(gameDescription);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

export default greet;

export const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

export const getAnswer = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ').toString();
};

export const checkAnswer = (answer, correctAnswer, userName) => {
  if (answer.toString() === correctAnswer.toString()) {
    console.log('Correct!\n');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  console.log(`Let's try again, ${userName}!\n`);
  return false;
};

export const congrat = (userName) => {
  console.log(`Congratulations, ${userName}!\n`);
};
