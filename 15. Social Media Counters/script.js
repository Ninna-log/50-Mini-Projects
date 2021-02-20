const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'
    //parseInt changes Strings into numbers
    const updateCounter = () => {
        const target = parseInt(counter.getAttribute('data-target'))
        const c = +counter.innerText

        const increment = target / 800

        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        }
    }

    updateCounter()
})