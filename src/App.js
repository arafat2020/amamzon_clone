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
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from './Orders';

const promise = loadStripe('pk_test_51I55oyBQXbsrrJsgYN8KZzUYpl0FLjrdH0ryKRMWTbS8GiPPRsbwHUR6RzkJMBSDTu5JTdMnsVpTFdLWS46qZFY700JhuLPkq6')

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
            <Route path='/order'>
            <Header />
            <Orders/>
            </Route>
            <Route path="/payment">
              <Header/>
              <Elements stripe={promise}>
                <Payment/>
              </Elements>
            </Route>
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
