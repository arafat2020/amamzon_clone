import React from 'react'
import './App.css';
import Header from './Header';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Checkout from './Checkout'
import LoginPage from './LoginPage';
import { useContext } from 'react';
import { UserContext } from './Op-stateprovider';
import { useEffect } from 'react';
import { auth } from './firebase';
// import { StateContext } from './StateProvider';
// import reducer, { initialState } from './reducer';

function App() {
  const user = useContext(UserContext)
  useEffect(() => {
    auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        user.setName(authuser)
      } else {
        user.setName(null)
      }
    })
  })
  
  return (
    // <StateContext.Provider value={{}} initialState={initialState} reducer={reducer}>
      <Router>
        <div className="app">
          <Switch>
            <Route path="/login">
              <LoginPage/>
            </Route>
          <Route path="/checkout">
            <Header />
              <Checkout />
            </Route>
          <Route path="/">
            <Header />
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    // </StateContext.Provider>
    
  );
}

export default App;
