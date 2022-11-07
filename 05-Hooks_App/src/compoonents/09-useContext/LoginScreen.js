import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
  //1.-Obetner la referencia al context:
  //2.-Extraer steUser
  const { user, setUser } = useContext( UserContext );
  const userLogin = {
    id: 1234,
    name: 'Fernando',
    email: 'correo@correo.com'
  };
  
  return (
    <div>
        <h1>LoginScreen</h1>
        <hr />

        <button className="btn btn-primary" onClick={ () => setUser( userLogin ) }>Login</button>
    </div>
  ) 
}
