document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("The-Form");
    var button = document.getElementById("Submit");
    
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevents the form from submitting by default
      
      // Perform email and password validation here
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      
      if (email === "" || password === "") {
        // If validation fails, display an error message and do not submit the form
        var container = document.querySelector('.container');
        container.style.backgroundImage = "linear-gradient(to right, red, pink)";
        setTimeout(function() {
          container.style.backgroundImage = "linear-gradient(to right, red, pink";
        }, 2000);
        alert("Invalid email or password. Please try again.");
      } else {
        // If validation succeeds, allow the form to submit and continue to the destination page
        var Left = document.querySelector('.left-part');
        Left.style.backgroundImage = "linear-gradient(to right, green, cyan)";
        setTimeout(function() {
            window.location.href = "Main.html";
        }, 2000);
      }
    });
 
  


  
    document.getElementById("Submit").addEventListener("click", function() {
      var container = document.querySelector('.container');
      var style = getComputedStyle(container, '::before');
      style.backgroundImage = "linear-gradient(to right, green, cyan)";
    });
  });
  
  
function JSfuntion(){
  var sign1 = document.getElementById("loginF");
  var sign2= document.getElementById("create");

  sign1.style.dislay="none";
  sign2.style.display="block";
}


const form = document.querySelector('#Create-form');
const submitButton = document.querySelector('#Submit');

// Add event listener to the submit button
submitButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default form submission
  const fname = document.querySelector('#Fname').value;
  const lname = document.querySelector('#Lname').value;
  const email = document.querySelector('#email').value;
  const username = document.querySelector('#Uname').value;
  const password = document.querySelector('#password').value;
  
  // Create an object with the user's data
  const userData = {
    fname: fname,
    lname: lname,
    email: email,
    username: username,
    password: password
  };
  
  // Store the object in sessionStorage
  sessionStorage.setItem('userData', JSON.stringify(userData));
  
  // Redirect to the login page
  window.location.href = 'index.html';
});
const userData = JSON.parse(sessionStorage.getItem('userData'));

console.log(userData.fname); // outputs the user's first name
const forml = document.querySelector('#The-Form');
const submitButtonL = document.querySelector('#Submit');

// Add event listener to the submit button
submitButtonL.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default form submission
  const username = document.querySelector('#Uname').value;
  const password = document.querySelector('#password').value;
  
  // Retrieve the user's data from sessionStorage
  const userData = JSON.parse(sessionStorage.getItem('userData'));
  const usernameElement = document.querySelector('#username');
usernameElement.textContent = userData.username;
  // Check if the username and password match the user's data
  if (userData.username === username && userData.password === password) {
    // Redirect to the dashboard page
    window.location.href = 'main.html';
  } else {
    // Display an error message
    const errorMessage = document.querySelector('#error-message');
    errorMessage.textContent = 'Invalid username or password';
  }


});


function startquiz(){
  window.location.href="Main.html";
}