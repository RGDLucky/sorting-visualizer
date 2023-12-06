let elements = document.getElementsByClassName(".element");

// Randomize elements in array
Array.from(document.querySelectorAll(".element")).forEach(function (element) {
  let new_height = Math.random() * 100;
  element.style.height = new_height + "%";
  let new_top = 100 - new_height;
  element.style.bottom = "-" + new_top + "%";
});
