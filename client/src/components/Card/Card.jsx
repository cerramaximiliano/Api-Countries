import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({id, name, continent, image, capital, subregion, area, population}) => {
    const {pathname} = useLocation()
    return (
        <div className={pathname === '/countries' ? styles.card : false}>
            {pathname === '/countries' ?
                    <Link to={`/detail/${id}`} className={styles.cardElements}>

                            <div className={styles.cardChildElements}>
                                <h2>{name}</h2>
                                <p>{continent}</p>
                            </div>
                            <div className={styles.cardContainer}>
                                <img className={styles.cardImage} src={image} alt="Image" />
                            </div>

                    </Link>
            :
                    <div>
                            <p>{name}</p>
                            <p>{continent}</p>
                            <p>{capital}</p>
                            <p>{subregion}</p>
                            <p>{area}</p>
                            <p>{population}</p>
                            <img src={image} alt="Image" />
                </div>
            }



        </div>
    )
}

export default Card;




