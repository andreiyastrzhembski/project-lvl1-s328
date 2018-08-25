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
  console.log(`calcSum returned: ${sum}`); // debug
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
  console.log(`getNums returned: cons(${a}, ${b})`); // debug
  return cons(a, b);
};

const getBalancedNum = (num) => {
  let result = '';
  const a = car(getNums(num));
  const b = cdr(getNums(num));
  const len = num.toString().length;
  console.log(`inside getBalancedNum: a = ${a}; b = ${b}; len = ${len}`); // debug
  if (a === b) {
    for (let i = 0; i < len; i += 1) {
      result += a.toString();
    }
  } else {
    const y = (a * len - calcSum(num)) / (a - b);
    const x = len - y;
    console.log(`inside getBalancedNum: x = ${x}; y = ${y}`); // debug
    for (let i = 0; i < x; i += 1) {
      result += a.toString();
    }
    for (let i = 0; i < y; i += 1) {
      result += b.toString();
    }
  }
  console.log(`getBalancedNum returned: ${result}`); // debug
  return result;
};

const getQuestion = () => {
  const question = getRandomInt(maxNum);
  const correctAnswer = getBalancedNum(question);
  return cons(question, correctAnswer);
};

export default () => launchGame(gameDescription, getQuestion);
