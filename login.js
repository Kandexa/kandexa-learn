document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const message = document.getElementById("message");
  const togglePassword = document.getElementById("togglePassword");

  togglePassword.addEventListener("click", () => {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    togglePassword.textContent = type === "password" ? "👁️" : "🙈";
  });

  loginBtn.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === "" || password === "") {
      showMessage("Lütfen kullanıcı adı ve şifre girin.", "error");
      return;
    }

    const savedUser = localStorage.getItem("kendexaUser");
    const savedPass = localStorage.getItem("kendexaPass");

    if (!savedUser || !savedPass) {
   
      localStorage.setItem("kendexaUser", username);
      localStorage.setItem("kendexaPass", password);
      showMessage("✅ Hesap oluşturuldu! Yönlendiriliyorsunuz...", "success");
      setTimeout(() => window.location.href = "index.html", 1500);
    } else {

      if (username === savedUser && password === savedPass) {
        showMessage("✅ Giriş başarılı! Yönlendiriliyorsunuz...", "success");
        setTimeout(() => window.location.href = "index.html", 1500);
      } else {
        showMessage("❌ Kullanıcı adı veya şifre hatalı!", "error");
      }
    }
  });

  function showMessage(text, type) {
    message.textContent = text;
    message.className = type;
  }
});
