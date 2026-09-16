window.registerCharacter({
  id: 'c2',
  name: 'Necromancer',
  img: 'cards/Necromancer.png',
  desc: 'Places another stone immediately after a capture.',
  onAfterPlacement(api) {
    if (api.capturedAny) api.grantExtraTurn(1);
  }
});
