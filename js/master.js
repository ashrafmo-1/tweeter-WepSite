// start show and hide inbox message
const icon = document.querySelector('.icon');
const inBox = document.querySelector('.inBox');
icon.addEventListener('click', () => {
    inBox.classList.toggle('active')
})