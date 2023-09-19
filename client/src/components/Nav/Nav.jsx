import React, {useState, useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import styles from './Nav.module.css';
import { filterCards, orderCards, addActivities, orderByPopulation, filterByeContinent, resetFilter, addCountriesByName } from '../../redux/actions/actions';
import { Link, useLocation } from 'react-router-dom';


export function Nav ( {activities} ) {
    const dispatch = useDispatch()
    const {pathname} = useLocation()
    console.log(pathname);
    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value))
    }
    const handleOrderByPopulation = (e) => {
        dispatch(orderByPopulation(e.target.value))
    };
    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    };
    const handleFilterByContinent = (e) => {
        dispatch(filterByeContinent(e.target.value))
    }
    const handleReset = () => {
        const select = document.querySelectorAll('select');
        select.forEach(ele => ele.value = "0");
        dispatch(resetFilter())
    }
    const handleClick = () => {
        const input = document.querySelector('[name=countryField]').value;
        dispatch(addCountriesByName(input))
    }
    useEffect(() => {
        dispatch(addActivities())
    }, [dispatch]);

    return (
        <div className={styles.container}>
            {
                pathname === '/countries' 
                ?
                <div className={styles.navbarContainer}>
                <div>
                    <input type="text" placeholder='Country' name='countryField' />
                    <button onClick={handleClick} >Search</button>
                </div>

            <div className={styles.orderAndFilter}>
                <div className={styles.orderContainer}>
                <select name="orderByName" defaultValue={"0"} onChange={handleOrder} >
                    <option value="0" disabled={true} >Order Countries</option>
                    <option value="ASC">A - Z</option>
                    <option value="DESC">Z - A</option>
                </select>

                <select name="orderByPopulation" defaultValue={"0"} onChange={handleOrderByPopulation} >
                    <option value="0" disabled={true} >Order Countries</option>
                    <option value="MAX">MAX - MIN</option>
                    <option value="MIN">MIN - MAX</option>
                </select>
                </div>

                <div className={styles.orderFilter}>
                <select name="activity" defaultValue={"0"} onChange={handleFilter} >
                    <option value="0" disabled={true} >Find By Activity</option>
                    {
                    activities &&
                    activities.map((activity) => (
                        <option value={activity.name} key={activity.id}>{activity.name}</option>
                    ))
                    }
                </select>
                <select name="continent" defaultValue={"0"} onChange={handleFilterByContinent} >
                    <option value="0" disabled={true}>Find By Continent</option>
                    <option value="South America">South America</option>
                    <option value="North America">North America</option>
                    <option value="Europe">Europe</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Africa">Africa</option>
                    <option value="Asia">Asia</option>
                    <option value="Oceania">Oceania</option>
                </select>
                </div>
                <div>
                <button onClick={handleReset} >Reset</button>
                </div>

            </div>

            <div>
                <Link to={'/form'}>
                    <button>Add Activity</button>
                </Link>
            </div>
            </div>
            :
            <div className={styles.navbarContainer}>
                <Link to={'countries'}>Home</Link>
            </div>
            }


        </div>
    )
}

export function mapStateToProps(state){
    return {
        activities: state.activities,
     }
};

export default connect (mapStateToProps)(Nav);