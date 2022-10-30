import '@testing-library/jest-dom';
import { getImagen } from '../../base/11-async-await';


describe('Pueba 11-async-await', () => {
    test('Debe retornar url de la imagen ', async() => { 
        const url = await getImagen();
        //expect(typeof url).toBe('string');
        expect(url.includes('https://')).toBe(true);
     })
});
