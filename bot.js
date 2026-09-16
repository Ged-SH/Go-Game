// Random-legal-move Go bot — practice/testing opponent, not real playing
// strength. Always controlled by index.html's "Practice vs Bot" mode.
//
// index.html calls window.GoBot.chooseMove({ size, isEmpty }) whenever
// it's the bot's turn, and places whatever point it returns via the
// same tryPlace() the human player uses — so any move this returns
// still goes through the real capture/suicide rules there. This bot
// only avoids occupied points; it does NOT check for suicide moves.
// If it happens to pick one, tryPlace() will simply reject it and
// index.html's turn loop will have the bot try again automatically —
// there's nothing extra to wire up for that.
window.GoBot = {
  chooseMove({ size, isEmpty }) {
    const empties = [];
    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        if (isEmpty(x, y)) empties.push({ x, y });
      }
    }
    if (empties.length === 0) return null; // board full — pass

    const i = Math.floor(Math.random() * empties.length);
    return empties[i];
  }
};
