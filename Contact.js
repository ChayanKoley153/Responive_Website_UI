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