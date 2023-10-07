  // Get references to all the checkboxes except "None of the above"
  const checkboxes = document.querySelectorAll('input[name="Q_l12m"]:not(#nota)');
  const notaCheckbox = document.getElementById('nota');

  // Function to enable or disable checkboxes based on the "None of the above" checkbox
  function updateCheckboxes() {
    checkboxes.forEach((checkbox) => {
      checkbox.disabled = notaCheckbox.checked;
    });
  }
  // Add an event listener to the "None of the above" checkbox
  notaCheckbox.addEventListener('change', updateCheckboxes);

  // Initialize the checkboxes based on the initial state of the "None of the above" checkbox
  updateCheckboxes();
