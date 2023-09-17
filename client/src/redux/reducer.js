import { ADD_ACTIVITIES, ADD_COUNTRIES, ADD_COUNTRIES_BY_NAME, FILTER, FILTER_BY_CONTINENT, ORDER, ORDER_POPULATION, RESET_FILTER } from "./actions/actions_types";

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
            const allCountriesFilter = state.countries.filter(country => 
                country["Activities"].some((activity) => activity.name === action.payload)
                );
            return {
                ...state,
                allCountries: allCountriesFilter
            }
        case FILTER_BY_CONTINENT :
            const filterByContinent = state.countries.filter(country => country.continent === action.payload)
            return {
                ...state,
                allCountries: filterByContinent
            }
        case ORDER :
            const clonedCountries = [...state.countries];
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