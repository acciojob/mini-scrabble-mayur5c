//your code here
// Get a reference to the textbox and the h3 element
const textbox = document.getElementById('evaluatedText');
const letterCount = document.getElementById('letterCount');

// Add an event listener to the textbox that updates the letter count when the text is changed
textbox.addEventListener('input', function() {
  // Get the current text in the textbox
  const text = textbox.value;

  // Update the letter count in the h3 element
  letterCount.innerHTML = text.length;
});
