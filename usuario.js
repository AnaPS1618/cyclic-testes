const knex = require("./conexao")


const listarCategorias = async (req, res) => {

    try{
  
      const sql = await knex('categorias')
                  .returning('*') 
                  .debug()
  
      return res.status(200)
                  .json(sql)
  
    }catch(error){
      console.log(error.message)
      return res.status(500)
                .json('Erro interno, necessário verificar')
    }
  }

  module.exports = {
    listarCategorias
  }