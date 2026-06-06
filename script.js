const progressBar = document.querySelector("[data-progress]");
const year = document.querySelector("[data-year]");

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function updateProgress() {
  const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollRange > 0 ? window.scrollY / scrollRange : 0;
  progressBar.style.transform = `scaleX(${clamp(progress, 0, 1)})`;
}

if (year) {
  year.textContent = new Date().getFullYear();
}

if (progressBar) {
  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
}
