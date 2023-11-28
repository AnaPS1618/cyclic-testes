const express = require('express')
const { listarCategorias } = require('./usuario')
const { cadastrarUsuario } = require('./cadastrarUsuario')

const rotas = express()

rotas.get('/categoria', listarCategorias)
rotas.post('/usuario', cadastrarUsuario)

module.exports = {
    rotas
}