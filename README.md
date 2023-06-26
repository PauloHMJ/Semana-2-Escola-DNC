# Semana-2-Escola-DNC
Projeto de Desenvolvimento do Modulo Base do Curso de Tecnologia da Escola DNC
- Link do site disponibilizado: https://projeto-escola-dnc.netlify.app/
- Link da Planilha de registro de informações: https://docs.google.com/spreadsheets/d/1W6cizEfVCHEWZGfkKaeVAVdT3E1rkh2puf_p03W2f_k/edit?usp=sharing


### Documentação HTML

#### `index.html`

O arquivo `index.html` representa a página principal para o "LandingPage" ou "LandingPage Escola DNC".

- `index.html` inclui as seguintes seções e elementos:

  - `<head>`: Contém metadados e recursos externos vinculados à página.
    - Os metadados incluem a codificação de caracteres do documento e as configurações de viewport.
    - Os recursos externos incluem as fontes do Google e um arquivo CSS personalizado (`style.css`).
    - O título da página está definido como "Projeto Escola DNC".

  - `<body>`: Contém o conteúdo da página.
    - `<div id="menu-superior">`: Representa a seção do menu superior com um logotipo, título e um parágrafo.
    - `<div id="menu-informacional">`: Representa a seção de menu de informações com três parágrafos e ícones.
    - `<div id="secaovideo">`: Representa a seção de vídeo com um vídeo incorporado do YouTube, um título e um parágrafo.
    - `<div id="carrosel">`: Representa a seção de carrossel com um título e um conjunto de imagens/cartões exibidos em formato de carrossel.
    - `<div id="Formulario">`: Representa a seção de formulário com um título e um formulário contendo campos de entrada para nome, e-mail e número de telefone.
    - O código JavaScript está vinculado no final do arquivo usando a tag `<script src="Index.js"></script>`.





### Documentação JavaScript

#### `Index.js`

O arquivo `Index.js` contém funções JavaScript que manipulam a visibilidade de certos elementos e lidam com a funcionalidade do carrossel na página.

- Variáveis declaradas:
  - `Leonardo`, `Samantha` e `Bruna`: Essas variáveis são atribuídas aos elementos na página com os respectivos valores de `id`.
  - `SetaDireita` e `SetaEsquerda`: Essas variáveis são atribuídas aos elementos na página com os respectivos valores de `id`.

- Funções:
  - `RolarParaDireita()`: Essa função é chamada quando a seta direita é clicada no carrossel.
    - Ela define a propriedade `style` dos elementos `Bruna`, `Samantha`, `SetaDireita` e `SetaEsquerda` para controlar a visibilidade e o layout desses elementos.
    - `Bruna` fica invisível (`display: none`), `Samantha` fica visível (`display: flex`), `SetaDireita` fica invisível e `SetaEsquerda` fica visível com um valor personalizado para a margem superior (`margin-top: 55px`).
    
  - `RolarParaEsquerda()`: Essa função é chamada quando a seta esquerda é clicada no carrossel.
    - Ela define a propriedade `style` dos elementos `Bruna`, `Samantha`, `SetaDireita` e `SetaEsquerda` para controlar a visibilidade e o layout desses elementos.
    - `Bruna` fica visível (`display: flex`),
