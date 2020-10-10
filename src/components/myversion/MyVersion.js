import React from 'react'
import { Link } from 'react-router-dom'

import { myText } from '../text'
import Scrolling from './Scrolling'
import './myversion.css'

class MyVersion extends React.Component {
  render() {
    return (
      <div className='my-version'>
          <h1>My Version</h1>
          <nav>
              <Link to='/'>Main Page</Link>
              <Link to='/version-1'>May the 4th</Link>
              <Link to='/version-2'>Fun Version</Link>
          </nav>
          <div className='my-scene'>
            <div className='my-cube'>
              <div className='my-face my-face--scroll'>
                <Scrolling myText={myText().map(sentence => <p>{sentence}</p>)} />
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default MyVersion