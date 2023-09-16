import React, {useState, useEffect} from 'react';
import styles from './Nav.module.css';
const Nav = ( ) => {


    return (
        <div>
            <input type="text" placeholder='Country' />
            <button>Search</button>
            <select defaultValue={"0"}>
                <option  value="0" disabled={true} >Order Countries</option>
                <option value="A - Z">A - Z</option>
                <option value="Z - A">Z - A</option>
            </select>
            {/* defaultValue={"Find By Activity"} */}
            <select defaultValue={"0"} >
                <option value="0" disabled={true} >Find By Activity</option>
            </select>

        </div>
    )
}

export default Nav;