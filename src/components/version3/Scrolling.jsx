import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

const Scrolling = ({ myText }) => {
    const [key, setKey] = useState(1)

    const scroll = useSpring({
        from: { transform: "translate(-10px, 300px)", opacity: '100%', color: '#fff', 'letter-spacing': '4px', 'z-index': '0', 'font-size': '10px'},
        to: { transform: 'translate(0, -5px)', opacity: '75%', color: '#ccc', 'letter-spacing': '-3px', 'z-index': '-1000', 'font-size': '60px'},
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

export default Scrolling