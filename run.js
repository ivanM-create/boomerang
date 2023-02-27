// // Основной файл.
// // Запускает игру.
// const Game = require('./src/Game');

// const { User, sequelize } = require("./models/user");

/* eslint-disable no-console */
const Game = require('./src/Game');
const { User } = require('./db/models');

// Инициализация игры с настройками.
const game = new Game({
  trackLength: 40,
});

// Запуск игры.
console.clear();
// const nameOfUser = process.argv[2];

game.play();// name надо будет указать
async function main() {
  const name = process.argv[2];
  const newPerson = await User.create({
    name,
    // score,
  });
  // console.log(newPerson);
  console.log(newPerson.name, newPerson.score);

  // sequelize.close();
}

main();

// async function main(name) {
//   await User.create({ name: `${name}` });
// }
// main(nameOfUser);
