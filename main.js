'use strict'; 
// ㄴ 이게 뭔뜻이지?


// Make navbar transparent when it is on the top
const navbar =document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
// ()괄호가 비어있으면 아무 인자도 안받고 실행하는것
    console.log(window.scrollY);
    console.log(`navbarHeight ${navbarHeight}`);
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
})