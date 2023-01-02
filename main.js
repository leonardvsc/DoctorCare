function onScroll() {
  if (scrollY > 45) {
    barNavigation.classList.add('scroll')
  } else {
    barNavigation.classList.remove('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}


ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1000,
}).reveal(`
#home,
#home .imgHeader,
#home .stats,
#services,
#services header,
#services .card,
#about, 
#about header,
#about .content`)