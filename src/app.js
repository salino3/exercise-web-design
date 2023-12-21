import * as FormField from './js/classes/form-field.js';
import * as Button from './js/classes/button.js';
import * as Form from './js/classes/form.js';


console.log("Running front app");


const header = document.querySelector("#header");


header.appendChild(Form.headerForm.render());
const formHeader = document.querySelector("#form-1");

formHeader.appendChild(FormField.headerField.render());

// const containerForm = document.querySelector(".form-group-1");


formHeader.appendChild(Button.headerBtn.render());