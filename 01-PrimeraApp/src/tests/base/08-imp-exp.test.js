import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';


describe('Pruebas 08-imp-exp', () => {
    test('Debe retornanr un heroe por id ', () => { 
          const id = 1;
          const heroe = getHeroeById(id);
          //console.log(heroe);
          const heroeData = heroes.find(h => h.id === id);
          expect(heroe).toEqual(heroeData);
    });
    test('Debe retornar undefined si heroe no existe ', () => { 
          const id = 10;
          const heroe = getHeroeById(id);
           
          expect(heroe).toBe(undefined);
    });
    test('Debe retornar un arreglo con los heroes de DC ', () => { 
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        //console.log(heroes);
        const heroesData = heroes.filter(h => h.owner === owner);
        expect(heroes).toEqual(heroesData);

    });
    test('Debe retornar un arreglo con los heroes de Marvel ', () => { 
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        //console.log(heroes);
        const heroesData = heroes.filter(h => h.owner === owner);
        expect(heroes.length).toBe(2);
    });


});
