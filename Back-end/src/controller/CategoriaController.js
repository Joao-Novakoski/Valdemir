const Artigo = require("../model/Artigo")
const Categoria = require("../model/Categoria")
const SubArtigo = require("../model/SubArtigo")

module.exports = {
  async ListarCategorias(req, res) {
    try {
      const categorias = await Categoria.findAll({
        include: {
          model: Artigo,
          include: [SubArtigo]
        }
      })

      if (!categorias) res.status(204).json({ mensagem: 'Não há categorias salvas' })
      else res.status(200).json(categorias)

    } catch (error) {
      res.status(400).json({ error })
    }
  },

  async CriarCategoria(req, res) {
    try {
      const { categoria } = req.body

      if (!categoria) res.status(400).json({ mensagem: 'ERRO: Você deve escrever o nome da categoria' })
      else {
        const findCategoria = await Categoria.findOne({ where: { categoria } })

        if (findCategoria) res.status(400).json({ mensagem: 'ERRO: Essa categoria já existe' })
        else {
          const novaCategoria = await Categoria.create({ categoria })

          res.status(201).json(novaCategoria)
        }
      }

    } catch (error) {
      res.status(400).json({ error })
    }
  },

  async AtualizarCategoria(req, res) {
    try {
      const { prevCategory } = req.params
      const { newCategory } = req.body

      if (!newCategory) res.status(400).json({ mensagem: 'ERRO: Você deve escrever o nome da categoria' })
      else {
        const findCategoria = await Categoria.findOne({ where: { categoria: newCategory } })

        if (findCategoria) res.status(400).json({ mensagem: 'ERRO: Essa categoria já existe' })
        else {
          await Categoria.update({ categoria: newCategory }, { where: { categoria: prevCategory } })

          res.status(200).json({ mensagem: 'A categoria foi atualizada com sucesso' })
        }
      }
    } catch (error) {
      res.status(400).json({ error })
    }
  },

  async DeletarCategoria(req, res) {
    try {
      const { categoria } = req.params

      if (!categoria) res.status(401).json({ mensagem: 'ERRO: você deve escrever o nome da categoria' })
      else {
        await Categoria.destroy({ where: { categoria } })
        res.status(204).json({ mensagem: 'Categoria deletada com sucesso' })
      }
    } catch(error) {
    res.status(400).json({ error })
  }
}
}