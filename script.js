function calculateTime() {
  const years = parseInt(document.getElementById("years").value) || 0;
  const months = parseInt(document.getElementById("months").value) || 0;
  const days = parseInt(document.getElementById("days").value) || 0;
  const hours = parseInt(document.getElementById("hours").value) || 0;
  const minutes = parseInt(document.getElementById("minutes").value) || 0;
  const seconds = parseInt(document.getElementById("seconds").value) || 0;

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
      <strong>Future Time:</strong> ${formatDate(future)}
    `;

  document.getElementById("result").innerHTML = resultHTML;
}

// Helper to format date like "5th May 2025, 4:30 PM"
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
  hours = hours ? hours : 12; // the hour '0' should be '12'

  return `${day}${suffix} ${month} ${year}, ${hours}:${minutes} ${ampm}`;
}

// Helper to add st, nd, rd, th
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
