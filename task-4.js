let counterValue = 0;
const refs = {
  decrement: document.querySelector('[data-action = "decrement"]'),
  span: document.querySelector("#value"),
  increment: document.querySelector('[data-action = "increment"]'),
};

refs.decrement.addEventListener("click", () => {
  if (counterValue > 0) {
    counterValue -= 1;
    refs.span.textContent = counterValue;
  }
});

refs.increment.addEventListener("click", () => {
  counterValue += 1;
  refs.span.textContent = counterValue;
});
