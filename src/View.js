/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
// Сделаем отдельный класс для отображения игры в консоли.

class View {
  render(track, track1) {
    console.clear();
    console.log();
    console.log('🏡 🏔 🏠 🏔 🏘 🏔 🏡 🏔 🏡 🏔 🏘 🏔 🏠 🎡 🎠 🌲 🌳 🌲');
    console.log('\n');
    console.log(track.join(''));
    console.log('\n');
    console.log('🏡 🏔 🏠 🏔 🏘 🏔 🏡 🏔 🏡 🏔 🏘 🏔 🏠 🎡 🎠 🌲 🌳 🌲');
  }
}

module.exports = View;
