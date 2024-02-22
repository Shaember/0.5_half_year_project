#!/usr/bin/env node
// import { playGame } from './engine.js';

const gameDescription = 'What is the result of the expression?';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const operations = [
  (a, b) => [`${a} + ${b}`, a + b],
  (a, b) => [`${a} - ${b}`, a - b],
  (a, b) => [`${a} * ${b}`, a * b],
];

const getGameData = () => {
  const operationIndex = getRandomNumber(0, operations.length - 1);
  const [a, b] = [getRandomNumber(1, 20), getRandomNumber(1, 20)];
  return operations[operationIndex](a, b);
};

playGame(gameDescription, getGameData);
