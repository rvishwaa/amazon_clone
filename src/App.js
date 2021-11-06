import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Orders from './Orders';
import Payment from './Payment';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51Jsb54SCuUIv8F2BfjnQ9vw2RVpcICiJy5NcXt4LxlBFv7dmGC9SqHVFUkgVE0UOfMwmxF2OH2cxbYjJryu8YAh700nlIUc9GQ");

function App() {
const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log(`The user is >>>`, authUser);
      if(authUser){
        //user just logged in or was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route>
          <Route path="/orders">
            <Header/>
            <Orders/>
          </Route>
          <Route path="/">
            <Header/>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
