/* Questões de Língua Portuguesa do 2º ano.
   Fontes: (1) Coletânea de Itens 2022-2023 (Paebes Alfa, 2º ano do Ensino Fundamental, SEDU-ES, itens do CAEd/UFJF),
   16 itens com o gabarito da própria Coletânea; (2) 29 questões criadas para este jogo, sobre as habilidades D08, D09 e D10
   (imagens com palavras, escrita de palavras e começo, meio e fim), marcadas como "Questão criada para este jogo".
   Cada partida sorteia 10 perguntas de cada estação (15 a 16 disponíveis).
   "est" é a estação (1 a 3, da mais fácil à mais difícil). "certa" é o índice da alternativa correta.
   "d" é o descritor/habilidade cobrado. "img" é opcional (arquivo em img/). */
window.TURMA = { id: '2', nome: '2º ano', tempo: 120, storage: 'dp2' };

window.ESTACOES = {
  1: { nome: 'Saída tranquila', sub: 'Cartazes, convites e achar a resposta', nivel: 1, rotulo: 'Fácil' },
  2: { nome: 'Serra acima', sub: 'Entrelinhas, sons e escrita de palavras', nivel: 2, rotulo: 'Médio' },
  3: { nome: 'Fim da linha', sub: 'Assunto do texto e começo, meio e fim', nivel: 3, rotulo: 'Difícil' }
};

var D = {
  P016: { cod: 'D016_P', txt: 'Identificar a finalidade de textos de diferentes gêneros.' },
  P021: { cod: 'D021_P', txt: 'Localizar informação explícita.' },
  P023: { cod: 'D023_P', txt: 'Inferir informações em textos.' },
  P025: { cod: 'D025_P', txt: 'Reconhecer efeitos de sentido decorrentes do uso ou função da pontuação e de outras notações.' },
  P028: { cod: 'D028_P', txt: 'Reconhecer o assunto de um texto lido.' },
  P030: { cod: 'D030_P', txt: 'Reconhecer os elementos que compõem uma narrativa e o conflito gerador.' },
  D08: { cod: 'D08', txt: 'Leitura de imagens associadas a palavras: tirinhas, cartazes, convites, anúncios e histórias ilustradas.' },
  D09: { cod: 'D09', txt: 'Escrita de palavras, ditado reflexivo, escrita de listas e revisão da relação som-letra.' },
  D10: { cod: 'D10', txt: 'Produção de pequenos textos com começo, desenvolvimento e final, respeitando o tema e a sequência das ideias.' }
};

/* rótulo do gabarito oficial mostrado nas respostas */
var GAB = 'Coletânea Paebes 2022-2023, item';
var CRIADA = 'Questão criada para este jogo';
/* figura grande (emoji) para as questões de palavras */
function fig(e) { return '<span class="emoji-grande" aria-hidden="true">' + e + '</span>'; }

window.QUESTOES = [
  /* ============ ESTAÇÃO 1: FÁCIL ============ */
  {
    est: 1, fonte: 'Cartaz de campanha de vacinação', img: '2-vacina.png',
    alt: 'Cartaz com um gato e um cachorro. O cachorro segura uma placa: "Me protege, me vacina." Título: "Depois da raiva não adianta ficar triste." Texto final: "Campanha de vacinação contra a raiva. Dia 29 de setembro, das 8h às 5h da tarde."',
    pergunta: 'Esse texto serve para',
    alts: ['contar uma história.', 'convidar para uma festa.', 'divulgar uma campanha.', 'vender produtos veterinários.'],
    certa: 2, listao: { n: '2022.1', gab: 'C', rotulo: GAB }, d: D.P016
  },
  {
    est: 1, fonte: 'Calendário de junho de 2016', img: '2-calendario.png',
    alt: 'Calendário de junho de 2016, com os dias da semana e os números de 1 a 30. No alto, duas crianças vestidas de festa junina.',
    pergunta: 'Este texto serve para',
    alts: ['anunciar a venda de roupas.', 'convidar para uma festa.', 'ensinar uma regra de jogo.', 'registrar os dias de um mês.'],
    certa: 3, listao: { n: '2022.2', gab: 'D', rotulo: GAB }, d: D.P016
  },
  {
    est: 1, fonte: 'Convite de aniversário', img: '2-convite.png',
    alt: 'Convite com palhaço, foca, urso e leão no cantos. Texto: "Você não pode perder a festa de 1 aninho da Victoria! Dia 18/09/2010, sábado, às 16 horas, na Rua Povina Cavalcanti, 00/Play, São Conrado. Vai ser muito legal!"',
    pergunta: 'Esse texto serve para',
    alts: ['dar uma notícia.', 'deixar um recado.', 'fazer um convite.', 'vender um produto.'],
    certa: 2, d: D.P016
  },
  {
    est: 1, fonte: 'Bilhete', img: '2-bilhete.png',
    alt: 'Bilhete escrito à mão: "Lu, precisei sair e não pude esperar que acordasse. Fui levar sua avó ao médico. Come seu café e arrume seu quarto. Volto logo. Beijos, Mamãe."',
    pergunta: 'Esse texto serve para',
    alts: ['dar uma notícia.', 'deixar um recado.', 'fazer um convite.', 'vender um produto.'],
    certa: 1, listao: { n: '2023.1', gab: 'B', rotulo: GAB }, d: D.P016
  },
  {
    est: 1, fonte: 'Texto "A festa", de Francisco Marques',
    trecho: 'O preá convidou:<br>- Amigo sapo, vamos na festa da cutia?<br>- Oba! Oba!<br>E o sapo convidou:<br>- Amigo macaco, vamos na festa da cutia?<br>- É para já! É para já!<br>No dia da festa, na hora da festa, aquela animação! O jabuti tocava flauta. A coruja tocava sanfona. O coelho tocava pandeiro. A bicharada dançava o tempo todo.',
    pergunta: 'Nesse texto, quem tocava flauta?',
    alts: ['A coruja.', 'A cutia.', 'O coelho.', 'O jabuti.'],
    certa: 3, listao: { n: '2022.4', gab: 'D', rotulo: GAB }, d: D.P021
  },
  {
    est: 1, fonte: 'Texto "O grande livro das bruxas", de Antonio Tello',
    trecho: 'Com seus poderes mágicos, a Bruxa da Casinha de Chocolate construiu uma casa de biscoitos e tortas, com telhado de chocolate, janelas de açúcar e chaminés de caramelo.',
    pergunta: 'As chaminés da casa eram feitas de quê?',
    alts: ['Açúcar.', 'Biscoito.', 'Caramelo.', 'Chocolate.'],
    certa: 2, listao: { n: '2022.5', gab: 'C', rotulo: GAB }, d: D.P021
  },
  {
    est: 1, fonte: CRIADA, trecho: fig('🐱'),
    pergunta: 'Qual palavra combina com a figura?',
    alts: ['GATO', 'PATO', 'RATO', 'MATO'],
    certa: 0, d: D.D08
  },
  {
    est: 1, fonte: 'Cartaz na porta da biblioteca (questão criada para este jogo)',
    trecho: 'Cartaz: "Silêncio, por favor!"',
    pergunta: 'O que esse cartaz pede para as crianças?',
    alts: ['Que fiquem em silêncio.', 'Que cantem bem alto.', 'Que corram pelo corredor.', 'Que tragam um lanche.'],
    certa: 0, d: D.D08
  },
  {
    est: 1, fonte: CRIADA, trecho: fig('🍌'),
    pergunta: 'Qual é o nome da figura, escrito do jeito certo?',
    alts: ['BANANA', 'BANAMA', 'VANANA', 'PANANA'],
    certa: 0, d: D.D09
  },
  {
    est: 1, fonte: CRIADA, trecho: fig('⚽'),
    pergunta: 'Qual palavra começa com o mesmo som da palavra BOLA?',
    alts: ['BEIJO', 'SAPO', 'GATO', 'LUA'],
    certa: 0, d: D.D09
  },

  /* ============ ESTAÇÃO 2: MÉDIO ============ */
  {
    est: 2, fonte: 'Texto "Céu, vento e pipa", de Vera Lúcia Dias',
    trecho: 'Lelé era um menino e gostava muito de olhar para o céu. Lelé queria chegar bem pertinho das nuvens e do sol.<br>Lelé voou num avião, mas sentiu que o céu estava só lá fora!<br>Também olhava as estrelas na luneta. Mas ainda achava o céu tão longe! Um dia, o Lelé ganhou uma pipa.<br>Todos os dias, Lelé voava junto com a sua pipa. E o céu nunca mais ficou longe dele!',
    pergunta: 'De acordo com esse texto, qual era o desejo de Lelé?',
    alts: ['Chegar perto das nuvens e do sol.', 'Ter uma pipa.', 'Ver as estrelas em uma luneta.', 'Viajar de avião.'],
    certa: 0, listao: { n: '2022.6', gab: 'A', rotulo: GAB }, d: D.P021
  },
  {
    est: 2, fonte: 'Texto "Festa no céu", de Ziraldo',
    trecho: 'Ia ter festa no céu. Quando o urubu avisou o sapo, ele abriu o bocão e disse:<br>- OOOBAAA!!!<br>O urubu disse:<br>- Vai ter muita comida. E o sapo:<br>- OOOBBBAAA!<br>O urubu continuou:<br>- Vai ser uma curtição: música, dança. Aí o sapo abriu mais ainda a boca:<br>- OOOOOOBBBBBAAAAAAA!!!<br>- É, mas só vai entrar quem tem boca pequena. E o sapo, fazendo biquinho, disse:<br>- Coitadinho do jacaré!',
    pergunta: 'De acordo com esse texto, qual é o problema da festa no céu?',
    alts: ['Os animais precisam convidar o jacaré.', 'Os animais precisam levar muita comida.', 'Só convidam os animais com pares de dança.', 'Só entram os animais com boca pequena.'],
    certa: 3, listao: { n: '2022.7', gab: 'D', rotulo: GAB }, d: D.P023
  },
  {
    est: 2, fonte: 'Fábula "A raposa e as uvas"',
    trecho: 'Morta de fome, uma raposa foi até um vinhedo sabendo que ia encontrar muitas uvas. A safra tinha sido excelente. Ao ver a parreira carregada de cachos enormes, a raposa lambeu os beiços. Só que sua alegria durou pouco: por mais que tentasse, não conseguia alcançar as uvas. Por fim, cansada de tantos esforços inúteis, resolveu ir embora, dizendo:<br>- Por mim, quem quiser essas uvas pode levar. Estão verdes, estão azedas, não me servem. Se alguém me desse essas uvas, eu não comeria.',
    pergunta: 'Nesse texto, a raposa resolveu ir embora porque as uvas estavam',
    alts: ['altas.', 'azedas.', 'grandes.', 'verdes.'],
    certa: 0, listao: { n: '2022.8', gab: 'A', rotulo: GAB }, d: D.P023
  },
  {
    est: 2, fonte: 'Tirinha da Turma da Mônica, de Mauricio de Sousa', img: '2-turma-monica.png',
    alt: 'Tirinha em três quadros. No primeiro, três crianças com chapéu de festa e presentes cantam "Pa-ra-béns...". No segundo, cantam "...pra vo..." e aparece escrito "CHOMP! CHOMP!". No terceiro, as crianças olham tristes para Magali, que está em cima da mesa, comendo o bolo, e diz "CHOMP!".',
    pergunta: 'Nesse texto, a expressão "CHOMP! CHOMP!" foi usada para indicar',
    alts: ['as crianças gargalhando.', 'as migalhas caindo.', 'o barulho da menina comendo.', 'o som das crianças cantando.'],
    certa: 2, listao: { n: '2022.9', gab: 'C', rotulo: GAB }, d: D.P025
  },
  {
    est: 2, fonte: 'Texto sobre os vizinhos, do site Smartkids',
    trecho: 'Quem mora em edifício sabe que vizinho é coisa séria. É muito importante saber conviver com amor e harmonia com os nossos vizinhos. A gente sabe que sempre tem alguém que tem um cachorro mais irritado que adora latir, ou então um músico que pratica seu instrumento durante várias horas. Por isto é fundamental estabelecer e respeitar as regras de convivência. E o mais importante é ter paciência!',
    pergunta: 'Qual é o assunto desse texto?',
    alts: ['A convivência entre vizinhos.', 'As diferentes moradias.', 'O latido constante dos cães.', 'Os instrumentos musicais.'],
    certa: 0, listao: { n: '2022.10', gab: 'A', rotulo: GAB }, d: D.P028
  },
  {
    est: 2, fonte: 'Texto "Uma boa lambida", de David Burnie',
    trecho: 'O gato mantém seu pelo bem limpo, lavando-se e se penteando com a língua e os dentes.<br>O gato umedece o pelo com a língua, engolindo qualquer sujeira que encontre.<br>A língua do gato é recoberta de espinhos que agem como um pente. O gato usa os dentes para desfazer os emaranhados no pelo.',
    pergunta: 'Qual é o assunto desse texto?',
    alts: ['A comida do gato.', 'A sujeira do gato.', 'O banho do gato.', 'O dente do gato.'],
    certa: 2, listao: { n: '2022.11', gab: 'C', rotulo: GAB }, d: D.P028
  },
  {
    est: 2, fonte: CRIADA, trecho: fig('🐟'),
    pergunta: 'Qual letra completa a palavra PEI_E?',
    alts: ['X', 'S', 'Z', 'C'],
    certa: 0, d: D.D09
  },
  {
    est: 2, fonte: 'Lista de compras (questão criada para este jogo)',
    pergunta: 'Qual lista tem só nomes de frutas?',
    alts: ['banana, uva, maçã', 'banana, sapato, uva', 'uva, bola, pera', 'maçã, mesa, uva'],
    certa: 0, d: D.D09
  },
  {
    est: 2, fonte: 'Anúncio (questão criada para este jogo)',
    trecho: 'Anúncio: "Vendo bicicleta azul, quase nova. Telefone: 3333-0000."',
    pergunta: 'O que a pessoa quer vender?',
    alts: ['Uma bicicleta.', 'Um telefone.', 'Um carro azul.', 'Uma casa.'],
    certa: 0, d: D.D08
  },
  {
    est: 2, fonte: CRIADA,
    pergunta: 'Qual frase pode ser o COMEÇO de uma história?',
    alts: ['Era uma vez uma jacupemba que morava perto da cachoeira.', 'E eles viveram felizes para sempre.', 'Fim.', 'Acabou a história, até logo!'],
    certa: 0, d: D.D10
  },

  /* ============ ESTAÇÃO 3: DIFÍCIL ============ */
  {
    est: 3, fonte: 'Texto "Muriqui", da revista de atividades da SOS Mata Atlântica',
    trecho: 'O muriqui é considerado o maior macaco do Brasil. Ele vive na Mata Atlântica.<br>Carinhoso e brincalhão, o muriqui cumprimenta seus companheiros com abraços e faz cafuné. Quando se sente ameaçado, também recorre ao abraço coletivo, assim se sente mais protegido.',
    pergunta: 'Qual é o assunto desse texto?',
    alts: ['A Mata Atlântica.', 'As características do muriqui.', 'O abraço coletivo.', 'Os carinhos entre macacos.'],
    certa: 1, listao: { n: '2023.2', gab: 'B', rotulo: GAB }, d: D.P028
  },
  {
    est: 3, fonte: 'Frase sobre plantas carnívoras',
    trecho: 'As plantas carnívoras realmente existem nas florestas, são pequenas e delicadas e seus alimentos são insetos e minúsculos animais.',
    pergunta: 'Qual é o assunto dessa frase?',
    alts: ['A delicadeza das florestas.', 'As plantas carnívoras.', 'O alimento dos insetos.', 'Os animais das florestas.'],
    certa: 1, listao: { n: '2023.3', gab: 'B', rotulo: GAB }, d: D.P028
  },
  {
    est: 3, fonte: 'Texto "Desenruga Tartaruga", de Abras Santuza',
    trecho: '- Macacos me mordam - gritou Dona Tartaruga ao acordar naquela manhã de sol.<br>- O que houve com meu casco? Está mais sem graça do que nunca. Desse jeito nem poderei ir à festa de aniversário de Dona Cutia. Já sei! Vou sair pela floresta à procura de um novo casco.',
    pergunta: 'Quando aconteceu essa história?',
    alts: ['À noite.', 'À tarde.', 'De madrugada.', 'De manhã.'],
    certa: 3, listao: { n: '2023.5', gab: 'D', rotulo: GAB }, d: D.P030
  },
  {
    est: 3, fonte: 'Texto sobre as árvores, do site Planeta Sustentável',
    trecho: 'As árvores estão entre os seres vivos mais antigos da Terra: as primeiras surgiram há mais ou menos um bilhão de anos! Elas se adaptaram a diferentes condições e estão em todos os lugares, de cidades a florestas. [...]<br>Árvores garantem a vida de milhares de espécies de animais pelo mundo todo. Afinal, é a partir delas que os bichos herbívoros conseguem boa parte dos seus alimentos.',
    pergunta: 'Qual é o assunto desse texto?',
    alts: ['As árvores.', 'As florestas.', 'Os alimentos.', 'Os animais.'],
    certa: 0, listao: { n: '2023.6', gab: 'A', rotulo: GAB }, d: D.P028
  },
  {
    est: 3, fonte: 'Começo e fim de uma história (questão criada para este jogo)',
    trecho: 'Mariana plantou uma semente e regou todos os dias. No fim,',
    pergunta: 'Qual frase termina melhor essa história?',
    alts: ['a semente virou uma linda flor.', 'o sapato ficou molhado.', 'a escola abriu mais cedo.', 'o trem chegou atrasado.'],
    certa: 0, d: D.D10
  },
  {
    est: 3, fonte: 'Pequena história (questão criada para este jogo)',
    trecho: 'Pedro foi brincar no quintal. De repente, a bola caiu no telhado e ele não conseguiu pegá-la.',
    pergunta: 'Qual é o problema dessa história?',
    alts: ['A bola ficou presa no telhado.', 'Pedro foi brincar no quintal.', 'Pedro ficou com sede.', 'A bola era nova.'],
    certa: 0, d: D.P030
  },
  {
    est: 3, fonte: CRIADA, trecho: fig('🦋'),
    pergunta: 'Quantas sílabas (pedacinhos) tem a palavra BORBOLETA?',
    alts: ['2', '3', '4', '5'],
    certa: 2, d: D.D09
  },
  {
    est: 3, fonte: CRIADA, trecho: fig('🐘'),
    pergunta: 'Qual é o nome da figura, escrito do jeito certo?',
    alts: ['ELEFANTE', 'ELIFANTE', 'ELEFATE', 'ELEFANTI'],
    certa: 0, d: D.D09
  },
  {
    est: 3, fonte: 'Pequeno texto (questão criada para este jogo)',
    trecho: 'Ana saiu de casa com o guarda-chuva aberto e pulou nas poças d\'água.',
    pergunta: 'O que dá para entender desse texto?',
    alts: ['Que estava chovendo.', 'Que estava muito calor.', 'Que Ana estava com fome.', 'Que Ana perdeu o guarda-chuva.'],
    certa: 0, d: D.P023
  },
  {
    est: 3, fonte: 'Pequena frase (questão criada para este jogo)',
    trecho: '"Que susto!", gritou Caio.',
    pergunta: 'Nessa frase, o sinal de exclamação (!) mostra',
    alts: ['surpresa ou susto.', 'uma pergunta.', 'um pedido de desculpas.', 'uma lista de coisas.'],
    certa: 0, d: D.P025
  },
  /* ============ MAIS QUESTÕES (criadas para este jogo): cada partida sorteia 10 de cada estação ============ */
  {
    est: 1, fonte: 'Receita (questão criada para este jogo)',
    trecho: 'Ingredientes: 2 ovos, 1 xícara de açúcar e 2 xícaras de farinha.<br>Modo de fazer: misture tudo e leve ao forno.',
    pergunta: 'Esse texto serve para',
    alts: ['ensinar uma receita.', 'convidar para uma festa.', 'contar uma piada.', 'anunciar uma venda.'],
    certa: 0, d: D.P016
  },
  {
    est: 1, fonte: 'Cantiga popular (questão criada para este jogo)',
    trecho: 'O sapo não lava o pé.<br>Não lava porque não quer.<br>Ele mora lá na lagoa.<br>Não lava o pé porque não quer.<br>Mas que chulé!',
    pergunta: 'Esse texto é um exemplo de',
    alts: ['cantiga.', 'receita.', 'notícia.', 'bilhete.'],
    certa: 0, d: D.P016
  },
  {
    est: 1, fonte: CRIADA, trecho: fig('👟'),
    pergunta: 'Quantas sílabas (pedacinhos) tem a palavra SAPATO?',
    alts: ['1', '2', '3', '4'],
    certa: 2, d: D.D09
  },
  {
    est: 1, fonte: 'Placa (questão criada para este jogo)',
    trecho: 'Placa no corredor: "Cuidado! Piso molhado."',
    pergunta: 'O que essa placa avisa?',
    alts: ['Que o chão está molhado.', 'Que a loja está fechada.', 'Que é proibido entrar.', 'Que o elevador quebrou.'],
    certa: 0, d: D.D08
  },
  {
    est: 1, fonte: 'Pequeno texto (questão criada para este jogo)',
    trecho: 'Bia tem um gato preto e um cachorro branco. O gato se chama Mimi e o cachorro se chama Totó.',
    pergunta: 'Como se chama o cachorro de Bia?',
    alts: ['Totó.', 'Mimi.', 'Bia.', 'Preto.'],
    certa: 0, d: D.P021
  },

  {
    est: 2, fonte: 'Pequena história (questão criada para este jogo)',
    trecho: 'O patinho Quico nadava sozinho no lago. Ele estava triste porque não tinha amigos. Então a tartaruga Lia o convidou para brincar, e os dois ficaram juntos o dia todo.',
    pergunta: 'Quem é a personagem principal dessa história?',
    alts: ['O patinho Quico.', 'A tartaruga Lia.', 'O lago.', 'O dia.'],
    certa: 0, d: D.P030
  },
  {
    est: 2, fonte: 'Pequeno texto (questão criada para este jogo)',
    trecho: 'Vovó pegou o casaco, a touca e as luvas antes de sair de casa.',
    pergunta: 'O que dá para entender desse texto?',
    alts: ['Que estava frio.', 'Que estava calor.', 'Que era noite de festa.', 'Que a vovó ia nadar.'],
    certa: 0, d: D.P023
  },
  {
    est: 2, fonte: 'Pequeno texto (questão criada para este jogo)',
    trecho: 'Rafa abriu o presente, deu um grande sorriso e gritou: "Que legal!"',
    pergunta: 'Como Rafa ficou?',
    alts: ['Feliz.', 'Bravo.', 'Com sono.', 'Com medo.'],
    certa: 0, d: D.P023
  },
  {
    est: 2, fonte: CRIADA, trecho: fig('🐦'),
    pergunta: 'Qual é o nome da figura, escrito do jeito certo?',
    alts: ['PASSARINHO', 'PASARINHO', 'PASSARINHU', 'PACARINHO'],
    certa: 0, d: D.D09
  },
  {
    est: 2, fonte: 'Lista (questão criada para este jogo)',
    pergunta: 'Qual lista tem só nomes de animais?',
    alts: ['gato, vaca, pato', 'gato, mesa, pato', 'vaca, bola, sapo', 'pato, lápis, rato'],
    certa: 0, d: D.D09
  },

  {
    est: 3, fonte: 'Meio e fim de uma história (questão criada para este jogo)',
    trecho: 'Depois, ela tomou café e foi para a escola. No fim do dia, voltou para casa.',
    pergunta: 'Qual frase deve vir primeiro para a história fazer sentido?',
    alts: ['Ana acordou bem cedo.', 'Ana foi dormir.', 'Ana jantou com a família.', 'Ana tomou banho antes de dormir.'],
    certa: 0, d: D.D10
  },
  {
    est: 3, fonte: 'Pequeno texto (questão criada para este jogo)',
    trecho: 'A noite chegou, a lua apareceu e os grilos começaram a cantar no quintal.',
    pergunta: 'Quando acontece essa cena?',
    alts: ['À noite.', 'De manhã.', 'Ao meio-dia.', 'À tarde.'],
    certa: 0, d: D.P030
  },
  {
    est: 3, fonte: 'Frases (questão criada para este jogo)',
    pergunta: 'Qual frase é uma pergunta?',
    alts: ['Você quer brincar?', 'Eu quero brincar.', 'Vamos brincar!', 'Hoje vou brincar.'],
    certa: 0, d: D.P025
  },
  {
    est: 3, fonte: 'Pequeno texto (questão criada para este jogo)',
    trecho: 'A abelha voa de flor em flor e leva o néctar para a colmeia. Lá, ela ajuda a fazer o mel.',
    pergunta: 'Qual é o assunto desse texto?',
    alts: ['O trabalho da abelha.', 'As flores do jardim.', 'O sabor do mel.', 'O voo dos pássaros.'],
    certa: 0, d: D.P028
  },
  {
    est: 3, fonte: CRIADA, trecho: fig('🦁'),
    pergunta: 'Qual é o nome da figura, escrito do jeito certo?',
    alts: ['LEÃO', 'LEAO', 'LIÃO', 'LEÃU'],
    certa: 0, d: D.D09
  }
];

window.TEXTOS = {};
