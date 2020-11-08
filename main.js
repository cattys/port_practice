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

// navbar.addEventListener('click', ()=>{
//     window.scrollTo(0, navbarHeight);
// })

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    // console.log(event.target);
    // <>태그 element 출력
    // console.log(event.target.dataset);
    console.log(event.target.dataset.link);

    const target = event.target;
    // ㄴ 태그 그자체
    const link = target.dataset.link;
    if(link==null){
        return;
    }
    // const scrollTo = document.querySelector(link);
    // scrollTo.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    scrollIntoView(link);
})


// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', ()=>{
   scrollIntoView('#contact')
})

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}