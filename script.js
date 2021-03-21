var counter = 0;

var boxClicked = document.getElementById("box");
boxClicked.addEventListener("click", function () {
  counter++;
  var txtchange = document.getElementById("count");
  txtchange.innerHTML = "Box clicked " + counter + " time's.";
});
