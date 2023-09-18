import React from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className={styles.containerButton}>
            <button onClick={() => navigate('/countries')  }>Start</button>
            </div>
        </>
    )
}

export default Home