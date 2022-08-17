'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      movies.belongsTo(models.genre, {
        foreignKey: 'genre_id',
      });
    }
  }
  movies.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    releasedYear: DataTypes.INTEGER,
    genre_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'movies',
  });
  return movies;
};
