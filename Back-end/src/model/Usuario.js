const { Sequelize } = require('sequelize')
const sequelize = require('../database/index')

const Usuario = sequelize.define('usuarios', {
  email: {
    type: Sequelize.STRING,
    allowNull: true
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Usuario