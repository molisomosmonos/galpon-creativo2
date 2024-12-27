// Cambiar la fecha de destino para que sea más cercana (10 segundos a partir de ahora)
const targetDate = new Date().getTime() + 10000; // 10 segundos desde ahora

// Función para actualizar la cuenta regresiva
function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft <= 0) {
    document.getElementById('countdown').style.display = 'none';
    document.getElementById('message').classList.remove('hidden');
  } else {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }
}

// Llamar a la función cada segundo
setInterval(updateCountdown, 1000);
