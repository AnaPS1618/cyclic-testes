const express = require('express')
const { listarCategorias } = require('./usuario')
const { cadastrarUsuario } = require('./cadastrarUsuario')
const { camposObrigatoriosLogin } = require('./verificao')

const rotas = express()

rotas.get('/categoria',camposObrigatoriosLogin, listarCategorias)
rotas.post('/usuario', cadastrarUsuario)

module.exports = {
    rotas
}