class FormField {

    static counter = 0;

    constructor(labelText, inputType, inputId, inputName, pl, style = `${inputName}Input`) {         

        FormField.counter += 1;
        this.id = FormField.counter;
        this.labelText = labelText;
        this.inputType = inputType;
        this.inputId = inputId;
        this.inputName = inputName;
        this.pl = pl;
        this. style = style;
    };

    render() {
        let formGroup = document.createElement('div');
        formGroup.classList.add('form-group');

        formGroup.classList.add(`form-group-${this.id}`);

        let label = document.createElement("label");
        label.textContent = this.labelText;
        label.setAttribute("for", this.inputId);

        let input = document.createElement("input");
        input.setAttribute("type", this.inputType);
        input.setAttribute("id", this.inputId);
        input.setAttribute("name", this.inputName);
        input.setAttribute("class", this.style);
        input.setAttribute("placeholder", this.pl);
        input.setAttribute("autocomplete", 'off');

        formGroup.appendChild(label);
        formGroup.appendChild(input);

        return formGroup;
    };
};

let headerField = new FormField("Searching", "text", "searching", "searching", "Text here..");


export {headerField};