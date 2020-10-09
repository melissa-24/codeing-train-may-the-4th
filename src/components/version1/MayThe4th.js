import React from 'react'

import { starWars } from '../text'
import Scrolling from './Scrolling'
import './version1.css'

class MayThe4th extends React.Component {
  render() {
    return (
      <>
      <div className='scene'>
        <div className='cube'>
          <div className=' face face--scroll'>
            <Scrolling myText={starWars().map(sentence => <p>{sentence}</p>)} />
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default MayThe4th