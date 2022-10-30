import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length < 2){
            return
        }
        else if(inputValue === ''){
            return
        }else{
            setCategories(cats =>[...cats, inputValue]);
        }
        
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        />
    </form>
    
  )
}

AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired,
}
 
