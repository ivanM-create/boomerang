/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
// Сделаем отдельный класс для отображения игры в консоли.

class View {
  render(track, count, name) {
    console.clear();
    console.log(count, name);
    console.log();
    console.log("🏡 🏔 🏠 🏔 🏘 🏔 🏡 🏔 🏡 🏔 🏘 🏔 🏠 🎡 🎠 🌲 🌳 🌲");
    console.log("\n");
    console.log(track.join(""));
    console.log("\n");
    console.log("🏡 🏔 🏠 🏔 🏘 🏔 🏡 🏔 🏡 🏔 🏘 🏔 🏠 🎡 🎠 🌲 🌳 🌲");
  }
}

module.exports = View;
