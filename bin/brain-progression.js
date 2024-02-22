#!/usr/bin/env node
const readlineSync = require('readline-sync');

function generateProgression(length, start, step) {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
}

function maskElement(progression, maskIndex) {
  const maskedProgression = [...progression];
  maskedProgression[maskIndex] = '..';
  return maskedProgression.join(' ');
}

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

const numberOfRounds = 3;
for (let round = 0; round < numberOfRounds; round += 1) {
  const progressionLength = 10;
  const progressionStart = Math.floor(Math.random() * 10) + 1;
  const progressionStep = Math.floor(Math.random() * 5) + 1;
  const maskIndex = Math.floor(Math.random() * progressionLength);
  const progression = generateProgression(progressionLength, progressionStart, progressionStep);
  const correctAnswer = progression[maskIndex];
  const question = maskElement(progression, maskIndex);

  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (parseInt(userAnswer, 10) === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }
}

console.log(`Congratulations, ${userName}!`);
