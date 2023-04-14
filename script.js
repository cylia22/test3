// get the LED option radio buttons
let ledYes = document.getElementById('ledYes');
let ledNo = document.getElementById('ledNo');

// get the LED options fieldset
let ledOptions = document.getElementById('ledOptions');

// add event listeners to the LED option radio buttons
ledYes.addEventListener('change', function() {
  // show the LED options fieldset when "Yes" is selected
  ledOptions.style.display = "block";
});

ledNo.addEventListener('change', function() {
  // hide the LED options fieldset when "No" is selected
  ledOptions.style.display = "none";
});

