// open and close the pushchair
var div = document.getElementById('puschair');
function openBtn() {
    div.style.display = "block";
}
function closeBtn() {
    div.style.display = "none";
}
// open and close the pushchair

// scoll display

const button = document.querySelector('.button');
const element = document.querySelector('#present');
button.addEventListener('click', () => {
    element.scrollIntoView({ behavior: 'smooth' });
});

// scoll display