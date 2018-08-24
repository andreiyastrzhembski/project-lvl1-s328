import greet, {
  getRandomInt, getAnswer, checkAnswer, congrat,
} from '..';

const isEven = number => number % 2 === 0;

const playEven = () => {
  const userName = greet('Answer "yes" if number even otherwise answer "no".\n');
  const maxNum = 100;
  const maxAttempts = 3;
  for (let i = 0; i < maxAttempts; i += 1) {
    const question = getRandomInt(maxNum);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    const answer = getAnswer(question);
    if (!checkAnswer(answer, correctAnswer, userName)) {
      return;
    }
  }
  congrat(userName);
};

export default playEven;
