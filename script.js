var dragon = document.querySelector('.pet__color')
var love = 70


displayLove()

setInterval(function () {
    love = love - 0.1
    displayLove()
}, 50);

function displayLove() {
    dragon.style.setProperty('--fill', (100 - love) + '%');
}

function giveLove() {
    love = love + 10
    displayLove()
}

