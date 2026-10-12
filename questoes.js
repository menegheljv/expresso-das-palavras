/* Questões de Língua Portuguesa do 9º ano.
   Fontes: Preparatório SAEB 9º Ano 2025 (SEDUC) e Coletânea de Itens Paebes 2024 (SEDU-ES, CAEd/UFJF).
   "est" é a estação (1 a 3, da mais fácil à mais difícil). "certa" é o índice da alternativa correta.
   "d" é o descritor/habilidade cobrado. "img" é opcional (arquivo em img/). */
window.ESTACOES = {
  1: { nome: 'Saída tranquila', sub: 'Tema, gênero e linguagem do dia a dia', nivel: 1, rotulo: 'Fácil' },
  2: { nome: 'Serra acima', sub: 'Sentido das palavras, coesão e causa', nivel: 2, rotulo: 'Médio' },
  3: { nome: 'Fim da linha', sub: 'Opinião, argumentos, figuras e poemas', nivel: 3, rotulo: 'Difícil' }
};

var D = {
  D1: { cod: 'D1', txt: 'Localizar informação explícita em um texto.' },
  D2: { cod: 'D2', txt: 'Estabelecer relações entre partes de um texto, identificando repetições ou substituições que contribuem para a continuidade de um texto.' },
  D3: { cod: 'D3', txt: 'Inferir o sentido de palavras ou expressões em textos.' },
  D4: { cod: 'D4', txt: 'Inferir informações implícitas em textos.' },
  D5: { cod: 'D5', txt: 'Interpretar texto com auxílio de material gráfico diverso (propagandas, quadrinhos, foto etc.).' },
  D6: { cod: 'D6', txt: 'Identificar o tema de um texto.' },
  D7: { cod: 'D7', txt: 'Identificar a tese de um texto.' },
  D8: { cod: 'D8', txt: 'Estabelecer relação entre a tese e os argumentos oferecidos para sustentá-la.' },
  D10: { cod: 'D10', txt: 'Identificar o conflito gerador do enredo e os elementos que constroem a narrativa.' },
  D11: { cod: 'D11', txt: 'Estabelecer relação de causa/consequência entre partes e elementos do texto.' },
  D12: { cod: 'D12', txt: 'Identificar a finalidade de textos de diferentes gêneros.' },
  D13: { cod: 'D13', txt: 'Identificar as marcas linguísticas que evidenciam o locutor e o interlocutor de um texto.' },
  D14: { cod: 'D14', txt: 'Distinguir um fato da opinião relativa a esse fato.' },
  D15: { cod: 'D15', txt: 'Estabelecer relações lógico-discursivas presentes no texto, marcadas por conjunções, advérbios etc.' },
  D17: { cod: 'D17', txt: 'Reconhecer o efeito de sentido decorrente do uso da pontuação e de outras notações.' },
  D18: { cod: 'D18', txt: 'Reconhecer o efeito de sentido decorrente da escolha de uma determinada palavra ou expressão.' },
  D19: { cod: 'D19', txt: 'Reconhecer o efeito de sentido decorrente da exploração de recursos ortográficos e/ou morfossintáticos.' },
  D20: { cod: 'D20', txt: 'Reconhecer diferentes formas de tratar uma informação na comparação de textos que tratam do mesmo tema, em função das condições em que ele foi produzido e daquelas em que será recebido.' },
  GEN: { cod: 'SAEGO', txt: 'Reconhecer o gênero de um texto.' },
  MOD: { cod: 'EF89LP16', txt: 'Analisar a modalização realizada em textos noticiosos e argumentativos.' },
  P016: { cod: 'D016_P', txt: 'Identificar a finalidade de textos de diferentes gêneros.' },
  P017: { cod: 'D017_P', txt: 'Identificar o gênero de textos variados.' },
  P021: { cod: 'D021_P', txt: 'Localizar informações explícitas em um texto.' },
  P022: { cod: 'D022_P', txt: 'Inferir o sentido de uma palavra ou expressão.' },
  P023: { cod: 'D023_P', txt: 'Inferir uma informação implícita em um texto.' },
  P024: { cod: 'D024_P', txt: 'Identificar efeitos de ironia ou humor em textos variados.' },
  P025: { cod: 'D025_P', txt: 'Reconhecer o efeito de sentido decorrente do uso da pontuação e de outras notações.' },
  P028: { cod: 'D028_P', txt: 'Identificar o tema de um texto.' },
  P030: { cod: 'D030_P', txt: 'Identificar o conflito gerador do enredo e os elementos que constroem a narrativa.' },
  P032: { cod: 'D032_P', txt: 'Identificar a tese de um texto.' },
  P103: { cod: 'D103_P', txt: 'Identificar as marcas linguísticas que evidenciam o locutor e o interlocutor de um texto.' }
};

window.QUESTOES = [
  /* ============ ESTAÇÃO 1: FÁCIL ============ */
  {
    est: 1, fonte: 'Conto "Massa boa é massa fresca"',
    trecho: 'Certa vez, enquanto o menino brincava no balcão e seu pai assumia as caçarolas, um turista que degustava a massa viu um ratinho passar no salão. "O que é isso?!", exclamou o cliente.',
    pergunta: 'De acordo com o texto, o cliente se assustou ao',
    alts: ['observar o menino brincar no balcão.', 'atentar para a resposta do italiano.', 'notar o pai assumir as caçarolas.', 'ver um ratinho passar no salão.'],
    certa: 3, d: D.D1
  },
  {
    est: 1, fonte: 'Anúncio da Lacta', img: 'anuncio-lacta.jpg',
    alt: 'Anúncio com uma boca aberta e a frase "Fechada. Aberta. Fechada. Aberta. Fechada. Aberta. 5 novidades para deixar você de boca aberta", com produtos da marca Lacta.',
    pergunta: 'O anúncio fala principalmente sobre',
    alts: ['o cozimento do chocolate.', 'os movimentos da boca.', 'os ingredientes do chocolate.', 'o produto de uma marca específica.'],
    certa: 3, d: D.D6
  },
  {
    est: 1, fonte: 'Anúncio da Lacta', img: 'anuncio-lacta.jpg',
    alt: 'Anúncio com uma boca aberta e a frase "Fechada. Aberta. Fechada. Aberta. Fechada. Aberta. 5 novidades para deixar você de boca aberta", com produtos da marca Lacta.',
    pergunta: 'Qual é a finalidade desse gênero textual?',
    alts: ['Listar ingredientes culinários.', 'Descrever o movimento da boca.', 'Explicar como se faz um chocolate.', 'Persuadir o leitor a comprar um chocolate.'],
    certa: 3, d: D.D12
  },
  {
    est: 1, fonte: 'Tirinha do Armandinho, de Beck', img: 'tirinha-rio.jpg',
    alt: 'Tirinha em quadrinhos em que um menino indígena conversa com Armandinho sobre a origem da palavra "carioca", terminando com uma imagem do Pão de Açúcar.',
    pergunta: 'O gênero desse texto é um(a)',
    alts: ['conto.', 'tirinha.', 'charge.', 'carta do leitor.'],
    certa: 1, d: D.GEN
  },
  {
    est: 1, fonte: 'Tirinha da Turma da Mônica, de Maurício de Sousa', img: 'tirinha-ze-lele.jpg',
    alt: 'Tirinha em preto e branco: um menino pendurado no galho de uma árvore diz "Ô Zé Lelé! Num fica aí parado! Faz alguma coisa!", enquanto o outro menino brinca com uma bola.',
    pergunta: 'O trecho "Num fica aí parado!" é um exemplo de linguagem',
    alts: ['científica.', 'coloquial.', 'técnica.', 'formal.'],
    certa: 1, d: D.D13
  },
  {
    est: 1, fonte: 'Conto "O sonho de José"',
    trecho: 'Os dois cuidaram de ir até a casa da avó e lá conseguiram um baú daqueles bem antigos, para que pudesse ser levado a todos os cantos. José voltava para casa cheio de sonhos, e lá estava ele abrindo o seu baú com novas historinhas para contar.',
    pergunta: 'Essa história termina quando',
    alts: ['José abre a caixa de livros.', 'José senta na calçada e conta histórias.', 'José sobe na sua bicicleta.', 'José volta para a casa e abre seu baú.'],
    certa: 3, d: D.P030
  },
  {
    est: 1, fonte: 'Fábula "A Pomba e a Formiga"',
    trecho: '"Uma boa ação se paga com outra." Uma pomba viu uma formiga em perigo no rio e jogou uma folha para salvá-la. Mais tarde, a formiga mordeu o calcanhar de um caçador para salvar a pomba.',
    pergunta: 'Esse texto é',
    alts: ['um bilhete.', 'um relato.', 'uma biografia.', 'uma fábula.'],
    certa: 3, d: D.P017
  },
  {
    est: 1, fonte: 'Texto "Como funciona o olfato dos cães?"',
    trecho: 'De todos os 5 sentidos de um cão (olfato, audição, visão, paladar e tato), o olfato é o mais desenvolvido. Os cães têm cerca de 25 vezes mais receptores olfativos do que os seres humanos.',
    pergunta: 'Qual é o assunto desse texto?',
    alts: ['A respiração dos cães.', 'As irritações que os cães sofrem devido a odores.', 'O sistema olfativo dos cães.', 'Os perfumes mais usados pelos donos de cães.'],
    certa: 2, d: D.P028
  },
  {
    est: 1, fonte: 'Livro "O Menino Maluquinho", de Ziraldo',
    trecho: 'Vamos levar pro salão!',
    pergunta: 'No trecho, foi utilizada a linguagem',
    alts: ['científica.', 'informal.', 'regional.', 'técnica.'],
    certa: 1, d: D.P103
  },
  {
    est: 1, fonte: 'Piada "Papagaio bilíngue"',
    trecho: 'Um homem encontrou o amigo com um papagaio no ombro. O amigo disse: "Quando se levanta a perna esquerda dele, ele fala inglês. E quando se levanta a perna direita, fala espanhol." O homem perguntou: "E o que acontece se levantar as duas pernas?" O papagaio respondeu: "Aí eu caio!"',
    pergunta: 'Nesse texto, o humor está no fato de',
    alts: ['o amigo achar que o papagaio é uma ave interessante.', 'o homem andar com um papagaio em seu ombro.', 'o papagaio afirmar que cai se levantar as duas pernas.', 'o papagaio ter a beleza elogiada pelo amigo.'],
    certa: 2, d: D.P024
  },
  /* ============ ESTAÇÃO 2: MÉDIO ============ */
  {
    est: 2, fonte: 'Campanha de doação de sangue (Ministério da Saúde)',
    trecho: 'Para doar sangue, é preciso ter de 16 a 69 anos, desde que a primeira doação tenha sido feita até 60 anos.',
    pergunta: 'Nesse trecho, a linguagem utilizada é',
    alts: ['formal.', 'regional.', 'científica.', 'coloquial.'],
    certa: 0, d: D.D13
  },
  {
    est: 2, fonte: 'Notícia da campanha e cartaz de doação de sangue', img: 'cartaz-sangue.jpg',
    alt: 'Cartaz de campanha com uma mulher apontando para o braço e o texto "Salve até 4 vidas com um gesto. Doe sangue. Procure um hemocentro", do Ministério da Saúde.',
    trecho: 'Texto 1: o Ministério da Saúde lançou uma campanha com o lema "Doe Sangue Regularmente, com a Nossa União a Vida se Completa". Texto 2: o cartaz abaixo.',
    pergunta: 'Qual é a informação em comum nesses textos?',
    alts: ['A campanha de doação de sangue.', 'Os requisitos para a doação de sangue.', 'A campanha de vacinação em crianças.', 'A importância de as mulheres doarem sangue.'],
    certa: 0, d: D.D20
  },
  {
    est: 2, fonte: 'Carta aberta "O Rio é a primeira fronteira"',
    trecho: 'Os signatários desta mensagem têm a certeza de que o turismo é a <mark>alavanca</mark> para o resgate da cidade, e estão trabalhando intensamente para isso.',
    pergunta: 'Nesse trecho, a palavra em destaque significa',
    alts: ['peça.', 'máquina.', 'incentivo.', 'enfraquecimento.'],
    certa: 2, d: D.D3
  },
  {
    est: 2, fonte: 'Crônica "O craque sem idade", de Nelson Rodrigues',
    trecho: 'Súbito, o alto-falante do estádio se põe a anunciar as duas substituições brasileiras: entravam Zizinho e Walter. Foi uma transfiguração. Ninguém <mark>ligou</mark> para Walter, que é um craque, sim, mas sem a tradição, sem a legenda, sem a pompa de um Ziza.',
    pergunta: 'O termo em destaque é utilizado com o sentido de',
    alts: ['unir.', 'telefonar.', 'pôr em funcionamento.', 'atribuir importância.'],
    certa: 3, d: D.P022
  },
  {
    est: 2, fonte: 'Texto "Como o beija-flor fica suspenso no ar?"',
    trecho: 'Mas o <mark>bichinho</mark> desloca-se para a frente e para trás alterando a potência em cada uma das fases da batida.',
    pergunta: 'A palavra bichinho foi usada, no diminutivo, intencionalmente. Qual foi essa intenção?',
    alts: ['Apresentar ironia.', 'Revelar afetividade.', 'Indicar depreciação.', 'Determinar o tamanho.'],
    certa: 1, d: D.D19
  },
  {
    est: 2, fonte: 'Crônica "Onde já se viu?", de Tatiana Belinky',
    trecho: 'Eu já ia abrindo a bolsa para livrar-me logo <mark>dele</mark>, quando o garoto disse: "Escuta, tia..."',
    pergunta: 'A palavra destacada se refere ao',
    alts: ['livro.', 'menino.', 'dinheiro.', 'vendedor.'],
    certa: 1, d: D.D2
  },
  {
    est: 2, fonte: 'Notícia "Filtro do TikTok reaquece debate"',
    trecho: '... o TikTok criou um filtro chamado "My New Twin", <mark>que</mark> vem sendo chamado de "galã de novela", por transformar o rosto do usuário em uma imagem de modelos...',
    pergunta: 'O termo em destaque pode ser substituído, sem alteração de sentido, por',
    alts: ['cujo.', 'onde.', 'quem.', 'o qual.'],
    certa: 3, d: D.D2
  },
  {
    est: 2, fonte: 'Conto "O caso das amoras pretas", de Agatha Christie',
    trecho: 'Mas naquela noite de segunda, ele pediu sopa cremosa de tomate, bife torta de miúdos e torta de <mark>amoras!</mark> Parecia que ele não tinha percebido o que <mark>pedira!</mark>',
    pergunta: 'O uso do ponto de exclamação nesse trecho',
    alts: ['denota indignação e dúvida.', 'manifesta felicidade e surpresa.', 'demonstra alegria e satisfação.', 'expressa espanto e incredulidade.'],
    certa: 3, d: D.D17
  },
  {
    est: 2, fonte: 'Conto "O caso das amoras pretas", de Agatha Christie',
    trecho: 'Ao chegar em casa, o detetive consultou a lista de obituário das últimas semanas e escolheu um nome para iniciar a investigação. Mais tarde ele já estava cara a cara com o médico do morto.',
    pergunta: 'No texto, Poirot procurou um médico porque',
    alts: ['desconfiou que um homem havia sido assassinado.', 'visitou um amigo doente e queria saber detalhes.', 'sentiu dores e achou que estava doente.', 'jantou com um amigo e passou mal.'],
    certa: 0, d: D.D11
  },
  {
    est: 2, fonte: 'Peça publicitária sobre adoção', img: 'anuncio-adocao.jpg',
    alt: 'Peça com um casal de idosos abraçando uma jovem e o texto "Adoção. Pra encontrar a sua verdadeira família, não existe idade."',
    pergunta: 'Qual é a finalidade desse texto?',
    alts: ['Instruir sobre a adoção.', 'Narrar uma história de adoção.', 'Apresentar e defender a adoção.', 'Conscientizar a população sobre a adoção.'],
    certa: 3, d: D.D12
  },
  /* ============ ESTAÇÃO 3: DIFÍCIL ============ */
  {
    est: 3, fonte: 'Anúncio da Lacta', img: 'anuncio-lacta.jpg',
    alt: 'Anúncio com uma boca aberta e a frase "Fechada. Aberta. Fechada. Aberta. Fechada. Aberta. 5 novidades para deixar você de boca aberta", com produtos da marca Lacta.',
    pergunta: 'Na frase "Fechada. Aberta. Fechada. Aberta. Fechada. Aberta.", a repetição de palavras foi empregada com a intenção de',
    alts: ['sugerir um estilo comum de escrita.', 'apresentar uma sequência de ideias.', 'expor a pressa do autor ao construir o texto.', 'criar efeito de sentido e persuadir o consumidor.'],
    certa: 3, d: D.D19
  },
  {
    est: 3, fonte: 'Cartaz sobre leitura', img: 'cartaz-leitura.jpg',
    alt: 'Ilustração de um homem sentado numa poltrona verde lendo um livro, com o texto "Às vezes você pega um livro, às vezes um livro te pega".',
    pergunta: 'O verbo pegar, na expressão "às vezes um livro te pega", provoca o seguinte efeito de sentido:',
    alts: ['segurar, agarrar algo.', 'colar, fazer aderência.', 'tomar algo pelas mãos.', 'envolver emocionalmente.'],
    certa: 3, d: D.D18
  },
  {
    est: 3, fonte: 'Conto "O caso das amoras pretas", de Agatha Christie',
    trecho: '"As mulheres até gostam de variar, mas os homens geralmente pedem a mesma coisa", disse Molly.',
    pergunta: 'Qual trecho do conto tem, predominantemente, uma opinião?',
    alts: [
      '"Três semanas depois, Poirot e Bonnington encontraram-se no metrô."',
      '"... ele pediu sopa cremosa de tomate, bife torta de miúdos e torta de amoras!"',
      '"As mulheres até gostam de variar, mas os homens geralmente pedem a mesma coisa."',
      '"O detetive Hercule Poirot jantava com seu amigo Henry Bonnington no restaurante Gallant Endeavour."'
    ],
    certa: 2, d: D.D14
  },
  {
    est: 3, fonte: 'Notícia "Filtro do TikTok reaquece debate"',
    trecho: '"Muitos pacientes chegam ao consultório buscando alterar tantos pontos da aparência e é necessário identificar esses distúrbios para o encaminhamento correto ao psiquiatra", avaliou a cirurgiã plástica.',
    pergunta: 'Esse trecho é um tipo de argumento de',
    alts: ['autoridade.', 'comparação.', 'exemplificação.', 'alusão histórica.'],
    certa: 0, d: D.D8
  },
  {
    est: 3, fonte: 'Artigo "Adoção, um ato de amor"',
    trecho: 'O artigo traz dados do Cadastro Nacional de Adoção, histórias e argumentos para defender a adoção tardia.',
    pergunta: 'Em qual trecho predomina um argumento de senso comum?',
    alts: [
      '"Ocorre que 90% das crianças, mais precisamente 8.201, estão na faixa da adoção tardia."',
      '"É fundamental chamar a atenção para as crianças e adolescentes que não se enquadram nos perfis mais desejados."',
      '"É no convívio familiar que aprendemos, um com o outro, a respeitar, partilhar, ter compromisso, disciplina e lidar com conflitos."',
      '"... só 3% de pais pretendentes aceitam receber filhos adotivos acima de dois anos de idade, ou seja, os que estão na adoção tardia."'
    ],
    certa: 2, d: D.D8
  },
  {
    est: 3, fonte: 'Notícia "Filtro do TikTok reaquece debate"',
    trecho: '"Muitos pacientes chegam ao consultório buscando alterar tantos pontos da aparência e <mark>é necessário</mark> identificar esses distúrbios para o encaminhamento correto ao psiquiatra."',
    pergunta: 'A expressão destacada, nesse texto, é um modalizador de',
    alts: ['obrigação.', 'permissão.', 'necessidade.', 'possibilidade.'],
    certa: 2, d: D.MOD
  },
  {
    est: 3, fonte: 'Poema "Fanatismo", de Florbela Espanca',
    trecho: 'Ah! podem voar mundos, morrer astros, / Que tu és como Deus: princípio e fim!...',
    pergunta: 'No verso "Ah! podem voar mundos, morrer astros," há uma figura de linguagem. Qual é?',
    alts: ['Metáfora.', 'Hipérbole.', 'Paradoxo.', 'Prosopopeia.'],
    certa: 1, d: D.D18
  },
  {
    est: 3, fonte: 'Poema "Fanatismo", de Florbela Espanca',
    trecho: 'Tudo no mundo é frágil, tudo passa... / Quando me dizem isto, toda a graça / Duma boca divina fala em mim! / E, olhos postos em ti, digo de rastros: / "Ah! podem voar mundos, morrer astros, / Que tu és como Deus: princípio e fim!..."',
    pergunta: 'Ao final do poema, entende-se que o eu poético',
    alts: ['enxerga o ser amado de forma simples.', 'volta-se para Deus como a pessoa amada.', 'se prende à pessoa amada de forma bem intensa.', 'compreende o amor como uma emoção sem valor.'],
    certa: 2, d: D.D4
  },
  {
    est: 3, fonte: 'Poema "E então você chegou", de Ana Martins Marques',
    trecho: 'E então você chegou / como quem deixa cair / sobre um mapa / esquecido aberto sobre a mesa / um pouco de café uma gota de mel / [...] preenchendo / por descuido / um qualquer lugar até então / deserto',
    pergunta: 'Entende-se desse texto que o eu lírico',
    alts: ['esqueceu de adoçar o café que estava tomando.', 'ficou satisfeito com a chegada de alguém em sua vida.', 'procurou um mapa para fazer uma viagem.', 'sentiu tristeza por sujar a sua mesa.'],
    certa: 1, d: D.P023
  },
  {
    est: 3, fonte: 'Texto "Livro físico ou digital?", de Rodrigo Casarin',
    trecho: 'De tempos em tempos, uma discussão assombra as redes de leitores brasileiros: o que é melhor, ler um livro físico ou um livro digital? [...] Passando a régua, chegamos à conclusão óbvia: cada lado tem sua razão.',
    pergunta: 'A tese desse texto está no trecho:',
    alts: [
      '"Fico abismado com a quantidade de tempo, dados de internet..." (1º parágrafo)',
      '"... o mais importante do livro é o conteúdo, não o formato." (1º parágrafo)',
      '"Na hora de viajar, sempre carrego um aparelho cheio de e-books ainda não lidos..." (3º parágrafo)',
      '"... como se não houvesse coisa mais importante para gastarmos nossa palavra e energia." (5º parágrafo)'
    ],
    certa: 1, d: D.P032
  }
];
