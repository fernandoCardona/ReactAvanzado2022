import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect 
} from "react-router-dom";
import { DcScreen } from '../components/dc/DcScreen'
import { HeroeScreen } from '../components/heroes/HeroeScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { Navbar } from '../components/ui/Navbar'

export const DashboardRoutes = () => {
  return (
    <>
        <Navbar/>

        <div className="container mt-2">
            <Switch>
                <Route exact path="/marvel" component={ MarvelScreen } />
                <Route exact path="/heroe/:heroeId" component={ HeroeScreen } />
                <Route exact path="/dc" component={ DcScreen } />
                <Redirect to="/Marvel" />
            </Switch>
        </div>
    </>
  )
}
