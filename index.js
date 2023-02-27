const colors = ['#A30B37', '#C6C8EE', 'rgb(55, 255, 139)', 'lightsalmon', 'hsl(222, 33%, 66%)'];

const color = document.getElementById('color');
const btn = document.getElementById('btn');
const main = document.getElementById('main');

main.style.backgroundColor = 'orange';

btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * colors.length)
    main.style.backgroundColor = colors[random];
    color.innerText = colors[random];
})

const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length);
}
