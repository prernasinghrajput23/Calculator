document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button');
    const screen = document.querySelector('.calculator-screen');
    let screenValue = '';

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            const value = button.value;

            if (value === 'clear') {
                screenValue = '';
            } else if (value === '=') {
                try {
                    screenValue = eval(screenValue);
                } catch (error) {
                    screenValue = 'Error';
                }
            } else {
                screenValue += value;
            }

            screen.value = screenValue;
        });
    });
});