const { Activity } = require('../db');

module.exports = async () => {
    try {
        const activity = await Activity.findAll();
        return activity;
    }catch(err){
        throw new Error(`Error en la base de datos`)
    }
}
