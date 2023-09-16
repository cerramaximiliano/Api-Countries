const { Router } = require("express");
const router = Router();
const getAllCountries = require("../controllers/getAllCountries");
const getCountryById = require("../controllers/getCountryById");
const getCountryByName = require("../controllers/getCountryByName");
const postActivity = require("../controllers/postActivity");
const getAllActivities = require("../controllers/getAllActivities");

router.get('/countries', async (req, res) => {
    try{
        const createAllCountries = await getAllCountries()
        res.status(200).json(createAllCountries)
    }catch(err){
        res.status(500).json({error: err.message})
    }
});
router.get('/countries/:idPais', async (req, res) => {
    const {idPais} = req.params;
    if( idPais.length !== 3) return res.status(203).send(`Id no válido`)
    try {
        const country = await getCountryById(idPais.toUpperCase());
        if( !country ) return res.status(204).send(`No se encontraron datos para ese id`)
        res.status(200).json(country)
    }catch (err) {
        res.status(500).json({Error: err.message})
    }
});
router.get('/name', async (req, res) => {
    const {name} = req.query;
    try {
        if( !name ) return res.status(203).send(`Nombre inválido`)
        const countries = await getCountryByName(name);
        if(! countries || countries.length == 0 ) return res.status(204).send(`No se encontraron datos para ese nombre`)
        res.status(200).json(countries)
    }catch (err) {
        res.status(500).json({Error: err.message})
    }
});
router.post('/activities', async (req, res) => {
    const { name, difficulty, duration, season, countries } = req.body;
    if ( !name || !difficulty || !duration || !season || !countries ) return res.status(203).send(`Debe ingresar valores válidos`);
    try {
        const activity = await postActivity(name, difficulty, duration, season, countries)
        res.status(201).json(activity);
    }catch (err){
        res.status(500).json({error: err.message})
    }
});


router.get('/activities', async (req, res) => {
    try {
        const activity = await getAllActivities();
        if( !activity || activity.length == 0 ) return res.status(204).send(`No se encontraron actividades`);
        res.status(200).json(activity)
    }catch(err){
        res.status(500).json({error: err})
    }
});

module.exports = router;
