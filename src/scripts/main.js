// анимация
const callback = (entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('animContent');
        observer.unobserve(entry.target);
    }
});
};

const observer = new IntersectionObserver(callback);

document.querySelectorAll('.main__content').forEach(formLine => {
    observer.observe(formLine);
    });


// скролл блоками
let currentSection = 0;
const sections = document.querySelectorAll('.contentScroll');

// Функция для прокрутки к следующему блоку
function scrollToSection(index) {
    if (index >= 0 && index < sections.length) {
        sections[index].scrollIntoView({ behavior: 'smooth' });
        currentSection = index;
    }
}

// Обработка события колесика мыши
window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        scrollToSection(currentSection + 1);
    } else {
        scrollToSection(currentSection - 1);
    }
});

// Обработка нажатия клавиш
window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
        scrollToSection(currentSection + 1);
    } else if (event.key === 'ArrowUp') {
        scrollToSection(currentSection - 1);
    }
});

