import React, {useState, useEffect} from 'react';
import { validate } from './validate';

const Form = () => {
    const [errors, setErrors] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: []
    })


    const handleChange = (event) => {
        const {name, value} = event.target;
        if (name === "countries") {
            setFormData((prevState) => ({
              ...formData,
              [name]: prevState.countries.concat(value),
            }));
          } else {
            setFormData({
              ...formData,
              [name]: value,
            });
          }
          console.log(formData);

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
                <input type="text" name='name' onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="difficulty">Difficulty: </label>
                <input type="text" name='difficulty' onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="duration">Duration: </label>
                <input type="text" name='duration' onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="season">Seasons: </label>
                <select name="season" defaultValue={'0'} onChange={handleChange}>
                    <option value="0">Choose Season</option>
                    <option value="Spring">Spring</option>
                    <option value="Autumn">Autumn</option>
                    <option value="Winter">Winter</option>
                    <option value="Summer">Summer</option>
                </select>
            </div>
            <div>
                <label htmlFor="countries">Countries: </label>
                <select multiple name="countries" defaultValue={'0'} onChange={handleChange}>
                    <option value="0">Choose Countries</option>
                    
                </select>
            </div>
            <button>Add</button>
        </form>
        </div>
        </>
    )
}

export default Form;