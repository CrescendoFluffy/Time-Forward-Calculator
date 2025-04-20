function startLiveTime() {
  function update() {
    const now = new Date();
    document.getElementById("liveTime").textContent =
      "Live Time: " + formatDate(now);
    requestAnimationFrame(update);
  }
  update();
}
startLiveTime();

function calculateTime() {
  const ids = ["years", "months", "days", "hours", "minutes", "seconds"];
  const values = ids.map(
    (id) => parseInt(document.getElementById(id).value) || 0
  );

  const [years, months, days, hours, minutes, seconds] = values;
  const now = new Date();
  const future = new Date(now);

  future.setFullYear(future.getFullYear() + years);
  future.setMonth(future.getMonth() + months);
  future.setDate(future.getDate() + days);
  future.setHours(future.getHours() + hours);
  future.setMinutes(future.getMinutes() + minutes);
  future.setSeconds(future.getSeconds() + seconds);

  const resultHTML = `
    <strong>Current Time:</strong> ${formatDate(now)}<br>
    <strong>Calculated Time:</strong> ${formatDate(future)}
  `;

  document.getElementById("result").innerHTML = resultHTML;
  saveInputValues(); // save values after calculation
}

function resetFields() {
  const fields = ["years", "months", "days", "hours", "minutes", "seconds"];
  fields.forEach((id) => (document.getElementById(id).value = 0));
  document.getElementById("result").innerHTML = "";
  localStorage.removeItem("timeInputs");
}

function formatDate(date) {
  const day = date.getDate();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const suffix = getDaySuffix(day);
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  return `${day}${suffix} ${month} ${year}, ${hours}:${minutes} ${ampm}`;
}

function getDaySuffix(day) {
  if (day >= 11 && day <= 13) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

function saveInputValues() {
  const ids = ["years", "months", "days", "hours", "minutes", "seconds"];
  const values = {};
  ids.forEach((id) => {
    values[id] = document.getElementById(id).value;
  });
  localStorage.setItem("timeInputs", JSON.stringify(values));
}

function loadInputValues() {
  const saved = localStorage.getItem("timeInputs");
  if (!saved) return;
  const values = JSON.parse(saved);
  Object.keys(values).forEach((id) => {
    const input = document.getElementById(id);
    if (input) input.value = values[id];
  });
}
loadInputValues();

// Dark Mode Toggle
const darkToggle = document.getElementById("darkToggle");
darkToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", darkToggle.checked);
  localStorage.setItem("darkMode", darkToggle.checked);
});

// Restore Dark Mode on Load
window.addEventListener("DOMContentLoaded", () => {
  const darkPref = localStorage.getItem("darkMode") === "true";
  darkToggle.checked = darkPref;
  document.body.classList.toggle("dark-mode", darkPref);
});
