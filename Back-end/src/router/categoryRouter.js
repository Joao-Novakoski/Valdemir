const categoryRouter = require('express').Router();

const CategoriaController = require('../controller/CategoriaController');
const JWT = require('../controller/JWT');

categoryRouter.get('/', CategoriaController.ListarCategorias);
categoryRouter.post('/', JWT.verifyJWT, CategoriaController.CriarCategoria);
categoryRouter.put('/:prevCategory', JWT.verifyJWT, CategoriaController.AtualizarCategoria);
categoryRouter.delete('/:categoria', JWT.verifyJWT, CategoriaController.DeletarCategoria);

module.exports = categoryRouter;