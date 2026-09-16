window.registerCharacter({
  id: 'c5',
  name: 'Alien',
  img: 'cards/Astrologist.png',
  desc: 'Once per turn laying on a star point lets you place one more stone on another star point.',
  onTurnStart(api) {
    api.setFlag('usedThisTurn', false);
  },
  onAfterPlacement(api) {
    if (api.isStarPoint(api.x, api.y) && !api.getFlag('usedThisTurn') && api.hasEmptyStarPoint()) {
      api.grantExtraTurn(1);
      api.setFlag('usedThisTurn', true);
      api.restrictNextTo(
        (x, y) => api.isStarPoint(x, y),
        'This bonus stone must be played on a star point.'
      );
    }
  }
});
