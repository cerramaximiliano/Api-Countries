import { ADD_ACTIVITIES, ADD_COUNTRIES, ADD_COUNTRIES_BY_NAME, FILTER, ORDER, ORDER_POPULATION, RESET_FILTER, CREATE_ACTIVITIES} from "./actions/actions_types";

const initialState = {
    countries: [],
    allCountries: [],
    activities: []
}

function reducer ( state = initialState, action ){
    switch (action.type) {
        case ADD_COUNTRIES : 
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }
        case ADD_COUNTRIES_BY_NAME :
            return {
                ...state,
                allCountries: action.payload
            }
        case FILTER :
            let cloneCountries = [...state.countries];
            
            if( action.payload.activity !== '' ){
                console.log(action.payload.activity);
                cloneCountries = cloneCountries.filter(country =>  country["Activities"].some((activity) => activity.name === action.payload.activity));
            }
            if ( action.payload.continent !== '') {
                console.log(action.payload.continent);
                cloneCountries = cloneCountries.filter(country => country.continent === action.payload.continent)
            }
                return {
                ...state,
                allCountries: cloneCountries
            }

        case ORDER :
            const clonedCountries = [...state.allCountries];
            const orderCountries = clonedCountries.sort((a, b) => {
              if (action.payload === 'ASC') {
                return a.id.localeCompare(b.id)
              } else {
                return b.id.localeCompare(a.id)
              }
            });
            return {
                ...state,
                allCountries: orderCountries
            }
        case ORDER_POPULATION :
            const clonedCountr = [...state.allCountries];
            const orderCountriesByPopulation= clonedCountr.sort((a,b) => {
                if(action.payload === 'MAX'){
                    return b.population - a.population
                }else{
                    return a.population - b.population
                }
            })
            return {
                ...state,
                allCountries: orderCountriesByPopulation
            }
        case ADD_ACTIVITIES :
            return {
                ...state,
                activities: action.payload
            }
        case CREATE_ACTIVITIES :
            return {
                ...state,
                activities: [...state.activities, action.payload]
            }
        case RESET_FILTER :
            return {
                ...state,
                allCountries: state.countries
            }
        default:
            return {
                ...state
            };
    }
}


export default reducer;