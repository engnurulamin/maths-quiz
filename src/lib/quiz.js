
import { questions, total } from '$lib/stores.js';

export function generateQuestions(level) {
  let generated = [];

  for (let i = 0; i < 10; i++) {
    let a, b, question, answer;

    if (level === 'easy') {
      a = Math.floor(Math.random() * 10);
      b = Math.floor(Math.random() * 10);
      question = `${a} + ${b}`;
      answer = a + b;
    } else if (level === 'medium') {
      a = Math.floor(Math.random() * 90) + 10;
      b = Math.floor(Math.random() * 9) + 1;
      const type = Math.random() > 0.5 ? '×' : '÷';
      if (type === '×') {
        question = `${a} × ${b}`;
        answer = a * b;
      } else {
        question = `${a} ÷ ${b}`;
        answer = Math.floor(a / b);
      }
    } else {
      a = Math.floor(Math.random() * 900) + 100;
      b = Math.floor(Math.random() * 90) + 10;
      question = `${a} ÷ ${b}`;
      answer = Math.floor(a / b);
    }

    generated.push({ question, answer });
  }

  questions.set(generated);
  total.set(generated.length);
}
