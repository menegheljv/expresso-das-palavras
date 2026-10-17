# Expresso das Palavras

**Jogue agora: https://menegheljv.github.io/expresso-das-palavras/**

Quiz animado, resumo da matéria e guia da prova de Língua Portuguesa para o **5º ano** e o **9º ano**, inspirado em Ibitiruí (Alfredo Chaves, ES). A página inicial deixa escolher o ano.

A mascote é a jacupemba. O trem anda a cada questão respondida, e o cenário traz a cachoeira, a estação e a igrejinha.

## O que tem

- **Jogar** (os dois anos têm a mesma estrutura): 3 estações de 10 perguntas (30 no total), da mais fácil à mais difícil, com 5 questões ilustradas e 3 textos inteiros (um por estação) para ler sem limite de tempo. No 9º ano cada texto tem 3 perguntas com gabarito do Listão do professor; no 5º ano são 2 perguntas por texto com o gabarito da Coletânea Paebes 2024. O 5º ano tem 1 minuto e meio por pergunta e o 9º ano, 1 minuto. Cada estação tem 10 vagões, um por pergunta, que ficam verdes ou vermelhos conforme o resultado. 1 minuto por pergunta, pontos por velocidade e combo de acertos. Funciona com o teclado (A, B, C, D) e tem som e confete.
- **Matéria**: 14 temas no 9º ano e 13 no 5º ano, cada um com resumo, como cai na prova, exemplo e truque. Os temas com questões no quiz têm o botão "Treinar este tema".
- **A prova**: o que são o Saeb e o Paebes, como uma questão é montada, passo a passo para a hora H, armadilhas comuns e as habilidades do Paebes por família.

## Como abrir

Não precisa instalar nada. Abra o `index.html` no navegador, ou use o link do GitHub Pages do repositório.

## Estrutura

| Arquivo | Para quê |
|---|---|
| `index.html` | página inicial: escolher 5º ou 9º ano |
| `5ano.html` e `9ano.html` | o jogo, a matéria e a prova de cada ano |
| `style.css` e `paginas.css` | tema, jogo, animações e páginas de estudo |
| `app.js` | lógica do jogo (a mesma para os dois anos), som e confete |
| `mascote.js` | desenho da jacupemba |
| `inicio.js` | scripts da página inicial |
| `questoes.js` (9º) e `questoes5.js` (5º) | banco de 30 questões em 3 estações, textos inteiros e configuração do ano |
| `img/` | imagens das questões ilustradas (cartazes, peças publicitárias e tirinhas) |

Para acrescentar uma questão, copie um bloco de `questoes.js` (9º) ou `questoes5.js` (5º) e preencha `fonte`, `trecho`, `pergunta`, `alts`, `certa` (índice da alternativa correta) e `d` (código e texto do descritor).

## Fontes

- Preparatório SAEB, 9º ano, 2025 (SEDUC): questões e descritores do quiz do 9º ano.
- Coletânea de Itens Paebes 2024 (Secretaria de Estado da Educação do Espírito Santo, com itens do CAEd/UFJF): questões e gabarito do 5º ano, informações sobre a prova e lista de habilidades.

Material feito para uso pedagógico. Os textos citados nas questões pertencem aos respectivos autores e veículos indicados em cada questão.
