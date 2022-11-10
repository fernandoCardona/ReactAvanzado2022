import * as React from 'react';
import { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroById';


export const HeroeScreen = ( { history } ) => {

  const { heroeId } = useParams();
  const hero = useMemo(() => getHeroesById( heroeId ), [ heroeId ]) ;

  if( !hero ){
    return <Redirect to="/marvel" />

  }
  const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero; 

  const handleReturn = () => {
    if (history.length >= 2){
        history.push('/');
    } else {
        history.goBack();
    }
       
  } 

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={`../assets/heroes/${ id }.jpg`} className="img-thumbnail animate__animated animate__fadeInLeft" alt={ superhero } />
      </div>
      <div className="col8  animate__animated animate__fadeIn">
        <h3>{ superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego:</b> { alter_ego }</li>
          <li className="list-group-item"><b>Publisher:</b> { publisher }</li>
          <li className="list-group-item"><b>First appearance:</b> { first_appearance }</li>
        </ul>
        <h5>Characters</h5>
        <p>{ characters }</p>
        <button
          className="btn btn-outline-info"
          onClick={ handleReturn }
        >
        Return
        </button>
      </div> 
    </div>
  )
}
