function calculateDays() {
  const startInput = document.getElementById("start").value;
  const endInput = document.getElementById("end").value;
  const result = document.getElementById("result");

  if (!startInput || !endInput) {
    result.textContent = "Please select both dates.";
    return;
  }

  const startDate = new Date(startInput);
  const endDate = new Date(endInput);

  const timeDiff = endDate - startDate;

  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  if (daysDiff < 0) {
    result.textContent = "End date must be after start date.";
  } else if (daysDiff === 0) {
    result.textContent = "Both dates are the same.";
  } else {
    result.textContent = `There are ${daysDiff} day(s) between the dates.`;
  }
}
