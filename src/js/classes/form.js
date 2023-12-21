class Form {
  static counter = 0;

  constructor(style, submitFn) {
    Form.counter += 1;
    this.formId = Form.counter;
    this.style = style;
    this.submitFn = submitFn;
  }

  render() {
    let my_form = document.createElement("form");
    my_form.classList.add("my_form");
    my_form.setAttribute("class", this.style);
    my_form.setAttribute("id", `form-${this.formId}`);

    my_form.onsubmit = this.submitFn;

    return my_form;
  }
};


let headerForm = new Form("form-searching", "submitSearching");

export {headerForm};
