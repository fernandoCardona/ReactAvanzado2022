import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base/07-deses-arr';

describe('Pruebas 07-deses-arr', () => {
    test('retornaArreglo debe retornar un string y un numero', () => { 

        const arr = retornaArreglo(); //['ABC', 123]
        
        expect(arr).toEqual(['ABC', 123]);
    })
});

 