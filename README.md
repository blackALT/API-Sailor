## Projeto Final - Reprograma - API Sailor

### 1. Objetivo
A proposta dessa API é construir uma base de dados com URLs de lojas falsas (Fake Store) que podem ser adicionadas e visualizadas. É possível consultar se uma URL recebida por SMS ou por e-mail consta na base de dados e, por conseguinte, tenha grande chance de se tratar de uma fraude aplicada por terceiros mal intencionados. As submissões não serão exibidas ao público de imediato e passaram por uma checagem que atribuirá a estas uma tag específica para aumentar a credibilidade da consulta.

### Tecnologias 

- Git/Github
- Node.js
- MongoDB
- Heroku

### Estrutura do projeto

```
pasta-do-projeto
├── src
│   ├── controller
│   ├── model
│   ├── routes
│   └── app.js
├── server.js
├── package.json
```
### Json

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

### Aprendizados

O Bootcamp da reprograma proporcionou um contato amplo e prático dos conceitos de programação, desde os mais básicos, como a construção da lógica de programação com Git/GitHbu, JavaScript e suas principais partículas (variaveis, laços de repetição, arrays e objetos) até as estruturas de desenvolvimento web, com a API RESTFull, arquitetura MVC, protocolo HTTP e seus verbos, Banco de Dados não relacional com MongoDB, autenticação e autorização, hospedagem e configuração de aplicações na nuvem.

### Instruções para utilização da API, 

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

| Verbo        | Recurso             | Descrição                          | OBS:                              |
| ------------ | --------------------| -----------------------------------|-----------------------------------|
| GET          | `/urls`            | Retornar todas as urls submetidas e analisadas | Filtros disponíveis: Target e URL |
| GET          | `/urls/malicious` | Retornar apenas as urls classificadas como maliciosas| Filtros disponíveis: Target |
| GET          | `/urls/submissions` | Retornar todas as urls submetidas e não analisadas | * Requer autenticação |
| GET          | `/urls/backlog` | Retornar todas as urls | * Requer autenticação |
| POST         | `/urls/` | Cadastrar nova url                | Informar apenas a URL |
| PUT          | `/urls/submissions/:id`        | Atualizar uma submissão a partir do ID    |  * Requer autenticação |
| DELETE       | `/urls/submissions/:id`        | Deletar uma submissão a partir do ID        | * Requer autenticação |
| PATCH        | `/urls/submissions/:id`  | Atualizar atributos da submissão a partir do ID | * Requer autenticação |

### Contribuindo com o projeto

1. Faça o fork do projeto
2. Crie uma branch para sua modificação (git checkout -b feature/any)
3. Faça o commit (git commit -am 'Add some any')
4. Push (git push origin feature/any)
5. Crie um novo Pull Request

[{Reprograma}](https://github.com/reprograma/)