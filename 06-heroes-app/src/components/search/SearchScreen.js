import React, { useMemo } from 'react';
import queryString from 'query-string'
import { useLocation } from 'react-router-dom';
import { heroes } from '../../data/heroes';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroByName } from '../../selectors/getHeroByName';


export const SearchScreen = ( { history } ) => {
  const location = useLocation();
  const { query = '' } = queryString.parse( location.search );

  const initialForm = {
    searchText: query
  }

  const [ formValues, handleInputChange ] = useForm(initialForm);
  const { searchText } = formValues;
  
 
  const heroesFiltered = useMemo(() => getHeroByName( searchText ), [ query ])  ;

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?query=${searchText}`);

  }

  return (
    <div>
      <h1>SearchScreen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={ handleSearch }>
            <input 
              type="text" 
              placeholder="Find your hero..."
              className="form-control"
              name="searchText"
              value={searchText}
              onChange={ handleInputChange } 
            />
            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>
      </div>
      <div className="col-7">
        <h4>Resoults</h4>
        <hr />

        { 
          (query === '' )
              && <div className="alert alert-warning">
                    Search a hero
                </div>
        }

        { 
          (query !=='' && heroesFiltered.length === 0)
              && <div className="alert alert-danger">
                    There is not a hero with { query }
                </div>
        } 
        
        { 
          heroesFiltered.map( hero =>(
            <HeroCard
              key={hero.id}
              {...hero}
            />
          ))
        }
        
      </div>
    </div>
  )
}
