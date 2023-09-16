const { Country } = require('../db');
const {Op} = require('sequelize');

module.exports = async ( name ) => {
    try {
        const findByName = await Country.findAll({where: { name: { [Op.iLike]: `%${name}%` } }})
        return findByName;
    }catch( err){
        throw new Error(`Error en la base de datos`)
    }
};