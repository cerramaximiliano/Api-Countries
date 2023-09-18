export const validate = (data, setValidate) => {
    let errors = {};
    if( !data.name ) errors.name  = 'Name is required';
    if( !data.difficulty ) errors.difficulty = 'Difficulty is required';
    if( !data.season ) errors.season = `Season ir required`;
    if(!errors.name && !errors.difficulty && !errors.season) setValidate(true)
    else setValidate(false)
    return errors
};