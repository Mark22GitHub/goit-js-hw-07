const input = document.querySelector("#validation-input");

const valid = document.createElement("p");
const createAlert = (element, className, msg) => {
  valid.classList.add(className);
  valid.textContent = msg;
  input.after(element);
};

const removeAlert = (element, className) => {
  element.classList.remove(className);
  element.textContent = "";
};

let length = +input.dataset.length;

input.addEventListener("blur", () => {
  console.log(input.value);
  let textLength = input.value.length;

  if (length === textLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");

    removeAlert(valid, "js-msg-invalid");
    createAlert(valid, "js-msg-valid", "ВЕРНО ЗАПОЛНЕНОЕ ПОЛЕ!");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");

    removeAlert(valid, "js-msg-valid");
    createAlert(valid, "js-msg-invalid", "НЕВЕРНО ЗАПОЛНЕНОЕ ПОЛЕ!");
  }
});

{
}
