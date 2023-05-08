const { Sequelize } = require('sequelize')
const sequelize = require('../database/index')
const Artigo = require('./Artigo')
const Categoria = require('./Categoria')

const SubArtigo = sequelize.define('SubArtigos', {
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

SubArtigo.belongsTo(Artigo, {
  foreignKey: 'artigoid',
  allowNull: false
})

Artigo.hasMany(SubArtigo, {
  foreignKey:  'artigoid',
  allowNull: false
})

SubArtigo.belongsTo(Categoria, {
  foreignKey: 'categoriaid',
  allowNull: false
})

Categoria.hasMany(SubArtigo, {
  foreignKey:  'categoriaid',
  allowNull: false
})

module.exports = SubArtigo