const { Sequelize } = require('sequelize')
const sequelize = require('../database/index')

const Categoria = sequelize.define('categorias', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  categoria: {
    type: Sequelize.STRING,
    allowNull:false
  }
})

module.exports = Categoria