import { cons, car, cdr } from 'hexlet-pairs';
import getRandomInt from '../random';
import launchGame from '../gameEngine';

const gameDescription = 'Balance the given number.';
const maxNum = 10000;

const calcSum = (num) => {
  const number = num.toString();
  let sum = 0;
  for (let i = 0; i < number.length; i += 1) {
    sum += Number(number[i]);
  }
  return sum;
};

const getNums = (num) => {
  const sum = calcSum(num);
  let a;
  let b;
  const len = num.toString().length;
  if (sum % len === 0) {
    a = sum / len;
    b = a;
  } else {
    a = Math.floor(sum / len);
    b = a + 1;
  }
  return cons(a, b);
};

const append = (a, i) => {
  if (i === 1) {
    return `${a}`;
  }
  return `${a}${append(a, i - 1)}`;
};

const getBalancedNum = (num) => {
  let result = '';
  const a = car(getNums(num));
  const b = cdr(getNums(num));
  const len = num.toString().length;
  if (a === b) {
    result += append(a, len);
  } else {
    const y = (a * len - calcSum(num)) / (a - b);
    const x = len - y;
    result += append(a, x);
    result += append(b, y);
  }
  return result;
};

const getQuestion = () => {
  const question = getRandomInt(maxNum);
  const correctAnswer = getBalancedNum(question);
  return cons(question, correctAnswer);
};

export default () => launchGame(gameDescription, getQuestion);
