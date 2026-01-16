const input = document.getElementById("input");
const checkbox = document.getElementById("checkbox");
const select = document.getElementById("select");
const title = document.getElementById("title");

function oninput(e) {
  console.log(e.key);
  title.textContent = e.target.value;
}

function onfocus(e) {
  console.log("focus");
  input.style.outlineStyle = "solid";
  input.style.outlineWidth = "1px";
  input.style.outlineColor = "yellow";
}

function onblur(e) {
  console.log("blur");
  input.style.outlineStyle = "none";
}

function onchange(e) {
  console.log(e.target.checked);
}

function onselected(e) {
  console.log(e.target.value);
}

input.addEventListener("input", oninput);
input.addEventListener("focus", onfocus);
input.addEventListener("blur", onblur);
checkbox.addEventListener("change", onchange);
select.addEventListener("change", onselected);
