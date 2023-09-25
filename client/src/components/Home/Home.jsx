import React from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
    const navigate = useNavigate();
    const flags = "../src/assets/earth_flags.png";
    return (
        <>
            <div className={styles.containerButton}>
                <img src={flags} alt="" />
                <button onClick={() => navigate('/countries')  }>Get Started</button>
            </div>
        </>
    )
};

export default Home;