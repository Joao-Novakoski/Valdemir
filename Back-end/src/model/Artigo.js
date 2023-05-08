const { Sequelize } = require('sequelize')
const sequelize = require('../database/index')
const Categoria = require('./Categoria')

const Artigo = sequelize.define('artigos', {
  titulo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  conteudo: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

Artigo.belongsTo(Categoria, {
  foreignKey: 'categoriaid',
  allowNull: false
})

Categoria.hasMany(Artigo, {
  foreignKey:  'categoriaid',
  allowNull: false
})

module.exports = Artigo