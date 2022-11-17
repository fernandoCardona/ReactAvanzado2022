import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { removeError, setError } from '../../actions/ui';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';

import 'animate.css';

export const LoginScreen = () => {
  
  const dispatch = useDispatch();
  const { loading } = useSelector( state => state.ui );
  const { msgError } = useSelector( state => state.ui );

  const [formValues, handleInputChange ] = useForm({
    email: '',
    password: ''
  });
  const { email, password } = formValues;
  

  const handleLogin = (e) => {
    e.preventDefault();
    //console.log(email, password);
    if ( isFormValid() ) {
      dispatch( startLoginEmailPassword( email, password ) );
    }
  }
  
  const isFormValid = () => {
     if (!validator.isEmail( email )) {
      dispatch( setError('Email is required') );
      return false
    }else if ( password.length < 5 ) {
      dispatch( setError('Pasword should be 6 characters and is required') );
      return false
    }
  
    dispatch( removeError() );
    return true;
  }

  const handleGoogleLogin = () => {
    dispatch( startGoogleLogin() );
  }
  return (
    <div>
        <>
          <h3 className="auth__title">Login</h3>
          { 
            msgError &&
            (
              <div className="auth__alert-error">
                { msgError } 
              </div>
            )
          }
          <form onSubmit={ handleLogin } className="animate__animated animate__fadeIn animate__faster">
            <input  
              typet="email"
              placeholder="Your email"
              name="email"
              className="auth__input"
              value={ email } 
              onChange= { handleInputChange }
            />
            <input 
              type="password"
              placeholder="Password" 
              name="password"
              className="auth__input"
              value={ password }
              onChange={ handleInputChange }
            />
            <button
              type="submit"
              className="btn btn-primary btn-block"
              disabled={ loading }
            >
              Login
            </button>

           
            <div className="auth__social-networks">
              <p>Login With social network</p>
              <div className="google-btn" onClick={ handleGoogleLogin }>
                <div className="google-icon-wrapper">
                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                </div>
                <p className="btn-text">
                    <b>Sign in with google</b>
                </p>
            </div>
            </div>
            
            <Link 
              to="/auth/register" 
              className="link"
            >
              Create new account
            </Link>

          </form>
        </>
    </div>
  )
}
