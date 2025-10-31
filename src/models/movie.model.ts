import { DataTypes } from 'sequelize';
import sequelize from '../config/database';

const Movie = sequelize.define('Movie', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  genre: { type: DataTypes.STRING },
  releaseYear: { type: DataTypes.INTEGER },
  director: { type: DataTypes.STRING },
  rating: { type: DataTypes.FLOAT },
});

export default Movie;