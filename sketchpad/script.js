document.body.onload = function() {
  addBlocks(32);
}
var numElements = 0;

function clearColors() {
  var grid = document.getElementById("grid");
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  var num = prompt("Enter a number", "32");
  addBlocks(num);
}

function changeColor(block) {
  block.classList.add("triggered");
}

function addBlocks(num) {
  var grid = document.getElementById("grid");
  numElements = num * num;

  var res = 800 * 800;
  var blockPixels = res/numElements;
  var height = Math.sqrt(blockPixels);
  var width = Math.sqrt(blockPixels);

  for (var i = 0; i<numElements; i++) {
    var newBlock = document.createElement("div");
    newBlock.setAttribute("class", "block");
    newBlock.setAttribute("onmouseenter", "changeColor(this)");
    newBlock.setAttribute("style", "height:" + height + "; width: "+ width + ";");
    grid.appendChild(newBlock);
  }
}
