import React from 'react'
//import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Pueba de mi PrimeraApp COMPONENT', () => {
    test('Debe retornar mensaje Saludo', () => { 
        const saludo = 'Hola soy Fernando';
        const { getByText } = render(<PrimeraApp saludo = {saludo}/>);
       
        //expect( getByText(saludo) ).toBeInTheDocument();
     })
});