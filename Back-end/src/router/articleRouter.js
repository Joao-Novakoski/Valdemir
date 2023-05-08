const articleRouter = require('express').Router();

const ArtigoController = require('../controller/ArtigoController');
const JWT = require('../controller/JWT');

articleRouter.get('/', ArtigoController.ListarArtigos);
articleRouter.get('/:slug', JWT.verifyJWT, ArtigoController.ListarUmArtigo);
articleRouter.post('/', JWT.verifyJWT, ArtigoController.CriarArtigo);
articleRouter.put('/:slug', JWT.verifyJWT, ArtigoController.AtualizarArtigo);
articleRouter.delete('/:slug', JWT.verifyJWT, ArtigoController.DeletarArtigo);

module.exports = articleRouter;