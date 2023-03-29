// open and close the pushchair
var div = document.getElementById('puschair');
function openBtn() {
    div.style.display = "block";
    document.body.classList.add("fixed");
}
function closeBtn() {
    div.style.display = "none";
    document.body.classList.remove("fixed");
}
// open and close the pushchair

// scoll display

const button = document.querySelector('.button');
const element = document.querySelector('#present');

// Bắt sự kiện click trên button
button.addEventListener('click', () => {
    // Cuộn màn hình tới phần tử
    element.scrollIntoView({ behavior: 'smooth' });
});
// scoll display
