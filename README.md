# Time Forward Calculator

🕒 A simple web-based time calculator that lets you input a number of years, months, days, hours, minutes, and seconds, and calculates the future time based on the current time. It also provides a live current time display, and you can reset the fields anytime!

---

## Features

- **Calculate Future Time**: Enter years, months, days, hours, minutes, and seconds to get the future time.
- **Live Current Time**: Displays the current time, updated every second.
- **Reset Button**: Clears all inputs and the result.
- **Negative Value Prevention**: Ensures that users can't enter negative values for time units.
- **Simple and clean UI**: Minimalistic design, ensuring an intuitive user experience.

---

## Demo

You can try out the Time Forward Calculator live by visiting [Time Forward Calculator Demo](https://example.com).

---

## Prerequisites

You don't need any special tools to use this project — all you need is a modern web browser.

- HTML
- CSS
- JavaScript

No external libraries are required!

---

## How It Works

1. **Input Time**: Enter values for years, months, days, hours, minutes, and seconds.
2. **Calculate Future Time**: Press the "Calculate Future Time" button, and the future time will be displayed.
3. **Live Time**: The current time will be shown in real-time, updated every second.
4. **Reset**: Press the "Reset" button to clear all inputs and results.

---

## Code Explanation

### `index.html`
- The HTML structure of the page, including the form fields for time input, a "Calculate" button, and the "Reset" button.
- Displays the current and future time results.

### `style.css`
- Contains the CSS styles that make the page look clean and visually appealing, with modern design elements like flexbox, rounded borders, and shadow effects.

### `script.js`
- Handles the logic for calculating the future time based on user input.
- Includes helper functions to format the time and date, add time suffixes (e.g., "st", "nd", "rd", "th"), and prevent negative inputs.
- Updates the live current time every second.
- Includes the reset functionality to clear the input fields and result.

---

## Features to Add in the Future

- **Timezone Support**: Allow users to choose their timezone for calculating the future time.
- **Date Picker**: Let users choose the start date instead of using the current time.
- **Mobile Responsive Design**: Improve the layout for mobile devices to enhance user experience.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
