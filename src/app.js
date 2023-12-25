import * as FormField from './js/classes/form-field.js';
import * as Button from './js/classes/button.js';
import * as Form from './js/classes/form.js';
import {vehicles} from './api-mock/mock-data.js';


console.log("Running front app");


const header = document.querySelector("#header");


header.appendChild(Form.headerForm.render());
const formHeader = document.querySelector("#form-1");

formHeader.appendChild(FormField.headerField.render());

formHeader.appendChild(Button.headerBtn.render());

// 

const box1 = document.querySelector('.longUp');

let item = "cars";


const firstUl = document.createElement('ul');
firstUl.classList.add('list-1');

const firstLiArray = vehicles.types.map((currentValue) => {
    const my_li = document.createElement('li');
    
    my_li.innerText += currentValue;
    my_li.addEventListener('click', function() {
              item = currentValue.toLowerCase();

                while (secondUl.firstChild) {
                  secondUl.removeChild(secondUl.firstChild);
                }

                 // Crear nueva lista basada en el nuevo item
                vehicles[item].types.forEach((type) => {
                   const type_li = document.createElement("li");
                   type_li.innerText = type;
                   secondUl.appendChild(type_li);
                });
    });

    return my_li;
 }
);

console.log("aqui", firstLiArray)

firstLiArray.forEach((li) => {
    firstUl.appendChild(li);
});


box1.appendChild(firstUl);

// 

const verticalLine1 = document.createElement('hr');
verticalLine1.classList.add("firstLine");

box1.appendChild(verticalLine1)

// 

const secondUl = document.createElement("ul");
secondUl.classList.add("list-2");

const secondLiArray = vehicles[item].types.map((currentValue) => {
  const my_li = document.createElement("li");

  my_li.innerText += currentValue;

  return my_li;
});

secondLiArray.forEach((li) => {
  secondUl.appendChild(li);
});

box1.appendChild(secondUl);


