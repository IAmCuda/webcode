console.log([]);
console.log(new Array());

function Comment(title, body, username) {
  this.title = title;
  this.body = body;
  this.username = username;
  this.createdAt = Date.now();
  console.log(this);
}

Comment.prototype.display = function () {
  return this.title;
};

Comment.prototype.get_username = function () {
  return this.username;
};

const c1 = new Comment("çok kritiiik", "beğendim ", "ahmet");
const c2 = new Comment("kritiiik", "hiç beğenmedim ", "ayşe");

Array.prototype.get_number = function () {
  return this.length;
};
const arr = ["item 1", "item 2"];

console.log(arr.get_number());
