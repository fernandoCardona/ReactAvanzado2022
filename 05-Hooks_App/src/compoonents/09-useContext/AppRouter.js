import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
 

import { NavBar } from './NavBar';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';



export const AppRouter = () => {
  return (
    
    <Router>
        <div>
            <NavBar/>
            <div className="container">
              <Routes>
                <Route exact path="/" element={<HomeScreen />} />
                <Route exact path="/about" element={<AboutScreen />} />
                <Route exact path="/login" element={<LoginScreen />} />
                <Route path="*" element={<HomeScreen  />} /> {/*Para cualquier ruta que no exista */}
              </Routes>
            </div>
                
        </div>
    </Router>

  )
}
