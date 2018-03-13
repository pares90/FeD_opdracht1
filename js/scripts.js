
var button1 = document.querySelector('.button1');
var button2 = document.querySelector('.button2');
var sectionliked1 = document.querySelector('.section');


function eersteFunctie(){
  button1.classList.toggle('buttonclicked');
  sectionliked.classList.toggle('sectionliked');
}

function tweedeFunctie(){
  button2.classList.toggle('buttonclicked');
  sectionliked.classList.toggle('sectionliked');
}

button1.addEventListener('click', eersteFunctie);
button2.addEventListener('click', tweedeFunctie);
