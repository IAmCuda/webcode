// const oyuncu1 = {
//   username: "ahmet",
//   start: function () {
//     return `${this.username} oyuna başladı`;
//   },
//   stop: function () {
//     return `${this.username} oyundan ayrıldı`;
//   },
//   pause: function () {
//     return `${this.username} oyunu durdurdu`;
//   },
// };

function Player(username) {
  this.username = username;
  this.score = 0;
  this.start = function () {
    return `${this.username} oyuna başladı`;
  };
  this.stop = function () {
    return `${this.username} oyundan ayrıldı`;
  };
  this.pause = function () {
    return `${this.username} oyunu durdurdu`;
  };
  this.add_score = function (val) {
    this.score += val;
  };
  this.show_score = function () {
    return `${this.username} kullanıcı adlı oyuncunun skoru ${this.score}`;
  };
}

const oyuncu1 = new Player("Ahmet");
const oyuncu2 = new Player("Ayşe");
const oyuncu3 = new Player("Mehmet");

console.log(oyuncu1.start());
console.log(oyuncu2.stop());
console.log(oyuncu3.pause());

oyuncu1.add_score(50);
console.log(oyuncu1.show_score());

oyuncu2.add_score(450);
console.log(oyuncu2.show_score());

oyuncu3.add_score(150);
console.log(oyuncu3.show_score());
