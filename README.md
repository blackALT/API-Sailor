## Projeto Final - Reprograma - API Sailor

### 1. Objetivo
A proposta dessa API é construir uma base de dados com URLs de lojas falsas (Fake Store) que podem ser adicionadas e visualizadas. É possível consultar se uma URL recebida por SMS ou por e-mail consta na base de dados e, por conseguinte, tenha grande chance de se tratar de uma fraude aplicada por terceiros mal intencionados. As submissões não serão exibidas ao público de imediato e passaram por uma checagem que atribuirá a estas uma tag específica para aumentar a credibilidade da consulta.

### Tecnologias 

- Git/Github
- Node.js
- MongoDB
- Heroku

### Estrutura do projeto

A API trabalha com duas collections para armazenamento de duas principais estruturas: Usuários e URLs. Os usuários autenticados podem ter acesso as rotas autenticadas para alterar e deletar as submissões enviadas pelo público em geral. Isso serve para alterar o campo de análise, conferindo a submissão o status de analizada e, por tanto, elegível para ser exibida ao público.

Os pacotes bcrypt e jwt do Node são usados para armazenar a senha do usuário de forma segura no Mongo e para criar o token de acesso as rotas autenticadas, que podem ser acessadas via POSTMAN usando o Bearer para trafegar o Token no Header da requisição.

```
Api-sailor
├── src
│   ├── controller
│   ├── model
│   ├── routes
│   └── app.js
├── server.js
├── package.json
```
### Json

#### URLs

```json
{
    "id": 1,
    "url": "http:xptofake.com",
    "target": "XPTO",
    "submissionDate":"01/12/2020",
    "isAnalyzed": true,
    "isMalicious":true
}
```

#### Users
```json
{
    "id": 1,
    "name": "John Doe",
    "email": "john@doe.com",
    "passwd":"mypassword"
}
```

### Aprendizados

O Bootcamp da reprograma proporcionou um contato amplo e prático dos conceitos de programação, desde os mais básicos, como a construção da lógica de programação com Git/GitHbu, JavaScript e suas principais partículas (variaveis, laços de repetição, arrays e objetos) até as estruturas de desenvolvimento web, com a API RESTFull, arquitetura MVC, protocolo HTTP e seus verbos, Banco de Dados não relacional com MongoDB, autenticação e autorização com o JWT, hospedagem e configuração de aplicações na nuvem.

### Instruções para utilização da API 

#### Documentação disponível também no Swagger
[Reprograna - Sailor API](https://app.swaggerhub.com/apis-docs/blackALT/Sailor/1.0.0)

Para utilizar esta API é necessária a instalação das tecnologias NodeJS e MongoDB.

- *Instalação*

1. Faça um Fork desse repositório para seu GitHub;
2. Clone seu repositório para seu ambiente local;
3. Abra o console e digite os comandos:

```
$ npm init 

$ npm install
```

- *Inicialiazação*

```
npm start
```

### Rotas disponíveis


#### 1. Endpoint URLs

| Verbo        | Recurso             | Descrição                          | OBS:                              |
| ------------ | --------------------| -----------------------------------|-----------------------------------|
| GET          | `/urls`            | Retornar todas as urls submetidas e analisadas | Filtros disponíveis: Target e URL |
| GET          | `/urls/malicious` | Retornar apenas as urls classificadas como maliciosas| Filtros disponíveis: Target |
| GET          | `/urls/submissions` | Retornar todas as urls submetidas e não analisadas | * Requer autenticação |
| GET          | `/urls/backlog` | Retornar todas as urls | * Requer autenticação |
| POST         | `/urls/` | Cadastrar nova url                | Informar apenas a URL |
| PUT          | `/urls/submissions/:id`        | Atualizar uma submissão a partir do ID    |  * Requer autenticação |
| DELETE       | `/urls/submissions/:id`        | Deletar uma submissão a partir do ID        | * Requer autenticação |
| DELETE       | `/urls/submissions`        | Deletar uma submissão a partir da URL        |* Requer autenticação /Filtros disponíveis: URL |
| PATCH        | `/urls/submissions/:id`  | Atualizar atributos da submissão a partir do ID | * Requer autenticação |

#### 2. Endpoint Users

| Verbo        | Recurso             | Descrição                          | OBS:                              |
| ------------ | --------------------| -----------------------------------|-----------------------------------|
| GET          | `/users`            | Retornar todas os usuários cadastrados | * Requer autenticação |
| POST         | `/users` | Cadastrar novo usuário| Informar nome, email e senha  |
| POST         | `/users/login` | Rota de login do usuário | Retorna o Token de acesso |

### Contribuindo com o projeto

1. Faça o fork do projeto
2. Crie uma branch para sua modificação (git checkout -b feature/any)
3. Faça o commit (git commit -am 'Add some any')
4. Push (git push origin feature/any)
5. Crie um novo Pull Request

[{Reprograma}](https://github.com/reprograma/)