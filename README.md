# nodeStudy

## Projeto iniciado para estudos de javascript no backend com node, express e mongoDB.


### Features

- [x] Cadastro de usuário.
- [x] Autenticação de Login.
- [x] Reset password usando mailer.
- []
- [] 


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

Na pasta collection, temos um JSON que você pode importar no INSOMNIA para testar as requisições.

Para utilizar a funcionalidade de resetar senha é necessário cadastrar um serviço de SMTP para envio do email,
nesta versão é utilizado o [MailTrap](https://mailtrap.io/). Para configurar o mailtrap use suas credências no arquivo
de configuração (src\config\mail.json).

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/dircksen/nodeStudy.git>

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ node src/index.js

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Express](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)

### Autor
---

<a href="https://blog.rocketseat.com.br/author/thiago/">
 <img style="border-radius: 50%;" src="https://avatars3.githubusercontent.com/u/380327?s=460&u=61b426b901b8fe02e12019b1fdb67bf0072d4f00&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Filipe Dircksen</b></sub></a> <a href="https://blog.rocketseat.com.br/author/thiago//" title="Rocketseat">🚀</a>


Feito com ❤️ por Filipe Dircksen 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Thiago-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/filipedircksen/)](https://www.linkedin.com/in/filipedircsken/) 