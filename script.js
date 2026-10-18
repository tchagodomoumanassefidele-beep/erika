// Navigation mobile, année automatique et formulaire de contact WhatsApp.
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const opened = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(opened));
      toggle.setAttribute("aria-label", opened ? "Fermer le menu" : "Ouvrir le menu");
      toggle.textContent = opened ? "×" : "☰";
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "☰";
    }));
  }

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const service = document.getElementById("service").value;
      const message = document.getElementById("message").value.trim();
      const feedback = document.getElementById("formFeedback");
      if (!name || !phone || !service || !message) {
        feedback.textContent = "Veuillez remplir tous les champs avant de continuer.";
        return;
      }
      const text = `Bonjour ERIKA TECHNOLOGY,%0A%0AJe m'appelle ${encodeURIComponent(name)}.%0ATéléphone : ${encodeURIComponent(phone)}%0AService : ${encodeURIComponent(service)}%0A%0AMon besoin : ${encodeURIComponent(message)}`;
      feedback.textContent = "Ouverture de WhatsApp avec votre message prérempli…";
      window.open(`https://wa.me/22870337119?text=${text}`, "_blank", "noopener,noreferrer");
    });
  }
});