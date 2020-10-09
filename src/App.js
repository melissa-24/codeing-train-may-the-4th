import React from 'react'
import { text } from './components/text'

import Scrolling from './components/Scrolling'

import './App.css'

class App extends React.Component {
  render() {
    return (
      <>
      <div className='scene'>
        <div className='cube'>
          <div className=' face face--scroll'>
            <Scrolling myText={text().map(sentence => <p>{sentence}</p>)} />
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default App;

// having just {myText()} in the div did return the desired text but as a single paragraph adding .map(sentence => <p>{sentence}</p>) allowed it to display as a column