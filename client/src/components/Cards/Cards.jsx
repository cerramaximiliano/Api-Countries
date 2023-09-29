import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { addCountries } from '../../redux/actions/actions';
import styles from './Cards.module.css'
import Card from '../Card/Card';


export default function Cards (  )  {
    const dispatch = useDispatch();
    const countries = useSelector(({allCountries}) =>  allCountries);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        dispatch(addCountries())
    }, [dispatch]);

    const countriesPerPage = 10;
    const totalPages = Math.ceil(countries.length / countriesPerPage);

    const startIndex = currentPage * countriesPerPage - countriesPerPage;
    const endIndex = currentPage * countriesPerPage;
    const filteredCountries = countries.slice(startIndex, endIndex);
    const handlePageChange = (page) => {
        setCurrentPage(page)
    };
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);


    return (
        <div className={styles.container}>
            <div className={styles.containerCards}>
            {
            (filteredCountries && filteredCountries.length > 0)
            ?   filteredCountries.map((country) =>  (
                <Card key={country.id} 
                id={country.id} 
                name={country.name} 
                continent={country.continent} 
                languages={country.languages}
                image={country.flag} 
                />
            ))
            : (
                <div className={styles.message}><h3>No se han encontrado resultados</h3></div>
            )
            }

            <div className={styles.pagination}>
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
                {pageNumbers.map((page) => (
                        <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={page === currentPage ? styles.activePage : ''}
                        >
                          {page}
                        </button>
          ))}
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={endIndex >= countries.length}>Next</button>
            </div>

            </div>


        </div>
    )
}


