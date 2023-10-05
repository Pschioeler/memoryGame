import JSConfetti from "js-confetti";

const canvas = document.getElementById('confettiCanvas');

const jsConfetti = new JSConfetti({ canvas })

jsConfetti.addConfetti({
    confettiColors: [
        '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
      ],
      confettiRadius: 6,
      confettiNumber: 500,
      emojiSize: 100,
    emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
});

let btn = getElementById("confetti");
btn.addEventListener("click", jsConfetti.addConfetti);