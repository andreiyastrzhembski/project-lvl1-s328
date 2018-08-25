import { getRandomInt } from '..';
import { cons } from 'hexlet-pairs';
import launchGame from '../gameEngine';

const getMin = (num) => {
  let number = num;
  let min = number % 10;
  while (number > 0) {
    const current = number % 10;
    number = Math.floor(number / 10);
    if (current < min) {
      min = current;
    }
  }
  return min;
};

const getMax = (num) => {
  let number = num;
  let max = number % 10;
  while (number > 0) {
    const current = number % 10;
    number = Math.floor(number / 10);
    if (current > max) {
      max = current;
    }
  }
  return max;
};

const isBalanced = (num) => {
  if (getMax(num) - getMin(num) <= 1) {
    return true;
  }
  return false;
};

const hasRightOrder = (num) => {
  const number = num;
  for (let i = 0; i < number.length; i += 1) {
    if (number[i] > number[i + 1]) {
      return false;
    }
  }
  return true;
};

const changeOrder = (num) => {
  let result = '';
  const number = num;
  for (let i = 0; i < number.length; i += 1) {
    if (number[i] > number[i + 1]) {
      result += number[i + 1] + number[i];
      i += 1;
    } else {
      result += number[i];
    }
  }
  return result;
};

const balance = (num) => {
  let result = '';
  const number = num.toString();
  let minIndex;
  let maxIndex;
  for (let i = 0; i < number.length; i += 1) {
    if (num[i] === getMin(num).toString()) {
      minIndex = i;
    }
    if (num[i] === getMax(num).toString()) {
      maxIndex = i;
    }
  }
  for (let i = 0; i < number.length; i += 1) {
    if (i === minIndex) {
      result += (getMin(num) + 1).toString();
    } else if (i === maxIndex) {
      result += (getMax(num) - 1).toString();
    } else {
      result += number[i];
    }
  }
  return result;
};

const getBalancedNum = (num) => {
  let number = num;
  if (isBalanced(number) && hasRightOrder(number)) {
    return number;
  }
  while (!isBalanced(number)) {
    number = balance(number);
  }
  while (!hasRightOrder(number)) {
    number = changeOrder(number);
  }
  return number;
};

const getQuestion = () => {
  const maxNum = 10000;
  const question = getRandomInt(maxNum);
  const correctAnswer = getBalancedNum(question);
  return cons(question, correctAnswer);
};

const playBalance = () => {
  launchGame('Balance the given number.\n', getQuestion);
};

export default playBalance;
