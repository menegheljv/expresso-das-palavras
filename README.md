# Expresso das Palavras

Quiz animado, resumo da matéria e guia da prova de Língua Portuguesa do 9º ano, inspirado em Ibitiruí (Alfredo Chaves, ES).

A mascote é a jacupemba. O trem anda a cada questão respondida, e o cenário traz a cachoeira, a estação e a igrejinha.

## O que tem

- **Jogar**: 10 questões sorteadas, 30 segundos cada, pontos por velocidade e combo de acertos. Funciona com o teclado (A, B, C, D) e tem som e confete.
- **Matéria**: 14 temas com resumo, como cai na prova, exemplo e truque. Os temas com questões no quiz têm o botão "Treinar este tema".
- **A prova**: o que são o Saeb e o Paebes, como uma questão é montada, passo a passo para a hora H, armadilhas comuns e as habilidades do Paebes por família.

## Como abrir

Não precisa instalar nada. Abra o `index.html` no navegador, ou use o link do GitHub Pages do repositório.

## Estrutura

| Arquivo | Para quê |
|---|---|
| `index.html` | páginas, cenário e conteúdo da matéria e da prova |
| `style.css` | tema, jogo e animações |
| `paginas.css` | navegação e páginas de estudo |
| `app.js` | lógica do jogo, mascote, som e confete |
| `questoes.js` | banco de questões (cada uma com o descritor cobrado) |

Para acrescentar uma questão, copie um bloco de `questoes.js` e preencha `fonte`, `trecho`, `pergunta`, `alts`, `certa` (índice da alternativa correta) e `d` (código e texto do descritor).

## Fontes

- Preparatório SAEB, 9º ano, 2025 (SEDUC): questões e descritores do quiz.
- Coletânea de Itens Paebes 2024 (Secretaria de Estado da Educação do Espírito Santo, com itens do CAEd/UFJF): informações sobre a prova e lista de habilidades.

Material feito para uso pedagógico. Os textos citados nas questões pertencem aos respectivos autores e veículos indicados em cada questão.
