import * as React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroById';


export const HeroeScreen = () => {

  const { heroeId } = useParams();
  const hero = getHeroesById( heroeId ); 
  if( !hero ){
    return <Redirect to="/marvel" />

  }
  const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero; 
  return (
    <div>HeroeScreen</div>
  )
}
