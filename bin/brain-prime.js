#!/usr/bin/env node
const readlineSync = require('readline-sync');

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
  const questionNumber = Math.floor(Math.random() * 100) + 1;
  console.log(`Question: ${questionNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');

  const correctAnswer = isPrime(questionNumber) ? 'yes' : 'no';

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }
}

console.log(`Congratulations, ${userName}!`);
