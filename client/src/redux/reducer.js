import { ADD_COUNTRIES, FILTER, ORDER } from "./actions/actions_types";

const initialState = {
    countries: [],
    allCountries: [],
}

function reducer ( state = initialState, action ){
    switch (action.type) {
        case ADD_COUNTRIES : 
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }
        default:
            return {
                ...state
            };
    }
}


export default reducer;