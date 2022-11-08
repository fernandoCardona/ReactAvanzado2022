import React from 'react';

export const LoginScreen = ({history}) => {

    const handleLogin = () => {
        // history.push('/');
        history.replace('/');
    }

    return (

        

        <div className="container">
            <h1>LoginSreen</h1>
            <hr />

            <button 
                className="btn btn-primary"
                onClick={ handleLogin }
            >
            Login
            </button>
        </div>
    )
}
