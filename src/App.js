import React from 'react'
// import { myText } from './components/text'

import Scrolling from './components/Scrolling'

import './App.css'

class App extends React.Component {
  render() {
    return (
      <>
      <h2>May the 4th</h2>
      {/* <div className='text'>{myText().map(sentence => <p>{sentence}</p>)}</div> */}
      <Scrolling myText='Melissa, Taking the Internet by storm' />
      </>
    )
  }
}

export default App;

// having just {myText()} in the div did return the desired text but as a single paragraph adding .map(sentence => <p>{sentence}</p>) allowed it to display as a column