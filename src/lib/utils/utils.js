import { word_meaning, synonyms, antonyms, spelling } from '$lib/utils/data';

export function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const paddedMins = mins.toString().padStart(2, '0');
  const paddedSecs = secs.toString().padStart(2, '0');
  return `${paddedMins}:${paddedSecs}`;
}

export const getMotivationalMessage = (accuracy) => {
	if (accuracy === 100) return "You're a genius! 💡";
	if (accuracy >= 90) return "Awesome job! 🌟";
	if (accuracy >= 75) return "Great effort! 👍";
	if (accuracy >= 50) return "Keep practicing! 💪";
	return "Don't give up! You can do it! 🚀";
};

export function shuffleItems(array) {
	return array
		.map(value => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value);
}



export function renderType(type) {
	if (type === 'Meaning') return word_meaning;
	if (type === 'Synonym') return synonyms;
	if (type === 'Antonym') return antonyms;
	if (type === 'Spelling') return spelling;
	return [];
}




