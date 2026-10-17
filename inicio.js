/* Página inicial: monta a jacupemba e as letras flutuantes do fundo. */
(function () {
  'use strict';
  var reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.addEventListener('DOMContentLoaded', function () {
    try {
      document.querySelectorAll('[data-mascote]').forEach(function (el) {
        el.innerHTML = window.MASCOTE_SVG || '';
        var svg = el.querySelector('svg');
        if (svg) svg.setAttribute('data-humor', 'feliz');
      });
    } catch (e) { /* sem mascote */ }
    if (reduzir) return;
    var simbolos = 'a b c ç ã é ? ! , . ; : " ... ~ ´ á ô í'.split(' ');
    var fundo = document.getElementById('fundo');
    if (!fundo) return;
    for (var i = 0; i < 22; i++) {
      var s = document.createElement('span');
      s.textContent = simbolos[i % simbolos.length];
      s.style.left = (Math.random() * 96) + '%';
      s.style.fontSize = (40 + Math.random() * 90) + 'px';
      s.style.animationDuration = (40 + Math.random() * 30) + 's';
      s.style.animationDelay = (-Math.random() * 70) + 's';
      s.style.setProperty('--giro-a', (Math.random() * 40 - 20) + 'deg');
      s.style.setProperty('--giro-b', (Math.random() * 120 - 60) + 'deg');
      fundo.appendChild(s);
    }
  });
})();
