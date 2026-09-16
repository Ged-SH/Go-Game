// TEMPLATE PUZZLE — copy this file to add a new one.
//
// This file is intentionally NOT loaded by index.html (there's no
// <script src="puzzles/template.js"> tag) so it never shows up as a
// real, playable puzzle — it's only here for you to copy from.
//
// How to add a puzzle:
//   1. Copy this file into puzzles/ and rename it, e.g. puzzles/puzzle2.js
//   2. Fill in the fields below.
//   3. In index.html, add one line loading your new file:
//        <script src="puzzles/puzzle2.js"></script>
//      right next to "puzzles/puzzle1.js" — the order there is the
//      order puzzles appear in the puzzle-select list.
//
// FIELDS:
//   id           — unique short string, used internally
//   title        — shown on the puzzle-select card and in the puzzle bar
//   boardSize    — the puzzle gets its own small board, sized just for it
//   toMove       — which color the PLAYER plays as: BLACK or WHITE
//   stones       — starting position: a list of { x, y, color }
//   instructions — one line of guidance shown under the title in-game
//   reward       — gacha coins shown on success (cosmetic for now — there's
//                  no currency system yet, so nothing is actually saved)
//   character    — OPTIONAL. A character id (see characters/*.js, e.g.
//                  'c1', 'c2', 'template') that this puzzle REQUIRES the
//                  player to use. If set, that character's portrait and
//                  name are shown on the puzzle-select card and in the
//                  puzzle bar while playing. Omit this field entirely
//                  for a puzzle with no character requirement.
//
// HOW IT'S JUDGED: the player taps one point. If that placement is legal
// AND captures at least one stone, it's a success. Any other tap —
// illegal, or legal but no capture — is a failure.
//
// BLACK and WHITE are available globally (same values the main game
// uses) — this file loads before the main game script, so use the bare
// names directly, as below.
//
// Coordinates are 0-indexed from the top-left, same as the main board.

window.registerPuzzle({
  id: 'template',
  title: 'Template Puzzle',
  boardSize: 5,
  toMove: WHITE,
  stones: [
    { x: 1, y: 2, color: WHITE },
    { x: 2, y: 1, color: WHITE },
    { x: 2, y: 3, color: WHITE },
    { x: 2, y: 2, color: BLACK }
  ],
  instructions: 'White to play. Place a stone to capture the black piece.',
  reward: 10
  // character: 'c2',  // uncomment and set an id to require a character
});
