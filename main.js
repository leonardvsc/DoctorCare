function onScroll() {
  if (scrollY > 45) {
    barNav.classList.add('scroll')
  } else {
    barNav.classList.remove('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}
