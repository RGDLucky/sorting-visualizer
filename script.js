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
  let swap = [];
  switch (selected.value) {
    case "insertion":
      swap = insertionSort(elementArray.map((x) => x));
      break;
    case "merge":
      swap = mergeSort(elementArray.map((x) => x));
      break;
    case "quick":
      swap = quickSort(elementArray((x) => x));
      break;
    case "selection":
      swap = selectionSort(elementArray.map((x) => x));
      break;
    default:
      console.log("Something went wrong with the radio buttons");
  }

  swapElements(elementArray, swap);
  for (let i = 0; i < elementArray.length; i++) {
    console.log(elementArray[i].style.height);
  }
});

function swapElements(arr, swaps) {
  let time = 1000;
  for (let i = 0; i < swaps.length; i++) {
    //console.log(swaps[i][0]);
    setTimeout(function () {
      arr[swaps[i][0]].style.background = "red";
      arr[swaps[i][1]].style.background = "red";
    }, time - 500);
    setTimeout(function () {
      // arr[swaps[i][0]].style.background = "red";
      let tempHeight = arr[swaps[i][0]].style.height;
      arr[swaps[i][0]].style.height = arr[swaps[i][1]].style.height;
      arr[swaps[i][1]].style.height = tempHeight;

      let tempBottom = arr[swaps[i][0]].style.bottom;
      arr[swaps[i][0]].style.bottom = arr[swaps[i][1]].style.bottom;
      arr[swaps[i][1]].style.bottom = tempBottom;
      //arr[swaps[i][0]].style.background = "yellow";
      //arr[swaps[i][1]].style.background = "yellow";
      //arr = Array.from(document.querySelectorAll(".element"));
    }, time);
    setTimeout(function () {
      arr[swaps[i][0]].style.background = "yellow";
      arr[swaps[i][1]].style.background = "yellow";
    }, time + 500);
    // arr[swaps[i][0]].style.background = "yellow";
    time += 1000;
  }
}

// Randomize elements in array
function random() {
  //let count = 0;
  Array.from(document.querySelectorAll(".element")).forEach(function (element) {
    let new_height = Math.random() * 100;
    element.style.height = new_height + "%";
    let new_top = 100 - new_height;
    element.style.bottom = "-" + new_top + "%";
    //element.style.bottom = 0;
    //element.style.top = "100%";
    //let move = count * 100;
    //element.style.transform = "translateX(" + move + "%)";
    //count++;
  });
}

// Sorting

// Insertion Sort
function insertionSort(arr) {
  console.log("insertion sort");
  let swap = [];
  for (let i = 1; i < arr.length; i++) {
    //console.log(arr.length);
    for (let j = i - 1; j >= 0; j--) {
      let element1 = arr[j].style.height.substring(0, arr[j].length);
      let element2 = arr[j + 1].style.height.substring(0, arr[j + 1].length);
      // console.log(element1);
      if (parseFloat(element1) > parseFloat(element2)) {
        //let distance = 100 / arr.length;
        //console.log(distance);
        //arr[j].style.transform = "translateX(100%)";
        //arr[j + 1].style.transform = "translateX(-100%)";
        //let x1 = arr[j].style.left;
        //let x2 = arr[j + 1].style.left;
        //console.log(arr[j].x);
        //console.log(x2);
        //arr[j].style.left = x2;
        //arr[j + 1].style.left = x1;
        swap.push([j, j + 1]);
        //let tempHeight = arr[j].style.height;
        //arr[j].style.height = arr[j + 1].style.height;
        //arr[j + 1].style.height = tempHeight;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  //for (let i = 0; i < arr.length; i++) {
  //console.log(arr[i].style.height);
  //}

  return swap;
}

// Selection Sort
function selectionSort(arr) {
  console.log("selection sort");
  let swap = [];
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
    //for (let k = 0; k < min_index - i; k++) {
    //arr[i].style.transform = "translateX(100%)";
    //arr[min_index].style.transform = "translateX(-100%)";
    //}
    swap.push([i, min_index]);
    let temp = arr[i];
    arr[i] = arr[min_index];
    arr[min_index] = temp;
  }
  return swap;
}

// Merge sort
function mergeSort(arr) {
  console.log("merge sort");
}

// Quick sort
function quickSort(arr) {
  console.log("quick sort");
}

// do element.x
