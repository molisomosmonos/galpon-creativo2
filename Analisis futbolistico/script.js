// Fecha objetivo: 1 de enero de 2025
const targetDate = new Date("January 1, 2025 00:00:00").getTime();

// Actualiza el contador cada segundo
const interval = setInterval(function() {
  // Obtén la fecha y hora actuales
  const now = new Date().getTime();

  // Calcula la diferencia entre la fecha objetivo y la fecha actual
  const distance = targetDate - now;

  // Calcula los días, horas, minutos y segundos restantes
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Muestra los resultados en el HTML
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // Cuando la cuenta regresiva llega a cero, muestra el mensaje
  if (distance < 0) {
    clearInterval(interval); // Detiene el contador
    document.getElementById("countdown").style.display = "none";
    document.getElementById("message").classList.remove("hidden");
  }
}, 1000);
