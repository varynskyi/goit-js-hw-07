let inputV = document.getElementById("validation-input");
let totalLenght = inputV.getAttribute("data-length");
let intTotallenght = parseInt(totalLenght, 10);
inputV.oninput = function() {
  if (inputV.value.length === intTotallenght) {
    inputV.classList.remove("invalid");
    inputV.classList.add("valid");
  }
  else if (inputV.value.length === 0) {
    inputV.classList.remove("valid");
    inputV.classList.remove("invalid");
  }
  else if (inputV.value.length !== intTotallenght && inputV.value.length !== 0) {
    inputV.classList.add("invalid");
  }
};