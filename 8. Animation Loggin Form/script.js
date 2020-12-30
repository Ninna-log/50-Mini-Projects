// NodeList
const labels = document.querySelectorAll('.form-control label')

//Since it's a NodeList we can use a forEach
labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay: ${idx * 80}ms">${letter}</span>`)
        .join('')
});