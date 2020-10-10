import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'


const Scrolling = ({ myText }) => {
    const [key, setKey] = useState(1)

    const scroll = useSpring({
        from: { transform: "translate(100px, 500px)",color: '#fff', 'line-height': '.5','z-index': '-1', 'text-align': 'justify', 'font-size': '30px'},
        to: { transform: 'translate(0, -375px)', color: '#ccc', 'z-index': '-10', 'font-size': '5px'},
        config: { duration: 22000 },
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