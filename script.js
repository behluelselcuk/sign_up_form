'use strict';

const inputs = document.querySelectorAll('.input-element input');

inputs.forEach(input => {
    input.addEventListener('input', () => {
        const wert = input.value.trim();
        const prevSibling = input.previousElementSibling;

        if (wert === '') {
            prevSibling.classList.remove('filled');
        }
        else {
            prevSibling.classList.add('filled');
        };

    });
});