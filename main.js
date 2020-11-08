'use strict'; 
// ㄴ 이게 뭔뜻이지?


// Make navbar transparent when it is on the top
const navbar =document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
// ()괄호가 비어있으면 아무 인자도 안받고 실행하는것
    // console.log(window.scrollY);
    // console.log(`navbarHeight ${navbarHeight}`);
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
    // console.log(event.target.dataset.link);

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


// Make home slowly fade to transparent as the window scroll down
const home = document.querySelector('.home__container');
const homeHeight =home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity=(1- window.scrollY/homeHeight)
});

// 내가 만든거
// const arrowBtn = document.querySelector('.arrow-up');
// window.addEventListener('scroll', ()=>{
//     if(window.scrollY > homeHeight){
//         arrowBtn.style.display = 'flex'
//     } else {
//         arrowBtn.style.display = 'none'
//     }
// })

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
    // console.log(filter);
    if(filter==null){
        return;
    }

    projectContainer.classList.add('anime-out');

    // 같은거 1

    setTimeout(() => {
        projects.forEach( (project)=>{
            // console.log(project);
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
        // console.log(project);
    }
    // 같은거 3
    let project;
    for(let i=0; i<projects.length; i++){
        project =projects[i];
        // console.log(project);
    }
})



function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}

// var dbd = document.querySelectorAll('.category__btn');
// for(var i in dbd){
//     console.log(dbd[i])
//     var b = dbd[i];
//     b.addEventListener('click', ()=>{
//         console.log(b.dataset.filter);
//     })
// }
