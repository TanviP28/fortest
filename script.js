// Move the validateForm function outside of the event listener scope
// for fetching from Web page
function getValueFromElementId(id) {
  return document.getElementById(id).value;
}

function calculateTotalMarks() {
  const phyMarks = parseInt(getValueFromElementId("student_phy")) || 0;
  const chemMarks = parseInt(getValueFromElementId("student_chem")) || 0;
  const mathsMarks = parseInt(getValueFromElementId("student_maths")) || 0;
  const cMarks = parseInt(getValueFromElementId("student_c")) || 0;
  const bsMarks = parseInt(getValueFromElementId("student_bs")) || 0;

  const totalMarks = phyMarks + chemMarks + mathsMarks + cMarks + bsMarks;
  return totalMarks;
}

function validateForm() {
  let errors = [];
  let allValid = true; // Flag to check if all validations pass

  if (!validateName(getValueFromElementId("student_name"))) {
    errors.push("Please enter a valid full name.");
    allValid = false;
  }

  if (!validateId(getValueFromElementId("student_id"))) {
    errors.push("Please enter a 6-digit student ID.");
    allValid = false;
  }

  if (!validateDate(getValueFromElementId("student_dob"))) {
    errors.push("Please enter a valid date of birth in YYYY-MM-DD format.");
    allValid = false;
  }

  if (!validateMarks(getValueFromElementId("student_phy"))) {
    errors.push("Please enter valid marks for Physics.");
    allValid = false;
  }

  if (!validateMarks(getValueFromElementId("student_chem"))) {
    errors.push("Please enter valid marks for Chemistry.");
    allValid = false;
  }

  if (!validateMarks(getValueFromElementId("student_maths"))) {
    errors.push("Please enter valid marks for Maths.");
    allValid = false;
  }

  if (!validateMarks(getValueFromElementId("student_c"))) {
    errors.push("Please enter valid marks for C Programming.");
    allValid = false;
  }

  if (!validateMarks(getValueFromElementId("student_bs"))) {
    errors.push("Please enter valid marks for Business Studies.");
    allValid = false;
  }

if (allValid) {
    const totalMarks = calculateTotalMarks();
    alert(`Total Marks: ${totalMarks}`);
    
    // Check if the form element is found
    const studentForm = document.getElementById('studentForm');
    if (studentForm) {
        // Attempt to submit the form
        studentForm.submit();
    } else {
        // Log an error if the form element is not found
        console.error("Form element not found!");
    }
} else {
    alert(errors.join("\n"));
}

  return allValid;
}

const NAME_REGEX = /^[A-Za-z\s]+$/;
function validateName(name) {
  return NAME_REGEX.test(name);
}

const ID_REGEX = /^\d{6}$/;
function validateId(id) {
  return ID_REGEX.test(id);
}

const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;
function validateDate(date) {
  return DATE_REGEX.test(date);
}

const MARKS_REGEX = /^(?:\d|[1-9]\d)$/;
function validateMarks(marks) {
  return MARKS_REGEX.test(marks);
  
}

// The rest of your code for DOM manipulation and event handling