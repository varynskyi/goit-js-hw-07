const button = {
  sub: document.querySelector("[data-action='increment']"),
  add: document.querySelector("[data-action='decrement']"),
  span: document.querySelector("#value"),
};
//1
let counterValue = 0;
button.sub.addEventListener("click", event => {
  counterValue += 1;
  button.span.textContent = counterValue;
});
button.add.addEventListener("click", event => {
  counterValue -= 1;
  button.span.textContent = counterValue;
});

//2
//let counterValue = 0;
//const increment = () => {
//  counterValue += 1;
// button.span.textContent = counterValue;
//};
//const decrement = () => {
//  counterValue -= 1;
//  button.span.textContent = counterValue;
//};
//button.sub.addEventListener("click", increment);
//button.add.addEventListener("click", decrement);