document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');

        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Закрываем все открытые элементы
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion-content').style.maxHeight = '0';
                    otherItem.querySelector('.icon').textContent = '+';
                }
            });

            // Открываем/закрываем текущий элемент
            if (!isActive) {
                item.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px'; // Динамическая высота
                header.querySelector('.icon').textContent = '×';
            } else {
                item.classList.remove('active');
                content.style.maxHeight = '0';
                header.querySelector('.icon').textContent = '+';
            }
        });
    });
});