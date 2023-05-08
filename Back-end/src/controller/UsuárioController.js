const Usuario = require("../model/Usuario")
const jwt = require('jsonwebtoken');

module.exports = {
  async ListarUsuários(req, res) {
    const usuarios = await Usuario.findAll()

    if (!usuarios) res.status(204).json({ mensagem: 'Não existem usuários cadastrados' })

    res.status(200).json({ usuarios })
  },

  async LogarUsuário(req, res) {
    const { email, senha } = req.body

    if (!email || !senha) res.status(400).json({ mensagem: 'ERRO: O campo de e-mail ou de senha estão vazios' })
    else {
      const usuario = await Usuario.findOne({ where: { email, senha } })

      if (!usuario) res.status(204).json({ mensagem: 'ERRO: Não existe um usuário com esse e-mail e senha' })
      else {
        const token = jwt.sign({ id: usuario.id }, process.env.TOKEN_SECRET, { expiresIn: 60 * 60 * 24 * 7 })

        res.status(200).json({ token })
      }
    }
  },

  async CadastrarUsuário(req, res) {
    const { email, senha } = req.body

    if (!email || !senha) res.status(400).json({ mensagem: 'ERRO: O campo de e-mail ou de senha estão vazios' })
    else {
      const usuario = await Usuario.create({ email, senha })

      res.status(201).json(usuario)
    }
  },

  async AtualizarUsuário(req, res) {
    const { email } = req.params
    const novoEmail = req.body.email
    const { senha } = req.body

    if (!novoEmail || !senha) res.status(400).json({ mensagem: 'ERRO: Algum dos campos não foi preenchido' })
    else {
      if (!email) res.status(400).json({ mensagem: 'ERRO: O email não foi passado como parâmetro' })
    }
  }
}