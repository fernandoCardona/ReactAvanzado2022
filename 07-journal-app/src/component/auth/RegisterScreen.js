import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
  return (
    <div>
        <>
          <h3 className="auth__title">Register</h3>
          <form action="" className="">
            <input  
              typet="text"
              placeholder="Name"
              name="name"
              className="auth__input"
            />
            <input  
              typet="email"
              placeholder="Email"
              name="email"
              className="auth__input"
            />
            <input 
              type="password"
              placeholder="Password" 
              name="password"
              className="auth__input"
            />
            <input 
              type="password"
              placeholder="Cofirm password" 
              name="password2"
              className="auth__input"
            />
            <button
              type="submit"
              className="btn btn-primary btn-block"
              //disabled={true}
            >
              Login
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
