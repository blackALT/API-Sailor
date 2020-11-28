## Projeto Final

### Objetivo
A proposta dessa API é construir uma base de dados com vagas de emprego por meio da qual um usuário qualquer possa fazer consultas de vagas recentes, que serão incluídas pela comunidade. O objetivo é centralizar a divulgação de vagas, fugindo de canais de chat como WhatsApp e outros apps de mensagem instantânea.

### Tecnologias 

- Git/Github
- Node.js
- MongoDB

### Estrutura do projeto

```
pasta-do-projeto
├── src
│   ├── controller
│   ├── model
│   ├── routes
│   └── index.js
├── server.js
├── package.json
```
#### Estrutura de cada vaga

```json
{
    "id": "autoincremental",
    "empresa": "XPTO",
    "titulo": "DesenvolvedXr",
    "dataInclusao":"01/12/2020",
    "cidade":"Recife",
    "estado":"PE",
    "url": "http://xpto.com",
    "nivel" : "junior, pleno ou senior",
    "requisitos": ["node","javaScript","...."],
    "remuneracao":"",
    "recente": true
}
```

### Aprendizados


### Instruções para utilização da API, 

Para utilizar essa API, é necessário ter instalado na sua máquina as tecnologias Node.JS e MongoDB.

- Instalação

Faça um Fork esse repositório para seu github. Clone na sua máquina. Após entrar na pasta pelo PROMPT, dê npm init e npm install.

- Utilização

- Para inicialiazar o server:

npm start

### Informações sobre as rotas

| Verbo        | Recurso             | Descrição                          |
| ------------ | --------------------| -----------------------------------|
| GET          | `/vagas`            | Retornar todas as vagas disponíveis     |
| GET          | `/vagas/:categoria` | Retornar apenas um vaga por categoria (junior, pleno, senior) |
| GET          | `/vagas/antigas` | Retornar todos os vagas disponíveis |
| POST         | `/vagas`            | Cadastrar nova vaga                |
| PUT          | `/vagas/:id`        | Atualizar uma vaga específica       |
| DELETE       | `/vagas/:id`        | Deletar uma vaga específico        |
| PATCH        | `/vagas/:id`  | Atualizar campo específico de um vaga específico |   


### Ideia de atualização

- [ ] Criar uma rota com filtro, para mostrar somente vagas de junior.
- [ ] Criar uma rota com filtro, para mostrar somente vagas de pleno.
- [ ] Criar uma rota com filtro, para mostrar somente vagas de senior.
- [ ] Mostrar somente vagas antigas (antes de 1 mês).
- [ ] Mostrar vagas atuais na rota default (até 1 mês)
- [ ] Delete com temporizador (vagas após 1 mês)
- [ ] Usar exemplo do grupo