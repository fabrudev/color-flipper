const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const main = document.getElementById('main');
const color = document.getElementById('color');
const btn = document.getElementById('btn');

main.style.backgroundColor = 'orange';

btn.addEventListener('click', () => {
    let newColor = '#';
    for(let i = 0; i < 6; i++) {
        newColor+= colors[getRandomNumber()];
    }
    main.style.backgroundColor = newColor;
    color.innerText = newColor;
})

const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length);
}