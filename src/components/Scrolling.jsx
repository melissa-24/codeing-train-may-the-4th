import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

// import { myText } from './text'

const Scrolling = ({ myText }) => {
    const [key, setKey] = useState(1)

    const scroll = useSpring({
        from: { transform: "translate(-10px, 400px)", opacity: '100%', color: '#000', 'letter-spacing': '3px' },
        to: { transform: 'translate(0, -20px)', opacity: '50%', color: '#ccc', 'letter-spacing': '-1px'},
        // transform: 'translate3d(0px,0,0) scale(1) rotateX(0deg)'
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