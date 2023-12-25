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

// Lists

//#region 

const box1 = document.querySelector('.longUp');

let item = "cars";
let item2 = "bmw";


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

                vehicles[item].types.forEach((type) => {
                   const type_li = document.createElement("li");
                   type_li.innerText = type;
                   secondUl.appendChild(type_li);
                });
    });

    return my_li;
 }
);


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

 my_li.addEventListener("click", function () {
   // Cambiar el valor de item2 dependiendo del tipo de vehículo seleccionado
   switch (currentValue.toLowerCase()) {
     case "bmw":
       item2 = "bmw";
       break;
     case "ferrari":
       item2 = "ferrari";
       break;
     case "alfa romeo":
       item2 = "alfaRomeo";
       break;
     case "guzzi":
       item2 = "guzzi";
       break;
     case "ducati":
       item2 = "ducati";
       break;
     case "yamaha":
       item2 = "yamaha";
       break;
     default:
       item2 = ""; 
   }

   while (thirdUl.firstChild) {
     thirdUl.removeChild(thirdUl.firstChild);
   }

   vehicles[item][item2].forEach((type) => {
     const type_li = document.createElement("li");
     const type_a = document.createElement("a");

     type_a.innerText = type.name;
     type_a.setAttribute("href", type.url);

     type_li.appendChild(type_a);
     thirdUl.appendChild(type_li);
   });


 });

  return my_li;
});

secondLiArray.forEach((li) => {
  secondUl.appendChild(li);
});

box1.appendChild(secondUl);

// 

const box2 = document.querySelector(".shortUp");

const thirdUl = document.createElement("ul");
thirdUl.classList.add("list-3");

const thirdLiArray = vehicles[item][item2].map((currentValue) => {
  const my_li = document.createElement("li");
  const my_a = document.createElement('a');

  my_a.innerText += currentValue.name;
  my_a.setAttribute('href', currentValue.url);

  my_li.appendChild(my_a);

  return my_li;
});

thirdLiArray.forEach((li) => {
  thirdUl.appendChild(li);
});


box2.appendChild(thirdUl);


//#endregion
