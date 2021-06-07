let nameInput = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");

function addText() {
    if (nameInput.value === ' ') {
       nameOutput.innerHTML = 'незнакомец';
    } else{
    nameOutput.innerHTML = nameInput.value;
    }
}

nameInput.addEventListener('input', addText);



//function addText(event) {
//  nameOutput.textContent = event.currentTarget.value || 'незнакомец';
//}