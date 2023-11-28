const verificarCamposObrigatorios = async (req,res,next) => {
    const { nome, email, senha} = req.body;

    try {

        if (!nome || !email || !senha) {
            return res.status(404).json("Todos os campos são obrigatorios");
        }

        next();

    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const camposObrigatoriosLogin = async (req, res, next) => {
    const { email, senha} = req.body;

    try {

        if (!email || !senha) {
            return res.status(404).json("Todos os campos são obrigatorios");
        }

        next();

    } catch (error) {
        return res.status(400).json(error.message);
    }
}


module.exports = {
    verificarCamposObrigatorios, 
    camposObrigatoriosLogin
}