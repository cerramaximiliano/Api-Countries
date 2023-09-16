const { Country } = require('../db');
const { fillDB } = require('../utils/utils');

module.exports = async () => {
    try {
        const createCountries = await fillDB();
        const findAllCountries = await Country.findAll({raw:true});
        return findAllCountries
    }catch (err) {
        console.log(err);
        throw new Error(`Error en la base de datos`)
    }
};