/***********************Pop-up form JS********************/
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");

// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});



// Pop-up form validation  
function validate_1() {
  let isValid = true;

  // Clear previous error messages
  document.getElementById('error_1').innerText = '';
  document.getElementById('error_2').innerText = '';

  // Validate email
  const email = document.getElementById('email').value;

    if (email === "") {
      document.getElementById("error_1").innerHTML = "***Email ID is required.";
      document.getElementById("error_1").style.color = "red";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      document.getElementById("error_1").innerHTML = "***Invalid email format.";
      document.getElementById("error_1").style.color = "red";
      isValid = false;
    } else {
      document.getElementById("error4").innerHTML = "";
  }

  // Validate password
  const password = document.getElementById('password').value;

     // Validate Password
     if (password === "") {
      document.getElementById("error_2").innerHTML = "***Password is required.";
      document.getElementById("error_2").style.color = "red";
      isValid = false;
  } else if (password.length < 6) {
      document.getElementById("error_2").innerHTML = "***Password must be at least 6 characters long.";
      document.getElementById("error_2").style.color = "red";
      isValid = false;
  } else if (!/[A-Z]/.test(password)) {
      document.getElementById("error_2").innerHTML = "***Password must contain at least one capital letter.";
      document.getElementById("error_2").style.color = "red";
      isValid = false;
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      document.getElementById("error_2").innerHTML = "***Password must contain at least one special character.";
      document.getElementById("error_2").style.color = "red";
      isValid = false;
  } else {
      document.getElementById("error_2").innerHTML = "";
  }

  return isValid;
}



function validate_2() {
  let isValid = true;

  // Clear previous error messages
  document.getElementById('error_3').innerText = '';
  document.getElementById('error_4').innerText = '';

  // Validate email
  const email1 = document.getElementById('email_2').value;

  if (email1 === "") {
    document.getElementById("error_3").innerHTML = "***Email ID is required.";
    document.getElementById("error_3").style.color = "red";
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email1)) {
    document.getElementById("error_3").innerHTML = "***Invalid email format.";
    document.getElementById("error_3").style.color = "red";
    isValid = false;
  } else {
    document.getElementById("error_3").innerHTML = "";
  }

  // Validate password
  const password1 = document.getElementById('password_2').value;

  if (password1 === "") {
    document.getElementById("error_4").innerHTML = "***Password is required.";
    document.getElementById("error_4").style.color = "red";
    isValid = false;
  } else if (password1.length < 6) {
    document.getElementById("error_4").innerHTML = "***Password must be at least 6 characters long.";
    document.getElementById("error_4").style.color = "red";
    isValid = false;
  } else if (!/[A-Z]/.test(password1)) {
    document.getElementById("error_4").innerHTML = "***Password must contain at least one capital letter.";
    document.getElementById("error_4").style.color = "red";
    isValid = false;
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password1)) {
    document.getElementById("error_4").innerHTML = "***Password must contain at least one special character.";
    document.getElementById("error_4").style.color = "red";
    isValid = false;
  } else {
    document.getElementById("error_4").innerHTML = "";
  }

  return isValid;
}






/**********************Appoinment form**********************/ 
function validate() {
    // Clear previous error messages
    document.getElementById("error1").innerHTML = "";
    document.getElementById("error2").innerHTML = "";
    document.getElementById("error3").innerHTML = "";
    document.getElementById("error4").innerHTML = "";
    document.getElementById("error5").innerHTML = "";

    // Get the values of the form fields
    var name = document.getElementById("Name").value;
    var company = document.getElementById("Co_name").value;
    var phone = document.getElementById("phone_no").value;
    var email = document.getElementById("email_id").value;
    var address = document.getElementById("Address").value;

    // Initialize a variable to track validation status
    var isValid = true;

    // Name validation
    if (name.trim() === "") {
      document.getElementById("error1").innerHTML = "**Name is required.";
      isValid = false;
    }

    // Company validation
    if (company.trim() === "") {
      document.getElementById("error2").innerHTML = "**Company name is required.";
      isValid = false;
    }

    // Phone validation
    if (phone.trim() === "") {
      document.getElementById("error3").innerHTML = "**Phone number is required.";
      isValid = false;
    } else if (!/^\d+$/.test(phone)) {
      document.getElementById("error3").innerHTML = "Phone number must be digits only.";
      isValid = false;
    }

    // Email validation
    if (email.trim() === "") {
      document.getElementById("error4").innerHTML = "**Email address is required.";
      isValid = false;
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      document.getElementById("error4").innerHTML = "Invalid email address format.";
      isValid = false;
    }

    // Address validation
    if (address.trim() === "") {
      document.getElementById("error5").innerHTML = "**Address is required.";
      isValid = false;
    }

    // Return false to prevent form submission if validation fails
    return isValid;
}