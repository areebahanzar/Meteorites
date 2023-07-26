import React from 'react'
import nebula from './nebula.jpg';

function FirstPage() {
    const myStyle = {
        backgroundImage: `url(${nebula})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
    };
    return (
        <div style={myStyle}>
            Hi
        </div>
    );
}

export default FirstPage;
