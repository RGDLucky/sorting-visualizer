let elements = document.getElementsByClassName(".element");
let randomButton = document.getElementById("random-button");

random();
// Event Listeners
randomButton.addEventListener("click", () => random());

// Randomize elements in array
function random() {
  Array.from(document.querySelectorAll(".element")).forEach(function (element) {
    let new_height = Math.random() * 100;
    element.style.height = new_height + "%";
    let new_top = 100 - new_height;
    element.style.bottom = "-" + new_top + "%";
  });
}

// Sorting

// Insertion Sort
function insertionSort() {}
