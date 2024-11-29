// Predefined username and password
var validUsername = "admin";
var validPassword = "12345";

// Handle form submission
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Validate credentials
  if (username === validUsername && password === validPassword) {
    window.location.href = "https://example.com"; // Redirect to another page
  } else {
    document.write("Invalid username or password!");
  }
});