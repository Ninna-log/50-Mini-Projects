/*Progress Effect*/

/*First of all, every button (prev and next), with the progress div is saved by their ID
in a variable. And the querySelectorAll saves every circle in a Node list by its .circle class*/

const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1; /*currentActive starts in 1*/

/* For each on-click event in the next button, is triggered
an event that adds a 1 to the currentActive variable that
initialized in 1. Then the update() function is triggered */

next.addEventListener('click', () => { 
    currentActive++                    
    update();
});

/* For each on-click event in the prev button, is triggered
an event that substracts 1 to the currentActive variable that
initialized in 1. Then the update() function is triggered */

prev.addEventListener('click', () => {
    currentActive--
    update();
});

/* When the update() function is triggered, a loop of the circles array is executed evaluating 2 parameters (circle, index)
So, if index is less than currentActive the class .active is added, otherwise the class .active is removed.
Then all the .active are collected, and the .progress div will be styled with a width that will depend on the length of the assets
Enter the length of circles by 100. And if currentActive is strictly equal to 1, the prev button will be disabled; and if,
currentActive is strictly equal to the length of circles, the next button will be disabled; otherwise, if none of the
previous is fulfilled, the next and prev button will not be disabled */

function update() {
    circles.forEach ((circle, index) => {
        if(index < currentActive){
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length -1) / (circles.length -1) * 100 + '%';

    if(currentActive === 1) {
        prev.disabled = true;
    } else if(currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}

