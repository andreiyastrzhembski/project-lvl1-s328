import greet, {
  getRandomInt, getAnswer, checkAnswer, congrat,
} from '..';

const getOperation = () => {
  const num = getRandomInt(3);
  switch (num) {
    case 0:
      return '+';
    case 1:
      return '-';
    case 2:
      return '*';
    default:
      return null;
  }
};

const getCorrectAnswer = (a, b, operation) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};

const playCalc = () => {
  const userName = greet('What is the result of the expression?\n');
  const maxNum = 30;
  const maxAttempts = 3;
  for (let i = 0; i < maxAttempts; i += 1) {
    const operation = getOperation();
    const a = getRandomInt(maxNum);
    const b = getRandomInt(maxNum);
    const question = `${a} ${operation} ${b}`;
    const correctAnswer = getCorrectAnswer(a, b, operation);
    const answer = getAnswer(question);
    if (!checkAnswer(answer, correctAnswer, userName)) {
      return;
    }
  }
  congrat(userName);
};

export default playCalc;
