window.registerCharacter({
  id: 'c6',
  name: 'Death Knight',
  img: 'cards/deathknight.png',
  desc: 'Once, after 275 moves: remove up to ten opponent stones for free.',
  ability: {
    getStatus(api) {
      const eligible = !api.getFlag('used') && api.totalMoves >= 275;
      return { eligible, label: 'Retribution' };
    },
    onActivate(api) {
      let removed = 0;

      function removeOne() {
        api.armTargetSelection({
          statusText: `tap an opponent stone to remove (${removed + 1}/15)`,
          invalidMessage: 'Choose an opponent stone to remove.',
          validate(x, y, api) { return api.stoneAt(x, y) === api.opponent; },
          onSelect(x, y, api) {
            api.removeStone(x, y);
            api.addCaptureCredit(1);
            removed++;

            if (removed < 10) {
              removeOne();
            } else {
              api.setFlag('used', true);
              api.endTurn();
            }
          }
        });
      }

      removeOne();
    }
  }
});
