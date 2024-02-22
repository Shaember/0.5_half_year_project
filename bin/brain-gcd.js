#!/usr/bin/env node
import { playGame } from './engine.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getGCD = (a, b) => {
  if (!b) {
    return a;
  }
  return getGCD(b, a % b);
};

const getGameData = () => {
  const [a, b] = [getRandomNumber(1, 100), getRandomNumber(1, 100)];
  const question = `${a} ${b}`;
  const correctAnswer = getGCD(a, b);
  return [question, correctAnswer.toString()];
};

playGame(gameDescription, getGameData);
