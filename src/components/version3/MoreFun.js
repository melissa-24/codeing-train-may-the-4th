import React from 'react'
import { Link } from 'react-router-dom'

import Scrolling from './Scrolling'
import './version3.css'


class MoreFun extends React.Component {
  render() {
    return (
      <div className='version-3'>
          <h1>Fun</h1>
          <nav>
              <Link to='/'>Main Page</Link>
              <Link to='/version-1'>May the 4th</Link>
              <Link to='/version-'>Fun Version 1</Link>
              <Link to='/my-version'>My Crawler</Link>
          </nav>
          <div className='scene'>
            <div className='cube'>
              <div className='face face--scroll'>
              <Scrolling myText='So much that I can do' />
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default MoreFun