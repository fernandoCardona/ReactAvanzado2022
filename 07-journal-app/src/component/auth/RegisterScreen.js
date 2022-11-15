import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startRegisterwithEmailPasswordName } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

const dispatch = useDispatch();
const { msgError } = useSelector( state => state.ui );
 
const [formValues, handleInputChange] = useForm({ 
  name: '',
  email: '',
  password: '',
  password2: ''
});
const {name, email, password, password2} = formValues;

const handleRegister = (e) => {
  e.preventDefault();

  if ( isFormValis() ) {
     dispatch( startRegisterwithEmailPasswordName( email, password, name ) )
  }

  //console.log( name, email, password, password2 );
}

const isFormValis = () => {
  if (name.trim().length === 0) {
    dispatch( setError('Name is required') );
    return false
  }else if (!validator.isEmail( email )) {
    dispatch( setError('Email is required') );
    return false
  }else if ( password !== password2 || password.length < 5 ) {
    dispatch( setError('Pasword should be 6 characters and match each other') );
    return false
  }

  dispatch( removeError() );
  return true;
}

  return (
    <div>
        <>
          <h3 className="auth__title">Register</h3>
          <form className="" onSubmit={ handleRegister }>
          { 
            msgError &&
            (
              <div className="auth__alert-error">
                { msgError } 
              </div>
            )
          }
          
            <input  
              typet="text"
              placeholder="Name"
              name="name"
              className="auth__input"
              value={ name }
              onChange={ handleInputChange }
            />
            <input  
              typet="email"
              placeholder="Your email"
              name="email"
              className="auth__input"
              value={ email }
              onChange={ handleInputChange }
            />
            <input 
              type="password"
              placeholder="Password" 
              name="password"
              className="auth__input"
              value={ password }
              onChange={ handleInputChange }
            />
            <input 
              type="password"
              placeholder="Cofirm password" 
              name="password2"
              className="auth__input"
              value={ password2 }
              onChange={ handleInputChange }
            />
            <button
              type="submit"
              className="btn btn-primary btn-block"
              //disabled={true}
            >
              Register
            </button>

           
            <div className="auth__social-networks">
              <p>Login With social network</p>
              <div className="google-btn" >
                <div className="google-icon-wrapper">
                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                </div>
                <p className="btn-text">
                    <b>Sign in with google</b>
                </p>
            </div>
            </div>
            
            <Link 
              to="/auth/loogin" 
              className="link"
            >
              Already registered?
            </Link>

          </form>
        </>
    </div>
  )
}
