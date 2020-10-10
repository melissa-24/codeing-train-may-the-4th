import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css'
import Cube from './components/Cube'
import MayThe4th from './components/version1/MayThe4th'
import VersionFun from './components/version2/VersionFun'

class App extends React.Component {
  render() {
    return (
      <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Cube} />
          <Route path='/version-1' component={MayThe4th} />
          <Route path='/version-2' component={VersionFun} />
        </Switch>
      </BrowserRouter>
      </>
    )
  }
}

export default App;