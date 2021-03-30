import React from 'react'
import NavBar from '../components/NavBar'
import Home from '../components/Homepage'
import Vegetable from '../components/Vegetable'
import Fruit from '../components/Fruit'
import Item from '../components/Item'
import WatchList from '../components/WatchList'
import Seller from '../components/Seller'
import CreateItem from '../components/CreateItem'
import Listing from '../components/Listing'
import Orders from '../components/Orders'
import Myshop from '../components/Myshop'
import Signup from '../components/SignUp'
import Login from '../components/Login'
import HelpContact from '../components/HelpContact'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
export default function Routes() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/vegetable' component={Vegetable} />
          <Route path='/item/:id' component={Item} />
          <Route path='/fruit' component={Fruit} />
          <Route path='/watchlist' component={WatchList} />
          <Route path='/seller' component={Seller} />
          <Route path='/listning' component={Listing} />
          <Route path='/createitem' component={CreateItem} />
          <Route path='/orders' component={Orders} />
          <Route path='/myshop' component={Myshop} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/helpContact' component={HelpContact} />
        </Switch>
      </div>
    </Router>
  )
}
