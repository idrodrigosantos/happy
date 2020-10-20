# Happy
Sistema de orfanatos.

## Softwares necessários
* Editor de código-fonte
* Node.js
* Git

## Instalação
```bash
# Clone o repositório
$ git clone https://github.com/imsantosrodrigo/happy.git

# Acesse o diretório
$ cd happy

# Instale as dependências
$ npm install

# Crie o banco de dados
$ node src/database/db.js

# Adiciona dados ao banco de dados
$ node src/database/seed.js
```

## Executando o sistema
```bash
# Inicie o servidor
$ npm start
```

No navegador acesse o endereço:
```
http://localhost:5500/
```

## Tecnologias
* HTML
* CSS
* JavaScript
* Node.js
* SQLite
* Handlebars
* Express.js

## Dependências
* [Express](https://github.com/expressjs/express)
* [hbs](https://github.com/pillarjs/hbs)
* [sqlite-async](https://github.com/fhellwig/sqlite-async)

## Dependência de desenvolvimento
* [Nodemon](https://github.com/remy/nodemon)
