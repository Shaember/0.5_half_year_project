#!/usr/bin/env node
const readlineSync = require('readline-sync');

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const isEven = (num) => num % 2 === 0;

const rounds = 3;

for (let i = 0; i < rounds; i++) {
  const number = Math.floor(Math.random() * 100);
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');

  const correctAnswer = isEven(number) ? 'yes' : 'no';

  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    return;
  } else {
    console.log('Correct!');
  }
}

console.log(`Congratulations, ${name}!`);