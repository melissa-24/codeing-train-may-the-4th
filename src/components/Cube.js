import React from 'react'

class Cube extends React.Component {
    render() {
        return (
            <>
            <h1>Main page</h1>
            <div className='scene'>
                <div className='cube'>
                    <div className='face face--front'>*</div>
                    <div className='face face--back'>* *</div>
                    <div className='face face--right'>* * *</div>
                    <div className='face face--left'>* * * *</div>
                    <div className='face face--top'>* * * * *</div>
                    <div className='face face--bottom'>* * * * * *</div>
                </div>
            </div>
            </>
        )
    }
}

export default Cube