let mainText = document.getElementById("mainTXT");
let button = document.getElementById("test4");
const container = document.querySelectorAll('.container');

function changeText(event) {
 event.target.innerHTML = 'test';

}

function green(event) {
    event.target.style.backgroundColor = 'green';
    console.log('test');
}

function blue(event) {
    event.target.style.backgroundColor = 'blue';
}

mainText.addEventListener('click', changeText);
button.addEventListener('click', green);
for (let i = 0; i < container.length; i++){
container[i].addEventListener('mouseover', blue);
}
