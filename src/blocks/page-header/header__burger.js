let header__burger = document.querySelector('.header__burger');
let header__push = document.querySelector('.header__push');

header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    header__push.classList.toggle('active');
}
