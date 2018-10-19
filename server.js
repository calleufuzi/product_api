'use strict'

const express = require('express');
const mongoose = require('mongoose');
const requireDir =require('require-dir');
const cors = require('cors');

// Iniciando App
const app = express();
// Permite troca de informações em JSON
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/node-api', 
  { useNewUrlParser: true}
);
requireDir('./src/models');

// Prineira rota
app.use('/api', require('./src/routes'));

// Subindo o Servidor local na porta 3001
app.listen('3001');