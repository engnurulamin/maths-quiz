// import { accuracy } from '$lib/stores';

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

