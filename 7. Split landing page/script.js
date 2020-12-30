const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

//When the left side is hovered
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

//When the right side is hovered
right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))