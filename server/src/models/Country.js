const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
      default: 'Not Available'
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
      default: 'Not Available'
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: false,
      default: 'Not Available'
    },
    area: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    population: {      
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },{
    timestamps: false
  });
};