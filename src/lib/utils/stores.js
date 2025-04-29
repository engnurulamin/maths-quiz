import { writable } from 'svelte/store';

export const user_name = writable('');
export const difficulty = writable('');
export const questions = writable([]);
export const user_answers = writable([]);
export const score = writable(0);
export const time = writable(0);
export const accuracy = writable(0);
export const correct = writable(0);
export const wrong = writable(0);
export const total = writable(0);
export const message = writable('');
export const time_taken = writable(0);
export const is_game_over = writable(false);
export const is_game_start = writable(false);
export const is_game_end = writable(false);
export const is_game_reset = writable(false);
export const is_game_next = writable(false);
export const is_game_previous = writable(false);
export const is_game_pause = writable(false);
export const is_game_resume = writable(false); 


// For English
export const subject = writable('');
export const question_type = writable('');

