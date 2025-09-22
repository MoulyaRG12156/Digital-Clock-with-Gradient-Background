function updateClock() {
  const now = new Date();

  // Format time
  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let seconds = now.getSeconds().toString().padStart(2, "0");

  // Display time
  document.getElementById("time").textContent = `${hours}:${minutes}:${seconds}`;

  // Display date
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  document.getElementById("date").textContent = now.toLocaleDateString(undefined, options);
}

// Update every second
setInterval(updateClock, 1000);
updateClock();
