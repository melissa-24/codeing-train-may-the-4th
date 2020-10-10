import React from 'react'
import { Link } from 'react-router-dom'

import { starWars } from '../text'
import Scrolling from './Scrolling'
import './version1.css'

class MayThe4th extends React.Component {
  render() {
    return (
      <div className='version-1'>
          <h1>Coding Train's May the 4th Challenge</h1>
          <nav>
              <Link to='/'>Main Page</Link>
              <Link to='/version-2'>Fun Version</Link>
              <Link to='/my-version'>My Crawler</Link>
          </nav>
          <div className='scene'>
            <div className='cube'>
              <div className='face face--scroll'>
                <Scrolling starWars={starWars().map(sentence => <p>{sentence}</p>)} />
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default MayThe4th