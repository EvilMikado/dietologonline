const burgerToggle = document.querySelector('#burger__toggle');
const burgerLine = document.querySelector('.burger__line')
const menuItem = document.querySelectorAll('.menu__item')
const menu = document.querySelector('.menu__list');

menuItem.forEach(item=>{
  item.addEventListener('click',()=>{
    menu.classList.remove('menu_burger_enabled');
    burgerLine.classList.remove('burger__line_active');
  })
})

burgerToggle.addEventListener('click',()=>{
  burgerLine.classList.toggle('burger__line_active');
  menu.classList.toggle('menu_burger_enabled');

})