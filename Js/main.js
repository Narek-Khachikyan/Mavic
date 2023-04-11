tl = gsap.timeline();

  tl.from(".top__title", { y: -50,opacity:0,duration:1.5})
  gsap.from(".top__text", { y: 50,opacity:0,duration:1.5})
  gsap.from(".top__social-list",{ y: 50,opacity:0,duration:1.5})
  gsap.from(".title",{ x: -50,opacity:0,duration:1.5})

AOS.init();
$(".questions__item-title").on('click',function(){
  $(".questions__item").removeClass("questions__item--active")
  $(this).parent().addClass("questions__item--active")
})

const burger = document.querySelector(".menu__btn");
const navMenu = document.querySelector('.menu__list');
const bodyes = document.querySelector('body')

burger.addEventListener("click",() =>{
  burger.classList.toggle("active");
  navMenu.classList.toggle("active");
  bodyes.classList.toggle("lock");

})


const burgerMenu = document.querySelector('.menu__list');
const menuItems = burgerMenu.querySelectorAll('a');

menuItems.forEach((item) => {
  item.addEventListener('click', (event) => {

    burgerMenu.classList.remove('active');
    burger.classList.remove('active');

    const target = document.querySelector(event.target.hash);

    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
