import { DataTypes } from "@sequelize/core";
import sequelize from "../../config/database.js";

const Filme = sequelize.define('filme', {
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
});

export default Filme;