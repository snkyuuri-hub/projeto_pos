import { DataTypes } from 'sequelize';
import sequelize from '../config/database';
import Movie from './movie.model';

const Actor = sequelize.define('Actor', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  birthdate: { type: DataTypes.DATE },
  movieId: { type: DataTypes.INTEGER, references: { model: 'Movies', key: 'id' } },
});

Movie.hasMany(Actor, { foreignKey: 'movieId' });
Actor.belongsTo(Movie, { foreignKey: 'movieId' });

export default Actor;