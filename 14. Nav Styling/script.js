const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

// The curly braces can be eliminated because is an arrow function with only one line of code
toggle.addEventListener('click', () => nav.classList.toggle('active'))