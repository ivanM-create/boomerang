/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-param-reassign */
const player = require('play-sound')({});

const keypress = require('keypress');

module.exports = function runInteractiveConsole(hero, boomerang) {
  keypress(process.stdin);
  process.stdin.on('keypress', (ch, key) => {
    if (key) {
      // Вызывает команду, соответствующую нажатой кнопке.
      if (key.name === 'd') {
        player.play(`${__dirname}/sounds/sfx-9.mp3`, function (err) {
          if (err) throw err;
        });
        hero.position += 1;
      }
      if (key.name === 'a') {
        player.play(`${__dirname}/sounds/sfx-9.mp3`, function (err) {
          if (err) throw err;
        });
        hero.position -= 1;
      }
      if (key.name === 'q') {
        player.play(`${__dirname}/sounds/sfx-13.mp3`, function (err) {
          if (err) throw err;
        });

        boomerang.position = hero.position + 1;
        setInterval(() => boomerang.fly(hero), 15);
      }
      if (key.ctrl && key.name === 'c') {
        process.exit();
      }
    }
  });
  process.stdin.setRawMode(true);
};
