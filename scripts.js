function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');

    sections.forEach(section => {
        section.style.display = 'none';
    });

    document.getElementById(sectionId).style.display = 'block';
}


// Відкриття лабораторної роботи
function openLab(url) {

    // Показуємо HOME одразу
    showSection('home');

    const home = document.getElementById('home');

    // Завантажуємо лабораторію
    home.innerHTML = `
        <iframe
            src="${url}"
            class="lab-frame"
            title="Віртуальна хімічна лабораторія">
        </iframe>
    `;
}


// Обробка натискання на лабораторну
document.addEventListener('DOMContentLoaded', () => {

    showSection('home');

    document.querySelectorAll('.lab-link').forEach(link => {

        link.addEventListener('click', function(event) {

            event.preventDefault();

            openLab(this.href);

        });

    });

});