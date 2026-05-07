const btn = document.getElementById("themeToggle");

btn.addEventListener("click", () => {
  document.body.classList.toggle("night");

  const isNight = document.body.classList.contains("night");

  btn.innerHTML = isNight
    ? '<i class="ri-sun-fill"></i> Day'
    : '<i class="ri-moon-fill"></i> Night';

  btn.setAttribute(
    "aria-label",
    isNight ? "Switch to day mode" : "Switch to night mode"
  );
});