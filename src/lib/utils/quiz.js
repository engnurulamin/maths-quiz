
import { questions, total } from '$lib/utils/stores.js';

function generateEasyQuestion() {
  const a = Math.floor(Math.random() * 10);
  const b = Math.floor(Math.random() * 10);
  const type = Math.random() > 0.5 ? '+' : '-';

  if (type === '+') {
    return {
      question: `${a} + ${b}`,
      answer: a + b
    };
  } else {
    const bigger = Math.max(a, b);
    const smaller = Math.min(a, b);
    return {
      question: `${bigger} - ${smaller}`,
      answer: bigger - smaller
    };
  }
}

function generateMediumQuestion() {
  const a = Math.floor(Math.random() * 11) + 20;
  const b = Math.floor(Math.random() * 11) + 20;
  const type = Math.random() > 0.5 ? '+' : '-';

  if (type === '+') {
    return {
      question: `${a} + ${b}`,
      answer: a + b
    };
  } else {
    const bigger = Math.max(a, b);
    const smaller = Math.min(a, b);
    return {
      question: `${bigger} - ${smaller}`,
      answer: bigger - smaller
    };
  }
}



function generateHardQuestion() {
  const type = Math.random() > 0.5 ? '×' : '÷';

  if (type === '×') {
    const a = Math.floor(Math.random() * 10) + 10;
    const b = Math.floor(Math.random() * 10);
    return {
      question: `${a} × ${b}`,
      answer: a * b
    };
  } else {
    const b = Math.floor(Math.random() * 8) + 2; 
    const multiplier = Math.floor(Math.random() * 10);
    const a = b * multiplier;
    return {
      question: `${a} ÷ ${b}`,
      answer: a / b
    };
  }
}


export function generateQuestions(level) {
  const generated = [];
  const generatorMap = {
    easy: generateEasyQuestion,
    medium: generateMediumQuestion,
    hard: generateHardQuestion
  };

  const generator = generatorMap[level];

  if (!generator) {
    throw new Error(`Unknown level: ${level}`);
  }

  for (let i = 0; i < 20; i++) {
    generated.push(generator());
  }

  questions.set(generated);
  total.set(generated.length);
}