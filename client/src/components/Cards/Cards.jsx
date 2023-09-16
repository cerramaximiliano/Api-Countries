import React, {useState, useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import { addCountries } from '../../redux/actions/actions';
import styles from './Cards.module.css'
import Card from '../Card/Card';


const Cards = ( {countries} ) => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        dispatch(addCountries())
    }, [dispatch]);

    const countriesPerPage = 10;
    const startIndex = currentPage * countriesPerPage - countriesPerPage;
    const endIndex = currentPage * countriesPerPage;
    const filteredCountries = countries.slice(startIndex, endIndex);

    return (
        <div>
            <div className={styles.container}>
            {
            filteredCountries.map((country) =>  (
                <Card key={country.id} 
                id={country.id} 
                name={country.name} 
                continent={country.continent} 
                image={country.flag} 
                />
            ))
            }
            </div>

            <div className={styles.pagination}>
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={endIndex >= countries.length}>Next</button>
            </div>
        </div>
    )
}


export function mapStateToProps(state){
    return {
        countries: state.countries,
     }
};

export default connect (mapStateToProps)(Cards);





    // const URL_BASE = `http://localhost:3001/`;
    // const [countriesList, setCountriesList] = useState([]);
    // const countries =  () => {
    //     axios(`${URL_BASE}countries`)
    //      .then(({data}) => { 
    //         setCountriesList(data)
    //      })
    //      .catch((err) => {
    //        return err
    //      })
    //    };

    // useEffect(() => {
    //     countries()
    // }, []);