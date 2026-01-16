const input = document.getElementById("text");
// function onKeyPress() {
//   console.log("keypress");
// }
// function onkeyup() {
//   console.log("keyup");
// }
// input.addEventListener("keypress", onKeyPress);
// input.addEventListener("keyup", onkeyup);
function onkeyDown(e) {
  //   console.log(e);
  //   console.log(e.key);
  //   document.querySelector("h2").innerText += e.key;

  //   if (e.key === "Enter") {
  //     alert("enter tıklandı");
  //   }
  //   if (e.keyCode == 69) {
  //     alert("e tuşuna basıldı");
  //   }
  //   if (e.repeat) {
  //     alert(`${e.key} tuşuna basıldı kaldı`);
  //   }

  if (e.ctrlKey && e.key === "a") {
    alert("ctrl + a");
  }
}

input.addEventListener("keydown", onkeyDown);
