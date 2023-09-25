import { ADD_COUNTRIES, ADD_COUNTRIES_BY_NAME, FILTER, FILTER_BY_CONTINENT, ORDER, ORDER_POPULATION, ADD_ACTIVITIES, RESET_FILTER, CREATE_ACTIVITIES } from './actions_types';
import axios from 'axios';

const URL_BASE = `http://localhost:3001/`

export const addCountries = () => {
    return  async function (dispatch ) {
        try {
        const {data} = await axios.get(`${URL_BASE}countries`);
        return dispatch ({
            type: ADD_COUNTRIES,
            payload: data
        })
    }catch(err){
        console.log(err)
        window.alert(`Ha ocurrido un error en el servidor`)
    }}
};

export const addCountriesByName = (name) => {
    return async function (dispatch) {
        try {
            const {data} = await axios.get(`${URL_BASE}name?name=${name}`)
            return dispatch ({
                type: ADD_COUNTRIES_BY_NAME,
                payload: data
            })
        }catch(err){
            console.log(err);
            window.alert(`Ha ocurrido un error en el servidor`)
        }
    }
}

export const filterCards = (filter) => {
    console.log(filter);
    return {
        type: FILTER,
        payload: filter
    }
};

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order
    }
};

export const orderByPopulation = (order) => {
    return {
        type: ORDER_POPULATION,
        payload: order
    }
};

export const addActivities = () => {
    return async function (dispatch) {
        try {
            const {data} = await axios.get(`${URL_BASE}activities`)
            return dispatch({
                type: ADD_ACTIVITIES,
                payload: data
            })

        }catch(err){
            window.alert(`Ha ocurrido un error en el servidor`)
        }
    }
};

export const createActivities = (formData) => {
    return async function(dispatch) {
        try {
            const {data} = await axios.post(`${URL_BASE}activities`, formData)
            if ( data ) {
                if(data.ok === true) {
                    if( data.created === true ) window.alert(`Actividad creada correctamente`);
                    else window.alert(`Actividad actualizada correctamente`);
                    return dispatch({
                        type: CREATE_ACTIVITIES,
                        payload: data.data
                    })
                }else {
                    window.alert(`Complete correctamente los datos`)
                }
            }
        }catch (err) {
            console.log(err)
            window.alert(`Ha ocurrido un error en el servidor`)
        }

    }
};

export const resetFilter = () => {
    return {
        type: RESET_FILTER,
    }
}