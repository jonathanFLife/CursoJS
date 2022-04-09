let res = document.getElementById("res");

let buttonAdd = document.getElementById("button-add");

buttonAdd.onclick = function () {
  console.log("install");
  var square = document.createElement("div");
  square.className = "square";
  square.style.color = "red";
  square.style.height = "100px";
  square.style.width = "100px";
  square.style.background = "black";
  square.onmouseover = function () {
    square.style.backgroundColor = getRandomColor();
  };
  res.appendChild(square);
  return square;
};

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}