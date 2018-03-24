import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Navbar } from '../Navbar/Navbar'
import { Home } from '../Home/Home'
import { SearchForm } from '../SearchForm/SearchForm'
import { Add } from '../Add/Add'

export class App extends Component {
  render() {
    return (
      <Router>
      <div className="container-fluid">
      <Navbar/>
      <div className="row">
            <div className="col-lg-12 text-center">
              <Route exact path='/' component={Home}/>
              <Route path='/search' component={SearchForm}/>  
              <Route path='/add' component={Add}/>  
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
