//TABS
const tabs = document.querySelectorAll('.tabheader__item');
const tabContent = document.querySelectorAll('.tabcontent');
const tabParent = document.querySelector('.tabheader');

function hideTabContent(){
    tabContent.forEach(item =>{
        item.style.display = "none";
    })
    tabs.forEach(item=>{
        item.classList.remove('tabheader__item_active');
    })
}

function showTabContent(i=0){
    tabContent[i].style.display = 'block';
    tabs[i].classList.add('tabheader__item_active');
}


hideTabContent();
showTabContent();

tabParent.addEventListener('click',(event)=>{
    if(event.target = event.target.classList.contains('tabheader__item')){
        tabs.forEach((item,i)=>{
            if(event.target == item){
                hideTabContent();
                showTabContent(i);
            }
        })
    }
})

//MODAL

const button = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalExit = document.querySelector('[data-close]');

button.forEach(item=>{
    item.addEventListener('click',()=>{
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow ='hidden';
    })
})

modalExit.addEventListener('click',()=>{
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow ='';
})
modal.addEventListener('click',(event)=>{
    if(event.target === modal){
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow ='';
    }
})

document.addEventListener('keydown', (event)=>{
    if(event.code === 'Escape'){
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow ='';
    }
})

//SLIDES

const slides = document.querySelectorAll('.offer__slide'),
    previous = document.querySelector('.offer__slide-prev'),
    next = document.querySelector('.offer__slide-next'),
    total = document.querySelector('#total'),
    current = document.querySelector('#current');

let slideIndex = 1;

function showSlides(n){

    if(n>slides.length){
        slideIndex = 1;
    }
    if(n<1){
        slideIndex = slides.length;
    }

    if(slides.length < 10 ){
        total.textContent = `0${slides.length}`;
    }else{
        total.textContent = slides.length;
    }
    slides.forEach(item=> item.style.display ='none');
    slides[slideIndex-1].style.display ='block';

    if(slides.length < 10 ){
        current.textContent = `0${slideIndex}`;
    }else{
        current.textContent = slideIndex;
    }

}
showSlides(slideIndex);

function plusSlide(n){
    showSlides(slideIndex = slideIndex+n)
}

next.addEventListener('click',()=>{plusSlide(1);})

previous.addEventListener('click',()=>{plusSlide(-1);})