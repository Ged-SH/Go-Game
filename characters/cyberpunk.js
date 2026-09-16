window.registerCharacter({
  id: 'c1',
  name: 'Pyromancer',
  img: 'cards/CyberPunk.png',
  desc: 'Places 3 extra stones on turn one.',
  // Fires on this character's own first turn, whether she's Black
  // (turn 1 of the game) or White (her first turn, after Black moves).
  // The flag makes sure it only ever fires once.
  onTurnStart(api) {
    if (!api.getFlag('usedOpeningBonus')) {
      api.grantExtraTurn(2);
      api.setFlag('usedOpeningBonus', true);
    }
  }
});
