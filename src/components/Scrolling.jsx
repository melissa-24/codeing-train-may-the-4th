import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

// import { myText } from './text'

const Scrolling = ({ myText }) => {
    const [key, setKey] = useState(1)

    const scroll = useSpring({
        from: { transform: "translate(0, 90%)" },
        to: { transform: 'translate(0, -90%)' },
        config: { duration: 5000 },
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