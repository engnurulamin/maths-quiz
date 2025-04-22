import { writable } from 'svelte/store';

export const userName = writable('');
export const difficulty = writable('');
export const questions = writable([]);
export const userAnswers = writable([]);
export const score = writable(0);
export const time = writable(200);
export const accuracy = writable(0);
export const correct = writable(0);
export const wrong = writable(0);
export const total = writable(0);
export const message = writable('');
export const timeTaken = writable(0);
export const isGameOver = writable(false);
export const isGameStart = writable(false);
export const isGameEnd = writable(false);
export const isGameReset = writable(false);
export const isGameNext = writable(false);
export const isGamePrevious = writable(false);
export const isGamePause = writable(false);
export const isGameResume = writable(false);

