    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value
     
let forminput = document.getElementById("inputField")
forminput.addEventListener('blur', function (event) {
  let forminput = document.getElementById("inputField")
  // Regular expression pattern for alphanumeric input
  let formRegex = /^[a-zA-Z0-9]+$/
   // Check if the input value matches the pattern
  if (!formRegex.test(forminput.value)) {
    // Invalid input: display error message
    alert('Submission not received, please use only Letters and Numbers.');
    event.preventDefault;
    forminput.value = " ";
  // Valid input: display confirmation and submit the form
  } else { alert('Submission received') };
  forminput.value = " ";
 
  });
  

     

       