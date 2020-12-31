const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com', config)
    .then(resp => resp.json())
    .then((data) => {
        jokeEl.innerHTML = data.joke
    })
}
$(document).ready(generateJoke)

jokeBtn.addEventListener('click', () => {
    generateJoke()
})