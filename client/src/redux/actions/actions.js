import { ADD_COUNTRIES, FILTER, ORDER } from './actions_types';
import axios from 'axios';

const URLBASE = `http://localhost:3001/`

export const addCountries = () => {
    return  async function (dispatch ) {
        try {
        const {data} = await axios.get(`${URLBASE}countries`);
        return dispatch ({
            type: ADD_COUNTRIES,
            payload: data
        })
    }catch(err){
        console.log(err)
    }}
};