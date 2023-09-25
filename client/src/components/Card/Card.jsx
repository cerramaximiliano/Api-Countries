import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({id, name, continent, image, capital, subregion, area, population, activities}) => {
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
                    <div className={styles.detailsContainer}>
                            {name && 
                            <div>
                            <h3>Name</h3>
                            <p>{name}</p>
                            </div>
                            }

                            {continent && 
                            <div>
                            <h3>Continent</h3>
                            <p>{continent}</p>
                            </div>
                            }

                            {capital && 
                            <div>
                            <h3>Capital</h3>
                            <p>{capital}</p>
                            </div>
                            }

                            {subregion && 
                            <div>
                            <h3>Subregion</h3>
                            <p>{subregion}</p>
                            </div>
                            }

                            {area && 
                            <div>
                            <h3>Area</h3>
                            <p>{area} km2</p>
                            </div>
                            }

                            {population && 
                            <div>
                            <h3>Population</h3> 
                            <p>{population}</p>
                            </div>
                            }

                            {activities.length > 0 ? 
                            <div>
                            <h3>Activities</h3>
                                {activities.map(activity => (
                                    <p key={activity.id}> {activity.name} </p>
                                ))}
                            </div>
                            :
                            <></>
                            }

                            <img src={image} alt="Image" />
                </div>
            }



        </div>
    )
}

export default Card;




