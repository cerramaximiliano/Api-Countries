import { ADD_COUNTRIES, ADD_COUNTRIES_BY_NAME, FILTER, FILTER_BY_CONTINENT, ORDER, ORDER_POPULATION, ADD_ACTIVITIES, RESET_FILTER } from './actions_types';
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

        }
    }
}

export const filterCards = (activity) => {
    return {
        type: FILTER,
        payload: activity
    }
};

export const filterByeContinent = (continent) => {
    return {
        type: FILTER_BY_CONTINENT,
        payload: continent
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
        const {data} = await axios.get(`${URL_BASE}activities`)
        return dispatch({
            type: ADD_ACTIVITIES,
            payload: data
        })
    }
}

export const resetFilter = () => {
    return {
        type: RESET_FILTER,
    }
}