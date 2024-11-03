document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formularz");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const imie = form.querySelector("input[name=imie]");
    const email = form.querySelector("input[name=email]");
    const problem = form.querySelector("textarea");

    if (imie.value === "") {
      alert("Podaj swoje imię.");
      return;
    }

    if (email.value === "") {
      alert("Podaj swój e-mail.");
      return;
    }

    if (!validateEmail(email.value)) {
      alert("Podaj prawidłowy adres e-mail.");
      return;
    }

    if (problem.value === "") {
      alert("Napisz coś!");
      return;
    }

    alert("Formularz został przesłany!");
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});
