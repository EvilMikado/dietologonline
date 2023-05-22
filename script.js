const burgerToggle = document.querySelector('#burger__toggle')
const burgerLine = document.querySelector('.burger__line')
const menuItem = document.querySelectorAll('.menu__item')
const menu = document.querySelector('.menu__list')
const modal = document.querySelector('.modal')
const contactBtn = document.querySelectorAll('.btn')
const overlay = document.querySelector('.overlay')
const phoneInput = document.querySelector('.phone-input')
const modalBtn = document.querySelector('.modal__btn')
const modalForm = document.querySelector('.modal__form')
const modalCloseBtn = document.querySelector('.modal__close-icon')

const closeModal = () =>{
  modal.classList.remove('modal_visible')
  overlay.classList.remove('overlay_visible')
  modalForm.reset();
}

overlay.addEventListener('click', closeModal)
modalBtn.addEventListener('click', closeModal)
modalCloseBtn.addEventListener('click', closeModal)

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

contactBtn.forEach(item=>{
  item.addEventListener('click', ()=>{
    modal.classList.add('modal_visible')
    overlay.classList.add('overlay_visible')
  })
})

phoneInput.addEventListener('focusout',()=>{
  if(phoneInput.value.length < 2)
    phoneInput.value = ''
})

phoneInput.addEventListener('focus', _ => {
  if(!/^\+\d*$/.test(phoneInput.value))
    phoneInput.value = '+';
});

phoneInput.addEventListener('keydown', e => {
  if(!/\d/.test(e.key) || phoneInput.value.length > 11)
    e.preventDefault();
});