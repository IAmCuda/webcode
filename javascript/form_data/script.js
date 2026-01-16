const form = document.getElementById("form");
function onsubmit(e) {
  e.preventDefault();

  const inputValue = document.getElementById("input").value;
  const selectValue = document.getElementById("select").value;
  const checkedValue = document.getElementById("checkbox").checked;

  if (inputValue === "" || selectValue === "0") {
    alert("please fill out the form");
    return;
  }
  console.log(inputValue, selectValue, checkedValue);

  console.log("form submit");
}

function onsubmit2(e) {
  e.preventDefault();

  const formData = new FormData(form);

  const inputValue = formData.get("input");
  const selectValue = formData.get("select");

  let checkedValue = false;
  if (formData.get("checkbox") == "on") {
    checkedValue = true;
  }

  if (inputValue === "" || selectValue === "0") {
    alert("please fill out the form");
    return;
  }

  //   const entries = formData.entries();
  //   for (let entry of entries) {
  //     console.log(entry);
  //   }

  console.log(inputValue, selectValue, checkedValue);

  console.log("form submit");
}

// form.addEventListener("submit", onsubmit);
form.addEventListener("submit", onsubmit2);
