window.registerCharacter({
  id: 'c4',
  name: 'Spy',
  img: 'cards/Spy.png',
  desc: 'Once, after turn 5: remove one opponent stone for free then place a stone',
  ability: {
    getStatus(api) {
      const eligible = !api.getFlag('used') && api.totalMoves >= 5;
      return { eligible, label: 'Free Capture' };
    },
    onActivate(api) {
      api.armTargetSelection({
        statusText: 'tap an opponent stone to remove it for free',
        invalidMessage: 'Choose an opponent stone to remove.',
        validate(x, y, api) { return api.stoneAt(x, y) === api.opponent; },
        onSelect(x, y, api) {
          api.removeStone(x, y);
          api.addCaptureCredit(1);
          api.grantExtraTurn(1);
          api.setFlag('used', true);
          api.endTurn();
        }
      });
    }
  }
});
