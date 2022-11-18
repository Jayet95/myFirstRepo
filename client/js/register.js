const registerFormEl = document.querySelector("[data-register-form]");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const emailInput = document.getElementById("email");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const ageInput = document.getElementById("age");
const countryInput = document.getElementById("country");
const cityInput = document.getElementById("city");
const streetInput = document.getElementById("street");
const zipCodeInput = document.getElementById("zipCode");
const registerFormMessageEl = document.querySelector("[data-register-form-message]");




registerFormEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  const requestBody = {
    username: usernameInput.value,
    password: passwordInput.value,
    email: emailInput.value,
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    age: ageInput.value,
    country: countryInput.value,
    city: cityInput.value,
    street: streetInput.value,
    zipCode: zipCodeInput.value,
  };
  const res = await fetch("http://localhost:3002/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });
  const data = await res.json();

  if (data.error) {
    registerFormMessageEl.innerHTML = data.error;
    registerFormMessageEl.className = "error-msg";
  } else {
    registerFormMessageEl.innerHTML = "Register successfully";
    registerFormMessageEl.className = "success-msg";
    localStorage.setItem("registertoken", data.token);
  }
});