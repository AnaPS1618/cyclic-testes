const express = require('express')
const { listarCategorias, cadastrarUsuario } = require('./usuario')
const { verificarCamposObrigatorios } = require('./validacoes')

const rotas = express()

rotas.post("/usuario", verificarCamposObrigatorios, cadastrarUsuario)
rotas.get('/categoria', listarCategorias)

module.exports = {
    rotas
}