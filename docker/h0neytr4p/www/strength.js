document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("passwordInput");
    const strengthBar = document.getElementById("strengthBar").firstElementChild;
    const feedback = document.getElementById("feedback");
  
    passwordInput.addEventListener("input", function () {
      const val = passwordInput.value;
      const score = calculateStrength(val);
      strengthBar.style.width = (score * 25) + "%";
  
      let msg = "";
      let color = "";
      switch (score) {
        case 0:
          msg = "Sehr schwach";
          color = "red";
          break;
        case 1:
          msg = "Schwach";
          color = "orangered";
          break;
        case 2:
          msg = "Okay";
          color = "orange";
          break;
        case 3:
          msg = "Gut";
          color = "yellowgreen";
          break;
        case 4:
          msg = "Sehr stark";
          color = "green";
          break;
      }
  
      feedback.textContent = msg;
      strengthBar.style.backgroundColor = color;
    });
  
    function calculateStrength(password) {
      let score = 0;
      if (password.length > 5) score++;
      if (password.length > 8) score++;
      if (/[A-Z]/.test(password)) score++;
      if (/\d/.test(password)) score++;
      if (/[^A-Za-z0-9]/.test(password)) score++;
      return Math.min(score, 4);
    }
  });
  