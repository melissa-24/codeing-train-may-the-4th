import React from 'react'
import { myText } from './components/text'

import Scrolling from './components/Scrolling'

import './App.css'

class App extends React.Component {
  render() {
    return (
      <>
      <div className='scene'>
        <div className='cube'>
          <div className=' face face--scroll'>
            <Scrolling myText={myText().map(sentence => <p>{sentence}</p>)} />
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default App;