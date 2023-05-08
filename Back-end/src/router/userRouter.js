const userRouter = require("express").Router();

const UsuárioController = require("../controller/UsuárioController");
const JWT = require("../controller/JWT");

userRouter.get("/", JWT.verifyJWT, UsuárioController.ListarUsuários);
userRouter.post("/logar", UsuárioController.LogarUsuário);
userRouter.post("/", UsuárioController.CadastrarUsuário);

module.exports = userRouter;
