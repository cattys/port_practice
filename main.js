'use strict'; 
// ㄴ 이게 뭔뜻이지?


// Make navbar transparent when it is on the top
const navbar =document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
// ()괄호가 비어있으면 아무 인자도 안받고 실행하는것
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
})



// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
console.log(navbarMenu); // >> ul 태그 자체

navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    // ㄴ li 태그 그자체
    const link = target.dataset.link;
    //<li data-link="#아이디명">으로 만들어져있음
    if(link==null){
        return;
    }
    navbarMenu.classList.remove('open');
    scrollIntoView(link);
})

// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', ()=>{
   scrollIntoView('#contact')
})

// 모바일 화면일때 navbar 햄버거 버튼 토글
// Navbar toggle button for small screen {}
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', ()=>{
    navbarMenu.classList.toggle('open');
})


// Make home slowly fade to transparent as the window scroll down
const home = document.querySelector('.home__container');
const homeHeight =home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity=(1- window.scrollY/homeHeight)
});

// Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', ()=>{
    if(  window.scrollY> homeHeight/2){
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
})

/* Handle click on "arrow up" button */
arrowUp.addEventListener('click', ()=>{
   scrollIntoView('#home');
})

// Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (e)=>{
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    // e.target = 클릭한 태그 자체
    // console.log(filter);
    if(filter==null){
        return;
    }

    // Remove selection from the previous item and select the new one
    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
    // BUTTON을 소문자로 쓰면 안된다
    target.classList.add('selected');

    projectContainer.classList.add('anime-out');

    // 같은거 1

    // 처음에 투명한 효과 주려고 setTimeOut 실행
    setTimeout(() => {
        projects.forEach( (project)=>{
            console.log(project.dataset.type);
            if(filter ==='*' || filter === project.dataset.type){
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        })
        projectContainer.classList.remove('anime-out');
    }, 300);

    
    // 같은거 2
    for(let project of projects){
    }
    // 같은거 3
    let project;
    for(let i=0; i<projects.length; i++){
        project =projects[i];
    }
})

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}
