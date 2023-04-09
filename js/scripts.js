// Custom Scripts
// Custom scripts
$(document).ready(function () {
	$('a[href^="#"]').click(function () {
		var target = $(this).attr('href')
		$('html, body').animate({
			scrollTop: $(target).offset().top - 83
		});
	})
})
// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  menu.addEventListener('click', () => {
    menu.classList.remove('active')
    burger.classList.remove('active-burger')
    body.classList.remove('locked')
  })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const navbar = document.querySelector('.navbar')
  var elem = document.querySelector('.home__content')
  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1

  
  if (window.scrollY >= breakpoint) {
    navbar.classList.add('fixed__nav')
    elem.style.cssText = "margin-top: 83px"
  } else {
    navbar.classList.remove('fixed__nav')
    elem.removeAttribute("style")
  }
  
}
function marginHome() {
  
}
function breakpointMobile() {
  let scrollWidth = Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth,
    document.body.offsetWidth, document.documentElement.offsetWidth,
    document.body.clientWidth, document.documentElement.clientWidth,
  )

  if (scrollWidth >= 993 ) {
    window.addEventListener('scroll', marginHome)
    window.addEventListener('scroll', fixedNav)
  }
}
breakpointMobile()


