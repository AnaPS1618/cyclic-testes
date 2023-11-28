
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const senhaToken = require("../senhaToken");
const tramiti = require("./conexao");

const loginUsuario = async (req, res) => {
  const { email, senha } = req.body;

 try {
    const usuario = await tramiti("usuarios").where({email: email}).first();

    if (!usuario) {
      return res.status(404).json("O usuario não foi encontrado");
    }

   const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

    if (!senhaCorreta) {
     return res.status(400).json("Email e senha não conferem");
    }
    
    const token = JWT.sign({ id: usuario.id }, senhaToken, { expiresIn: "8h" });

    const { senha: _, ...usuarioLogado } = usuario;

    return res.status(200).json({
      usuario,
      token,
   });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = {
  loginUsuario
}