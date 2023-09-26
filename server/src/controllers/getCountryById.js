const { Country, Activity } = require('../db');


module.exports = async (id) => {
    try {
        const country = await Country.findByPk(id,
            {include: {
                model: Activity,
                attributes: ["name", "id", "season", "difficulty", "duration"],
                through: {
                    attributes: [],
                }
            }}
            );
        return country;
    }catch(err) {
        console.log(err);
        throw new Error(`Error en la base de datos`)
    }

};



