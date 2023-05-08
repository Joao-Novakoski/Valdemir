const Artigo = require("../model/Artigo");
const Categoria = require("../model/Categoria");
const SubArtigo = require("../model/SubArtigo");

module.exports = {
  async ListarArtigos(req, res) {
    try {
      const artigos = await Artigo.findAll({ include: [Categoria, SubArtigo] });
      res.status(200).json(artigos);
    } catch (error) {
      res.status(400).json({
        error: {
          message: error.message,
          status: error.status,
        },
      });
    }
  },

  async ListarUmArtigo(req, res) {
    try {
      const { slug } = req.params;

      const artigos = await Artigo.findOne({
        where: { slug },
        include: [Categoria, SubArtigo],
      });

      if (!artigos)
        return res.status(400).json({ mensagem: "O artigo não existe" });

      res.status(200).json(artigos);
    } catch (error) {
      res.status(400).json({
        error: {
          message: error.message,
          status: error.status,
        },
      });
    }
  },

  async CriarArtigo(req, res) {
    try {
      const { titulo, categoria, conteudo } = req.body;

      if (!titulo || !categoria || !conteudo)
        return res
          .status(400)
          .json({ mensagem: "ERRO: Algum dos campos está vazio" });

      const artigo = await Artigo.findOne({ where: { titulo } });
      const subArtigo = await SubArtigo.findOne({ where: { titulo } });

      if (artigo || subArtigo) {
        res
          .status(400)
          .json({ mensagem: "ERRO: Já existe um artigo com esse titulo" });
      } else {
        const findCategoria = await Categoria.findOne({
          where: { categoria },
        });
        const categoriaid = findCategoria.id;

        const slug = titulo.replace(/\s/, "-");

        const artigo = await Artigo.create({
          titulo,
          conteudo,
          slug,
          categoriaid,
        });

        res.status(201).json(artigo);
      }
    } catch (error) {
      res.status(400).json({
        error: {
          message: error.message,
          status: error.status,
        },
      });
    }
  },

  async AtualizarArtigo(req, res) {
    try {
      const { slug } = req.params;
      const { titulo, categoria, conteudo } = req.body;

      if (!slug)
        return res.status(400).json({
          mensagem: "ERRO: O título não foi especificado como parametro",
        });

      if (!titulo || !categoria || !conteudo)
        return res
          .status(400)
          .json({ mensagem: "ERRO: Algum dos campos está vazio" });

      const findArtigo = await Artigo.findOne({ where: { slug } });
      const categoriaid = await Categoria.findOne({ where: { categoria } }).id;

      if (!findArtigo)
        return res
          .status(400)
          .json({ mensagem: "ERRO: O artigo não foi encontrado" });

      const newSlug = titulo.split(" ").join("-");

      const newArticle = await Artigo.update(
        {
          titulo: titulo,
          categoriaid,
          conteudo: conteudo,
          slug: newSlug,
        },
        { where: { slug } }
      );

      res.status(200).json(newArticle);
    } catch (error) {
      res.status(400).json({
        error: {
          message: error.message,
          status: error.status,
        },
      });
    }
  },

  async DeletarArtigo(req, res) {
    try {
      const { slug } = req.params;

      if (!slug)
        return res.status(400).json({
          mensagem: "ERRO: O título não foi especificado como parametro",
        });

      const findArtigo = Artigo.findOne({ where: { slug } });

      if (!findArtigo)
        return res
          .status(400)
          .json({ mensagem: "ERRO: O artigo não foi encontrado" });

      await Artigo.destroy({ where: { slug } });

      res.status(204).json();
    } catch (error) {
      res.status(400).json({
        error: {
          message: error.message,
          status: error.status,
        },
      });
    }
  },
};
