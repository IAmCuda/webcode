let sonuc;

const parent = document.querySelector(".parent");

sonuc = parent.children;
sonuc = parent.children[0];
sonuc = parent.children[0].innderText;
sonuc = parent.children[0].className;
sonuc = parent.children[0].nodeName;

parent.children[1].innerText = "Child two";
parent.children[1].style.color = "orange";

sonuc = parent.firstElementChild;
sonuc = parent.lastElementChild;

const child = document.querySelector(".child");

sonuc = child;
sonuc = child.parentElement.parentElement;

sonuc = child.nextElementSibling;
sonuc = child.nextElementSibling.nextElementSibling;
sonuc = child.nextElementSibling.nextElementSibling.previousElementSibling;

console.log(sonuc);
