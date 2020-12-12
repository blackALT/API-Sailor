 [![Deploy on heroku](https://img.shields.io/badge/deploy-heroku.com-blueviolet)](https://reprograma-sailor.herokuapp.com/) [![](https://img.shields.io/badge/database-mongodb-green)](https://www.mongodb.com/) [![](https://img.shields.io/badge/documentation-swagger-informational)](https://app.swaggerhub.com/apis-docs/blackALT/Sailor/1.0.0)
# API Sailor
Projeto final do bootcamp Back-end - Porto Digital em parceria com o projeto MINAS.

![Sailor-logo](https://user-images.githubusercontent.com/34174851/101970410-f69fba00-3c08-11eb-96e9-bfac201ef22c.png)

A proposta dessa API é construir uma base de dados com URLs de lojas falsas (Fake Store) que podem ser adicionadas e visualizadas. É possível consultar se uma URL recebida por SMS ou por e-mail consta na base de dados e, por conseguinte, tenha grande chance de se tratar de uma fraude aplicada por terceiros mal intencionados. As submissões não serão exibidas ao público de imediato e passaram por uma checagem que atribuirá a estas uma tag específica para aumentar a credibilidade da consulta.

- Para ler a proposta completa, clique [aqui](#Proposta-do-Projeto).

## Principais funcionalidades da API

- [X] Consultar e cadastrar URLs relacionadas a golpes na Internet;
- [X] Fazer filtros específicos por URL ou pelo nome do alvo (site original);
- [x] Filtrar apenas as URLs classificadas como maliciosas;
- [X] Usuários com permissões elevadas podem classificar URLs;
- [X] É possível editar e deletar URLs.

## Tecnologias utilizadas

- **Git/Github**
- **Node.js**
- **npm**
- **MongoDB Atlas**
- **Heroku**

Dependencias:
- **Express**
- **Mongoose**
- **Dotenv-safe**
- **Bcrypt**
- **jwt**

## Estrutura do projeto

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
### Caso de uso e fluxograma

O fluxo principal da API consiste na consulta de URLs analisadas que são entregues na rota principal. Um usuário pode consultar apenas as consideradas maliciosas e fazer filtros específicos. As URLs cadastradas são armazenadas com o status ```isAnalyzed: false``` e ```isMalicious: false```. Esse status poderá ser mudado por um usuário autenticado que fará a análise e comprovará a malícia da URL por meio da rota autenticada ```/urls/submissions```.

O Fluxograma a seguir detalha o caso de uso básico da API:

![APISailor(3)](https://user-images.githubusercontent.com/34174851/101967318-6e65e880-3bf9-11eb-9e8d-f08a535ef2f5.png)

## Aprendizados

O Bootcamp da reprograma proporcionou um contato amplo e prático dos conceitos de programação, desde os mais básicos, como a construção da lógica de programação com Git/GitHbu, JavaScript e suas principais partículas (variaveis, laços de repetição, arrays e objetos) até as estruturas de desenvolvimento web, com a API RESTFull, arquitetura MVC, protocolo HTTP e seus verbos, Banco de Dados não relacional com MongoDB, autenticação e autorização com o JWT, hospedagem e configuração de aplicações na nuvem.

## Instruções para utilização da API 

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

## Rotas disponíveis

#### Endpoint URLs

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

#### Endpoint Users

| Verbo        | Recurso             | Descrição                          | OBS:                              |
| ------------ | --------------------| -----------------------------------|-----------------------------------|
| GET          | `/users`            | Retornar todas os usuários cadastrados | * Requer autenticação |
| POST         | `/users` | Cadastrar novo usuário| Informar nome, email e senha  |
| POST         | `/users/login` | Rota de login do usuário | Retorna o Token de acesso |

## Proposta do Projeto

O avanço da tecnologia proporcionou mudanças profundas na sociedade, seja no âmbito das relações pessoais ou nos negócios. Serviços que anteriormente eram oferecidos apenas fisicamente, passaram a existir também no âmbito digital. Um exemplo disso são as lojas virtuais (e-commerces).

No entanto, essa revolução digital também favoreceu o surgimento de um novo tipo de atividade criminosa, que opera silenciosamente criando cópias de websites de lojas oficiais para capturar informações financeiras de usuários na Internet.

A engenharia social usada por estes usuários mal intencionados é promovida visando ganhar cada vez mais um maior número de vítimas, logo, o compartilhamento de URLs potencialmente maliciosas para que possam ser consultadas pela comunidade é vital para que essas campanhas são obtenham o sucesso desejado. A API Sailor foi construida pensando nas pessoas comuns que trafegam pela internet, sobretudo os migrantes digitais (nossos pais, avós e tios), que podem ser alvos fáceis dos mais variados golpes.

[![](https://img.shields.io/badge/API-Sailor-blueviolet)](https://reprograma-sailor.herokuapp.com/)

### Contribuindo com o projeto

1. Faça o fork do projeto
2. Crie uma branch para sua modificação (git checkout -b feature/any)
3. Faça o commit (git commit -am 'Add some any')
4. Push (git push origin feature/any)
5. Crie um novo Pull Request

Apoio:
[![reprograma](https://user-images.githubusercontent.com/34174851/101967678-44f98c80-3bfa-11eb-9a5b-187ec3245814.jpg)](https://github.com/reprograma/)