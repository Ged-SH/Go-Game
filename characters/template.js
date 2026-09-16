// TEMPLATE CHARACTER — copy this file to add a new one.
//
// How to add a character:
//   1. Save their art as a PNG in the cards/ folder (crop to roughly a
//      5:7 portrait — 400x560px matches everyone else).
//   2. Copy this file into characters/ and rename it, e.g.
//      characters/wizard.js
//   3. Fill in id / name / img / desc, and add whichever hooks below
//      you need (delete the ones you don't).
//   4. In index.html, add one line loading your new file:
//        <script src="characters/wizard.js"></script>
//      right next to the other characters/*.js lines — order there is
//      also the order they appear in the select-screen grid.
//
// HOOKS (all optional — a character with none of these just has no
// ability, like this template):
//
//   onGameStart(api)
//     Runs once for both characters when a new game begins.
//     api.isStartingPlayer is true for whichever color moves first.
//
//   onAfterPlacement(api)
//     Runs right after THIS character's owner places a real stone.
//     api.x, api.y — where they played. api.capturedAny — did it capture.
//
//   onTurnStart(api)
//     Runs when it becomes this character's owner's turn (a fresh turn,
//     not a bonus-stone continuation). Good place to reset per-turn flags.
//
//   ability: { getStatus(api), onActivate(api) }
//     For a button-triggered ability (like a one-time free capture).
//     getStatus(api) returns { eligible: bool, label: string } — the
//     button only shows when eligible is true, labeled "Use Ability: <label>".
//     onActivate(api) runs when the button is tapped — call
//     api.armTargetSelection({...}) to make the next board tap the target.
//
// THE api OBJECT (passed to every hook):
//   api.color              — this character's own color (api.BLACK or api.WHITE)
//   api.opponent           — the opponent's color
//   api.size               — board size (9, 11, or 13)
//   api.totalMoves         — total turns taken so far this game
//   api.isEmpty(x, y)      — is that point empty?
//   api.stoneAt(x, y)      — api.BLACK / api.WHITE / 0 (empty) at that point
//   api.isStarPoint(x, y)  — is that point a star point?
//   api.hasEmptyStarPoint()— is any star point still empty?
//   api.corners()          — the board's 4 corner points, as [x,y] pairs
//   api.grantExtraTurn(n)  — go again n times before the turn passes (default 1)
//   api.restrictNextTo(validate, message)
//                           — the very next placement must satisfy validate(x,y)
//                             or it's rejected with `message`
//   api.placeBonusStone(x, y) — silently places a free stone of this
//                             character's color (captures resolve normally)
//   api.removeStone(x, y)  — removes whatever's on that point
//   api.addCaptureCredit(n)— adds n to this character's capture score (default 1)
//   api.setMessage(text)   — shows a message under the board
//   api.getFlag(name) / api.setFlag(name, value)
//                           — your own scratch storage, one bucket per color,
//                             reset at the start of every game
//   api.armTargetSelection({ validate(x,y,api), onSelect(x,y,api),
//                             invalidMessage, statusText })
//                           — arms a tap-to-target ability (see Spy for a
//                             real example)
//   api.endTurn()          — forces the turn to pass right now
//
// See cyberpunk.js, necromancer.js, gardner.js, spy.js, and
// astrologist.js in this same folder for five different real examples.

window.registerCharacter({
  id: 'template',
  name: 'Student',
  img: 'cards/Student.png',
  desc: 'Still Learning: No special ability.'
  // No hooks defined = no ability.
});
