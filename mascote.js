/* Desenho da jacupemba (mascote), usado pelo jogo e pela página inicial. */
window.MASCOTE_SVG = (function () {
  /* ---------- Mascote: a jacupemba ---------- */
  var PINTAS = [[96,160],[118,172],[140,158],[84,140],[108,148],[132,138],[154,146],[100,128],[124,122],[138,112],[132,98],[140,86],[130,80],[118,106],[160,162],[78,162],[104,176],[146,130]];
  function pintas() {
    return PINTAS.map(function (q, i) {
      return '<ellipse cx="' + q[0] + '" cy="' + q[1] + '" rx="' + (3 + (i % 3)) + '" ry="' + (4 + (i % 2)) + '" transform="rotate(' + ((i * 37) % 60 - 30) + ' ' + q[0] + ' ' + q[1] + ')" fill="#f4f1ea"/>';
    }).join('');
  }
  var MASCOTE =
    '<svg viewBox="0 0 220 240" data-humor="neutro" role="img" aria-label="Jacupemba, a mascote do jogo">' +
    '<g class="mascote-corpo">' +
    '<path d="M62 150C40 160 22 180 8 214C36 210 62 196 84 176Z" fill="#2d3138" stroke="#14301f" stroke-width="6" stroke-linejoin="round"/>' +
    '<path d="M58 162C44 174 30 192 20 208" fill="none" stroke="#3e6a55" stroke-width="4" stroke-linecap="round"/>' +
    '<path d="M96 192L92 226M132 192L136 226" stroke="#14301f" stroke-width="13" stroke-linecap="round"/>' +
    '<path d="M96 192L92 226M132 192L136 226" stroke="#9aa0a9" stroke-width="7" stroke-linecap="round"/>' +
    '<path d="M80 228H98M126 228H146" stroke="#14301f" stroke-width="11" stroke-linecap="round"/>' +
    '<path d="M80 228H98M126 228H146" stroke="#9aa0a9" stroke-width="5" stroke-linecap="round"/>' +
    '<ellipse cx="112" cy="150" rx="62" ry="48" transform="rotate(-8 112 150)" fill="#2d3138" stroke="#14301f" stroke-width="7"/>' +
    '<path d="M70 140C90 120 140 120 160 150C140 176 92 178 70 140Z" fill="#1f2328" opacity=".6"/>' +
    pintas() +
    '<path d="M124 132C134 114 136 92 138 70" fill="none" stroke="#14301f" stroke-width="40" stroke-linecap="round"/>' +
    '<path d="M124 132C134 114 136 92 138 70" fill="none" stroke="#2d3138" stroke-width="28" stroke-linecap="round"/>' +
    '<ellipse cx="132" cy="98" rx="3" ry="4" fill="#f4f1ea"/><ellipse cx="141" cy="110" rx="3" ry="4" fill="#f4f1ea"/><ellipse cx="128" cy="116" rx="3" ry="4" fill="#f4f1ea"/><ellipse cx="140" cy="84" rx="3" ry="4" fill="#f4f1ea"/>' +
    '<circle cx="146" cy="52" r="28" fill="#3a3f47" stroke="#14301f" stroke-width="7"/>' +
    '<path d="M162 76C176 76 180 94 172 108C164 112 156 100 158 86Z" fill="#e63b3b" stroke="#14301f" stroke-width="5" stroke-linejoin="round"/>' +
    '<g class="boca boca-neutro"><path d="M172 42Q198 42 206 60Q190 60 172 56Z" fill="#2b2d33" stroke="#14301f" stroke-width="5" stroke-linejoin="round"/><path d="M174 58Q190 62 204 62" fill="none" stroke="#14301f" stroke-width="4" stroke-linecap="round"/></g>' +
    '<g class="boca boca-feliz"><path d="M172 38Q198 34 208 50Q190 52 172 50Z" fill="#2b2d33" stroke="#14301f" stroke-width="5" stroke-linejoin="round"/><path d="M174 52Q192 54 206 52Q198 68 176 62Z" fill="#ff7a8a" stroke="#14301f" stroke-width="4" stroke-linejoin="round"/><path d="M176 62Q192 74 204 74Q196 62 176 62Z" fill="#2b2d33" stroke="#14301f" stroke-width="4" stroke-linejoin="round"/></g>' +
    '<g class="boca boca-triste"><path d="M172 44Q196 46 204 62Q188 60 172 58Z" fill="#2b2d33" stroke="#14301f" stroke-width="5" stroke-linejoin="round"/><path d="M176 66Q188 62 198 70" fill="none" stroke="#14301f" stroke-width="4" stroke-linecap="round"/></g>' +
    '<g class="olhos"><circle cx="156" cy="48" r="10" fill="#fff" stroke="#14301f" stroke-width="4"/><circle cx="158" cy="49" r="6" fill="#d9342b"/><circle cx="159" cy="49" r="3" fill="#14301f"/><circle cx="160" cy="46" r="1.6" fill="#fff"/></g>' +
    '<path class="cenho" d="M144 34L168 40" stroke="#14301f" stroke-width="5" stroke-linecap="round"/>' +
    '<g class="brilho"><path d="M30 70l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" fill="#ffd23f" stroke="#14301f" stroke-width="3"/><path d="M192 112l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#ff7a59" stroke="#14301f" stroke-width="3"/></g>' +
    '<path class="suor" d="M120 38q9 14 0 22q-9-8 0-22z" fill="#a6e6f2" stroke="#14301f" stroke-width="4"/>' +
    '</g></svg>';
  return MASCOTE;
})();
