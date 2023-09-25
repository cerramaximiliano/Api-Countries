import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { validate } from './validate';
import { createActivities } from '../../redux/actions/actions';
import styles from './Form.module.css';



export default function Form () {
    const dispatch = useDispatch();
    const countries = useSelector(({countries}) =>  countries)
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
          }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createActivities(formData))
        // try {
        //     const {data} = await axios.post(`${URL_BASE}activities`, formData);
        //     if ( data ) {
        //         if( data.ok === false) window.alert(data.message)
        //         if(data.created === false) window.alert('Ha sido actualizada la actividad')
        //         else window.alert('Ha sido creada la actividad')
        //     }
        //     else window.alert('Ha ocurrido un error. Inicie nuevamente.')
        // }catch (err) {
        //     window.alert('Ha ocurrido un error. Inicie nuevamente.')
        // }
    }

    return (
        <>
        <div  className={styles.container}>
        <h3>Add Activity</h3>
        <form onSubmit={handleSubmit}  className={styles.cardForm}>
            <div>
                <div>
                <label htmlFor="name" name="name" >Name: </label>
                </div>
                <div>
                <input type="text" name='name' onChange={handleChange} className={errors.name ? styles.error : styles.success} />
                </div>
            </div>
            <div>
                <div>
                <label htmlFor="difficulty">Difficulty: </label>
                </div>
                <div>
                <input type="number" step="1" name='difficulty' onChange={handleChange} className={errors.difficulty ? styles.error : styles.success}/>
                </div>
            </div>
            <div>
                <div>
                <label htmlFor="duration">Duration: </label>
                </div>
                <div>
                <input type="number" step="1" name='duration' onChange={handleChange} />
                </div>
            </div>
            <div>
                <div>
                <label htmlFor="season">Seasons: </label>
                </div>
                <div>
                <select name="season" defaultValue={'0'} onChange={handleChange} className={errors.season ? styles.error : styles.success}>
                    <option value="0" disabled={true}>Choose Season</option>
                    <option value="Spring">Spring</option>
                    <option value="Autumn">Autumn</option>
                    <option value="Winter">Winter</option>
                    <option value="Summer">Summer</option>
                </select>
                </div>

            </div>
            <div>
                <div>
                <label htmlFor="countries">Countries: </label>
                </div>
                <div>
                <select multiple name="countries" onChange={handleChange}>
                    {countries &&
                    countries.map(country => (
                        <option key={country.id} value={country.id}>{country.name}</option>
                    ))}
                </select>
                </div>

            </div>
            <button type="submit" disabled={!validation} >Add</button>

            {errors.name && <p className={styles.danger}>{errors.name}</p>}
            {errors.difficulty && <p className={styles.danger}>{errors.difficulty}</p>}
            {errors.season && <p className={styles.danger}>{errors.season}</p>}
            {errors.duration && <p className={styles.danger}>{errors.duration}</p>}
        </form>
        </div>
        </>
    )
};