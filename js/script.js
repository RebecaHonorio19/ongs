/* =======================
   Vida Ativa ONG - Script
   ======================= */

/* -------------------------
   MENU MOBILE
-------------------------- */
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

/* -------------------------
   VALIDAÇÃO DE FORMULÁRIO
   (Exigência da escola)
-------------------------- */

const contactForm = document.querySelector('#contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Pega os campos
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');

    // Variável para checar erros
    let errors = [];

    // Nome
    if (name.value.trim().length < 3) {
      errors.push("O nome precisa ter pelo menos 3 caracteres.");
      name.style.border = "2px solid #ff3b3b";
    } else {
      name.style.border = "2px solid #2ecc71";
    }

    // E-mail
    if (!email.value.includes("@") || !email.value.includes(".")) {
      errors.push("Digite um e-mail válido.");
      email.style.border = "2px solid #ff3b3b";
    } else {
      email.style.border = "2px solid #2ecc71";
    }

    // Mensagem
    if (message.value.trim().length < 10) {
      errors.push("A mensagem precisa ter pelo menos 10 caracteres.");
      message.style.border = "2px solid #ff3b3b";
    } else {
      message.style.border = "2px solid #2ecc71";
    }

    // Exibe erros
    const alertBox = document.querySelector("#form-alert");
    alertBox.innerHTML = "";

    if (errors.length > 0) {
      alertBox.style.background = "#ffdddd";
      alertBox.style.border = "1px solid #ff3b3b";
      alertBox.style.padding = "10px";
      alertBox.style.marginTop = "10px";
      alertBox.style.borderRadius = "8px";

      errors.forEach(err => {
        alertBox.innerHTML += `<p style="color:#b30000;">${err}</p>`;
      });

      return;
    }

    // Sucesso
    alertBox.style.background = "#d4ffdd";
    alertBox.style.border = "1px solid #2ecc71";
    alertBox.style.padding = "10px";
    alertBox.style.marginTop = "10px";
    alertBox.style.borderRadius = "8px";
    alertBox.innerHTML = `<p style="color:#0f6d2f;">Mensagem enviada com sucesso!</p>`;

    // Limpa o formulário
    contactForm.reset();
    name.style.border = "1px solid #ccc";
    email.style.border = "1px solid #ccc";
    message.style.border = "1px solid #ccc";
  });
}

/* -------------------------
   MODO ESCURO (Opcional)
-------------------------- */

const darkBtn = do
