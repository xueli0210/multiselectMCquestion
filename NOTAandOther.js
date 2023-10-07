const l12mCheckboxes = document.querySelectorAll('input[name="Q_l12m"]');
const otherCheckbox = document.getElementById('other_checkbox');
const userDetailInput = document.getElementById('user_detail');
// Get references to all the checkboxes except "None of the above"
const checkboxes = document.querySelectorAll('input[name="Q_l12m"]:not(#nota)');
const notaCheckbox = document.getElementById('nota');

// Function to enable or disable the user_detail input based on the other_checkbox state
function toggleUserDetailInput() {
  userDetailInput.disabled = !otherCheckbox.checked;
  // when otherCheckbox gets unchecked, userDetailInput gets wiped out
  if (!otherCheckbox.checked) {
    userDetailInput.value = "";
  }
}

// Function to enable or disable checkboxes based on the "None of the above" checkbox
  function updateCheckboxes() {
    checkboxes.forEach((checkbox) => {
      checkbox.disabled = notaCheckbox.checked;
    });
    if (notaCheckbox.checked) {
    userDetailInput.value = "";
    }
  }

// Function to check if at least one Q_l12m checkbox is checked
function isAtLeastOneL12mChecked() {
  return Array.from(l12mCheckboxes).some((checkbox) => checkbox.checked);
}

// Function to handle form submission
function validateForm(event) {
   if (!isAtLeastOneL12mChecked()) {
    alert("Please select at least one option from 'What did you do in the last 12 months?'");
    event.preventDefault();
  } else if (otherCheckbox.checked && userDetailInput.value.trim() === "") {
    alert("Please provide details in the 'Other (please specify)' field.");
    event.preventDefault();
  } else if (!otherCheckbox.checked && !(userDetailInput.value.trim() === "")) {
    alert("To provide details in the 'Other (please specify)' field you must select it.");
    event.preventDefault();
  }
}

// Add event listeners
otherCheckbox.addEventListener('change', toggleUserDetailInput);
notaCheckbox.addEventListener('change', updateCheckboxes);

// Set initial states
toggleUserDetailInput();
updateCheckboxes();

// Add event listener to the form's submit event
const form = document.querySelector('form');
form.addEventListener('submit', validateForm);