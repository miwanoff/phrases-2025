const phrases = [
  "This house is beautiful",
  "It's raining cats and dogs",
  "Kill two birds with one stone",
];

const phrase = phrases[0];
const dropField = document.getElementById("words");
const checkButton = document.getElementById("check");
function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.textContent);
  //     console.log(event.target.textContent)
}

function drop(event) {
  event.preventDefault();
  let data = event.dataTransfer.getData("text");
  //console.log(data);

  event.target.innerHTML += data;
  //dropField.innerHTML += data;
}

function check() {
    
}

checkButton.addEventListener("click", check)


