import React from 'react'
import Home from './components/Home'
import BirdPages from './components/birds/BirdPages'
import GlobalStyle from './style/globalStyles'


import {BrowserRouter, Route, Switch} from 'react-router-dom'




const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route component={BirdPages}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App

