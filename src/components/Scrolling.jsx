import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

// import { myText } from './text'

const Scrolling = ({ myText }) => {
    const [key, setKey] = useState(1)

    const scroll = useSpring({
        from: { transform: "translate(10px, 500px)", opacity: '100%', color: '#fff', 'letter-spacing': '4px', 'z-index': '-1', 'text-align': 'justify', 'font-size': '40px'},
        to: { transform: 'translate(0, -1800px)', opacity: '75%', color: '#ccc', 'letter-spacing': '-4px', 'z-index': '-10', 'font-size': '30px'},
        config: { duration: 15000 },
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