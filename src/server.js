// Importa os pacotes
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

// Inicia o express
const server = express();

// Utiliza body do req
server.use(express.urlencoded({ extended: true }));

// Utiliza os arquivos estáticos
server.use(express.static('public'));

// Configuração template engine
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'hbs');

// Rotas
server.get('/', pages.index);
server.get('/orphanage', pages.orphanage);
server.get('/orphanages', pages.orphanages);
server.get('/create-orphanage', pages.createOrphanage);
server.post('/save-orphanage', pages.saveOrphanage);

// Inicia o servidor
server.listen(5500);