import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Card/Card';
import styles from './Detail.module.css';

const Detail = () => {
    const URLBASE = `http://localhost:3001/`;
    const { id } = useParams();

    const [countryData, setCountryData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const alertImage = '../src/assets/warning.png';
    
    useEffect(() => {
      const fetchData = async () => {

        setIsLoading(true);

        try {
          const response = await axios(`${URLBASE}countries/${id}`);
          setCountryData(response.data);
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }, [id]);

    return (
        <div className={styles.detailsContainer}>
            <h3>Country Details</h3>
            {isLoading && <p>Loading...</p>}
            {error && 
            <div>
              <img src={alertImage} alt="Error" style={{width: "30%"}} />
              <p>Error al cargar los datos del país: {error.message}</p>
            </div>
            }
            {countryData && (
                <Card
                key={countryData.id}
                name={countryData.name}
                image={countryData.flag}
                continent={countryData.continent}
                capital={countryData.capital}
                subregion={countryData.subregion}
                area={countryData.area}
                population={countryData.population}
                languages={countryData.languages}
                activities={countryData.Activities}
                />
            )}
        </div>
    )
}

export default Detail;