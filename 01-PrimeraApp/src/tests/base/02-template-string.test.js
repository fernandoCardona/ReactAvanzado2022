import '@testing-library/jest-dom';

import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string', () => {
    test('getSaludo debe retornar Hola Fernando', () => {

        const nombre = 'Fernando';

        const saludo = getSaludo(nombre);
        //console.log(saludo);
        expect(saludo).toBe('Hola ' + nombre + '!');
    });
//get saludo debe retoner Hola Carlos si no recibe ningun argumento en el nombre
 
    test('debe retoner Hola Carlos si no recibe ningun argumento en el nombre', () => {
 
        const saludo = getSaludo();
        //console.log(saludo);
        expect(saludo).toBe('Hola Carlos!');
    });
    
});
