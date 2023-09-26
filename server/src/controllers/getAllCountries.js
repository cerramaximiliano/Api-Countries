const { Country, Activity } = require('../db');
const { fillDB } = require('../utils/utils');

module.exports = async () => {
    try {
        const createCountries = await fillDB();
        const findAllCountries = await Country.findAll( 
            {include: {
                model: Activity,
                attributes: ["name", "id", "season", "difficulty", "duration"],
                through: {
                    attributes: [],
                }
            }}
            );
        return findAllCountries
    }catch (err) {
        console.log(err);
        throw new Error(`Error en la base de datos`)
    }
};