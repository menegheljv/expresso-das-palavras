/* Questões de Língua Portuguesa do 5º ano.
   Fonte: Coletânea de Itens Paebes 2024, 5º ano do Ensino Fundamental (SEDU-ES, itens do CAEd/UFJF).
   O gabarito de cada item vem da própria Coletânea.
   "est" é a estação (1 a 3, da mais fácil à mais difícil). "certa" é o índice da alternativa correta.
   "d" é o descritor/habilidade cobrado. "img" é opcional (arquivo em img/).
   "grupo" liga as perguntas de um mesmo texto inteiro (ver window.TEXTOS). */
window.TURMA = { id: '5', nome: '5º ano', tempo: 90, storage: 'dp5' };

window.ESTACOES = {
  1: { nome: 'Saída tranquila', sub: 'Ler, entender e achar informações', nivel: 1, rotulo: 'Fácil' },
  2: { nome: 'Serra acima', sub: 'Palavras, pontuação e humor', nivel: 2, rotulo: 'Médio' },
  3: { nome: 'Fim da linha', sub: 'Ler nas entrelinhas e saber quem é quem', nivel: 3, rotulo: 'Difícil' }
};

var D = {
  P015: { cod: 'D015_P', txt: 'Compreender frases ou partes que compõem um texto.' },
  P016: { cod: 'D016_P', txt: 'Identificar a finalidade de textos de diferentes gêneros.' },
  P017: { cod: 'D017_P', txt: 'Identificar o gênero de textos variados.' },
  P019: { cod: 'D019_P', txt: 'Reconhecer diferentes formas de tratar uma informação na comparação de textos que tratam do mesmo tema, em função das condições em que ele foi produzido e daquelas em que será recebido.' },
  P021: { cod: 'D021_P', txt: 'Localizar informações explícitas em um texto.' },
  P022: { cod: 'D022_P', txt: 'Inferir o sentido de uma palavra ou expressão.' },
  P023: { cod: 'D023_P', txt: 'Inferir uma informação implícita em um texto.' },
  P024: { cod: 'D024_P', txt: 'Identificar efeitos de ironia ou humor em textos variados.' },
  P025: { cod: 'D025_P', txt: 'Reconhecer o efeito de sentido decorrente do uso da pontuação e de outras notações.' },
  P028: { cod: 'D028_P', txt: 'Identificar o tema de um texto.' },
  P030: { cod: 'D030_P', txt: 'Identificar o conflito gerador do enredo e os elementos que constroem a narrativa.' },
  P037: { cod: 'D037_P', txt: 'Estabelecer relações entre partes de um texto, identificando repetições ou substituições que contribuem para a continuidade de um texto.' },
  P038: { cod: 'D038_P', txt: 'Distinguir um fato da opinião relativa a esse fato.' },
  P039: { cod: 'D039_P', txt: 'Estabelecer relações lógico-discursivas presentes no texto, marcadas por conjunções, advérbios, etc.' },
  P057: { cod: 'D057_P', txt: 'Interpretar texto com auxílio de material gráfico diverso (propagandas, quadrinhos, foto, etc.).' },
  P103: { cod: 'D103_P', txt: 'Identificar as marcas linguísticas que evidenciam o locutor e o interlocutor de um texto.' }
};

/* rótulo do gabarito oficial mostrado nas respostas dos textos inteiros */
var GAB = 'Coletânea Paebes 2024, item';

window.QUESTOES = [
  /* ============ ESTAÇÃO 1: FÁCIL ============ */
  {
    est: 1, fonte: 'Ilustração', img: '5-criancas.jpg',
    alt: 'Ilustração em preto e branco: duas crianças entregam presentes a dois adultos, uma mulher e um homem que segura uma pasta.',
    pergunta: 'Nesse texto, as crianças estão',
    alts: ['ajudando o homem a carregar a pasta.', 'brincando com os adultos.', 'entregando um presente para os adultos.', 'estudando com a mulher.'],
    certa: 2, d: D.P015
  },
  {
    est: 1, fonte: 'Instruções da brincadeira "Passa anel"',
    trecho: 'Materiais: um objeto pequeno, como um anel ou uma pedrinha. 1. Os participantes devem sentar em roda ou em formato de meia-lua. Cada participante deve unir as palmas das mãos. 2. Escolhe-se uma pessoa para passar o anel entre as mãos de cada integrante. [...] 5. Após passar por todas as pessoas, ele pergunta para um dos participantes da brincadeira: "Com quem está o anel?".',
    pergunta: 'O objetivo desse texto é',
    alts: ['contar uma história.', 'ensinar uma brincadeira.', 'fazer um convite.', 'vender um produto.'],
    certa: 1, d: D.P016
  },
  {
    est: 1, fonte: 'Cartaz sobre a saúde bucal das crianças', img: '5-saude-bucal.jpg',
    alt: 'Cartaz com quatro orientações: evite oferecer alimentos açucarados à criança; ensine sobre a importância da higienização oral; incentive a higienização da boca após as refeições; escove seus dentes na presença da criança.',
    pergunta: 'Esse texto foi escrito para',
    alts: ['dar uma orientação.', 'divulgar um produto.', 'ensinar uma receita.', 'fazer um convite.'],
    certa: 0, d: D.P016
  },
  {
    est: 1, fonte: 'Reportagem "Brasil já teve príncipe criança famoso como George"',
    trecho: 'Dom Pedro II nasceu em 2 de dezembro de 1825 no Rio de Janeiro. Esse "dom" no seu nome significa "senhor" ou "lorde", e era assim que todo mundo o chamava.',
    pergunta: 'De acordo com esse texto, dom Pedro II nasceu no dia',
    alts: ['2.', '5.', '10.', '14.'],
    certa: 0, d: D.P021
  },
  {
    est: 1, fonte: 'Piada "Uma questão matemática"',
    trecho: 'A mãe pergunta ao filho: "Se eu tenho cinco moedas e te dou três, com quantas eu fico?" Responde o garoto: "Não sei..." A mãe questiona: "Como não sabe, não te ensinaram isso na escola?" E explica o garoto: "É que lá na escola, só fazemos contas com maçãs e laranjas..."',
    pergunta: 'O que torna esse texto engraçado é',
    alts: ['a explicação do filho sobre como faz contas na escola.', 'a mãe usar moedas para fazer uma pergunta ao filho.', 'o espanto da mãe ao ver que o filho não sabia a resposta.', 'o menino não saber responder a pergunta da mãe.'],
    certa: 0, d: D.P024
  },
  {
    est: 1, fonte: 'Notícia "Aprenda a fazer rosa de cetim e lírio de origami em oficina"',
    trecho: '8 de março é Dia Internacional da Mulher. Para homenagear mães, avós, tias ou professoras, uma dica é participar da Oficina Artística de Flores. Lá você faz um presente exclusivo e sem gastar nada. Os participantes aprendem a fazer rosas com fitas de cetim e lírios de origami. E, ainda, um cartão para escrever um recadinho. [...]',
    pergunta: 'Qual é o assunto desse texto?',
    alts: ['A Oficina Artística de Flores.', 'Como escrever um cartão.', 'Como escolher rosas e lírios.', 'O Dia Internacional da Mulher.'],
    certa: 0, d: D.P028
  },
  {
    est: 1, fonte: 'Notícia "Autor mirim de 9 anos lança livro sobre viagem ao espaço"',
    trecho: 'Aos 9 anos, Nicolas Nassinger Oliveira demonstra que é um pequeno prodígio. O menino é autor do livro "Viajantes das galáxias. Viajamos no tempo?", que será lançado no Espaço Cultural do Sesc Rondonópolis, no dia 9 de setembro, às 19h. O título promete levar os leitores a um passeio pelas estrelas [...].',
    pergunta: 'O assunto desse texto é',
    alts: ['a animação dos alunos de uma escola.', 'as pessoas presentes em um evento.', 'o lançamento de um livro sobre o espaço.', 'os comentários no intervalo de uma escola.'],
    certa: 2, d: D.P028
  },
  {
    est: 1, fonte: 'Quadrinhos "O Menino Maluquinho", de Ziraldo',
    trecho: 'Vamos levar pro salão!',
    pergunta: 'No trecho, foi utilizada a linguagem',
    alts: ['científica.', 'informal.', 'regional.', 'técnica.'],
    certa: 1, d: D.P103
  },

  /* ---- Texto inteiro (Estação 1): 2 perguntas, itens 2024.09 e 2024.23 da Coletânea ---- */
  {
    est: 1, grupo: 'tartaruga', fonte: 'Conto "A casa da tartaruga"',
    trecho: 'Certo dia, a dona tartaruga <mark>resolveu</mark> tomar um banho.',
    pergunta: 'Nesse trecho, a palavra destacada significa',
    alts: ['ajudar.', 'analisar.', 'cancelar.', 'decidir.'],
    certa: 3, listao: { n: '2024.09', gab: 'D', rotulo: GAB }, d: D.P022
  },
  {
    est: 1, grupo: 'tartaruga', fonte: 'Conto "A casa da tartaruga"',
    pergunta: 'Essa história termina quando a tartaruga',
    alts: ['ajuda o caracol a achar uma nova casinha.', 'fica furiosa ao sair da lagoa.', 'reclama com o caracol por causa do casco.', 'resolve tomar um banho.'],
    certa: 0, listao: { n: '2024.23', gab: 'A', rotulo: GAB }, d: D.P030
  },

  /* ============ ESTAÇÃO 2: MÉDIO ============ */
  {
    est: 2, fonte: 'Notícia "Maluquices: animais de zoológico recebem ovos de Páscoa de presente"',
    trecho: 'Nos dias 4 e 5 de abril, os animais do Parque Zoobotânico Arruda Câmara, em João Pessoa (PB), receberam um presente [...]: ovos de Páscoa personalizados e embrulhados em papel machê atóxico, ou seja, que não faz mal à saúde. Nada de chocolate: os animais receberam alimentos definidos pelos especialistas do zoológico, mas adaptados com a temática da Páscoa, como o formato de ovo e embalagens com coelhos desenhados. O cardápio incluiu frutas, legumes, ração, sementes e carne. O objetivo da ação é [...] proporcionar uma experiência diferente para os bichos, além de educar o público que visita o local acerca da alimentação dos animais.',
    pergunta: 'Esse texto é',
    alts: ['um conto de fadas.', 'um diário pessoal.', 'uma carta.', 'uma notícia.'],
    certa: 3, d: D.P017
  },
  {
    est: 2, fonte: 'Notícia "Autor mirim de 9 anos lança livro sobre viagem ao espaço"',
    trecho: 'Nicolas é aluno do 3º ano do Ensino Fundamental [...]. O autor mirim <mark>conta</mark> que o livro se tornou um dos assuntos comentados no intervalo e a expectativa para o lançamento é compartilhada com os estudantes que estarão presentes no evento.',
    pergunta: 'Nesse trecho, o termo em destaque significa',
    alts: ['dizer.', 'possuir.', 'querer.', 'somar.'],
    certa: 0, d: D.P022
  },
  {
    est: 2, fonte: 'Receita "Bombons de coco"',
    trecho: 'Veja esta maravilha de chocolate para a Páscoa. Feitos com chocolate e cobertos de coco ralado, estes bombons vão <mark>arrasar</mark> na Páscoa!',
    pergunta: 'Nesse trecho, a palavra destacada significa',
    alts: ['causar inveja.', 'destruir.', 'fazer sucesso.', 'vencer.'],
    certa: 2, d: D.P022
  },
  {
    est: 2, fonte: 'Texto "O meu livrinho", de Pedro Bandeira',
    trecho: 'O meu livrinho é como um brinquedo. Com ele eu brinco de ser gente grande. O meu livrinho é como a televisão. Com ele eu vejo maravilhas dentro de mim. O meu livrinho é como um avião. Com ele eu viajo para onde eu quiser. O meu livrinho é como o colo da mamãe. Com ele eu aprendo a não ter medo. O meu livrinho é como um amigo. Com ele eu nunca estou só.',
    pergunta: 'De acordo com esse texto, o eu lírico',
    alts: ['gosta de ler.', 'gosta de viajar.', 'quer ser adulto.', 'quer ser piloto.'],
    certa: 0, d: D.P023
  },
  {
    est: 2, fonte: 'Tirinha Peanuts, de Charles Schulz', img: '5-peanuts.jpg',
    alt: 'Tirinha do Charlie Brown e do Snoopy: Charlie Brown entrega sete biscoitos ao cachorro, um para cada dia da semana. Snoopy segura todos os biscoitos e, no fim, pensa que os dias passam depressa.',
    pergunta: 'O humor desse texto está no fato de',
    alts: ['o cachorro comer os sete biscoitos da semana de uma vez.', 'o cachorro estar sentado sobre o telhado de sua casinha.', 'o menino atender o cachorro na porta de sua casa.', 'o menino entregar uma bandeja para o cachorro.'],
    certa: 0, d: D.P024
  },
  {
    est: 2, fonte: 'Piada "Primeira mão"',
    trecho: 'Joãozinho chega muito animado do primeiro dia de aula na escola e diz para a mãe: "Manhê! Hoje a professora ensinou pra gente qual é a mão direita!" "Muito bem. Mostre ela para a mamãe." Joãozinho, orgulhoso, mostra a mão para a mãe. "Ótimo<mark>!</mark> Parabéns<mark>!</mark> Agora, me mostre a mão esquerda!" "Ah, isso ela vai ensinar só amanhã!"',
    pergunta: 'Os pontos de exclamação no trecho "Ótimo! Parabéns!" reforçam a ideia de',
    alts: ['alegria.', 'certeza.', 'dúvida.', 'espanto.'],
    certa: 0, d: D.P025
  },
  {
    est: 2, fonte: 'Conto "Planeta colorido"',
    trecho: 'Os coloridos mandaram um taco de beisebol azul. Nossa, foi a maior sensação<mark>!</mark>',
    pergunta: 'No trecho "Nossa, foi a maior sensação!", o ponto de exclamação foi utilizado para indicar',
    alts: ['animação.', 'deboche.', 'irritação.', 'ordem.'],
    certa: 0, d: D.P025
  },
  {
    est: 2, fonte: 'Piada "Juquinha e a moeda de 1 real"',
    trecho: 'Juquinha estava chorando muito, quando seu avô, não aguentando mais aquele <mark>chororô</mark>, perguntou: Por que você está chorando, Juquinha?',
    pergunta: 'A palavra destacada é comum',
    alts: ['nas conversas do dia a dia.', 'nas reuniões escolares.', 'nos manuais de instrução.', 'nos textos de ciências.'],
    certa: 0, d: D.P103
  },

  /* ---- Texto inteiro (Estação 2): 2 perguntas, itens 2024.06 e 2024.24 da Coletânea ---- */
  {
    est: 2, grupo: 'anamaria', fonte: 'Texto sobre a escritora Ana Maria Machado',
    pergunta: 'De acordo com esse texto, Ana Maria Machado começou a escrever em',
    alts: ['1941.', '1965.', '1982.', '2000.'],
    certa: 1, listao: { n: '2024.06', gab: 'B', rotulo: GAB }, d: D.P021
  },
  {
    est: 2, grupo: 'anamaria', fonte: 'Texto sobre a escritora Ana Maria Machado',
    trecho: 'Ele foi escrito em 1982 e conta a história de uma menina que encontra uma fotografia bem antiga da bisavó, e começa a conversar com <mark>ela</mark>!',
    pergunta: 'Nesse trecho, a palavra destacada substitui',
    alts: ['Ana Maria.', 'literatura.', 'menina.', 'bisavó.'],
    certa: 3, listao: { n: '2024.24', gab: 'D', rotulo: GAB }, d: D.P037
  },

  /* ============ ESTAÇÃO 3: DIFÍCIL ============ */
  {
    est: 3, fonte: 'Poema "Dentro de um abraço" e cartaz "Benefícios de um abraço"', img: '5-abraco.jpg',
    alt: 'Cartaz "Benefícios de um abraço": duas crianças se abraçam, cercadas pelas frases "alivia a tensão", "reduz o estresse", "ajuda na autoestima" e "melhora o fluxo sanguíneo". Ao lado: "É de graça. Então, tá esperando o quê? Vem logo me abraçar!".',
    trecho: 'Texto 1: "O melhor lugar do mundo / É dentro de um abraço / Pro mais velho ou pro mais novo / Pra alguém apaixonado, alguém medroso. [...] Tudo que a gente sofre / Num abraço se dissolve [...]". Texto 2: o cartaz abaixo.',
    pergunta: 'Esses textos apresentam em comum',
    alts: ['a maneira correta de abraçar as pessoas.', 'a melhor forma de se apaixonar.', 'as vantagens de um abraço.', 'as variadas formas de aliviar as tensões.'],
    certa: 2, d: D.P019
  },
  {
    est: 3, fonte: 'Crônica "As três bonecas", de Vera Pereira',
    trecho: 'Numa visita, Marieta aproximou-se de Ju, que brincava de bonecas. E disse: "Tenho uma boneca pra você!" Um forte desejo se acendeu na menina. "Grande, como um bebê!" [...] A menina sorriu. Mais tarde, folheando uma revista, adivinhou a boneca. "É assim!", disse, abraçada à revista. Deu-lhe o nome de Cecília. Chamaria as amigas, cada uma traria sua filha e fariam um lanche. Brincariam no jardim e ririam um bocado, até tarde. Cansadas, iriam cedo pra cama. Adormecer com Cecília seria melhor que mil mundos. Foi uma espera em vão. Ainda lidava com a frustração, quando a mulher retornou: "Tua boneca está lá guardada, esperando. [...]"',
    pergunta: 'Entende-se desse texto que Ju',
    alts: ['chamou Marieta para brincar com ela no jardim da casa.', 'falou com a mãe que estava com sono.', 'imaginou brincadeiras com a boneca prometida por Marieta.', 'pediu uma boneca nova para a mãe.'],
    certa: 2, d: D.P023
  },
  {
    est: 3, fonte: 'Notícia "Quem é Isaac Amendoim, o novo Chico Bento da Turma da Mônica?"',
    trecho: 'Segundo o garoto, ele pretende continuar gravando seus vídeos para as redes sociais, e não planeja se mudar do sítio. <mark>"Eu acho melhor morar na roça porque aqui eu brinco muito, eu cuido dos meus animais. Eu gosto muito do cheiro da roça, do mato... é muito bom aqui"</mark>, disse Amendoim.',
    pergunta: 'Nesse trecho, as aspas foram utilizadas para',
    alts: ['apontar um deboche.', 'indicar uma fala.', 'marcar uma palavra de outro idioma.', 'mostrar o sentido diferente de uma palavra.'],
    certa: 1, d: D.P025
  },
  {
    est: 3, fonte: 'Texto "Lugar de concha... é na praia!"',
    trecho: 'Se você gosta de catar conchinhas quando passeia pela praia, está na hora de repensar. Um estudo feito por pesquisadores da Espanha e dos Estados Unidos mostrou que, apesar de divertido, o hábito pode prejudicar animais que usam as conchas como abrigo. [...] Segundo a equipe, a queda de 60% no número de conchas coincide com o aumento no número de turistas [...]. "As conchas proporcionam abrigo para peixes e caranguejos e são habitadas por vários pequenos organismos que as usam como abrigo ou fonte de cálcio", explica. [...] Agora você já sabe: quando for à praia, pode admirar a beleza das conchas à vontade, mas nada de levá-las pra casa!',
    pergunta: 'Qual é o assunto desse texto?',
    alts: ['A importância das conchas para a natureza.', 'As espécies de conchas existentes.', 'O aumento do turismo em Llarga.', 'Os animais marinhos encontrados em Llarga.'],
    certa: 0, d: D.P028
  },
  {
    est: 3, fonte: 'Reportagem "Brasil já teve príncipe criança famoso como George"',
    trecho: 'Pedro II tinha apenas 5 anos quando seu pai, o imperador dom Pedro I, abdicou do trono [...]. "[...] Como ele era criança, precisava ter uma idade para assumir todo o poder, e até lá <mark>ele</mark> tinha que ser preparado", explica o historiador e professor Thiago Gomide [...].',
    pergunta: 'Nesse trecho, a palavra destacada substitui',
    alts: ['dom Pedro I.', 'dom Pedro II.', 'George.', 'Thiago.'],
    certa: 1, d: D.P037
  },
  {
    est: 3, fonte: 'Fábula "O Gato e a Raposa"',
    trecho: 'Pergunta então a Raposa ao Gato: "Acho que você se acha muito esperto, não? Você deve até achar que sabe mais do que eu. [...]" [...] O Gato deu um salto e subiu na árvore se ocultando entre as folhas. [...] Ela correu para um lado e outro, e os cachorros em seu encalço. [...] Logo ela foi alcançada pelos cães, e então toda sua arrogância e truques se mostraram inúteis.',
    pergunta: 'Nesse texto, o trecho que mostra uma opinião é:',
    alts: ['"Acho que você se acha muito esperto, não?..."', '"O Gato deu um salto e subiu na árvore..."', '"Ela correu para um lado e outro,..."', '"Logo ela foi alcançada pelos cães,..."'],
    certa: 0, d: D.P038
  },
  {
    est: 3, fonte: 'Conto "Hora do resgate"',
    trecho: 'Dias depois, o ratinho estava passeando perto da mesma casa, <mark>quando</mark> ouviu o cachorro latindo. A carrocinha estava prestes a levá-lo!',
    pergunta: 'Nesse trecho, a expressão destacada foi usada para',
    alts: ['apontar causa.', 'indicar lugar.', 'marcar tempo.', 'mostrar modo.'],
    certa: 2, d: D.P039
  },
  {
    est: 3, fonte: 'Tirinha "Lola Andorinha", de Laerte', img: '5-lola.jpg',
    alt: 'Tirinha da andorinha Lola: ela vê uma cegonha carregando um pacote e pergunta se é assim que os bebês nascem. A cegonha pergunta quais bebês, e a andorinha se atrapalha e diz que não é nada.',
    pergunta: 'De acordo com esse texto, a andorinha é',
    alts: ['companheira.', 'curiosa.', 'gulosa.', 'preocupada.'],
    certa: 1, d: D.P057
  },

  /* ---- Texto inteiro (Estação 3): 2 perguntas, itens 2024.12 e 2024.25 da Coletânea ---- */
  {
    est: 3, grupo: 'garoto', fonte: 'Conto "O garoto invisível", de Felipe Barenco',
    pergunta: 'Nesse texto, entende-se que a mãe',
    alts: ['esqueceu de preparar arroz para o almoço.', 'ficou irritada com as pessoas falando durante o almoço.', 'precisava comprar uma nova cortina para sua casa.', 'tirou o bolo do forno de forma apressada.'],
    certa: 1, listao: { n: '2024.12', gab: 'B', rotulo: GAB }, d: D.P023
  },
  {
    est: 3, grupo: 'garoto', fonte: 'Conto "O garoto invisível", de Felipe Barenco',
    trecho: 'Digo isso porque o meu gato gosta de passear. <mark>Ele</mark> nasceu com alma de cachorro, só falta latir.',
    pergunta: 'Nesse trecho, o termo em destaque refere-se ao',
    alts: ['bairro.', 'cachorro.', 'domingo.', 'gato.'],
    certa: 3, listao: { n: '2024.25', gab: 'D', rotulo: GAB }, d: D.P037
  }
];

window.TEXTOS = {
  tartaruga: {
    titulo: 'A casa da tartaruga',
    autor: 'Do livro "365 histórias para contar"',
    origem: 'Texto adaptado, como aparece na Coletânea de Itens Paebes 2024, 5º ano.',
    paragrafos: [
      'Certo dia, a dona tartaruga resolveu tomar um banho. Como seu casco pesava demais, resolveu tirá-lo e pulou na lagoa. Um pequeno caracol que passava por ali viu o casco da tartaruga e achou que estava desocupado. Como tinha perdido sua casquinha, resolveu pegar aquela para si.',
      'Dona tartaruga, ao sair da lagoa, ficou furiosa. Quem teria levado sua casa? Mais adiante avistou o caracol e foi reclamar o que era seu.',
      'Todo sem jeito, o caracol disse:',
      '- Desculpe dona tartaruga, peguei porque achei que não tinha dono. Mas sei que o certo é devolver!',
      'A tartaruga ficou compadecida do gesto do pequeno caracol e o ajudou a encontrar uma nova casinha. [...]'
    ]
  },
  anamaria: {
    titulo: 'Ana Maria Machado',
    autor: 'Texto sobre a escritora, do site Canal Kids',
    origem: 'Fragmento, como aparece na Coletânea de Itens Paebes 2024, 5º ano.',
    paragrafos: [
      'Às vezes, escrever uma redação para a escola é meio difícil, né? Escrever um livro, então, deve ser bem complicado. Agora imagina só escrever mais de 100 livros! Pois a Ana Maria Machado fez isso brincando: é que essa escritora carioca simplesmente adora escrever, seja para criança, seja para gente grande.',
      'E, como tudo que a gente faz gostando muito sempre fica bom, os livros da Ana Maria ficaram tão legais que ela ganhou um montão de prêmios por causa deles. O prêmio mais importante que ela ganhou foi o Hans Christian Andersen, em 2000. E olha que isso não é pouco: esse é simplesmente o prêmio para literatura infantil mais importante do mundo!',
      'O engraçado é que, antes de virar escritora, a Ana Maria gostava mesmo era de... pintura! [...] Mas o amor pela literatura falou mais alto e, em 1965, quando tinha 24 anos (faça as contas: ela nasceu em 1941), a Ana Maria começou a escrever histórias para gente grande e pequena.',
      'Um dos livros mais famosos da Ana Maria chama "Bisa Bia, Bisa Bel". Ele foi escrito em 1982 e conta a história de uma menina que encontra uma fotografia bem antiga da bisavó, e começa a conversar com ela! As duas ficam bem amigas, e a bisavó ensina à menina um monte de coisas sobre o tempo em que ela viveu.',
      '[...] E, apesar de ter ganhado um monte de prêmios, o que deixa a Ana Maria feliz de verdade é saber que as crianças adoram o que ela escreve. Afinal, seus livros já foram publicados em 16 países, e ela tem mais de 6 milhões de leitores!'
    ]
  },
  garoto: {
    titulo: 'O garoto invisível',
    autor: 'Felipe Barenco (Fundação Educar DPaschoal, 2018)',
    origem: 'Fragmento, como aparece na Coletânea de Itens Paebes 2024, 5º ano.',
    paragrafos: [
      'Era um domingo típico lá em casa. Acordei com a minha irmã abrindo a cortina [...].',
      'A mãe tinha acabado de tirar o bolo do forno. Lavei o rosto [...] e fui à banca buscar o jornal para o meu tio.',
      'O jornaleiro não fica longe, mas é um caminho razoável para se andar com um gato. Digo isso porque o meu gato gosta de passear. Ele nasceu com alma de cachorro, só falta latir.',
      '- Bom dia, Seu Otacílio! - eu falei [...]. Seu Otacílio é o dono da banca mais tradicional do bairro. - Já chegou o número 21?',
      '- Atrasaram, Gabrielzinho. Passa semana que vem. [...]',
      'Botei o jornal embaixo do braço e, chegando em casa, a Brasília do meu tio tava estacionando na rua. Dava para reconhecer só pelo barulho do motor e eu tinha a sensação de que, a cada final de semana, ela vinha com uma peça a menos. A tia Mara desceu do carro [...].',
      '"O almoço tá na mesa!", minha mãe berrou. [...] uma das coisas que mais curto na minha mãe é o nome dela. Mônica. [...]',
      '- O que tem pra sobremesa? [...]',
      '- Almoça primeiro.',
      '- Passa o arroz, Jurema. [...]',
      'Pronto, começou [...]. Um falando em cima do outro, minha mãe irritada [...], até que ela deu um berro.',
      '- Chega! Nós vamos mudar de cidade - ela soltou no impulso. [...]'
    ]
  }
};
