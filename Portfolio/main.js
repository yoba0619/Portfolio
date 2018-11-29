var menu = document.querySelector('i');
var main = document.querySelector('main');
var drawer = document.querySelector('.nav');
      
menu.addEventListener('click', function(e) {
    drawer.classList.toggle('open');
    e.stopPropagation();
    });
main.addEventListener('click', function() {
    drawer.classList.remove('open');
});