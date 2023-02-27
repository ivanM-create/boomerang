class Hero {
  constructor() {
    this.skin = '👉';
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
    console.log('GAME OVER ❌');
    console.log(`Убито врагов: ${countOfEnemies}`);
    process.exit();
  }
}
