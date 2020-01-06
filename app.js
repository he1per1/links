const menu = document.querySelectorAll('.menu li')

menu.forEach(item => {
  item.addEventListener('click', () => {
    const block = document.querySelector(`.${item.dataset.id}`)
    window.scrollTo({ top: block.offsetTop - 60, behavior: 'smooth' })
  })
})
