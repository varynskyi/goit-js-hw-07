let regulator = document.getElementById("font-size-control");
let text = document.getElementById("text");
regulator.oninput = function() {
  text.style.fontSize = regulator.value + "px";
};