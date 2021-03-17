const navMenu = document.getElementById('nav-menu')
const toggleMenu = document.getElementById('nav-toggle')
const closeMenu = document.getElementById('nav-close')

// Display and Close menu
toggleMenu.addEventListener('click', () => {
 navMenu.classList.toggle('show')
})
closeMenu.addEventListener('click', () => {
 navMenu.classList.remove('show')
})


// Removing toggled menu on link clicked

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
 navMenu.classList.remove('show')
}

navLink.forEach(nLink => nLink.addEventListener('click', linkAction));

// Scroll section on active link

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
 const scrollY = window.pageYOffset

 sections.forEach(current => {
  const sectionHeight = current.offsetHeight
  const sectionTop = current.offsetTop - 50
  sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
   document.querySelector('.nav_menu a[href*='+ sectionId + ']').classList.add('active')
  }else{
    document.querySelector('.nav_menu a[href*='+ sectionId + ']').classList.remove('active')
  }
 })
}


// Footer Autodate

// Footer Auto Date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
