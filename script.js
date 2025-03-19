// Инициализация Sal.js
sal({
    threshold: 0.1, // Анимация запускается, когда элемент виден на 10%
    once: true, // Анимация повторяется при каждом скролле
});

const weddingDate = new Date('2025-04-25').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = String(days).padStart(2, '0');
    document.getElementById('hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Обработка формы RSVP
document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Спасибо за ваш ответ! Мы свяжемся с вами.');
});
