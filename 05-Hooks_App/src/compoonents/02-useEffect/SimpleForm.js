import React, {useState, useEffect } from 'react';
import './effects.css';
import { Menssage } from './Menssage';

export const SimpleForm = () => {
    const [ formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect(() => {
        // console.log('Hey!!')
    },[]);

    useEffect(() => {
        // console.log('formState Cambio!!')
    },[formState]);

    useEffect(() => {
        // console.log('Email cambio!!')
    },[email]);

    const handleInputChange = ({target}) => {
         
        setFormState({ 
            ...formState,
            [target.name]: target.value,
            [target.email]: target.value

        })
    }

  return (
    <>
        <h1>useEffect</h1>
        <hr />

        <div className="form-group">
            <input 
                type="text" 
                name="name"
                className="form-control"
                placeholder="Tu nombre" 
                //autocomplete="off"
                value={name}
                onChange={handleInputChange}    
            />
        </div>
        <div className="form-group">
        <input 
                type="text" 
                name="email"
                className="form-control"
                placeholder="Tu email" 
                //autocomplete="off"
                value={email}
                onChange={handleInputChange}    
            />

            
        </div>
        { (name === '123') && <Menssage/> }
        
        {/* <button type="submit" className="btn btn-primary">Enviar</button> */}

    </>
  )
}

 
