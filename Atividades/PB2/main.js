/*  abrir menu lateral */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* selecionar opções menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* CARROSEL PRODUTOS*/
var sliderElement = document.getElementById('my-keen-slider')
var interval = 0
function autoplay(run) {
  clearInterval(interval)
  interval = setInterval(() => {
    if (run && slider) {
      slider.next()
    }
  }, 2000)
}

var slider = new KeenSlider(sliderElement, {
  loop: true,
  duration: 1000,
  dragStart: () => {
    autoplay(false)
  },
  dragEnd: () => {
    autoplay(true)
  }
})

sliderElement.addEventListener('mouseover', () => {
  autoplay(false)
})
sliderElement.addEventListener('mouseout', () => {
  autoplay(true)
})
autoplay(true)

var slider = new KeenSlider('#my-keen-slider', {
  loop: true,
  rtl: true,
  slidesPerView: 3,
  spacing: 10
})

/* -- CARROSEL FEEDBACKS E PARCEIROS--*/

var myIndex = 0
carousel()

function carousel() {
  var i
  var x = document.getElementsByClassName('mySlides')
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none'
  }
  myIndex++
  if (myIndex > x.length) {
    myIndex = 1
  }
  x[myIndex - 1].style.display = 'block'
  setTimeout(carousel, 2000)
}
