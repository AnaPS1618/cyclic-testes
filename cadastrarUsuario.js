
const bcrypt = require('bcrypt');
const tramiti = require('./conexao');


const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha} = req.body;
  
    try {
        const quantidadeUsuarios = await tramiti('usuarios').where('email',email).first()
  
        if (quantidadeUsuarios) {
            return res.status(400).json("O email já existe");
        }
  
        const senhaCriptografada = await bcrypt.hash(senha, 10);
  
  
        const usuario = await tramiti('usuarios').insert({ 
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

  module.exports = {
    cadastrarUsuario
  }