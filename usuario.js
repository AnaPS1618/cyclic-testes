const knex = require("./conexao")
const bcrypt = require("bcrypt");
//const jwt = require("jsonwebtoken");
//const senhaToken = require("../senhaToken");

const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha} = req.body;

  try {
      const quantidadeUsuarios = await knex('usuarios').where('email',email).first()

      if (quantidadeUsuarios) {
          return res.status(400).json("O email já existe");
      }

      const senhaCriptografada = await bcrypt.hash(senha, 10);


      const usuario = await knex('usuarios').insert({ 
        nome: nome, 
        email: email, 
        senha: senhaCriptografada 
      }).returning('*');
      
  
      if(!usuario[0]){
         return res.status(400).json("O usuario não foi cadastrado")
      }

      const { senha: _, ...usuarioCadastrado } = usuario[0]

      return res.status(200).json(usuarioCadastrado);
  }catch(error) {
      return res.status(400).json(error.message);
  }
}

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
    //cadastrarUsuario
  }