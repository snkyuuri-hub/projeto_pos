import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.js';

const Filme = sequelize.define('Filme', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ano: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  tableName: 'filmes',
  timestamps: true
});

export default Filme;