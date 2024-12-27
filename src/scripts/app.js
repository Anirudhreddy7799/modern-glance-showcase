// app.js

// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
  // Example: Add a simple event listener to a button (if exists)
  const button = document.querySelector('#exampleButton');
  if (button) {
    button.addEventListener('click', () => {
      alert('Button clicked!');
    });
  }

  // Initialize your application here
  console.log('App initialized');
});
