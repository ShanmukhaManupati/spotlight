let body = document.querySelector('body');
let spotlight = document.querySelector('.Spotlight');

window.onmousemove = function(e){
    spotlight.style.top = (e.clientY - 100)+'px';
    spotlight.style.left = (e.clientX - 100)+'px';

}