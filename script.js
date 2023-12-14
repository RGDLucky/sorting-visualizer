let elements = document.getElementsByClassName(".element");
let randomButton = document.getElementById("random-button");
let sortButton = document.getElementById("sort");
let enterButton = document.getElementById("enter-number");

random();
// Event Listeners
randomButton.addEventListener("click", () => random());

enterButton.addEventListener("click", () => {
  let number = document.getElementById("number-field");
  console.log(number.value);
});

sortButton.addEventListener("click", () => {
  let selected = document.querySelector('input[type="radio"]:checked');
  let elementArray = Array.from(document.querySelectorAll(".element"));
  switch (selected.value) {
    case "insertion":
      insertionSort(elementArray);
      break;
    case "merge":
      mergeSort(elementArray);
      break;
    case "quick":
      quickSort(elementArray);
      break;
    case "selection":
      selectionSort(elementArray);
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
function insertionSort(arr) {
  console.log("insertion sort");
  for (let i = 1; i < arr.length - 1; i++) {
    //console.log(arr.length);
    for (let j = i - 1; j >= 0; j--) {
      let element1 = arr[j].style.height.substring(0, arr[j].length);
      let element2 = arr[j + 1].style.height.substring(0, arr[j + 1].length);
      // console.log(element1);
      if (parseFloat(element1) < parseFloat(element2)) {
        break;
      }
      //let distance = 100 / arr.length;
      //console.log(distance);
      arr[j].style.transform = "translateX(100%)";
      arr[j + 1].style.transform = "translateX(-100%)";
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

// Selection Sort
function selectionSort(arr) {
  console.log("selection sort");
  for (let i = 0; i < arr.length - 1; i++) {
    let min_index = i;
    for (let j = i + 1; j < arr.length; j++) {
      let element1 = arr[j].style.height.substring(0, arr[j].length);
      let element2 = arr[min_index].style.height.substring(
        0,
        arr[min_index].length,
      );
      // console.log(element1);
      if (parseFloat(element1) < parseFloat(element2)) {
        min_index = j;
      }
    }
    for (let k = 0; k < min_index - i; k++) {
      arr[i].style.transform = "translateX(100%)";
      arr[min_index].style.transform = "translateX(-100%)";
    }
    let temp = arr[i];
    arr[i] = arr[min_index];
    arr[min_index] = temp;
  }
}

// Merge sort
function mergeSort(arr) {
  console.log("merge sort");
}

// Quick sort
function quickSort(arr) {
  console.log("quick sort");
}
