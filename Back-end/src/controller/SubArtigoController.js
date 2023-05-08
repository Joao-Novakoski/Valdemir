const SubArtigo = require('../model/SubArtigo')
const Categoria = require('../model/Categoria')
const Artigo = require('../model/Artigo')

module.exports = {
  async ListarUmSubArtigo(req, res) {
    try {
      const { slug } = req.params

      const subArtigo = await SubArtigo.findOne({
        where: { slug },
        include: [ Categoria, Artigo ]
      })

      if (!subArtigo) res.status(400).json({ mensagem: 'O artigo não existe' })

      res.status(200).json({ subArtigo })
    } catch (error) {
      
    }
  },

  async CriarSubArtigo(req, res) {
    try {
      const { titulo, categoria, conteudo, artigo } = req.body

      if (!titulo || !categoria || !conteudo || !artigo) res.status(401).json({ mensagem: 'ERRO: Algum dos campos está vazio' })
      else {
        const artigo_ = await Artigo.findOne({ where: { titulo } })
        const subArtigo = await SubArtigo.findOne({ where: { titulo } })

        if (subArtigo || artigo_) {
          res.status(401).json({ mensagem: 'ERRO: Já existe um artigo com esse título' })
        } else {
          const categoriaid = await Categoria.findOne({ where: { categoria } })
          const artigoid = await Artigo.findOne({ where: { titulo: artigo } })

          const slug = titulo.split(' ').join('-')

          if(!categoriaid && !artigoid) return res.status(400).json({ message: 'erro'})

          const subArtigo = await SubArtigo.create({
            titulo: titulo,
            conteudo: conteudo,
            slug: slug,
            categoriaid: categoriaid.id,
            artigoid: artigoid.id
          })

          res.status(201).json({
            mensagem: 'Sub-artigo criado com sucesso',
            subArtigo
          })
        }
      }
    } catch (error) {
      res.status(400).json({ error })
    }
  },

  async AtualizarSubArtigo(req, res) {
    try {
      const { slug } = req.params
      const { titulo, categoria, conteudo, artigo } = req.body

      if(!slug) res.status(400)
      if (!titulo || !categoria || !conteudo || !artigo) res.status(400).json({ mensagem: 'ERRO: Algum dos campos está vazio' })
      else {
        const categoriaid = await Categoria.findOne({ where: { categoria } }).id
        const artigoid = await Artigo.findOne({ where: { artigo } }).id

        const slug = titulo.split(' ').join('-')

        await SubArtigo.update({
          titulo: titulo,
          categoriaid: categoriaid,
          conteudo: conteudo,
          artigoid: artigoid,
          slug: slug
        }, { where: { slug } })

        res.status(200).json({ mensagem: "Artigo atualizado com sucesso" })
      }

    } catch (error) {
      res.status(400).json({ error })
    }
  },

  async DeletarSubArtigo(req, res) {
    try {
      const { slug } = req.params

      await SubArtigo.destroy({ where: { slug } })

      res.status(200).json({ mensagem: 'Artigo deletado com sucesso' })
      
    } catch (error) {
      res.status(400).json({ error })
    }
  }
}