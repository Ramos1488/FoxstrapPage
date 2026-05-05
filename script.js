// Функция для создания падающих капель
function createRain() {
    const rainContainer = document.getElementById('rain-container');
    
    if (!rainContainer) return; // Если контейнера нет, ничего не делаем

    function addDrop() {
        const drop = document.createElement('div');
        drop.className = 'drop';
        
        // Рандомная позиция по горизонтали
        drop.style.left = Math.random() * 100 + 'vw';
        
        // Рандомная скорость падения
        const duration = Math.random() * 0.5 + 0.5;
        drop.style.animation = `fall ${duration}s linear forwards`;
        
        // Рандомная прозрачность для глубины
        drop.style.opacity = Math.random() * 0.5;

        rainContainer.appendChild(drop);

        // Удаляем каплю после завершения анимации
        setTimeout(() => {
            drop.remove();
        }, duration * 1000);
    }

    // Создаем капли каждые 30 миллисекунд
    setInterval(addDrop, 30);
}

// Запускаем дождь и инициализируем AOS
document.addEventListener('DOMContentLoaded', () => {
    createRain();

    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 1000, once: true });
    }

    // Логика перевода (уже была в твоем коде)
    const langBtn = document.getElementById('lang-switch');
    let currentLang = 'en';

    langBtn?.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ru' : 'en';
        langBtn.innerText = currentLang === 'en' ? 'RU' : 'EN';
        document.querySelectorAll('[data-lang-' + currentLang + ']').forEach(el => {
            el.innerText = el.getAttribute('data-lang-' + currentLang);
        });
    });
});