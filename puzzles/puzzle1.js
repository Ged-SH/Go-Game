window.registerPuzzle({
  id: 'puzzle1',
  title: 'Capture the Stone',
  boardSize: 5,
  toMove: WHITE,
  // Black's stone at (2,2) has three of its four liberties already
  // filled by white — (1,2), (2,1), (2,3) — leaving only (3,2) open.
  // Placing white there removes black's last liberty and captures it.
  stones: [
    { x: 1, y: 2, color: WHITE },
    { x: 2, y: 1, color: WHITE },
    { x: 2, y: 3, color: WHITE },
    { x: 2, y: 2, color: BLACK }
  ],
  instructions: 'White to play. Place a stone to capture the black piece.',
  reward: 10
  // No `character` field — this puzzle has no required character.
});
