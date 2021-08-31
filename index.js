const closeBtn = document.querySelector('.close')
const menu = document.querySelector('.menu')
const hamburgerBtn = document.querySelector('.hamburger')

hamburgerBtn.addEventListener('click', () => {
  menu.classList.toggle('menu-hide')
  hamburgerBtn.classList.toggle('hamburger-hide')
})

closeBtn.addEventListener('click', () => {
  menu.classList.toggle('menu-hide')
  hamburgerBtn.classList.toggle('hamburger-hide')
})
