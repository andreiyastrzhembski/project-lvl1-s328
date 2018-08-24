import greet, {
  getRandomInt, getAnswer, checkAnswer, congrat,
} from '..';

const findGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGcd(b, a % b);
};

const playGcd = () => {
  const userName = greet('Find the greatest common divisor of given numbers.');
  const maxNum = 100;
  const maxAttempts = 3;
  for (let i = 0; i < maxAttempts; i += 1) {
    const a = getRandomInt(maxNum);
    const b = getRandomInt(maxNum);
    const question = `${a} ${b}`;
    const correctAnswer = findGcd(a, b);
    const answer = getAnswer(question);
    if (!checkAnswer(answer, correctAnswer, userName)) {
      return;
    }
    congrat(userName);
  }
};

export default playGcd;
