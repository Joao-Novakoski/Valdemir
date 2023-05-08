const subArticleRouter = require('express').Router();

const SubArtigoController = require('../controller/SubArtigoController');
const JWT = require('../controller/JWT');

subArticleRouter.get('/:slug', JWT.verifyJWT, SubArtigoController.ListarUmSubArtigo);
subArticleRouter.post('/', JWT.verifyJWT, SubArtigoController.CriarSubArtigo);
subArticleRouter.put('/:slug', JWT.verifyJWT, SubArtigoController.AtualizarSubArtigo);
subArticleRouter.delete('/:slug', JWT.verifyJWT, SubArtigoController.DeletarSubArtigo);

module.exports = subArticleRouter;