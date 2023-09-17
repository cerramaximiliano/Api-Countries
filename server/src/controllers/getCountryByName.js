const { Country, Activity } = require('../db');
const {Op} = require('sequelize');

module.exports = async ( name ) => {
    try {
        const findByName = await Country.findAll({
        where: { name: { [Op.iLike]: `%${name}%` } },
        include: {
            model: Activity,
            attributes: ["name"],
            through: {
                attributes: [],
            }
        }

        });

        return findByName;
    }catch( err){
        throw new Error(`Error en la base de datos`)
    }
};