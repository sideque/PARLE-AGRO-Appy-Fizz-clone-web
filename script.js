let elem = document.getElementById('rotate');
window.addEventListener('scroll',() => {
    let scrollposition = window.scrollY;
    let rotate = scrollposition *0.35;
    elem.style.transform = `rotate(${rotate}deg)`;
})