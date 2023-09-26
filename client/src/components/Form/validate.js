export const validate = (data, setValidate) => {
    let errors = {};
    if( !data.name ) errors.name  = 'Name is required';
    if( !data.difficulty ) errors.difficulty = 'Difficulty is required';
    if( isNaN(data.difficulty) ) errors.difficulty = 'Difficulty must be a number';
    if( Number(data.difficulty) <= 0 || Number(data.difficulty) > 5 ) errors.difficulty = `Difficulty must be a number range 1 to 5`;
    if( isNaN(data.duration) ) errors.duration = `Duration must be a number`
    if ( data.duration && (Number(data.duration) <= 0 || Number(data.duration) > 15) ) errors.duration = `Duration must be a positive number range 1 to 15 `
    if( !data.season ) errors.season = `Season ir required`;
    if(!errors.name && !errors.difficulty && !errors.season && !errors.duration) setValidate(true)
    else setValidate(false)
    return errors
};