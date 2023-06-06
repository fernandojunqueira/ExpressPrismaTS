# ExpressPrismaTS

Este é um template para iniciar projetos usando Express, Prisma, Node.js e TypeScript.

## pré-requisitos

Certifique-se de ter o seguinte software instalado em sua máquina:

- **Node.js**
- **Postgres**

## Instalação

1. Clique no botão "Use this template" acima para criar um novo repositório com base neste template.
2. Clone o repositório recém-criado em sua máquina local.
3. Instale as dependências executando o comando `npm install`

## Configuração

1. Crie um arquivo .env na raiz do projeto com as seguintes variáveis de ambiente:
   `DB_URL=postgresql://user:password@localhost:5432/database`
2. Crie suas entidades dentro da pasta prisma no arquivo schema.prisma
3. Depois de o comando `npx prisma migrate dev`
4. De o comando `npx prisma studio` para ver como ficou suas migrações.

## Uso

- Para iniciar o servidor, execute o seguinde comando:
  `npm run dev`
- Para usar a tratativa de erro global basta chamar no seu código o seguinte comando:
  `throw new AppError("message", 400)`

## Estrutura do Projeto

- **prisma/** Contém o arquivo relacionado ao Prisma.
   -**schema.prisma**  
- **src/** Este diretório contém o código-fonte do seu aplicativo.
  - **erros/** Contém o os arquivos de tratamento de erro global contendo a função e a classe.
  - **routes/** Contém as rotas do Express.
  - **app.ts** Contém a inicialização de um servidor Express.
  - **server.ts** E nesse arquivo que inicia o servidor Express.
