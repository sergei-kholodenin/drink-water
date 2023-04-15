const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById(".percentage");
const remained = document.getElementById(".remained");

smallCups.forEach((cup, i) => {
    cup.addEventListener('click', () => highLightCups(i))
});

function highLightCups(i) {
    if (smallCups[i].classList.contains('full') && !smallCups[i].nextElementSibling.classList.contains('full')) {
        i--;
    }

    smallCups.forEach((cup, ind) => {
        if (ind <= i) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })
}