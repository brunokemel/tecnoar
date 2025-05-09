# TecnoAR - Landing Page

Landing page moderna para a empresa TecnoAR, especializada em refrigeração automotiva.

## Tecnologias Utilizadas

- React
- Material-UI
- Styled Components

## Requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/tecnoar-landing.git
cd tecnoar-landing
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm start
# ou
yarn start
```

O aplicativo estará disponível em `http://localhost:3000`.

## Estrutura do Projeto

```
src/
  ├── components/
  │   ├── Header.js
  │   ├── Hero.js
  │   ├── Services.js
  │   ├── About.js
  │   ├── Contact.js
  │   └── Footer.js
  ├── App.js
  └── index.js
```

## Personalização

Para personalizar o conteúdo da landing page, edite os arquivos na pasta `src/components/`. Cada componente representa uma seção da página e pode ser modificado conforme necessário.

## Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
# ou
yarn build
```

Os arquivos otimizados serão gerados na pasta `build/`. 