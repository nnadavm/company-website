alert('test')

let mainText = document.getElementsByClassName('hi');

let grow = function() {
    mainText.style.display = 'hidden';
}

mainText.addEventListener('click', grow);

document.getElementsByID('test').innerHTML = 'test'
