import React from 'react'
import { Link } from 'react-router-dom'

import FunScrolling from './Scrolling'
import './version2.css'


class VersionFun extends React.Component {
  render() {
    return (
      <div className='version-2'>
          <h1>Coding Train's May the 4th Challenge</h1>
          <nav>
              <Link to='/'>Main Page</Link>
              <Link to='/version-1'>May the 4th</Link>
          </nav>
          <div className='scene'>
            <div className='cube'>
              <div className='face face--scroll'>
                <FunScrolling myText='Taking the Internet by storm' />
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default VersionFun