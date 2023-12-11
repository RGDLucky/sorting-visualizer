let elements = document.getElementsByClassName(".element");
let randomButton = document.getElementById("random-button");
let sortButton = document.getElementById("sort");

random();
// Event Listeners
randomButton.addEventListener("click", () => random());

sortButton.addEventListener("click", () => {
  let selected = document.querySelector('input[type="radio"]:checked');
  switch (selected.value) {
    case "insertion":
      insertionSort();
      break;
    case "merge":
      mergeSort();
      break;
    case "quick":
      quickSort();
      break;
    case "selection":
      selectionSort();
      break;
    default:
      console.log("Something went wrong with the radio buttons");
  }
});

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
function insertionSort() {
  console.log("insertion sort");
}

// Selection Sort
function selectionSort() {
  console.log("selection sort");
}

// Merge sort
function mergeSort() {
  console.log("merge sort");
}

// Quick sort
function quickSort() {
  console.log("quick sort");
}
