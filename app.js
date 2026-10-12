(function () {
  'use strict';

  var TOTAL = 10;
  var TEMPO = 30;
  var LETRAS = ['A', 'B', 'C', 'D'];
  var reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s) { return document.querySelector(s); };

  /* ---------- Armazenamento (pode falhar em janela privada) ---------- */
  function ler(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function gravar(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* sem armazenamento */ } }

  /* ---------- Mascote: uma lupa detetive ---------- */
  var PINTAS = [[96,160],[118,172],[140,158],[84,140],[108,148],[132,138],[154,146],[100,128],[124,122],[138,112],[132,98],[140,86],[130,80],[118,106],[160,162],[78,162],[104,176],[146,130]];
  function pintas() {
    return PINTAS.map(function (q, i) {
      return '<ellipse cx="' + q[0] + '" cy="' + q[1] + '" rx="' + (3 + (i % 3)) + '" ry="' + (4 + (i % 2)) + '" transform="rotate(' + ((i * 37) % 60 - 30) + ' ' + q[0] + ' ' + q[1] + ')" fill="#f4f1ea"/>';
    }).join('');
  }
  var MASCOTE =
    '<svg viewBox="0 0 220 240" data-humor="neutro" role="img" aria-label="Jacupemba, a mascote do jogo">' +
    '<g class="mascote-corpo">' +
    // cauda
    '<path d="M62 150C40 160 22 180 8 214C36 210 62 196 84 176Z" fill="#2d3138" stroke="#14301f" stroke-width="6" stroke-linejoin="round"/>' +
    '<path d="M58 162C44 174 30 192 20 208" fill="none" stroke="#3e6a55" stroke-width="4" stroke-linecap="round"/>' +
    // pernas
    '<path d="M96 192L92 226M132 192L136 226" stroke="#14301f" stroke-width="13" stroke-linecap="round"/>' +
    '<path d="M96 192L92 226M132 192L136 226" stroke="#9aa0a9" stroke-width="7" stroke-linecap="round"/>' +
    '<path d="M80 228H98M126 228H146" stroke="#14301f" stroke-width="11" stroke-linecap="round"/>' +
    '<path d="M80 228H98M126 228H146" stroke="#9aa0a9" stroke-width="5" stroke-linecap="round"/>' +
    // corpo e asa
    '<ellipse cx="112" cy="150" rx="62" ry="48" transform="rotate(-8 112 150)" fill="#2d3138" stroke="#14301f" stroke-width="7"/>' +
    '<path d="M70 140C90 120 140 120 160 150C140 176 92 178 70 140Z" fill="#1f2328" opacity=".6"/>' +
    pintas() +
    // pescoço
    '<path d="M124 132C134 114 136 92 138 70" fill="none" stroke="#14301f" stroke-width="40" stroke-linecap="round"/>' +
    '<path d="M124 132C134 114 136 92 138 70" fill="none" stroke="#2d3138" stroke-width="28" stroke-linecap="round"/>' +
    '<ellipse cx="132" cy="98" rx="3" ry="4" fill="#f4f1ea"/><ellipse cx="141" cy="110" rx="3" ry="4" fill="#f4f1ea"/><ellipse cx="128" cy="116" rx="3" ry="4" fill="#f4f1ea"/><ellipse cx="140" cy="84" rx="3" ry="4" fill="#f4f1ea"/>' +
    // cabeça e crista
    '<circle cx="146" cy="52" r="28" fill="#3a3f47" stroke="#14301f" stroke-width="7"/>' +
    '<path d="M126 36q8-14 20-16M138 30q6-12 18-12M150 28q6-8 14-6" fill="none" stroke="#aeb4bd" stroke-width="5" stroke-linecap="round"/>' +
    // barbela vermelha
    '<path d="M162 76C176 76 180 94 172 108C164 112 156 100 158 86Z" fill="#e63b3b" stroke="#14301f" stroke-width="5" stroke-linejoin="round"/>' +
    // bico
    '<g class="boca boca-neutro"><path d="M172 42Q198 42 206 60Q190 60 172 56Z" fill="#2b2d33" stroke="#14301f" stroke-width="5" stroke-linejoin="round"/><path d="M174 58Q190 62 204 62" fill="none" stroke="#14301f" stroke-width="4" stroke-linecap="round"/></g>' +
    '<g class="boca boca-feliz"><path d="M172 38Q198 34 208 50Q190 52 172 50Z" fill="#2b2d33" stroke="#14301f" stroke-width="5" stroke-linejoin="round"/><path d="M174 52Q192 54 206 52Q198 68 176 62Z" fill="#ff7a8a" stroke="#14301f" stroke-width="4" stroke-linejoin="round"/><path d="M176 62Q192 74 204 74Q196 62 176 62Z" fill="#2b2d33" stroke="#14301f" stroke-width="4" stroke-linejoin="round"/></g>' +
    '<g class="boca boca-triste"><path d="M172 44Q196 46 204 62Q188 60 172 58Z" fill="#2b2d33" stroke="#14301f" stroke-width="5" stroke-linejoin="round"/><path d="M176 66Q188 62 198 70" fill="none" stroke="#14301f" stroke-width="4" stroke-linecap="round"/></g>' +
    // olho
    '<g class="olhos"><circle cx="156" cy="48" r="10" fill="#fff" stroke="#14301f" stroke-width="4"/><circle cx="158" cy="49" r="6" fill="#d9342b"/><circle cx="159" cy="49" r="3" fill="#14301f"/><circle cx="160" cy="46" r="1.6" fill="#fff"/></g>' +
    '<path class="cenho" d="M144 34L168 40" stroke="#14301f" stroke-width="5" stroke-linecap="round"/>' +
    '<g class="brilho"><path d="M30 70l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" fill="#ffd23f" stroke="#14301f" stroke-width="3"/><path d="M192 112l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#ff7a59" stroke="#14301f" stroke-width="3"/></g>' +
    '<path class="suor" d="M120 38q9 14 0 22q-9-8 0-22z" fill="#a6e6f2" stroke="#14301f" stroke-width="4"/>' +
    '</g></svg>';

  function montarMascotes() {
    var alvos = document.querySelectorAll('[data-mascote]');
    for (var i = 0; i < alvos.length; i++) alvos[i].innerHTML = MASCOTE;
  }
  function humor(onde, h) {
    var svg = (onde || document).querySelector('svg');
    if (!svg) return;
    svg.setAttribute('data-humor', h);
    // reinicia as animações do mascote
    var g = svg.querySelector('.mascote-corpo');
    g.style.animation = 'none'; void g.getBoundingClientRect(); g.style.animation = '';
  }

  /* ---------- Fundo com letras flutuando ---------- */
  function montarFundo() {
    if (reduzir) return;
    var simbolos = 'a b c ç ã é ? ! , . ; : " ... ~ ´ á ô í'.split(' ');
    var fundo = $('#fundo');
    for (var i = 0; i < 22; i++) {
      var s = document.createElement('span');
      s.textContent = simbolos[i % simbolos.length];
      s.style.left = (Math.random() * 96) + '%';
      s.style.fontSize = (40 + Math.random() * 90) + 'px';
      s.style.animationDuration = (16 + Math.random() * 18) + 's';
      s.style.animationDelay = (-Math.random() * 30) + 's';
      s.style.setProperty('--giro-a', (Math.random() * 40 - 20) + 'deg');
      s.style.setProperty('--giro-b', (Math.random() * 120 - 60) + 'deg');
      fundo.appendChild(s);
    }
  }

  /* ---------- Som ---------- */
  var ctx = null;
  var mudo = ler('dp-mudo') === '1';
  function bip(notas, dur, tipo, vol) {
    if (mudo) return;
    try {
      ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
      var t = ctx.currentTime;
      notas.forEach(function (f, k) {
        var o = ctx.createOscillator();
        var g = ctx.createGain();
        o.type = tipo || 'triangle';
        o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, t + k * dur);
        g.gain.exponentialRampToValueAtTime(vol || 0.16, t + k * dur + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, t + k * dur + dur);
        o.connect(g); g.connect(ctx.destination);
        o.start(t + k * dur); o.stop(t + k * dur + dur + 0.03);
      });
    } catch (e) { /* sem áudio */ }
  }
  var somAcerto = function () { bip([523, 659, 784, 1047], 0.09); };
  var somErro = function () { bip([220, 165], 0.18, 'sawtooth', 0.1); };
  var somFim = function () { bip([523, 523, 659, 784, 659, 784, 1047], 0.13); };
  var somClique = function () { bip([440], 0.06, 'square', 0.06); };

  function atualizarBotaoSom() {
    var b = $('#btn-som');
    b.setAttribute('aria-pressed', mudo ? 'true' : 'false');
    $('#som-txt').textContent = mudo ? 'Som desligado' : 'Som ligado';
  }

  /* ---------- Confete ---------- */
  var particulas = [];
  var confeteRodando = false;
  function confete(qtd, origemY) {
    if (reduzir) return;
    var c = $('#confete');
    c.width = window.innerWidth; c.height = window.innerHeight;
    var cores = ['#ffd23f', '#ff7a59', '#3fb8a0', '#5fd068', '#2f5d8a', '#ffffff'];
    for (var i = 0; i < qtd; i++) {
      particulas.push({
        x: c.width / 2 + (Math.random() - 0.5) * c.width * 0.4,
        y: c.height * (origemY || 0.4),
        vx: (Math.random() - 0.5) * 16,
        vy: -Math.random() * 15 - 4,
        g: 0.38,
        r: 5 + Math.random() * 6,
        a: Math.random() * 6,
        va: (Math.random() - 0.5) * 0.4,
        cor: cores[i % cores.length],
        vida: 110 + Math.random() * 60
      });
    }
    if (!confeteRodando) { confeteRodando = true; requestAnimationFrame(quadroConfete); }
  }
  function quadroConfete() {
    var c = $('#confete');
    var g = c.getContext('2d');
    g.clearRect(0, 0, c.width, c.height);
    particulas = particulas.filter(function (p) { return p.vida > 0 && p.y < c.height + 30; });
    particulas.forEach(function (p) {
      p.vx *= 0.99; p.vy += p.g; p.x += p.vx; p.y += p.vy; p.a += p.va; p.vida--;
      g.save(); g.translate(p.x, p.y); g.rotate(p.a);
      g.fillStyle = p.cor; g.strokeStyle = '#14301f'; g.lineWidth = 2;
      g.fillRect(-p.r, -p.r / 2, p.r * 2, p.r); g.strokeRect(-p.r, -p.r / 2, p.r * 2, p.r);
      g.restore();
    });
    if (particulas.length) requestAnimationFrame(quadroConfete);
    else { confeteRodando = false; g.clearRect(0, 0, c.width, c.height); }
  }

  /* ---------- Jogo ---------- */
  var st = null;

  function embaralhar(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function mostrar(id) {
    var telas = document.querySelectorAll('.tela');
    for (var i = 0; i < telas.length; i++) telas[i].classList.remove('ativa');
    $('#' + id).classList.add('ativa');
    if (st && id !== 'jogo') cancelAnimationFrame(st.raf);
    var alvoNav = (id === 'jogo' || id === 'fim') ? 'inicio' : id;
    document.querySelectorAll('.nav button').forEach(function (b) {
      if (b.getAttribute('data-ir') === alvoNav) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current');
    });
    window.scrollTo(0, 0);
  }

  function novoJogo(cod) {
    var base = window.QUESTOES.filter(function (q) { return !cod || q.d.cod === cod; });
    var pool = embaralhar(base).slice(0, TOTAL).map(function (q) {
      var alts = embaralhar(q.alts.map(function (t, i) { return { t: t, ok: i === q.certa }; }));
      return { fonte: q.fonte, trecho: q.trecho, pergunta: q.pergunta, d: q.d, alts: alts };
    });
    st = { pool: pool, i: 0, pontos: 0, combo: 0, melhor: 0, acertos: 0, erros: [], trava: false, t0: 0, raf: 0 };
    $('#pontos').textContent = '0';
    mostrar('jogo');
    renderCaso();
  }

  function renderCaso() {
    var q = st.pool[st.i];
    st.trava = false;
    $('#caso-n').textContent = 'Estação ' + (st.i + 1) + ' de ' + st.pool.length;
    $('#progresso').style.width = (st.i / st.pool.length * 100) + '%';
    $('#fonte').textContent = q.fonte;
    $('#trecho').innerHTML = q.trecho.replace(/ ([^ <>]+)$/, ' $1');
    $('#pergunta').textContent = sv(q.pergunta);
    $('#retorno').hidden = true;
    atualizarCombo();

    var box = $('#alts');
    box.innerHTML = '';
    q.alts.forEach(function (a, i) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'alt';
      b.innerHTML = '<span class="letra">' + LETRAS[i] + '</span><span class="alt-txt"></span>';
      b.querySelector('.alt-txt').textContent = sv(a.t);
      b.addEventListener('click', function () { responder(i); });
      box.appendChild(b);
    });

    var cartao = $('#cartao');
    cartao.classList.remove('troca'); void cartao.offsetWidth; cartao.classList.add('troca');
    humor($('#mascote-jogo'), 'neutro');

    $('#barra').style.transform = 'scaleX(1)';
    $('.tempo').classList.remove('aperta');
    $('#tempo-txt').textContent = TEMPO;
    st.t0 = performance.now();
    cancelAnimationFrame(st.raf);
    st.raf = requestAnimationFrame(tick);
  }

  function restante() { return Math.max(0, TEMPO - (performance.now() - st.t0) / 1000); }

  function tick() {
    var r = restante();
    $('#barra').style.transform = 'scaleX(' + (r / TEMPO) + ')';
    $('#tempo-txt').textContent = Math.ceil(r);
    $('.tempo').classList.toggle('aperta', r <= 8);
    if (r <= 0) { responder(-1); return; }
    st.raf = requestAnimationFrame(tick);
  }

  function atualizarCombo() {
    $('#combo').textContent = 'x' + st.combo;
    $('#chip-combo').classList.toggle('quente', st.combo >= 3);
  }
  function pop(el) { el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop'); }

  var ELOGIOS = ['Boa, maquinista!', 'Estação alcançada!', 'Olho de lince!', 'Mandou bem!', 'Na mosca!'];
  var CONSOLOS = ['Quase! O trem segue viagem.', 'Essa foi esperta.', 'Sem problema, a próxima estação é sua!'];
  function sv(t) { return t.replace(/ (\S+)$/, ' $1'); }
  function sorteia(a) { return a[Math.floor(Math.random() * a.length)]; }

  function responder(idx) {
    if (st.trava) return;
    st.trava = true;
    cancelAnimationFrame(st.raf);
    var q = st.pool[st.i];
    var r = restante();
    var acertou = idx >= 0 && q.alts[idx].ok;
    var botoes = document.querySelectorAll('#alts .alt');

    botoes.forEach(function (b, i) {
      b.disabled = true;
      if (q.alts[i].ok) b.classList.add('certa');
      else if (i === idx) b.classList.add('errada');
      else b.classList.add('apagada');
    });

    var tit, txt;
    if (acertou) {
      var ganho = 100 + Math.round(r * 2) + Math.min(st.combo, 5) * 10;
      st.pontos += ganho; st.combo++; st.acertos++;
      if (st.combo > st.melhor) st.melhor = st.combo;
      tit = sorteia(ELOGIOS);
      txt = '+' + ganho + ' pontos.' + (st.combo >= 3 ? ' Combo de ' + st.combo + ' acertos seguidos!' : '');
      humor($('#mascote-jogo'), 'feliz');
      somAcerto();
      confete(70, 0.45);
      $('#pontos').textContent = st.pontos; pop($('#pontos'));
    } else {
      st.combo = 0;
      st.erros.push(q.d);
      tit = idx < 0 ? 'O tempo acabou!' : sorteia(CONSOLOS);
      txt = 'A resposta certa está em verde.';
      humor($('#mascote-jogo'), 'triste');
      somErro();
    }
    atualizarCombo(); pop($('#combo'));
    $('#progresso').style.width = ((st.i + 1) / st.pool.length * 100) + '%';

    $('#retorno-titulo').textContent = tit;
    $('#retorno-texto').textContent = sv(txt + ' Habilidade ' + q.d.cod + ': ' + q.d.txt);
    $('#btn-prox').textContent = st.i === st.pool.length - 1 ? 'Ver o resultado' : 'Próxima estação';
    $('#retorno').hidden = false;
    $('#btn-prox').focus({ preventScroll: true });
    $('#retorno').scrollIntoView({ block: 'nearest', behavior: reduzir ? 'auto' : 'smooth' });
  }

  function proximo() {
    if (!st.trava) return;
    somClique();
    if (st.i >= st.pool.length - 1) { fim(); return; }
    st.i++;
    renderCaso();
  }

  var PATENTES = [
    { min: 10, nome: 'Chefe da Estação', msg: 'Gabaritou! Nenhuma estação passou despercebida.' },
    { min: 7, nome: 'Maquinista de Respeito', msg: 'Você chegou quase sempre na hora certa. Falta pouco pra virar chefe da estação.' },
    { min: 4, nome: 'Maquinista em Treino', msg: 'Bom começo. Com mais um pouco de prática, você chega lá.' },
    { min: 0, nome: 'Passageiro Curioso', msg: 'Todo grande maquinista começou olhando da janela. Embarque de novo!' }
  ];

  function fim() {
    cancelAnimationFrame(st.raf);
    var pat = PATENTES.filter(function (p) { return st.acertos >= p.min; })[0];
    $('#t-fim').textContent = pat.nome;
    $('#fim-resumo').textContent = pat.msg;
    $('#fim-pontos').textContent = st.pontos;
    $('#fim-acertos').textContent = st.acertos + ' de ' + st.pool.length;
    $('#fim-combo').textContent = 'x' + st.melhor;

    var vistos = {}, lista = $('#revise-lista');
    lista.innerHTML = '';
    st.erros.forEach(function (d) {
      if (vistos[d.cod]) return;
      vistos[d.cod] = true;
      var li = document.createElement('li');
      li.innerHTML = '<strong></strong> <span></span>';
      li.querySelector('strong').textContent = d.cod + ':';
      li.querySelector('span').textContent = sv(d.txt);
      lista.appendChild(li);
    });
    $('#revise').hidden = !st.erros.length;

    var rec = parseInt(ler('dp-recorde') || '0', 10);
    if (st.pontos > rec) { gravar('dp-recorde', String(st.pontos)); }

    mostrar('fim');
    humor($('#mascote-fim'), st.acertos >= 7 ? 'feliz' : st.acertos >= 4 ? 'neutro' : 'triste');
    somFim();
    if (st.acertos >= 7) { confete(180, 0.35); setTimeout(function () { confete(140, 0.5); }, 600); }
    mostrarRecorde();
  }

  function mostrarRecorde() {
    var rec = parseInt(ler('dp-recorde') || '0', 10);
    var el = $('#recorde');
    if (rec > 0) { el.hidden = false; el.textContent = 'Seu recorde: ' + rec + ' pontos'; }
  }

  /* ---------- Eventos ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    montarMascotes();
    document.querySelectorAll('.pagina p, .pagina li, .pagina dd, .pagina h3, .pagina h4, .pagina small, .lead, .dica').forEach(function (el) {
      var w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT), ultimo = null, n;
      while ((n = w.nextNode())) { if (n.textContent.trim()) ultimo = n; }
      if (ultimo) ultimo.textContent = ultimo.textContent.replace(/ ([^ ]+)(\s*)$/, ' $1$2');
    });
    montarFundo();
    atualizarBotaoSom();
    mostrarRecorde();
    humor($('#inicio'), 'feliz');

    $('#btn-comecar').addEventListener('click', function () { somClique(); novoJogo(); });
    document.querySelectorAll('[data-ir]').forEach(function (b) {
      b.addEventListener('click', function () { somClique(); mostrar(b.getAttribute('data-ir')); });
    });
    document.querySelectorAll('.treinar').forEach(function (b) {
      b.addEventListener('click', function () { somClique(); novoJogo(b.getAttribute('data-cod')); });
    });
    $('#btn-again').addEventListener('click', function () { somClique(); novoJogo(); });
    $('#btn-prox').addEventListener('click', proximo);
    $('#btn-som').addEventListener('click', function () {
      mudo = !mudo; gravar('dp-mudo', mudo ? '1' : '0'); atualizarBotaoSom(); somClique();
    });

    document.addEventListener('keydown', function (e) {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (!$('#jogo').classList.contains('ativa') || !st) return;
      var k = e.key.toLowerCase();
      var idx = 'abcd'.indexOf(k);
      if (idx < 0 && /^[1-4]$/.test(k)) idx = parseInt(k, 10) - 1;
      if (idx >= 0 && !st.trava) { e.preventDefault(); responder(idx); return; }
      if ((e.key === 'Enter' || e.key === ' ') && st.trava && document.activeElement.tagName !== 'BUTTON') {
        e.preventDefault(); proximo();
      }
    });
    window.addEventListener('resize', function () {
      var c = $('#confete'); c.width = window.innerWidth; c.height = window.innerHeight;
    });
  });
})();
