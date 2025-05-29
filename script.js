const box = document.getElementById("gift-box");
const message = document.getElementById("message");
const letter = document.getElementById("letter-modern");
const photos = document.querySelectorAll(".photo");

const modal = document.getElementById("photo-modal");
const modalImg = document.getElementById("modal-img");
const modalPhrase = document.getElementById("modal-phrase");
const modalClose = document.getElementById("modal-close");

let opened = false;

box.addEventListener("click", () => {
  if (opened) return;
  opened = true;

  // Detener animación del regalo
  box.classList.remove("shake", "sway");

  // Mostrar mensaje
  message.classList.remove("hidden");

  // Cambiar emoji del regalo a flor
  box.textContent = "🌻";

  // Lanzar confeti
  confetti({
    particleCount: 200,
    spread: 80,
    origin: { y: 0.6 },
  });

  // Mostrar carta con animación
  setTimeout(() => {
    letter.classList.remove("hidden");
    letter.classList.add("show");
  }, 2000);
});

// Abrir modal al click en foto
photos.forEach(photo => {
  photo.addEventListener("click", () => {
    modalImg.src = photo.src;
    modalPhrase.textContent = photo.dataset.phrase || "";
    modal.classList.add("show");
    // Evitar scroll al fondo cuando modal abierto
    document.body.style.overflow = 'hidden';
  });
});

// Cerrar modal
modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

function closeModal() {
  modal.classList.remove("show");
  modalImg.src = "";
  modalPhrase.textContent = "";
  document.body.style.overflow = '';
}
