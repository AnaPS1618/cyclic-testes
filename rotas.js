const express = require('express')
const { listarCategorias } = require('./usuario')

const rotas = express()

rotas.get('/categoria', listarCategorias)

module.exports = {
    rotas
}