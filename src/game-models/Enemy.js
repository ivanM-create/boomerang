// Враг.

class Enemy {
  constructor(skins = ['🐜', '🦇', '🦖', '💩', '🦅', '🐛', '🦤']) {
    this.skin = skins[Math.floor(Math.random() * skins.length)];
    this.position = 39;
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  die() {
    this.position = '?';
    console.log('Враг погиб! 👹');
  }
}

module.exports = Enemy;
