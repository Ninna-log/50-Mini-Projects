/*Expanding Effect*/

/*The purpose is to change every panel with the class="panel" to 
the class="panel active" in every click event, so the panel will
have all the properties set in CSS that allows it to expand; and then
the other panels should remain as no-active*/

/*It's better to use Jquery selector because it allows us to select 
anything we want. And by using 'All' jQuery put the panels into a 
Node list, which is similar to an array, and we can see it by
console.log those panels*/

const panels = document.querySelectorAll('.panel');

/*Here the forEach perfoms like a for loop in panels array.
Then for every panel where is a click, it'll a click listener which will
add the active class given in the CSS, and then will remove the active classes
of the other panels*/

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});

/*Just because the other classes are not retracting*/
/*Removing class="active"*/
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active'); 
    });
};