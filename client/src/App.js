import What from './What'
import Who from './Who'
import WhenWhere from './WhenWhere'
import Why from './Why'
import NavBarComp from './NavBarComp'
import NavBarAdmin from './NavBarAdmin' /////
import AdminArtGrid from './AdminArtGrid'
import AdminArtInput from './AdminArtInput'
import AdminArtUpdate from './AdminArtUpdate'
import ProductAdmin from './ProductAdmin'
import UserLogin from './UserLogin'
import UserLogout from './UserLogout'
import UserRegister from './UserRegister'
import Artwork from './Artwork'
import Cart from './Cart'
import Checkout from './Checkout'
import Payment from './Payment'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

import React, { Component } from 'react';
import {
  BrowserRouter as Router,  //new version of React - new is BrowserRouter but we can call it Router
  Route
} from 'react-router-dom'
import './App.css';

///fontawesome stuff:
library.add(faPencilAlt)
library.add(faTrashAlt)
library.add(faTimesCircle)
library.add(faImage)

export default class App extends Component {
  
  state = {
    artWorks: []
  }   

  render() {  
    return (
      <Router>
        <div>
        <NavBarComp/>
        <NavBarAdmin/>
          <Route exact path = "/" component = {What}/>
          <Route path = '/who' component = {Who}/>
          {/* <Route exact path = '/what/:id' component = {ProductGrid}/> */}
          <Route exact path = '/what' component = {What}/>
          <Route path = '/when-where' component = {WhenWhere}/>
          <Route path = '/why' component = {Why}/>
          <Route exact path  = '/admin/artworks' component = {AdminArtGrid}/>
          <Route exact path  = '/admin/artworks/add' component = {AdminArtInput}/>
          <Route exact path  = '/admin/artworks/update/:_id' component = {AdminArtUpdate}/>
          <Route exact path  = '/admin/prod' component = {ProductAdmin}/>
          <Route exact path  = '/admin/login' component = {UserLogin}/>
          <Route exact path  = '/admin/logout' component = {UserLogout}/>
          <Route exact path  = '/admin/register' component = {UserRegister}/>
          <Route exact path = '/artwork/:_id' component = {Artwork}/>
          <Route exact path = '/cart' component = {Cart}/>
          <Route exact path = '/checkout' component = {Checkout}/>
          <Route exact path = '/payment' component = {Payment}/>
        </div>
      </Router>

    );
  }
}


