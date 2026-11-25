// Menú con fondo oscuro al bajar
window.addEventListener("scroll", () => {
  document.getElementById("cabecera").classList.toggle("con-fondo", scrollY > 50);
});

// Los bloques aparecen al bajar
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((e) => {
    if (e.isIntersecting) e.target.classList.add("visible");
  });
});
document.querySelectorAll(".revelar").forEach((bloque) => observador.observe(bloque));

// Formulario de reserva
const form = document.getElementById("formReserva");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    return;
  }

  const nombre = document.getElementById("nombre").value;
  mensaje.textContent = `¡Gracias, ${nombre}! Tu mesa está reservada.`;
  mensaje.classList.remove("d-none");
  form.reset();
  form.classList.remove("was-validated");
});