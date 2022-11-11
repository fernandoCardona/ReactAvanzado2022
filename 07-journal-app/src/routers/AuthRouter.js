import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { LoginScreen } from '../component/auth/LoginScreen';
import { RegisterScreen } from '../component/auth/RegisterScreen';

export const AuthRouter = () => {
    return (
        <div className="">
            <Switch>
                <Route exact path="/auth/login" component={ LoginScreen } />
                <Route exact path="/auth/register" component={ RegisterScreen } />
                <Redirect to="/auth/login" />
            </Switch>
        </div>
    )
}
