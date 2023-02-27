// Наш герой.

class Hero {
  constructor() {
    this.skin = '🦫';
    this.position = 0;
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang.fly();
  }

  // eslint-disable-next-line class-methods-use-this
  die(countOfEnemies) {
    console.log('Ты проиграл! 😵');
    console.log(`Ты срубил: ${countOfEnemies} деревьев`);
    process.exit();
  }
}

module.exports = Hero;
