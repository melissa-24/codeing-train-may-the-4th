import React from 'react'
import { Link } from 'react-router-dom'

class Cube extends React.Component {
    render() {
        return (
            <div className='main-page'>
                <h1>Main page</h1>
                <nav>
                    <Link to='/version-1'>May The 4th Scrawler</Link>
                    <Link to='/version-2'>Fun Version</Link>
                    <Link to='/my-version'>My Crawler</Link>
                    <Link to='/version-3'>More Fun</Link>
                </nav>
                <div className='thescene'>
                    <div className='thecube'>
                        <div className='theface theface--front'>*</div>
                        <div className='theface theface--back'>* *</div>
                        <div className='theface theface--right'>* * *</div>
                        <div className='theface theface--left'>* * * *</div>
                        <div className='theface theface--top'>* * * * *</div>
                        <div className='theface theface--bottom'>* * * * * *</div>
                    </div>
                </div>
                <footer>
                    <p>Created by Melissa Longenberger</p>
                    <p>React app built using npm package lambda-react</p>
                </footer>
            </div>
        )
    }
}

export default Cube