document.addEventListener("DOMContentLoaded", () => {
  const passwordDisplay = document.getElementById("password-display");
  const lengthInput = document.getElementById("length");
  const uppercaseCheckbox = document.getElementById("uppercase");
  const numbersCheckbox = document.getElementById("numbers");
  const symbolsCheckbox = document.getElementById("symbols");
  const generateBtn = document.getElementById("generate-btn");
  const copyBtn = document.getElementById("copy-btn");

  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  const generatePassword = () => {
    const length = parseInt(lengthInput.value);
    let charSet = lowercaseChars;
    let password = "";

    if (uppercaseCheckbox.checked) {
      charSet += uppercaseChars;
    }
    if (numbersCheckbox.checked) {
      charSet += numberChars;
    }
    if (symbolsCheckbox.checked) {
      charSet += symbolChars;
    }

    if (charSet === "") {
      alert("Please select at least one character type.");
      return;
    }

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      password += charSet[randomIndex];
    }

    passwordDisplay.value = password;
  };

  const copyPassword = () => {
    if (passwordDisplay.value === "") {
      return;
    }

    passwordDisplay.select();
    document.execCommand("copy");

    copyBtn.textContent = "Copied!";
    setTimeout(() => {
      copyBtn.textContent = "Copy";
    }, 2000);
  };

  generateBtn.addEventListener("click", generatePassword);
  copyBtn.addEventListener("click", copyPassword);

  generatePassword();
});
