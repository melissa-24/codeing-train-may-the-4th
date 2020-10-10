import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

// import { myText } from './text'

const FunScrolling = ({ myText }) => {
    const [key, setKey] = useState(1)

    const scroll = useSpring({
        from: { transform: "translate(10px, 200px)", opacity: '100%', color: '#fff', 'letter-spacing': '4px', 'z-index': '0', 'font-size': '40px', rotate: '-360deg'},
        to: { transform: 'translate(0, -5px)', opacity: '75%', color: '#ccc', 'letter-spacing': '-3px', 'z-index': '-1000', 'font-size': '20px', rotate: '360deg'},
        config: { duration: 9000 },
        reset: true,
        onRest: () => {
            setKey(key + 1)
        }
    })

    return (
        <div key={key} className='text'>
            <animated.div style={scroll}>{myText}</animated.div>
        </div>
    )
}

export default FunScrolling