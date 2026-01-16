const div = document.querySelector("div");
const img = document.querySelector("img");

function onclick() {
  console.log("onclick");
}

function onDblclick() {
  console.log("dblclick");
}

function onContextmenu() {
  console.log("contextmenu");
}

function onMousedown() {
  console.log("mousedown");
}

function onMouseenter() {
  console.log("mouseenter");
}

function onMousemove() {
  console.log("mousemove");
}

function onDrag() {
  console.log("onDrag");
}

function dragStart() {
  console.log("dragStart");
}

function dragEnd() {
  console.log("dragEnd");
}

div.addEventListener("click", onclick);
div.addEventListener("dblclick", onDblclick);
div.addEventListener("contextmenu", onContextmenu);
div.addEventListener("mousedown", onMousedown);
div.addEventListener("mouseenter", onMouseenter);
div.addEventListener("mousemove", onMousemove);
img.addEventListener("drag", onDrag);
img.addEventListener("dragstart", dragStart);
img.addEventListener("dragend", dragEnd);
