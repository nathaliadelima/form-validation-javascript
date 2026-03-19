function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Todos os campos são obrigatórios");
    return false;
  }

  if (name.length < 3 || name.length > 50) {
    alert("O nome deve ter entre 3 e 50 caracteres");
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    alert("Por favor, insira um e-mail válido");
    return false;
  }

  return true;
}

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    if (!validateForm()) {
      event.preventDefault();
    } else {
      alert("Formulário validado");
    }
  });
