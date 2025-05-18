const spinner = document.getElementById("spinner");
const result = document.getElementById("result");
const spinBtn = document.getElementById("spinBtn");
const startBtn = document.getElementById("startBtn");
const howToPlayBtn = document.getElementById("howToPlayBtn");
const instructions = document.getElementById("instructions");
const arrow = document.querySelector(".arrow");

let currentRotation = 0;
const names = ["Panchmi", "Babymm", "Sushma", "Pragya", "Jayshree", "Samata"];

howToPlayBtn.addEventListener("click", () => {
  instructions.classList.toggle("hidden");
});

startBtn.addEventListener("click", () => {
  spinner.classList.remove("hidden");
  spinBtn.classList.remove("hidden");
  arrow.classList.remove("hidden");
  startBtn.classList.add("hidden");
});

spinBtn.addEventListener("click", () => {
  const randomSpin = Math.floor(Math.random() * 360) + 720;
  currentRotation += randomSpin;
  spinner.style.transform = `rotate(${currentRotation}deg)`;

  setTimeout(() => {
    const finalDeg = currentRotation % 360;
    const segment = Math.floor((360 - finalDeg + 30) % 360 / 60);
    const winnerName = names[segment];
    result.textContent = `🎉 Winner is: ${winnerName}!`;
  }, 4000);
});
