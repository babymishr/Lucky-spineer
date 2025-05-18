const spinner = document.getElementById("spinner");
const result = document.getElementById("result");
const spinBtn = document.getElementById("spinBtn");

let currentRotation = 0;

spinBtn.addEventListener("click", () => {
  const randomSpin = Math.floor(Math.random() * 360) + 720; // 2+ full spins
  currentRotation += randomSpin;
  spinner.style.transform = `rotate(${currentRotation}deg)`;

  // Determine winner after spin animation completes
  setTimeout(() => {
    const finalDeg = currentRotation % 360;
    const segment = Math.floor((360 - finalDeg + 30) % 360 / 60); // Adjusted for middle of segment
    const winner = segment + 1;
    result.textContent = `🎉 Winner is: ${winner}`;
  }, 4000); // Match transition time
});
