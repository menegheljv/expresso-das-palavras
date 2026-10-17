/* Questões de Língua Portuguesa do 9º ano.
   Fontes: Preparatório SAEB 9º Ano 2025 (SEDUC) e Coletânea de Itens Paebes 2024 (SEDU-ES, CAEd/UFJF).
   "est" é a estação (1 a 3, da mais fácil à mais difícil). "certa" é o índice da alternativa correta.
   "d" é o descritor/habilidade cobrado. "img" é opcional (arquivo em img/). */
window.TURMA = { id: '9', nome: '9º ano', tempo: 60, storage: 'dp' };

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
    est: 1, fonte: 'Reportagem sobre o Museu Florestal, em São Paulo',
    trecho: 'O museu tem um acervo com madeiras, frutos e sementes de árvores do Brasil. "A ideia é manter um registro dessas espécies caso elas sejam extintas", diz Roselaine Machado, responsável pela instituição.',
    pergunta: 'De acordo com o texto, o museu foi criado para',
    alts: ['estudar um momento da história brasileira.', 'fazer o cultivo de espécies vegetais curiosas.', 'registrar árvores que podem ser extintas.', 'valorizar a vegetação do estado de São Paulo.'],
    certa: 2, d: D.P021
  },
  {
    est: 1, fonte: 'Texto "Anne e a Casa dos Sonhos"',
    trecho: '"Anne e a Casa dos Sonhos" é o quinto livro da série Anne de Green Gables. Mais uma vez somos encantados com o jeito particular e incrível de Anne de construir laços tão intensos em qualquer lugar que ela vai. Os personagens são ótimos e muito bem desenvolvidos, nos levando a torcer para que tudo dê certo no final.',
    pergunta: 'Esse texto é',
    alts: ['uma carta.', 'uma crônica.', 'uma notícia.', 'uma resenha.'],
    certa: 3, d: D.P017
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
    est: 1, fonte: 'Piada "Papagaio bilíngue"',
    trecho: 'Um homem encontrou o amigo com um papagaio no ombro. O amigo disse: "Quando se levanta a perna esquerda dele, ele fala inglês. E quando se levanta a perna direita, fala espanhol." O homem perguntou: "E o que acontece se levantar as duas pernas?" O papagaio respondeu: "Aí eu caio!"',
    pergunta: 'Nesse texto, o humor está no fato de',
    alts: ['o amigo achar que o papagaio é uma ave interessante.', 'o homem andar com um papagaio em seu ombro.', 'o papagaio afirmar que cai se levantar as duas pernas.', 'o papagaio ter a beleza elogiada pelo amigo.'],
    certa: 2, d: D.P024
  },
  /* ============ ESTAÇÃO 2: MÉDIO ============ */
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
  /* ---- Texto inteiro (Estação 2): 3 perguntas sobre a crônica, na ordem e com as letras do Listão do professor ---- */,
  {
    est: 2, grupo: 'belinky', fonte: 'Crônica "Onde já se viu?", de Tatiana Belinky',
    pergunta: 'Qual fato ou situação foi o ponto de partida da crônica de Tatiana Belinky?',
    alts: ['A presença de um menino de rua em uma livraria pedindo um livro.', 'A narradora se surpreender com um menino de rua.', 'O vendedor desconfiar de um pedido da narradora.', 'O menino sair correndo da livraria.'],
    certa: 0, listao: { n: 15, gab: 'A' }, d: D.D10
  },
  {
    est: 2, grupo: 'belinky', fonte: 'Crônica "Onde já se viu?", de Tatiana Belinky',
    trecho: 'Eu já ia abrindo a bolsa para livrar-me logo <mark>dele</mark>, quando o garoto disse:',
    pergunta: 'No trecho, a palavra destacada se refere ao',
    alts: ['livro.', 'menino.', 'dinheiro.', 'vendedor.'],
    certa: 1, listao: { n: 16, gab: 'B' }, d: D.D2
  },
  {
    est: 2, grupo: 'belinky', fonte: 'Crônica "Onde já se viu?", de Tatiana Belinky',
    pergunta: 'A crônica que você leu foi escrita para',
    alts: ['relatar o comportamento desconfiado do vendedor da livraria.', 'mostrar, de forma crítica, o problema das crianças menos favorecidas.', 'descrever a admiração das pessoas que se encontravam na livraria.', 'refletir, de forma poética, sobre uma situação, despertando a emoção no leitor.'],
    certa: 3, listao: { n: 19, gab: 'D' }, d: D.D12
  },
  /* ---- Texto inteiro (Estação 1): 3 perguntas, ordem e letras do Listão do professor (questões 12, 13 e 14) ---- */
  {
    est: 1, grupo: 'sangue', fonte: 'Notícia e cartaz sobre doação de sangue',
    pergunta: 'Qual é a informação em comum nesses textos?',
    alts: ['A campanha de doação de sangue.', 'Os requisitos para a doação de sangue.', 'A campanha de vacinação em crianças.', 'A importância de as mulheres doarem sangue.'],
    certa: 0, listao: { n: 12, gab: 'A' }, d: D.D20
  },
  {
    est: 1, grupo: 'sangue', fonte: 'Notícia e cartaz sobre doação de sangue',
    pergunta: 'Esses dois textos apresentam ideias',
    alts: ['contrárias.', 'incoerentes.', 'semelhantes.', 'complementares.'],
    certa: 2, listao: { n: 13, gab: 'C' }, d: { cod: 'D21', txt: 'Reconhecer posições distintas entre duas ou mais opiniões relativas ao mesmo fato ou ao mesmo tema.' }
  },
  {
    est: 1, grupo: 'sangue', fonte: 'Notícia e cartaz sobre doação de sangue',
    trecho: 'Para doar sangue, é preciso ter de 16 a 69 anos, desde que a primeira doação tenha sido feita até 60 anos.',
    pergunta: 'No Texto 1, nesse trecho do 2º parágrafo, a linguagem utilizada é',
    alts: ['formal.', 'regional.', 'científica.', 'coloquial.'],
    certa: 0, listao: { n: 14, gab: 'A' }, d: D.D13
  },
  /* ---- Texto inteiro (Estação 3): 3 perguntas, ordem e letras do Listão do professor (questões 6, 7 e 8) ---- */
  {
    est: 3, grupo: 'tiktok', fonte: 'Notícia "Filtro do TikTok reaquece debate sobre os distúrbios de imagem"',
    trecho: '"Muitos pacientes chegam ao consultório buscando alterar tantos pontos da aparência e é necessário identificar esses distúrbios para o encaminhamento correto ao psiquiatra", avaliou a cirurgiã plástica.',
    pergunta: 'Esse trecho é um tipo de argumento de',
    alts: ['autoridade.', 'comparação.', 'exemplificação.', 'alusão histórica.'],
    certa: 0, listao: { n: 6, gab: 'A' }, d: D.D8
  },
  {
    est: 3, grupo: 'tiktok', fonte: 'Notícia "Filtro do TikTok reaquece debate sobre os distúrbios de imagem"',
    trecho: '"Muitos pacientes chegam ao consultório buscando alterar tantos pontos da aparência e <mark>é necessário</mark> identificar esses distúrbios para o encaminhamento correto ao psiquiatra", avaliou.',
    pergunta: 'A expressão destacada, nesse texto, é um modalizador de',
    alts: ['obrigação.', 'permissão.', 'necessidade.', 'possibilidade.'],
    certa: 2, listao: { n: 7, gab: 'C' }, d: D.MOD
  },
  {
    est: 3, grupo: 'tiktok', fonte: 'Notícia "Filtro do TikTok reaquece debate sobre os distúrbios de imagem"',
    trecho: '"Nessa fase da vida, a autoestima ainda depende muito de uma boa aparência, logo, aparecer bem nas selfies torna-se quase que uma obrigação. Há <mark>também</mark> o desejo de receber \'likes\' e obter mais \'seguidores\' nas mídias sociais, <mark>já que</mark> os adolescentes pensam nisso como sua posição social. No total, esses fatores motivam muitos jovens a querer se submeter à cirurgia plástica", explica.',
    pergunta: 'Os termos em destaque estabelecem, respectivamente, uma relação de',
    alts: ['causa e condição.', 'adição e oposição.', 'finalidade e causa.', 'adição e explicação.'],
    certa: 3, listao: { n: 8, gab: 'D' }, d: D.D15
  }
];

window.TEXTOS = {
  sangue: {
    titulo: 'Campanha de doação de sangue',
    autor: 'Texto 1: notícia da Agência Brasil. Texto 2: cartaz da campanha',
    origem: 'Como aparecem no Preparatório SAEB 9º ano 2025 (SEDUC).',
    imagem: 'cartaz-sangue.jpg',
    imagemAlt: 'Cartaz com uma mulher apontando para o braço e o texto "Salve até 4 vidas com um gesto. Doe sangue. Procure um hemocentro", do Ministério da Saúde.',
    rotuloImagem: 'Texto 2',
    paragrafos: [
      '#Texto 1',
      'Ministério da Saúde lança campanha de doação de sangue',
      'Lançamento ocorre no Dia Mundial do Doador de Sangue',
      'Com o lema Doe Sangue Regularmente, com a Nossa União a Vida se Completa, o Ministério da Saúde lançou hoje (14) uma campanha para incentivar a população a doar sangue regularmente. [...]',
      'Para doar sangue, é preciso ter de 16 a 69 anos, desde que a primeira doação tenha sido feita até 60 anos (menores de 18 anos devem apresentar consentimento formal do responsável legal); pesar no mínimo 50 quilos; e estar alimentado. No dia da coleta, o doador não deve ingerir alimentos gordurosos antes da doação; deve ter dormido pelo menos seis horas nas últimas 24 horas; e apresentar documento oficial de identificação com foto.',
      'Uma única doação de sangue, de 450 mililitros, é suficiente para salvar a vida de até 4 pessoas. Além disso, essa quantidade é reposta no organismo em 24 horas.',
      '[...]'
    ]
  },
  tiktok: {
    titulo: 'Filtro do TikTok reaquece debate sobre os distúrbios de imagem',
    autor: 'Gabriel Ferneda, da CNN, em São Paulo',
    origem: 'Notícia como aparece no Preparatório SAEB 9º ano 2025 (SEDUC).',
    paragrafos: [
      'Brazilian Association of Plastic Surgeons disse que situação agrava pacientes com transtorno dismórfico corporal',
      'O crescente número de cirurgias plásticas vem levantando um debate sobre distúrbios de imagem na sociedade contemporânea.',
      'Segundo a Sociedade Brasileira de Cirurgia Plástica (SBCP), foram feitas 1.306.962 intervenções cirúrgicas estéticas no Brasil em 2023, contra 459 mil entre 2007 e 2008.',
      'Segundo a Brazilian Association of Plastic Surgeons (BAPS), um dos vilões de doenças e distúrbios de imagem são as redes sociais.',
      'Um estudo da BAPS mostrou que as mídias sociais agravam um problema que atinge mais de 4 milhões de brasileiros de 15 a 30 anos: o transtorno dismórfico corporal.',
      'Esse distúrbio faz com que as pessoas tenham um foco obsessivo em características que consideram inadequadas para sua aparência. Dessa forma, elas perdem a capacidade de reconhecer de forma realista a beleza do seu corpo.',
      'Recentemente, o TikTok criou um filtro chamado "My New Twin", que vem sendo chamado de "galã de novela", por transformar o rosto do usuário em uma imagem de modelos.',
      'De acordo com a cirurgiã plástica Dra. Heloise Manfrim, sócia-fundadora da BAPS, filtros de redes sociais vem tendo um papel que agrava distúrbios de imagem como o transtorno dismórfico corporal.',
      '"Hoje, está sendo muito comum principalmente por influência dos filtros dos aplicativos como Instagram e Snapchat ou até mesmo pelo photoshop que hoje faz com que o culto à aparência acabe massacrando as peculiaridades dos corpos reais, das vidas reais, de pessoas reais. Muitos pacientes chegam ao consultório buscando alterar tantos pontos da aparência e é necessário identificar esses distúrbios para o encaminhamento correto ao psiquiatra", avaliou.',
      'Heloise Manfrim afirmou também que é comum que distúrbios deste tipo aconteçam entre a infância e o início da fase adulta.',
      '"Nessa fase da vida, a autoestima ainda depende muito de uma boa aparência, logo, aparecer bem nas selfies torna-se quase que uma obrigação. Há também o desejo de receber \'likes\' e obter mais \'seguidores\' nas mídias sociais, já que os adolescentes pensam nisso como sua posição social. No total, esses fatores motivam muitos jovens a querer se submeter à cirurgia plástica", explica.'
    ]
  },
  belinky: {
    titulo: 'Onde já se viu?',
    autor: 'Tatiana Belinky',
    origem: 'Crônica do livro "Olhos de ver" (Moderna, 2004), como aparece no Preparatório SAEB 9º ano 2025 (SEDUC).',
    paragrafos: [
      'Uma tarde de inverno, estava eu lá, na Rua Barão de Itapetininga, mexendo nas estantes de uma livraria. (Não consigo passar por uma sem entrar para fuçar no meio dos livros. Desde que eu tinha quatro anos de idade (o que já faz muito tempo) livro para mim é a coisa mais gostosa do mundo. A gente nunca sabe que surpresa vai encontrar entre duas capas. Pode ser coisa de boniteza, ou de tristeza, ou de poesia, ou de risada, ou de susto, sei lá. Um livro é sempre uma aventura, vale a pena tentar!).',
      'Pois bem, estava eu ali, muito entretida, examinando os livros, quando de repente senti que alguém me puxava pela manga. Olhei para baixo e vi um menino, um garotinho de uns nove ou dez anos, magrelo, sujinho, de roupa esfarrapada e pé no chão. Uma dessas crianças que andam largadas pelas ruas da cidade, pedindo esmola. Ou, no melhor dos casos, vendendo colchetes ou dropes, essas coisas. Eu já ia abrindo a bolsa para livrar-me logo dele, quando o garoto disse:',
      '- Escuta, tia... (naquele tempo, ninguém chamava a gente de tia: tia era só a irmã do pai ou da mãe).',
      '- O quê? - perguntei. - O que você quer?',
      '- Eu... dona, me compra um livro? - disse ele baixinho meio com medo.',
      'Dizer que fiquei surpresa é pouco. O jeito do menino era de quem precisava de comida, de roupa, isso sim. Duvidei do que ouvira:',
      '- Você não prefere algum dinheiro? - perguntei.',
      '- Não, dona - disse o garoto, mais animado, olhando-me agora bem nos olhos. - Eu queria um livro. Me compra um livro?',
      'Meu coração começou a bater mais forte.',
      '- Escolha o livro que você quiser - falei.',
      'As pessoas na livraria começaram a observar a cena, incrédulas e curiosas. O menino já estava junto à prateleira, procurando, examinando ora um livro, ora outro, todo excitado. Um vendedor se aproximou, meio desconfiado, com cara de querer intervir.',
      '- Deixe o menino escolher um livro - falei. - Eu pago.',
      'As pessoas em volta me olhavam admiradas. Onde já se viu alguém comprar um livro para um molequinho maltrapilho daqueles?',
      'Pois vou lhes contar: foi exatamente o que se viu naquela tarde, naquela livraria. O menino acabou se decidindo por um livro de aventuras, nem me lembro qual. Mas me lembro bem da minha emoção quando lhe entreguei o volume e vi seus olhinhos brilhando ao me dizer um apressado obrigado, dona! Antes de sair em disparada, abraçando o livro apertado ao peito.',
      'Quanto aos meus próprios olhos, estes embaçaram estranhamente, quando pensei comigo: "Tanta criança rica não sabe o que perde, não lendo, e este menino pobre (que certamente não era um pobre menino) sabe o valor que tem essa maravilha que se chama livro!"',
      'Isso aconteceu há vários anos. Bem que eu gostaria de saber o que foi feito daquele menino...'
    ]
  }
};
