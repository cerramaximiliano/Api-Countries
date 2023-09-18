import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import { validate } from './validate';
import styles from './Form.module.css';

export const Form = ( {countries} ) => {
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: []
    });
    const [validation, setValidation] = useState(false);
    const handleChange = (event) => {
        const {name, value} = event.target;
        if (name === "countries") {
            let selectedValue = Array.from(event.target.selectedOptions, option => option.value);
            setFormData({
              ...formData,
              [name]: selectedValue,
            });
          } else {
            setFormData({
              ...formData,
              [name]: value,
            });
            setErrors(validate({...formData, [event.target.name]:event.target.value}, setValidation));
            console.log(validation);
          }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        
    }

    return (
        <>
        <div>
        <h3>Add Activity</h3>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" name="name" >Name: </label>
                <input type="text" name='name' onChange={handleChange} className={errors.name ? styles.error : styles.success} />
            </div>
            <div>
                <label htmlFor="difficulty">Difficulty: </label>
                <input type="text" name='difficulty' onChange={handleChange} className={errors.difficulty ? styles.error : styles.success}/>
            </div>
            <div>
                <label htmlFor="duration">Duration: </label>
                <input type="text" name='duration' onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="season">Seasons: </label>
                <select name="season" defaultValue={'0'} onChange={handleChange} className={errors.season ? styles.error : styles.success}>
                    <option value="0" disabled={true}>Choose Season</option>
                    <option value="Spring">Spring</option>
                    <option value="Autumn">Autumn</option>
                    <option value="Winter">Winter</option>
                    <option value="Summer">Summer</option>
                </select>
            </div>
            <div>
                <label htmlFor="countries">Countries: </label>
                <select multiple name="countries" onChange={handleChange}>
                    {countries &&
                    countries.map(country => (
                        <option key={country.id} value={country.id}>{country.name}</option>
                    ))}
                </select>
            </div>
            <button type="submit" disabled={!validation} >Add</button>

            {errors.name && <p className={styles.danger}>{errors.name}</p>}
            {errors.difficulty && <p className={styles.danger}>{errors.difficulty}</p>}
            {errors.season && <p className={styles.danger}>{errors.season}</p>}
        </form>
        </div>
        </>
    )
}

export function mapStateToProps(state){
    return {
        countries: state.allCountries,
     }
};

export default connect (mapStateToProps)(Form);