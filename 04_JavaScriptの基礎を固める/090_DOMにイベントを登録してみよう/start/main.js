const btn = document.querySelector('#btn');
const h1 = document.querySelector("h1");
const hello = function() {
    this.style.color= 'red';
    alert('hello');
}

const changeColor = function() {
    this.style.color = 'red';
}

const changeBackgroundColor = function() {
    this.style.backgroundColor = 'green'
}
btn.addEventListener('click', hello);
// // btn.addEventListener('mouseenter', hello);
// // btn.removeEventListener('click', hello);
btn.addEventListener('click', changeColor);
btn.addEventListener('click', changeBackgroundColor);


// other ways to manuplate DOM (not recommended?)
btn.onclick = changeColor; 
btn.onclick = changeBackgroundColor; // only this works


