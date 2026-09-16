window.registerCharacter({
  id: 'c3',
  name: 'Ent',
  img: 'cards/Gardner.png',
  desc: 'Auto-places a free stone on an open corner each turn.',
  onAfterPlacement(api) {
    for (const [cx, cy] of api.corners()) {
      if (api.isEmpty(cx, cy)) {
        api.placeBonusStone(cx, cy);
        break; // one free corner stone per turn
      }
    }
  }
});
