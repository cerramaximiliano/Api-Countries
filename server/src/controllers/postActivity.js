const { Activity } = require('../db');

module.exports = async ( name, difficulty, duration, season, countries ) => {
    try {
        const [activity, created] = await Activity.findOrCreate({ 
            where: { name }, 
            defaults: {name, difficulty, duration, season} 
        });
        activity.addCountries(countries);
        return [activity, created];
    }catch (err) {
        throw new Error(`Error en la base de datos`)
    }
}